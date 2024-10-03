import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: ['/', '/linktree'],
      },
    ],

    sitemap: 'https://nexus.mdesk.tech/sitemap.xml',
  };
}
