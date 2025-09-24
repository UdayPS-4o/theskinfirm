import { mutation } from "../_generated/server";
import { v } from "convex/values";
import * as serviceData from './data.json';
import * as treatmentsData from '../../src/data/treatments.json';

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

// Helper function to generate slug from name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Helper function to validate service data structure
const validateServiceData = (data: any): boolean => {
  return (
    data &&
    typeof data === 'object' &&
    data.hero &&
    typeof data.hero.title === 'string' &&
    typeof data.hero.description === 'string'
  );
};

export const createServicesCategoriesFromDataJson = mutation({
  args: {},
  handler: async (ctx) => {
    try {
      const results = {
        categoriesCreated: 0,
        servicesCreated: 0,
        errors: [] as string[]
      };

      // Process treatments.json to extract service categories
      const treatmentTypes = ['skin', 'hair', 'laser'] as const;
      
      for (const type of treatmentTypes) {
        const typeData = (treatmentsData as any)[type];
        if (!typeData || !typeData.sections) {
          results.errors.push(`No sections found for type: ${type}`);
          continue;
        }

        let order = 1;
        for (const section of typeData.sections) {
          if (!section.title || !section.treatments) {
            results.errors.push(`Invalid section structure in ${type}`);
            continue;
          }

          try {
            // Create service category
            const categorySlug = generateSlug(section.title);
            
            // Check if category already exists
            const existingCategory = await ctx.db
              .query("serviceCategories")
              .filter((q) => q.eq(q.field("slug"), categorySlug))
              .first();

            let categoryId;
            if (!existingCategory) {
              categoryId = await ctx.db.insert("serviceCategories", {
                name: section.title,
                type: type,
                slug: categorySlug,
                order: order++,
                isActive: true,
              });
              results.categoriesCreated++;
            } else {
              categoryId = existingCategory._id;
            }

            // Process treatments as basic services
            for (const treatment of section.treatments) {
              if (!treatment.title || !treatment.description) {
                results.errors.push(`Invalid treatment structure: ${treatment.title || 'Unknown'}`);
                continue;
              }

              try {
                const serviceSlug = generateSlug(treatment.title);
                
                // Check if service already exists
                const existingService = await ctx.db
                  .query("services")
                  .filter((q) => q.eq(q.field("slug"), serviceSlug))
                  .first();

                if (!existingService) {
                  // Create basic service from treatment data
                  await ctx.db.insert("services", {
                    name: treatment.title,
                    type: type,
                    slug: serviceSlug,
                    category: section.title,
                    data: {
                      hero: {
                        title: treatment.title,
                        description: treatment.description,
                      },
                      about: treatment.imageSrc ? {
                        title: `What is ${treatment.title}?`,
                        description: treatment.description,
                        highlight: "Professional treatment designed for optimal results.",
                        image: treatment.imageSrc,
                      } : undefined,
                    }
                  });
                  results.servicesCreated++;
                }
              } catch (error) {
                results.errors.push(`Failed to create service ${treatment.title}: ${error}`);
              }
            }
          } catch (error) {
            results.errors.push(`Failed to create category ${section.title}: ${error}`);
          }
        }
      }

      // Process serviceData.json for detailed service information
      const serviceEntries = Object.entries(serviceData as Record<string, any>);
      
      for (const [serviceName, serviceInfo] of serviceEntries) {
        if (!validateServiceData(serviceInfo)) {
          results.errors.push(`Invalid service data structure for: ${serviceName}`);
          continue;
        }

        try {
          const serviceSlug = generateSlug(serviceName);
          
          // Check if service already exists
          const existingService = await ctx.db
            .query("services")
            .filter((q) => q.eq(q.field("slug"), serviceSlug))
            .first();

          if (existingService) {
            // Update existing service with detailed data
            await ctx.db.patch(existingService._id, {
              data: {
                hero: {
                  title: serviceInfo.hero.title,
                  description: serviceInfo.hero.description,
                },
                about: serviceInfo.about ? {
                  title: serviceInfo.about.title,
                  description: serviceInfo.about.description,
                  highlight: serviceInfo.about.highlight || "",
                  image: serviceInfo.about.image || "",
                } : undefined,
                process: serviceInfo.process ? {
                  title: serviceInfo.process.title,
                  steps: serviceInfo.process.steps || [],
                } : undefined,
                benefits: serviceInfo.benefits ? {
                  title: serviceInfo.benefits.title,
                  items: serviceInfo.benefits.items || [],
                } : undefined,
                postCare: serviceInfo.postCare ? {
                  title: serviceInfo.postCare.title || "",
                  subtitle: serviceInfo.postCare.subtitle || "",
                  downtime: {
                    title: serviceInfo.postCare.downtime?.title || "",
                    items: serviceInfo.postCare.downtime?.items || [],
                  },
                  postCare: {
                    title: serviceInfo.postCare.postCare?.title || "",
                    items: serviceInfo.postCare.postCare?.items || [],
                  },
                } : undefined,
                faq: serviceInfo.faq ? {
                  title: serviceInfo.faq.title,
                  subtitle: serviceInfo.faq.subtitle || "",
                  questions: serviceInfo.faq.questions || [],
                } : undefined,
              }
            });
          } else {
            // Determine service type and category based on service name
            let serviceType: 'skin' | 'hair' | 'laser' = 'skin';
            let serviceCategory = 'General';

            // Simple heuristic to determine type
            if (serviceName.toLowerCase().includes('hair') || serviceName.toLowerCase().includes('alopecia')) {
              serviceType = 'hair';
              serviceCategory = 'Hair Treatments';
            } else if (serviceName.toLowerCase().includes('laser')) {
              serviceType = 'laser';
              serviceCategory = 'Laser Treatments';
            } else {
              // Default to skin, try to match with existing categories
              const skinCategories = ['Acne and Acne Scars', 'Pigmentation', 'Skin Discoloration'];
              for (const cat of skinCategories) {
                if (serviceName.toLowerCase().includes(cat.toLowerCase().split(' ')[0])) {
                  serviceCategory = cat;
                  break;
                }
              }
            }

            // Create new service with detailed data
            await ctx.db.insert("services", {
              name: serviceName,
              type: serviceType,
              slug: serviceSlug,
              category: serviceCategory,
              data: {
                hero: {
                  title: serviceInfo.hero.title,
                  description: serviceInfo.hero.description,
                },
                about: serviceInfo.about ? {
                  title: serviceInfo.about.title,
                  description: serviceInfo.about.description,
                  highlight: serviceInfo.about.highlight || "",
                  image: serviceInfo.about.image || "",
                } : undefined,
                process: serviceInfo.process ? {
                  title: serviceInfo.process.title,
                  steps: serviceInfo.process.steps || [],
                } : undefined,
                benefits: serviceInfo.benefits ? {
                  title: serviceInfo.benefits.title,
                  items: serviceInfo.benefits.items || [],
                } : undefined,
                postCare: serviceInfo.postCare ? {
                  title: serviceInfo.postCare.title || "",
                  subtitle: serviceInfo.postCare.subtitle || "",
                  downtime: {
                    title: serviceInfo.postCare.downtime?.title || "",
                    items: serviceInfo.postCare.downtime?.items || [],
                  },
                  postCare: {
                    title: serviceInfo.postCare.postCare?.title || "",
                    items: serviceInfo.postCare.postCare?.items || [],
                  },
                } : undefined,
                faq: serviceInfo.faq ? {
                  title: serviceInfo.faq.title,
                  subtitle: serviceInfo.faq.subtitle || "",
                  questions: serviceInfo.faq.questions || [],
                } : undefined,
              }
            });
            results.servicesCreated++;
          }
        } catch (error) {
          results.errors.push(`Failed to process service ${serviceName}: ${error}`);
        }
      }

      return {
        success: true,
        message: `Successfully processed data. Created ${results.categoriesCreated} categories and ${results.servicesCreated} services.`,
        details: results,
      };

    } catch (error) {
      console.error("Error in createServicesCategoriesFromDataJson:", error);
      throw new Error(`Failed to process data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },
});
