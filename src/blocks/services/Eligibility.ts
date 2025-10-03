import { Block } from "payload";

export const EligibilityBlock: Block = {
  slug: "eligibility",
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
