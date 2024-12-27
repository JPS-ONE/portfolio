import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/portfolio/'  : '/',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',   
        works: 'works.html',
        about: 'about.html',  
        contact: 'contact.html', 
      },
    },
  },
});
