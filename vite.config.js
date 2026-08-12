import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
    open: true,
    strictPort: false,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
  preview: {
    port: 4173,
    open: true,
  },
  css: {
    preprocessorOptions: {
      css: {
        devSourcemap: true,
      },
    },
  },
});
