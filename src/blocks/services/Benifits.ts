import { Block } from "payload";

export const BenifitsBlock: Block = {
  slug: "benifits",
  imageURL: "https://udayps.com/images/skinfirm/7.webp",
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
