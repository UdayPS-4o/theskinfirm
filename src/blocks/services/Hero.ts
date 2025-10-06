import { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  imageURL:
    "https://ens3xeax5jd.exactdn.com/wp-content/uploads/2025/10/kitchen-activities-for-kids.jpg?strip=all&lossy=1&webp=80&avif=70&ssl=1",
  fields: [
    { name: "title", type: "richText", required: true },
    { name: "description", type: "richText", required: true },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};
