import { Block } from "payload";

export const BulletPointsBlock: Block = {
  slug: "bullet-points",
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "content",
          type: "richText",
        },
      ],
    },
  ],
};
