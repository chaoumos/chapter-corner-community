import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://chapter-corner-community.example.com',
  integrations: [tailwind()],
  output: 'static'
});