import { Block } from "payload";

export const PostCareBlock: Block = {
  slug: "post-care",
  imageURL: "https://udayps.com/images/skinfirm/8.webp",
  fields: [
    {
      name: "downtimeTitle",
      type: "richText",
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
      type: "richText",
      required: true,
    },
    {
      name: "postCareItems",
      type: "array",
      fields: [
        {
          name: "content",
          type: "richText",
          required: true,
        },
      ],
      required: true,
    },
  ],
};
