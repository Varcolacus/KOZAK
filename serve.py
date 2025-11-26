#!/usr/bin/env python3
"""
Flask server for serving the KOZAK website with Stripe payment integration.
Usage: python serve.py
       python serve.py --simple  (for simple HTTP server without Flask)
"""
import os
import sys

# Check if Flask/Stripe are available
try:
    from flask import Flask, request, jsonify, send_from_directory
    import stripe
    from dotenv import load_dotenv
    FLASK_AVAILABLE = True
except ImportError:
    FLASK_AVAILABLE = False

PORT = 8000

def run_simple_server():
    """Run simple HTTP server without Flask."""
    import http.server
    import socketserver
    
    class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
        """Custom request handler with proper MIME types and CORS headers."""
        
        def end_headers(self):
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Cache-Control', 'no-cache')
            super().end_headers()

        def do_GET(self):
            if self.path == '/':
                self.path = '/index.html'
            return super().do_GET()

    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print(f"Simple server running at http://localhost:{PORT}/")
            print("Press Ctrl+C to stop the server")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    except OSError as e:
        print(f"Error: {e}")
        print(f"Port {PORT} may be in use. Try a different port.")

def run_flask_server():
    """Run Flask server with Stripe integration."""
    load_dotenv()
    
    app = Flask(__name__, static_folder='.', static_url_path='')
    
    # Configure Stripe
    stripe.api_key = os.getenv('STRIPE_SECRET_KEY', '')
    STRIPE_PUBLISHABLE_KEY = os.getenv('STRIPE_PUBLISHABLE_KEY', '')
    
    @app.route('/')
    def index():
        return send_from_directory('.', 'index.html')
    
    @app.route('/<path:filename>')
    def serve_static(filename):
        return send_from_directory('.', filename)
    
    @app.route('/api/config', methods=['GET'])
    def get_config():
        """Return Stripe publishable key for frontend."""
        return jsonify({
            'publishableKey': STRIPE_PUBLISHABLE_KEY
        })
    
    @app.route('/api/create-payment-intent', methods=['POST'])
    def create_payment_intent():
        """Create a Stripe PaymentIntent for booking deposits."""
        try:
            data = request.get_json()
            
            # Validate required fields
            if not data:
                return jsonify({'error': 'No data provided'}), 400
            
            amount = data.get('amount', 10000)  # Default 100 EUR (in cents)
            currency = data.get('currency', 'eur')
            package_name = data.get('package', 'Unknown Package')
            customer_email = data.get('email', '')
            customer_name = data.get('name', '')
            
            # Validate amount (minimum 50 cents for Stripe)
            if amount < 50:
                return jsonify({'error': 'Amount must be at least 50 cents'}), 400
            
            # Create PaymentIntent
            intent = stripe.PaymentIntent.create(
                amount=int(amount),
                currency=currency,
                automatic_payment_methods={'enabled': True},
                metadata={
                    'package': package_name,
                    'customer_name': customer_name,
                    'customer_email': customer_email
                },
                receipt_email=customer_email if customer_email else None
            )
            
            return jsonify({
                'clientSecret': intent.client_secret,
                'id': intent.id
            })
            
        except stripe.error.StripeError as e:
            return jsonify({'error': str(e)}), 400
        except Exception as e:
            return jsonify({'error': 'An error occurred'}), 500
    
    @app.route('/api/webhook', methods=['POST'])
    def webhook():
        """Handle Stripe webhooks for payment events."""
        payload = request.get_data()
        sig_header = request.headers.get('Stripe-Signature')
        webhook_secret = os.getenv('STRIPE_WEBHOOK_SECRET', '')
        
        try:
            if webhook_secret:
                event = stripe.Webhook.construct_event(
                    payload, sig_header, webhook_secret
                )
            else:
                event = request.get_json()
            
            # Handle the event
            if event['type'] == 'payment_intent.succeeded':
                payment_intent = event['data']['object']
                print(f"Payment succeeded: {payment_intent['id']}")
                # Here you could send confirmation email, update database, etc.
            elif event['type'] == 'payment_intent.payment_failed':
                payment_intent = event['data']['object']
                print(f"Payment failed: {payment_intent['id']}")
            
            return jsonify({'status': 'success'})
            
        except ValueError as e:
            return jsonify({'error': 'Invalid payload'}), 400
        except stripe.error.SignatureVerificationError as e:
            return jsonify({'error': 'Invalid signature'}), 400
    
    # Add CORS headers
    @app.after_request
    def add_cors_headers(response):
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
        return response
    
    print(f"Flask server running at http://localhost:{PORT}/")
    print("Stripe integration: " + ("Enabled" if stripe.api_key else "Disabled (set STRIPE_SECRET_KEY)"))
    print("Press Ctrl+C to stop the server")
    app.run(host='0.0.0.0', port=PORT, debug=False)

if __name__ == '__main__':
    # Use --simple flag to run without Flask
    if '--simple' in sys.argv or not FLASK_AVAILABLE:
        if not FLASK_AVAILABLE:
            print("Flask not available. Running simple HTTP server.")
            print("Install Flask with: pip install flask stripe python-dotenv")
        run_simple_server()
    else:
        run_flask_server()
