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
import { BookConsultationBlock } from "../blocks/services/BookConsultation";
import { VideoTestimonialsBlock } from "../blocks/services/VideoTestimonials";
import { ComprehensiveTreatmentsBlock } from "../blocks/services/ComprehensiveTreatments";
import { SeoBlock } from "@/blocks/Seo";
import slugify from "slugify";

export const Locations: CollectionConfig = {
  slug: "locations",
  auth: false,
  labels: {
    singular: "Location",
    plural: "Locations",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
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
        VideoTestimonialsBlock,
        EligibilityBlock,
        FaqBlock,
        ComprehensiveTreatmentsBlock,
        BookConsultationBlock,
      ],
    },
    {
      name: "seo",
      type: "blocks",
      maxRows: 1,
      blocks: [SeoBlock],
      admin: {
        description: "Optional: Add SEO metadata for this location",
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
