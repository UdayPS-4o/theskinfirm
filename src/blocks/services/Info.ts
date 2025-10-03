import { Block } from "payload";

export const InfoBlock: Block = {
  slug: "info",
  fields: [
    { name: "title", type: "richText", required: true },
    { name: "description", type: "richText", required: true },
  ],
};
