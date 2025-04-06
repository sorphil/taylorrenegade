// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://taylorrenegade.ca',
    integrations: [sitemap(
      {
        filter: (page) => {
          // Exclude specific paths
          if (
            page.includes('/other-works/ow') ||
            page.includes('/forensic-art/fa')
          ) {
            return false;
          }
          return true;
      }
    }
    )],
  });
