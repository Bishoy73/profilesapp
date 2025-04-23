import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Change to another port if needed
    host: '0.0.0.0',  // Ensures the server is accessible externally
  },
});
