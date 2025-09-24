import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const generateImageUploadUrl = mutation({
    handler: async (ctx) => {
        return await ctx.storage.generateUploadUrl();
    }
});

export const saveImageAfterUpload = mutation({
    args: { storageId: v.id("_storage") },
    handler: async (ctx, { storageId }) => {
        // Get the file URL from storage
        const fileUrl = await ctx.storage.getUrl(storageId);
        return { fileUrl, storageId };
    }
});

export const deleteImage = mutation({
    args: { storageId: v.id("_storage") },
    handler: async (ctx, { storageId }) => {
        // Delete the file from storage
        await ctx.storage.delete(storageId);
        return { success: true };
    }
});

export const createService = mutation({
    args: {
        name: v.string(),
        type: v.union(v.literal("skin"), v.literal("hair"), v.literal("laser")),
        slug: v.string(),
        category: v.optional(v.string()),
        data: v.object({
            hero: v.object({
                title: v.string(),
                description: v.string(),    
            }),
            about: v.optional(v.object({
                title: v.string(),
                description: v.string(),
                highlight: v.string(),
                image: v.string(),
                imageStorageId: v.optional(v.id("_storage")),
            })),
            process: v.optional(v.object({
                title: v.string(),
                steps: v.array(v.object({
                    title: v.string(),
                    description: v.string(),
                })),
            })),
            benefits: v.optional(v.object({
                title: v.string(),
                items: v.array(v.string()),
            })),
            postCare: v.optional(v.object({
                title: v.string(),
                subtitle: v.string(),
                downtime: v.object({
                    title: v.string(),
                    items: v.array(v.string()),
                }),
                postCare: v.object({
                    title: v.string(),
                    items: v.array(v.string()),
                }),
            })),
            faq: v.optional(v.object({
                title: v.string(),
                subtitle: v.string(),
                questions: v.array(v.object({
                    question: v.string(),
                    answer: v.string(),
                })),
            })),
            signsSymptoms: v.optional(v.object({
                subtitle: v.string(),
                title: v.string(),
                items: v.array(v.string()),
            })),
            treatments: v.optional(v.object({
                subtitle: v.string(),
                title: v.string(),
                items: v.array(v.object({
                    title: v.string(),
                    description: v.string(),
                })),
            })),
            transformations: v.optional(v.object({
                subtitle: v.string(),
                title: v.string(),
                description: v.string(),
                images: v.array(v.object({
                    src: v.string(),
                    alt: v.string(),
                    storageId: v.optional(v.id("_storage")),
                })),
            })),
            testimonials: v.optional(v.object({
                subtitle: v.string(),
                title: v.string(),
                items: v.array(v.string()),
            })),
            whoBenefits: v.optional(v.object({
                title: v.string(),
                items: v.array(v.string()),
            })),
        })
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("services", args);
    }
});

export const updateService = mutation({
    args: {
        id: v.id("services"),
        name: v.optional(v.string()),
        type: v.optional(v.union(v.literal("skin"), v.literal("hair"), v.literal("laser"))),
        slug: v.optional(v.string()),
        category: v.optional(v.string()),
        data: v.optional(v.object({
            hero: v.object({
                title: v.string(),
                description: v.string(),    
            }),
            about: v.optional(v.object({
                title: v.string(),
                description: v.string(),
                highlight: v.string(),
                image: v.string(),
                imageStorageId: v.optional(v.id("_storage")),
            })),
            process: v.optional(v.object({
                title: v.string(),
                steps: v.array(v.object({
                    title: v.string(),
                    description: v.string(),
                })),
            })),
            benefits: v.optional(v.object({
                title: v.string(),
                items: v.array(v.string()),
            })),
            postCare: v.optional(v.object({
                title: v.string(),
                subtitle: v.string(),
                downtime: v.object({
                    title: v.string(),
                    items: v.array(v.string()),
                }),
                postCare: v.object({
                    title: v.string(),
                    items: v.array(v.string()),
                }),
            })),
            faq: v.optional(v.object({
                title: v.string(),
                subtitle: v.string(),
                questions: v.array(v.object({
                    question: v.string(),
                    answer: v.string(),
                })),
            })),
            signsSymptoms: v.optional(v.object({
                subtitle: v.string(),
                title: v.string(),
                items: v.array(v.string()),
            })),
            treatments: v.optional(v.object({
                subtitle: v.string(),
                title: v.string(),
                items: v.array(v.object({
                    title: v.string(),
                    description: v.string(),
                })),
            })),
            transformations: v.optional(v.object({
                subtitle: v.string(),
                title: v.string(),
                description: v.string(),
                images: v.array(v.object({
                    src: v.string(),
                    alt: v.string(),
                    storageId: v.optional(v.id("_storage")),
                })),
            })),
            testimonials: v.optional(v.object({
                subtitle: v.string(),
                title: v.string(),
                items: v.array(v.string()),
            })),
            whoBenefits: v.optional(v.object({
                title: v.string(),
                items: v.array(v.string()),
            })),
        }))
    },
    handler: async (ctx, { id, ...fields }) => {
        return await ctx.db.patch(id, fields);
    }
});

export const deleteService = mutation({
    args: { id: v.id("services") },
    handler: async (ctx, { id }) => {
        return await ctx.db.delete(id);
    }
});