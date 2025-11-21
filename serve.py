#!/usr/bin/env python3
import http.server
import socketserver

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        super().end_headers()

PORT = 8000
Handler = MyHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server running at http://localhost:{PORT}/")
    httpd.serve_forever()
