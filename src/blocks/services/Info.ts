import { Block } from "payload";

export const InfoBlock: Block = {
  slug: "info",
  imageURL: "https://udayps.com/images/skinfirm/2.webp",
  fields: [
    { name: "title", type: "richText", required: true },
    { name: "description", type: "richText", required: true },
  ],
};
