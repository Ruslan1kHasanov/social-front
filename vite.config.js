import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../../django-react/mysite/frontend/dist'
  }
});
