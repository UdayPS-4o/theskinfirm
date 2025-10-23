import { Block } from "payload";

export const TestimonialsBlock: Block = {
  slug: "testimonials",
  imageURL: "https://udayps.com/images/skinfirm/10.webp",
  fields: [
    { name: "title", type: "richText", required: true },
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "content",
          type: "richText",
          required: true,
        },
      ],
    },
  ],
};
