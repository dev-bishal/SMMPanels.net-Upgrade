// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [sitemap()],
  server: {
    host: true // Or set this to '0.0.0.0'
  },
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: node({
    mode: 'standalone'
  })
});