import { Block } from "payload";

export const EligibilityBlock: Block = {
  slug: "eligibility",
  imageURL: "https://udayps.com/images/skinfirm/11.webp",
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
