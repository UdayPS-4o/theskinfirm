import { HeroBlock } from "@/blocks/Hero";
import { SeoBlock } from "@/blocks/Seo";
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
      name: "seo",
      type: "blocks",
      maxRows: 1,
      blocks: [SeoBlock],
    },
    {
      name: "authorName",
      type: "text",
      required: true,
    },
    {
      name: "article",
      type: "richText",
      required: true,
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.title && !data?.slug) {
          data.slug = slugify(data.title, {
            lower: true,
            strict: true,
          });
        }
        return data;
      },
    ],
  },
};
