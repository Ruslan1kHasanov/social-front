import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


export default () => {
  return defineConfig({
    plugins: [react()],
    build: {
      outDir: '../../social_project/frontend/dist',
    },
    server: {
      port: 8000,
      host: '26.83.222.115',
    }
  });
};
