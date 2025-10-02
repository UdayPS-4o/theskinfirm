// Type definitions for acne treatment content
export interface Content {
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
  whatIsAcne: {
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
      title: string;
      description: string;
    }>;
  };
  treatmentTypes: {
    title: string;
    treatments: Array<{
      title: string;
      subtitle: string;
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
      description: string;
    }>;
  };
  transformations: {
    title: string;
    subtitle: string;
    beforeAfter: Array<{
      before: string;
      after: string;
      description: string;
    }>;
  };
  testimonials: {
    title: string;
    reviews: Array<{
      name: string;
      rating: number;
      review: string;
      treatment: string;
    }>;
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
    clinics: Array<{
      name: string;
      address: string;
      phone: string;
      hours: string;
    }>;
  };
  finalCta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  schema: any; // JSON-LD schema
}