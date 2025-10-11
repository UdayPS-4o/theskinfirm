import { Block } from "payload";

export const TreatmentsBlock: Block = {
  slug: "treatments",
  imageURL: "https://udayps.com/images/skinfirm/6.webp",
  fields: [
    { name: "title", type: "richText", required: true },
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "richText",
          required: true,
        },
      ],
    },
  ],
};
