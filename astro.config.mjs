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
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.github.io',     // Matches all GitHub Pages subdomains
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // For raw image URLs
      },
      {
        protocol: 'https',
        hostname: 'secureurl.github.io',   // Specific user's GitHub Pages
      },
      {
        protocol: 'https',
        hostname: '**.netlify.app',   // If you also use Netlify
      },
    ]
  },
  adapter: node({
    mode: 'standalone'
  })
});