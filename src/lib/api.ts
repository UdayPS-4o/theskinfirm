import { cache } from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import { Service, ServiceCategory } from "@/payload-types";

const getPayloadClient = cache(() => getPayload({ config }));

export const getAllServices = cache(
  async (): Promise<(Service & { category: ServiceCategory })[]> => {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "services",
      depth: 1,
      limit: 1000,
    });
    return result.docs as (Service & { category: ServiceCategory })[];
  },
);

export const getServiceBySlug = cache(
  async (
    slug: string,
  ): Promise<(Service & { category: ServiceCategory }) | null> => {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "services",
      where: {
        slug: {
          equals: slug,
        },
      },
      depth: 1,
    });
    return (
      (result.docs.length ? result.docs[0] : null) as (Service & {
        category: ServiceCategory;
      }) | null
    );
  },
);

export const getCategories = cache(async (): Promise<ServiceCategory[]> => {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "service-categories",
    limit: 100,
    sort: "name",
  });
  return docs;
});

export const getHairServices = cache(
  async (): Promise<Pick<Service, "slug" | "title">[]> => {
    const payload = await getPayloadClient();
    const categories = await getCategories();
    if (!categories || categories.length === 0) return [];

    const hairCategoryIds = categories
      .filter((c) => c.type === "hair")
      .map((c) => c.id);

    if (hairCategoryIds.length === 0) return [];

    const { docs } = await payload.find({
      collection: "services",
      where: {
        category: {
          in: hairCategoryIds,
        },
      },
      select: {
        title: true,
        slug: true,
      },
    });
    return docs;
  },
);

export const getLaserServices = cache(
  async (): Promise<Pick<Service, "slug" | "title">[]> => {
    const payload = await getPayloadClient();
    const categories = await getCategories();
    if (!categories || categories.length === 0) return [];

    const laserCategoryIds = categories
      .filter((c) => c.type === "laser")
      .map((c) => c.id);

    if (laserCategoryIds.length === 0) return [];

    const { docs } = await payload.find({
      collection: "services",
      where: {
        category: {
          in: laserCategoryIds,
        },
      },
      select: {
        title: true,
        slug: true,
      },
    });
    return docs;
  },
);
