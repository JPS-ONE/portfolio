import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
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