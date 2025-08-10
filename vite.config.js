import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ Always root for Vercel unless you have a subpath
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lodash')) return 'vendor-lodash';
            if (id.includes('chart.js')) return 'vendor-chart';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
