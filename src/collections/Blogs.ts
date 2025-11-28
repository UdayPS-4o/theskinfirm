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
      unique: true,
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
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.heroTitle && !data?.slug) {
          // Extract text from richText if possible, or just use a default
          // Since heroTitle is richText, it's complex to slugify directly without parsing
          // For now, let's assume the user enters slug manually or we need a better way
          // But to avoid errors, let's just not auto-generate if it's richText
          // Or we can try to stringify it?
          // data.slug = slugify(JSON.stringify(data.heroTitle), ...); // Ugly
        }
        return data;
      },
    ],
  },
};
