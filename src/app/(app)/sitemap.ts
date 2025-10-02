import { MetadataRoute } from 'next';
import serviceData from '@/app/services/[service]/data.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://theskinfirm.in';
  const lastModified = '2025-07-14';

  // Get service routes
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(serviceData).map((serviceKey) => {
    const slug = serviceKey.toLowerCase().replace(/\s+/g, '-');
    return {
      url: `${siteUrl}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    };
  });

  // Add static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: `${siteUrl}/gallery`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
        url: `${siteUrl}/services`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
  ];

  return [...staticRoutes, ...serviceRoutes];
} 