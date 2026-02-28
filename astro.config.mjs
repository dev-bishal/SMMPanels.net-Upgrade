// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site : "https://smmpanels.net/",
  output: 'server',
  integrations: [sitemap({
    filter: (page) => !page.startsWith('https://smmpanels.net/admin/')
  })],
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