import { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://theskinfirm.in";
  const lastModified = "2025-07-14";
  const payload = await getPayload({
    config: config,
  });

  const services = await payload.find({
    collection: "services",
  });

  const serviceRoutes: MetadataRoute.Sitemap = services.docs.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: service.updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  // Add static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...serviceRoutes];
}
