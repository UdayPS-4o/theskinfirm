import { Block } from "payload";

export const SeoBlock: Block = {
  slug: "seo",
  fields: [
    {
      name: "metaTitle",
      type: "text",
      required: true,
      maxLength: 60,
      admin: {
        description: "Recommended: 50-60 characters",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      required: true,
      maxLength: 160,
      admin: {
        description: "Recommended: 150-160 characters",
      },
    },
    {
      name: "metaKeywords",
      type: "text",
      admin: {
        description: "Comma-separated keywords",
      },
    },
    {
      name: "ogImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Open Graph image for social media sharing (1200x630px recommended)",
      },
    },
    {
      name: "ogTitle",
      type: "text",
      admin: {
        description: "If empty, metaTitle will be used",
      },
    },
    {
      name: "ogDescription",
      type: "textarea",
      admin: {
        description: "If empty, metaDescription will be used",
      },
    },
    {
      name: "canonicalUrl",
      type: "text",
      admin: {
        description: "Canonical URL to prevent duplicate content issues",
      },
    },
    {
      name: "noIndex",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Prevent search engines from indexing this page",
      },
    },
    {
      name: "noFollow",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Prevent search engines from following links on this page",
      },
    },
    {
      name: "twitterCard",
      type: "select",
      defaultValue: "summary_large_image",
      options: [
        { label: "Summary", value: "summary" },
        { label: "Summary Large Image", value: "summary_large_image" },
      ],
      admin: {
        description: "Twitter card type for social sharing",
      },
    },
  ],
};
