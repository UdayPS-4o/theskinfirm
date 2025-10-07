import { Block } from "payload";

export const AboutBlock: Block = {
  slug: "about",
  imageURL: "https://udayps.com/images/skinfirm/4.webp",
  fields: [
    { name: "title", type: "richText", required: true },
    { name: "description", type: "richText", required: true },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};
