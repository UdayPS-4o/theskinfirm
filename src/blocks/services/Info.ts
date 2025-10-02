import { Block } from "payload";

export const InfoBlock: Block = {
  slug: "info",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "richText", required: true },
  ],
};
