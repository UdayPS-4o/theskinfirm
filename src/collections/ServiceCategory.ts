import { CollectionConfig } from "payload";

export const SERVICE_TYPE = {
  skin: "skin",
  hair: "hair",
  laser: "laser",
};

export const ServiceCategories: CollectionConfig = {
  slug: "service-categories",
  auth: false,
  labels: { singular: "Service Category", plural: "Service Categories" },
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        {
          label: "Skin",
          value: "skin",
        },
        {
          label: "Hair",
          value: "hair",
        },
        {
          label: "Laser",
          value: "laser",
        },
      ],
    },
  ],
};
