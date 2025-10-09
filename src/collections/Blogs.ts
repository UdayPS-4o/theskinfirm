import { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  auth: false,
  labels: {
    singular: "Blogs",
    plural: "Blogs",
  },
  fields: [
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "article",
      type: "richText",
      required: true,
    },
  ],
};
