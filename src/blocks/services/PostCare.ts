import { Block } from "payload";

export const PostCareBlock: Block = {
  slug: "post-care",
  fields: [
    {
      name: "downtimeTitle",
      type: "text",
      required: true,
    },
    {
      name: "downtime",
      type: "array",
      fields: [{ name: "content", type: "richText", required: true }],
      required: true,
    },
    {
      name: "postCareTitle",
      type: "text",
      required: true,
    },
    {
      name: "postCareItems",
      type: "array",
      fields: [
        {
          name: "content",
          type: "richText",
          required: true
        },
      ],
      required: true,
    },
  ],
};
