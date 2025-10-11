import { CollectionConfig } from "payload";
import { HeroBlock } from "../blocks/Hero";
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
import { BeforeAfterBlock } from "@/blocks/services/BeforeAfter";
import { SeoBlock } from "@/blocks/Seo";
import slugify from "slugify";

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
    {
      name: "seo",
      type: "blocks",
      maxRows: 1,
      blocks: [SeoBlock],
      admin: {
        description: "Optional: Add SEO metadata for this service",
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.title && !data?.slug) {
          data.slug = slugify(data.title, {
            lower: true,
            strict: true,
          });
        }
        return data;
      },
    ],
  },
};
