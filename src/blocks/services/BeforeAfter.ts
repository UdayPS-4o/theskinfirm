import { Block } from "payload";

export const BeforeAfterBlock: Block = {
  slug: "before-after",
  fields: [
    { name: "title", type: "richText", required: true },
    { name: "subtitle", type: "richText", required: true },
    {
      name: "images",
      type: "array",
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
      ],
    },
  ],
};
