import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables
const basePath = process.env.VITE_BASE_PATH || '/Grocery-app';

export default defineConfig({
  base: basePath, // This sets the base public path
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lodash')) return 'vendor-lodash';
            if (id.includes('chart.js')) return 'vendor-chart';
            // add more libraries here if needed
            return 'vendor'; // all other node_modules
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // optional: increase limit
  }
});
