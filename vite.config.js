import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  build: {
    outDir: '../../django-react/mysite/frontend/dist'
  }
});
