import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import {fileURLToPath} from 'url';
import {defineConfig} from 'vite';

var __dirname = fileURLToPath(new URL('.', import.meta.url));
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // Allow serving theme files from node_modules in dev mode
  server: {
    fs: {
      allow: ['..']
    }
  }
});
