import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  services: defineTable({
    name: v.string(),
    type: v.union(v.literal("skin"), v.literal("hair"), v.literal("laser")),
    slug: v.string(),
    category: v.optional(v.string()), // For skin services, this will be the category name
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
            subtitle: v.string(),
            title: v.string(),
            downtime: v.object({
                title: v.string(),
                items: v.array(v.string()),
            }),
            postCare: v.object({
                title: v.string(),
                items: v.array(v.string()),
            }),
        })),
        // Signs & Symptoms section
        signsSymptoms: v.optional(v.object({
            subtitle: v.string(),
            title: v.string(),
            items: v.array(v.string()),
        })),
        
        // Types of Treatments section
        treatments: v.optional(v.object({
            subtitle: v.string(),
            title: v.string(),
            items: v.array(v.object({
                title: v.string(),
                description: v.string(),
            })),
        })),
        
        // Before & After Transformations section
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
        
        // Testimonials section
        testimonials: v.optional(v.object({
            subtitle: v.string(),
            title: v.string(),
            items: v.array(v.string()),
        })),
        
        // Who Can Benefit section
        whoBenefits: v.optional(v.object({
            title: v.string(),
            items: v.array(v.string()),
        })),
        
        faq: v.optional(v.object({
            title: v.string(),
            subtitle: v.string(),
            questions: v.array(v.object({
                question: v.string(),
                answer: v.string(),
            })),
        })),
    })
  }),
  
  serviceCategories: defineTable({
    name: v.string(),
    type: v.union(v.literal("skin"), v.literal("hair"), v.literal("laser")),
    slug: v.string(),
    order: v.number(), // For ordering categories in the navbar
    isActive: v.boolean(),
  }),
});
