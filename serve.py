#!/usr/bin/env python3
"""
Simple HTTP server for serving the KOZAK website.
Usage: python serve.py
"""
import http.server
import socketserver

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom request handler with proper MIME types and CORS headers."""
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def do_GET(self):
        # Serve index.html for root path
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

# Enable address reuse to prevent "Address already in use" errors
socketserver.TCPServer.allow_reuse_address = True

if __name__ == '__main__':
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print(f"Server running at http://localhost:{PORT}/")
            print("Press Ctrl+C to stop the server")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    except OSError as e:
        print(f"Error: {e}")
        print(f"Port {PORT} may be in use. Try a different port.")
