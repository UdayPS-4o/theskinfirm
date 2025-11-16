import { Block } from "payload";

export const ComprehensiveTreatmentsBlock: Block = {
  slug: "comprehensive-treatments",
  imageURL: "https://udayps.com/images/skinfirm/comprehensive.webp",
  fields: [
    { name: "title", type: "richText", required: true },
    { name: "description", type: "richText", required: true },
    {
      name: "categories",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: "categoryTitle",
          type: "text",
          required: true,
          admin: {
            description: "e.g., Skin Treatments, Hair Treatments, Laser Treatments",
          },
        },
        {
          name: "treatments",
          type: "array",
          required: true,
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              admin: {
                description: "Treatment name to display",
              },
            },
            {
              name: "link",
              type: "text",
              required: true,
              admin: {
                description:
                  "Enter: slug (e.g., 'acne-treatment'), relative URL (e.g., '/services/acne'), or full URL (e.g., 'https://example.com')",
              },
            },
          ],
        },
      ],
    },
  ],
};
