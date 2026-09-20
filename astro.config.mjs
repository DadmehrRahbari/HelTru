import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Fully static output, builds to plain HTML/CSS/JS in dist/.
// No server runtime required to host it anywhere (GitHub Pages,
// Netlify, an EU-hosted static bucket, or the HelTru server's
// own /static mount).
export default defineConfig({
  site: 'https://DadmehrRahbari.github.io',
  base: '/HelTru', // Change to '/' if deploying at a domain root instead of a repo subpath
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false, // we bring our own base styles in src/styles/global.css
    }),
  ],
});
