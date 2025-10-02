import { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "richText", required: true },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};
