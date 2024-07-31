import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app-container',
      filename: 'remoteEntry.js',
      exposes: {
        './AppProvider': './src/app/providers/AppProvider',
        './Navbar': './src/components/sections/Navbar',
      },
      remotes: {
        '@app-form': 'http://localhost:4001/assets/remoteEntry.js',
        '@app-chart': 'http://localhost:4002/assets/remoteEntry.js',
        '@app-grid': 'http://localhost:4003/assets/remoteEntry.js',
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
