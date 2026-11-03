// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://idreesqurashi.github.io',
  base: '/ansareez',
  vite: {
    plugins: [tailwindcss()],
  },
});
