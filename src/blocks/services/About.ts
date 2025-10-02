import { Block } from "payload";

export const AboutBlock: Block = {
  slug: "about",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "richText", required: true },
    { name: "image", type: "upload", relationTo: "media", required: true },
  ],
};
