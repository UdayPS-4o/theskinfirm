import { Block } from "payload";

export const ProcessBlock: Block = {
  slug: "process",
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "title",
          type: "text",
          required: true
        },
        {
          name: "description",
          type: "richText",
          required: true
        },
      ],
    },
  ],
};
