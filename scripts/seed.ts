import config from "@payload-config";
import { getPayload } from "payload";
import dataJson from "../src/app/(app)/services/[service]/data_2.json";

// Helper function to convert plain text to Payload's richText format
const toRichText = (text: string) => {
  if (!text || typeof text !== 'string') {
    return {
      root: {
        children: [],
        direction: null,
        format: "",
        indent: 0,
        type: "root",
        version: 1,
      },
    };
  }

  // Split text by newlines to create separate paragraphs
  const paragraphs = text.split('\n').filter(p => p.trim() !== '');

  return {
    root: {
      children: paragraphs.map(p => ({
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: p.trim(),
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      })),
      direction: "ltr",
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  };
};


async function seed() {
  const payload = await getPayload({ config });

  for (const [key, value] of Object.entries(dataJson)) {
    const sections: any[] = [];

    // Hero Block
    if ("hero" in value) {
      sections.push({
        blockType: "hero",
        title: toRichText(value.hero.title),
        description: toRichText(value.hero.subtitle),
      });
    }

    // Info Block (from whatIsService)
    if ("whatIsService" in value) {
      sections.push({
        blockType: "info",
        title: toRichText(value.whatIsService.title),
        description: toRichText(value.whatIsService.content),
      });
    }

    // About Block (from whyChooseUs)
    if ("whyChooseUs" in value) {
        sections.push({
            blockType: 'about',
            title: toRichText(value.whyChooseUs.title),
            description: toRichText(value.whyChooseUs.description + '\n\n' + value.whyChooseUs.highlight),
        });
    }

    // BulletPoints Block (from signsSymptoms)
    if ("signsSymptoms" in value && value.signsSymptoms.items?.length > 0) {
        sections.push({
            blockType: 'bullet-points',
            title: toRichText(value.signsSymptoms.title),
            items: value.signsSymptoms.items.map((item: string) => ({ content: toRichText(item) })),
        });
    }

    // Process Block
    if ("process" in value && value.process.steps?.length > 0) {
        sections.push({
            blockType: 'process',
            title: toRichText(value.process.title),
            items: value.process.steps.map((step: { title: string; description: string }) => ({
                title: step.title,
                description: toRichText(step.description),
            })),
        });
    }
    
    // Treatments Block (from treatmentTypes)
    if ("treatmentTypes" in value && value.treatmentTypes.treatments?.length > 0) {
        sections.push({
            blockType: 'treatments',
            title: toRichText(value.treatmentTypes.title),
            items: value.treatmentTypes.treatments.map((treatment: { title: string; description: string }) => ({
                title: treatment.title,
                description: toRichText(treatment.description),
            })),
        });
    }

    // Benifits Block
    if ("benefits" in value && value.benefits.items?.length > 0) {
        sections.push({
            blockType: 'benifits',
            title: toRichText(value.benefits.title),
            items: value.benefits.items.map((item: string) => ({ content: toRichText(item) })),
        });
    }

    // PostCare Block
    if ("postCare" in value) {
        const downtimeItems = value.postCare.description.split('\n').filter(line => line.trim() !== '');
        sections.push({
            blockType: 'post-care',
            downtimeTitle: toRichText(value.postCare.title),
            downtime: downtimeItems.map(item => ({ content: toRichText(item) })),
            postCareTitle: toRichText(value.postCare.tipsTitle),
            postCareItems: value.postCare.tips.map((tip: string) => ({ content: toRichText(tip) })),
        });
    }
    
    // Testimonials Block
    if ("testimonials" in value && value.testimonials.reviews?.length > 0) {
        sections.push({
            blockType: 'testimonials',
            title: toRichText(value.testimonials.title),
            items: value.testimonials.reviews.map((review: string) => ({ content: toRichText(review) })),
        });
    }
    
    // Eligibility Block (from whoBenefits)
    if ("whoBenefits" in value && value.whoBenefits.candidates?.length > 0) {
        sections.push({
            blockType: 'eligibility',
            title: toRichText(value.whoBenefits.title),
            items: value.whoBenefits.candidates.map((candidate: string) => ({ content: toRichText(candidate) })),
        });
    }
    
    // Faq Block
    if ("faqs" in value && value.faqs.questions?.length > 0) {
        sections.push({
            blockType: 'faq',
            title: toRichText(value.faqs.title),
            items: value.faqs.questions.map((faq: { question: string; answer: string }) => ({
                question: faq.question,
                answer: toRichText(faq.answer),
            })),
        });
    }

    try {
        await payload.create({
          collection: "services",
          data: {
            category: 19, // As specified in your original code
            slug: key, // Using the JSON key for a clean slug
            title: value.meta.title,
            sections: sections,
          },
        });
        console.log(`✅ Seeded service: ${value.meta.title}`);
    } catch (error) {
        console.error(`❌ Failed to seed service: ${value.meta.title}`, error);
    }
  }
}
await seed()