// This script seeds service categories and updates services with category information
// Run this with: node scripts/seed-categories.js

require('dotenv').config({ path: '.env.local' });
const { ConvexHttpClient } = require("convex/browser");

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);

async function seedData() {
  try {
    console.log("Starting to seed service categories...");
    
    // Seed service categories
    const result = await convex.mutation("serviceCategories/mutations:seedServiceCategories", {});
    console.log("Categories seeded:", result.message);

    // Get all services to update them with categories
    const services = await convex.query("services/queries:getServices", {});
    console.log(`Found ${services.length} services to categorize`);

    // Sample categorization based on service names
    const categoryMapping = {
      "Acne & Scars": ["acne", "scar", "marks"],
      "Pigmentation": ["pigmentation", "melasma", "whitening", "tan"],
      "Anti-Ageing": ["anti-ageing", "wrinkle", "aging"],
      "Skin Concerns": ["stretch", "dark circle", "skin tag", "wart"],
      "Facials": ["facial", "fire and ice", "hollywood", "hydrafacial", "vampire", "prp facial", "medicated"],
      "Chemical Peels": ["peel", "salicylic", "chemical", "black peel", "yellow peel", "cosmelan"],
      "Advanced Treatments": ["microneedling", "microdermabrasion", "boosters", "gfc", "hifu", "iv therapy"]
    };

    // Update skin services with categories
    for (const service of services) {
      if (service.type === "skin") {
        let assignedCategory = null;
        const serviceName = service.name.toLowerCase();
        
        for (const [category, keywords] of Object.entries(categoryMapping)) {
          if (keywords.some(keyword => serviceName.includes(keyword))) {
            assignedCategory = category;
            break;
          }
        }
        
        if (assignedCategory) {
          await convex.mutation("services/mutations:updateService", {
            id: service._id,
            category: assignedCategory
          });
          console.log(`Updated ${service.name} with category: ${assignedCategory}`);
        }
      }
    }

    console.log("Data seeding completed successfully!");
    
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

// Check if NEXT_PUBLIC_CONVEX_URL is set
if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  console.error("Please set NEXT_PUBLIC_CONVEX_URL environment variable");
  process.exit(1);
}

seedData();