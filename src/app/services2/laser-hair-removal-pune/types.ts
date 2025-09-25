// Type definitions for laser hair removal content
export interface LaserHairRemovalContent {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  whatIsService: {
    title: string;
    content: string;
  };
  areasWeTreat: {
    title: string;
    items: string[];
  };
  whyChooseUs: {
    title: string;
    content: string;
    features: Array<{
      title: string;
      text: string;
    }>;
  };
  process: {
    title: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  benefits: {
    title: string;
    items: string[];
  };
  postCare: {
    title: string;
    description: string;
    downtime: {
      title: string;
      items: string[];
    };
    tips: string[];
  };
  clinicFeatures: {
    title: string;
    features: Array<{
      title: string;
      text: string;
    }>;
  };
  transformations: {
    title: string;
    subtitle: string;
    images: Array<{
      src: string;
      alt: string;
    }>;
  };
  testimonials: {
    title: string;
    reviews: string[];
  };
  whoBenefits: {
    title: string;
    groups: string[];
  };
  faqs: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  locations: {
    title: string;
    content: string;
    subtitle: string;
    areas: string[];
    footer: string;
  };
  finalCta: {
    title: string;
    content: string;
    subtitle: string;
    cta: string;
  };
  schema: any; // JSON-LD schema
}