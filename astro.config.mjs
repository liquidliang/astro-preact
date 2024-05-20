import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import preact from "@astrojs/preact";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-liquid.liquidliang.cc',
  integrations: [mdx(), sitemap(), preact(), vue()]
});