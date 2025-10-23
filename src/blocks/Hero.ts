import { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  imageURL: "https://udayps.com/images/skinfirm/1.webp",
  fields: [
    { name: "title", type: "richText", required: true },
    { name: "description", type: "richText", required: true },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};
