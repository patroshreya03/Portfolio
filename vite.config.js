import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base path set for GitHub Pages deployment compatibility
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
