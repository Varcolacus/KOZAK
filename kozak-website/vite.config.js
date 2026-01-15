import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: [
      'kozakproposalparis.com',
      'www.kozakproposalparis.com',
      'kozak-website-746729851961.europe-west1.run.app',
    ],
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});