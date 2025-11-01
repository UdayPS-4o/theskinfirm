import { MetadataRoute } from "next";
import { Service } from "@/payload-types";
import PAYLOAD_CONFIG from "@/payload.config";
import { getPayload } from "payload";

const StaticPaths: MetadataRoute.Sitemap = [
  {
    url: "https://www.theskinfirm.in/",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  },
  {
    url: "https://www.theskinfirm.in/about-us",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "https://www.theskinfirm.in/blogs",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  },
  {
    url: "https://www.theskinfirm.in/contact",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: "https://www.theskinfirm.in/gallery",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config: PAYLOAD_CONFIG });
  const services: Service[] = (
    await payload.find({
      collection: "services",
      limit: 1000,
    })
  ).docs;

  const servicePaths = services.map((service) => ({
    url: `https://www.theskinfirm.in/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...StaticPaths, ...servicePaths];
}
