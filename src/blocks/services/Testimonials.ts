import { Block } from "payload";

export const TestimonialsBlock: Block = {
  slug: "testimonials",
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
          required: true
        },
      ],
    },
  ],
};
