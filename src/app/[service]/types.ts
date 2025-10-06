export interface ServiceContent {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    category: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  whatIsService: {
    title: string;
    content: string;
  };
  signsSymptoms?: {
    title: string;
    items: string[];
  };
  signsConcerns?: {
    title: string;
    items: string[];
  };
  whyChooseUs: {
    title: string;
    description: string;
    highlight: string | null;
    image: string;
  };
  process: {
    title: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  treatmentTypes: {
    title: string;
    treatments: {
      title: string;
      description: string;
    }[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  postCare: {
    title: string;
    description: string;
    recovery?: {
      title: string;
      timeline: string[];
    };
    instructions?: string[];
    downtime?: {
      title: string;
      items: string[];
    };
    tips?: string[];
    tipsTitle?: string;
  };
  clinicFeatures: {
    title: string;
    features: {
      icon: string;
      title: string;
      text: string;
    }[];
  };
  transformations: {
    title: string;
    subtitle: string;
    images: {
      src: string;
      alt: string;
    }[];
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
    questions: {
      question: string;
      answer: string;
    }[];
  };
  locations: {
    title: string;
    content: string;
    areas: string[];
    footer: string;
  };
  finalCta: {
    title: string;
    content: string;
    cta: string;
  };
}
