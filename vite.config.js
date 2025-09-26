import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // important for root domain deployment
  build: {
    sourcemap: false, // disables source maps in production
    minify: 'esbuild', // minifies code
    rollupOptions: {
      output: {
        comments: false, // removes comments
      },
    },
  },
});
