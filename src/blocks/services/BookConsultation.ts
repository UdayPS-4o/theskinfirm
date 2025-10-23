import { Block } from "payload";

export const BookConsultationBlock: Block = {
  slug: "book-consultation",
  fields: [
    {
      name: "title",
      type: "richText",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "secondaryDescription",
      type: "richText",
      required: false,
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
      defaultValue: "Book Your Treatment Appointment",
    },
    {
      name: "buttonLink",
      type: "text",
      required: true,
      defaultValue: "/contact",
    },
  ],
};
