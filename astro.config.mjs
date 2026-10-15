// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.seaseas.nl',
  // SITE_BASE is only set while the site runs at github.io/Public_Website; empty for www.seaseas.nl.
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', nl: 'nl' } } })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing: { prefixDefaultLocale: false },
  },
});
