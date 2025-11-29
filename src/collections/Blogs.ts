import { CollectionConfig } from "payload";
import slugify from "slugify";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  auth: false,
  labels: {
    singular: "Blogs",
    plural: "Blogs",
  },
  fields: [
    {
      name: "heroTitle",
      type: "richText",
      required: true,
    },
    {
      name: "heroDescription",
      type: "richText",
      required: true,
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "category",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "readTime",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "article",
      type: "richText",
      required: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};
