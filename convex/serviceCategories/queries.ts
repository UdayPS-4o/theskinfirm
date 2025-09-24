import { query } from "../_generated/server";
import { v } from "convex/values";

// Get all active service categories ordered by their order field
export const getServiceCategories = query({
  args: {
    type: v.optional(v.union(v.literal("skin"), v.literal("hair"), v.literal("laser")))
  },
  handler: async (ctx, args) => {
    try {
      const categories = await ctx.db
        .query("serviceCategories")
        .filter((q) => {
          let filter = q.eq(q.field("isActive"), true);
          if (args.type) {
            filter = q.and(filter, q.eq(q.field("type"), args.type));
          }
          return filter;
        })
        .order("asc")
        .collect();

      return categories.sort((a, b) => a.order - b.order);
    } catch (error) {
      console.error("Error fetching service categories:", error);
      throw new Error("Failed to fetch service categories");
    }
  },
});

// Get ALL service categories (including inactive ones) - for admin management
export const getAllServiceCategories = query({
  args: {},
  handler: async (ctx) => {
    try {
      const categories = await ctx.db
        .query("serviceCategories")
        .order("asc")
        .collect();

      return categories.sort((a, b) => {
        // First sort by type, then by order
        if (a.type !== b.type) {
          const typeOrder = { skin: 0, hair: 1, laser: 2 };
          return typeOrder[a.type as keyof typeof typeOrder] - typeOrder[b.type as keyof typeof typeOrder];
        }
        return a.order - b.order;
      });
    } catch (error) {
      console.error("Error fetching all service categories:", error);
      throw new Error("Failed to fetch service categories");
    }
  },
});

// Get a single service category by ID
export const getServiceCategory = query({
  args: { id: v.id("serviceCategories") },
  handler: async (ctx, args) => {
    try {
      const category = await ctx.db.get(args.id);
      if (!category) {
        throw new Error("Service category not found");
      }
      return category;
    } catch (error) {
      console.error("Error fetching service category:", error);
      throw new Error("Failed to fetch service category");
    }
  },
});

// Get services grouped by categories for a specific type
export const getServicesGroupedByCategory = query({
  args: {
    type: v.union(v.literal("skin"), v.literal("hair"), v.literal("laser"))
  },
  handler: async (ctx, args) => {
    // Get all active categories for this type
    const categories = await ctx.db
      .query("serviceCategories")
      .filter((q) => 
        q.and(
          q.eq(q.field("type"), args.type),
          q.eq(q.field("isActive"), true)
        )
      )
      .order("asc")
      .collect();

    // Get all services for this type
    const services = await ctx.db
      .query("services")
      .filter((q) => q.eq(q.field("type"), args.type))
      .collect();

    // Group services by category
    const groupedServices = categories
      .sort((a, b) => a.order - b.order)
      .map(category => ({
        category: {
          name: category.name,
          slug: category.slug,
        },
        services: services
          .filter(service => service.category === category.name)
          .map(service => ({
            name: service.name,
            slug: service.slug,
          }))
      }));

    return groupedServices;
  },
});

// Get navbar data structure for all service types
export const getNavbarData = query({
  args: {},
  handler: async (ctx) => {
    const skinData = await ctx.db
      .query("serviceCategories")
      .filter((q) => 
        q.and(
          q.eq(q.field("type"), "skin"),
          q.eq(q.field("isActive"), true)
        )
      )
      .order("asc")
      .collect();

    const skinServices = await ctx.db
      .query("services")
      .filter((q) => q.eq(q.field("type"), "skin"))
      .collect();

    const hairServices = await ctx.db
      .query("services")
      .filter((q) => q.eq(q.field("type"), "hair"))
      .collect();

    const laserServices = await ctx.db
      .query("services")
      .filter((q) => q.eq(q.field("type"), "laser"))
      .collect();

    // Group skin services by category
    const skinGroups = skinData
      .sort((a, b) => a.order - b.order)
      .map(category => ({
        title: category.name,
        services: skinServices
          .filter(service => service.category === category.name)
          .map(service => ({
            name: service.name,
            href: `/services/skin/${service.slug}`,
          }))
      }));

    return {
      skinGroups,
      hairServices: hairServices.map(service => ({
        name: service.name,
        href: `/services/hair/${service.slug}`,
      })),
      laserServices: laserServices.map(service => ({
        name: service.name,
        href: `/services/laser/${service.slug}`,
      })),
    };
  },
});