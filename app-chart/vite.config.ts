import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 4002,
    strictPort: true,
    open: true,
  },
  preview: {
    host: 'localhost',
    port: 4002,
    strictPort: true,
    open: true,
  },
});
