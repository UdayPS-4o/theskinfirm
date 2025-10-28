import { getPayload } from "payload";
import config from "../src/payload.config";

async function seedHeroOffer() {
  const payload = await getPayload({ config });

  console.log("Seeding Hero Offer...");

  try {
    // Check if a hero offer already exists
    const existingOffers = await payload.find({
      collection: "hero-offer",
      limit: 1,
    });

    if (existingOffers.docs.length > 0) {
      console.log("Hero offer already exists. Skipping seed.");
      return;
    }

    // Create default hero offer
    await payload.create({
      collection: "hero-offer",
      data: {
        title: "Upto\n20% OFF",
        description:
          "On pre-bridal & custom treatment packages curated uniquely for your skin, hair, and glow goals.",
        buttonText: "Special Offer",
        buttonLink: "/contact",
        backgroundImage: "hero-offer-bg.png", // You'll need to upload this image first
        isActive: true,
      },
    });

    console.log("✅ Hero offer seeded successfully!");
  } catch (error) {
    console.error("Error seeding hero offer:", error);
  }

  process.exit(0);
}

seedHeroOffer();
