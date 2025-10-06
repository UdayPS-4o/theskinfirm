import { CollectionConfig } from "payload";
import { HeroBlock } from "../blocks/services/Hero";
import { AboutBlock } from "../blocks/services/About";
import { BulletPointsBlock } from "../blocks/services/BulletPoints";
import { FaqBlock } from "../blocks/services/Faq";
import { InfoBlock } from "../blocks/services/Info";
import { ProcessBlock } from "../blocks/services/Process";
import { TreatmentsBlock } from "../blocks/services/Treatments";
import { BenifitsBlock } from "../blocks/services/Benifits";
import { PostCareBlock } from "../blocks/services/PostCare";
import { TestimonialsBlock } from "../blocks/services/Testimonials";
import { EligibilityBlock } from "../blocks/services/Eligibility";
import slugify from "slugify";
import { BeforeAfterBlock } from "@/blocks/services/BeforeAfter";

export const Services: CollectionConfig = {
  slug: "services",
  auth: false,
  labels: {
    singular: "Service",
    plural: "Services",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "category",
      type: "relationship",
      required: true,
      relationTo: "service-categories",
    },
    {
      name: "sections",
      type: "blocks",
      blocks: [
        HeroBlock,
        InfoBlock,
        AboutBlock,
        BulletPointsBlock,
        ProcessBlock,
        TreatmentsBlock,
        BenifitsBlock,
        BeforeAfterBlock,
        PostCareBlock,
        TestimonialsBlock,
        EligibilityBlock,
        FaqBlock,
      ],
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.title && !data?.slug) {
          data.slug = slugify(data.title, {
            lower: true, // sab lowercase
            strict: true, // special chars hata dega
          });
        }
        return data;
      },
    ],
  },
};
