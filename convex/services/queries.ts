import { query } from "../_generated/server";
import { v } from "convex/values";

export const getServices = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("services").collect();
    }
});

export const getServiceById = query({
    args: { id: v.id("services") },
    handler: async (ctx, { id }) => {
        return await ctx.db.get(id);
    }
});

export const getServiceBySlug = query({
    args: { slug: v.string() },
    handler: async (ctx, { slug }) => {
        return await ctx.db
            .query("services")
            .filter((q) => q.eq(q.field("slug"), slug))
            .first();
    }
});

export const getServicesByType = query({
    args: { type: v.union(v.literal("skin"), v.literal("hair"), v.literal("laser")) },
    handler: async (ctx, { type }) => {
        return await ctx.db
            .query("services")
            .filter((q) => q.eq(q.field("type"), type))
            .collect();
    }
});

// Get services by type and category
export const getServicesByTypeAndCategory = query({
  args: { 
    type: v.union(v.literal("skin"), v.literal("hair"), v.literal("laser")),
    category: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("services")
      .filter((q) => 
        q.and(
          q.eq(q.field("type"), args.type),
          q.eq(q.field("category"), args.category)
        )
      )
      .collect();
  },
});
