import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://saemtle.github.io',
  base: '/saemtle-homepage',
});
