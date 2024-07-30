import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app-form',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      remotes: {
        '@app-container': 'http://localhost:4000/assets/remoteEntry.js',
      },
      shared: [
        'react',
        'react-dom',
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
      ],
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
    port: 4001,
    strictPort: true,
    open: true,
  },
  preview: {
    host: 'localhost',
    port: 4001,
    strictPort: true,
    open: true,
  },
});
