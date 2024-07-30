import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app-container',
      remotes: {
        '@app-chart': 'http://localhost:4002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    host: 'localhost',
    port: 4000,
    strictPort: true,
    open: true,
  },
  preview: {
    host: 'localhost',
    port: 4000,
    strictPort: true,
    open: true,
  },
});
