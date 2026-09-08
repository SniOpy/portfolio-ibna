import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Force Vite to use polling instead of native file system events
      usePolling: true,
      // Adjust how frequently files are scanned (in milliseconds)
      interval: 100,
    },
  },
});
