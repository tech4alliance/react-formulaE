import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/STH': {
        target: 'http://44.195.44.28:8666',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/STH/, '/STH')
      }
    }
  }
});

