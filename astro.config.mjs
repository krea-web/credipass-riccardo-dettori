import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { LOCALES, DEFAULT_LOCALE, SITE_URL } from './src/config/i18n.ts';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...LOCALES],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((l) => [l, l])),
      },
      // Only IT and EN are indexed until other locales receive professional
      // translations. Filtering here keeps the sitemap honest; robots.txt
      // additionally blocks the un-translated locales from crawling.
      filter: (page) => {
        if (page.includes('/404')) return false;
        const m = page.match(/\/(it|en|de|fr|es|pt|ar|zh|ru|ja)\//);
        if (!m) return true; // root URL
        return m[1] === 'it' || m[1] === 'en';
      },
    }),
  ],
});
