import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


export default () => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [react()],
    build: {
      outDir: '../../django-react/mysite/frontend/dist',
    },
  });
};
