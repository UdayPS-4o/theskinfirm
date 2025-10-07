import { Block } from "payload";

export const PostCareBlock: Block = {
  slug: "post-care",
  fields: [
    {
      name: "downtimeTitle",
      type: "richText",
    },
    {
      name: "downtime",
      type: "array",
      fields: [{ name: "content", type: "richText" }],
    },
    {
      name: "postCareTitle",
      type: "richText",
    },
    {
      name: "postCareItems",
      type: "array",
      fields: [
        {
          name: "content",
          type: "richText",
        },
      ],
    },
  ],
};
