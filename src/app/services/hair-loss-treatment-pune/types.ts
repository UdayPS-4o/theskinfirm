// Type definitions for hair loss treatment content
export interface HairLossTreatmentContent {
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
  signsSymptoms: {
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
  treatmentTypes: {
    title: string;
    treatments: Array<{
      title: string;
      subtitle: string;
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
    recovery: {
      title: string;
      timeline: string[];
    };
    instructions: string[];
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
    candidates: string[];
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