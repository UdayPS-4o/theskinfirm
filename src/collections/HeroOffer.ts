import { CollectionConfig } from "payload";

export const HeroOffer: CollectionConfig = {
  slug: "hero-offer",
  auth: false,
  admin: {
    useAsTitle: "title",
    description: "Manage the hero section offer displayed on the homepage",
  },
  labels: {
    singular: "Hero Offer",
    plural: "Hero Offers",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Main offer title (e.g., 'Upto 20% OFF')",
      },
    },
    {
      name: "description",
      type: "text",
      required: true,
      admin: {
        description: "Offer description text",
      },
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
      defaultValue: "Special Offer",
      admin: {
        description: "Text for the offer button",
      },
    },
    {
      name: "buttonLink",
      type: "text",
      required: true,
      defaultValue: "/contact",
      admin: {
        description: "Link for the offer button (e.g., /contact)",
      },
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Background image for the offer section",
      },
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: "Toggle to show/hide this offer on the homepage",
      },
    },
  ],
};
