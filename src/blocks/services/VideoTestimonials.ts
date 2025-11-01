import { Block } from "payload";

export const VideoTestimonialsBlock: Block = {
  slug: "video-testimonials",
  imageURL: "https://udayps.com/images/skinfirm/video.webp",
  fields: [
    {
      name: "title",
      type: "richText",
      required: true,
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "videos",
      type: "array",
      required: true,
      fields: [
        {
          name: "url",
          type: "text",
          required: true,
          label: "YouTube Video URL",
        },
      ],
    },
  ],
};
