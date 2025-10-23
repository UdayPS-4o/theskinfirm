import { Block } from "payload";

export const FaqBlock: Block = {
  slug: "faq",
  imageURL: "https://udayps.com/images/skinfirm/12.webp",
  fields: [
    { name: "title", type: "richText", required: true },
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "richText", required: true },
      ],
    },
  ],
};
