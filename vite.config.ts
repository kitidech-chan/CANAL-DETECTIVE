import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import {defineConfig} from 'vite';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  base: '/CANAL-DETECTIVE/',
  plugins: [react(), tailwindcss()],
  resolve: {alias: {'@': path.resolve(__dirname, '.')}},
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    assetsDir: 'site-assets',
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});