import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://51.21.219.245:3000',  // EC2 backend IP
        changeOrigin: true,
        secure: false,  // Set to false if your backend is not using HTTPS
      },
    },
  },
});
