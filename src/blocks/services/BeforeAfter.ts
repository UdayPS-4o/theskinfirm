import { Block } from "payload";

export const BeforeAfterBlock: Block = {
  slug: "before-after",
  imageURL: "https://udayps.com/images/skinfirm/13.webp",
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
