import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',

  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],

  build: {
    rollupOptions: {
      output: {
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
