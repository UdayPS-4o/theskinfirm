import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createServiceCategory = mutation({
  args: {
    name: v.string(),
    type: v.union(v.literal("skin"), v.literal("hair"), v.literal("laser")),
    slug: v.string(),
    order: v.number(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("serviceCategories", args);
  },
});

export const updateServiceCategory = mutation({
  args: {
    id: v.id("serviceCategories"),
    name: v.optional(v.string()),
    type: v.optional(v.union(v.literal("skin"), v.literal("hair"), v.literal("laser"))),
    slug: v.optional(v.string()),
    order: v.optional(v.number()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, { id, ...fields }) => {
    return await ctx.db.patch(id, fields);
  },
});

export const deleteServiceCategory = mutation({
  args: { id: v.id("serviceCategories") },
  handler: async (ctx, { id }) => {
    return await ctx.db.delete(id);
  },
});
