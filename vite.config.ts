import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          toast: ['react-toastify'],
          email: ['@emailjs/browser']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react-toastify', '@emailjs/browser'],
    exclude: ['lucide-react']
  },
});
