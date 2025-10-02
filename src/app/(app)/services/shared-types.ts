// Shared types for all service pages
// This file contains interfaces that can be used across all service pages

export interface ServiceMeta {
  title: string;
  description: string;
  keywords: string;
}

export interface ServiceHero {
  title: string;
  subtitle: string;
  cta: string;
}

export interface ServiceContent {
  title: string;
  content: string;
}

export interface ServiceFeature {
  title: string;
  text: string;
  icon?: string; // Optional icon for some services
}

export interface ServiceSignsSymptoms {
  title: string;
  items: string[];
}

export interface ServiceWhyChooseUs {
  title: string;
  content: string;
  features: ServiceFeature[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceProcess {
  title: string;
  steps: ServiceProcessStep[];
}

export interface ServiceTreatment {
  title: string;
  description: string;
}

export interface ServiceTreatmentTypes {
  title: string;
  treatments: ServiceTreatment[];
}

export interface ServiceBenefits {
  title: string;
  items: string[];
}

export interface ServiceDowntime {
  title: string;
  items?: string[];
  timeline?: string[]; // Some services use timeline instead of items
}

export interface ServicePostCare {
  title: string;
  description: string;
  downtime?: ServiceDowntime;
  recovery?: ServiceDowntime; // Some services use recovery instead of downtime
  tips?: string[];
  instructions?: string[]; // Some services use instructions instead of tips
}

export interface ServiceClinicFeatures {
  title: string;
  features: ServiceFeature[];
}

export interface ServiceImage {
  src: string;
  alt: string;
}

export interface ServiceTransformations {
  title: string;
  subtitle: string;
  images: ServiceImage[];
}

export interface ServiceTestimonials {
  title: string;
  reviews: string[];
}

export interface ServiceWhoBenefits {
  title: string;
  groups?: string[]; // Most services use groups
  candidates?: string[]; // Some services use candidates
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceFAQs {
  title: string;
  questions: ServiceFAQ[];
}

export interface ServiceLocations {
  title: string;
  content: string;
  subtitle?: string;
  areas: string[];
  footer: string;
}

export interface ServiceFinalCTA {
  title: string;
  content: string;
  subtitle?: string;
  cta: string;
}

export interface ServiceAddress {
  "@type": string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface ServiceAvailableService {
  "@type": string;
  name: string;
  description: string;
}

export interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: ServiceAddress;
  medicalSpecialty: string;
  availableService: ServiceAvailableService;
}

// Base interface that all service content should extend
export interface BaseServiceContent {
  meta: ServiceMeta;
  hero: ServiceHero;
  whatIsService: ServiceContent;
  signsSymptoms: ServiceSignsSymptoms;
  whyChooseUs: ServiceWhyChooseUs;
  process: ServiceProcess;
  treatmentTypes: ServiceTreatmentTypes;
  benefits: ServiceBenefits;
  postCare: ServicePostCare;
  clinicFeatures: ServiceClinicFeatures;
  transformations: ServiceTransformations;
  testimonials: ServiceTestimonials;
  whoBenefits: ServiceWhoBenefits;
  faqs: ServiceFAQs;
  locations: ServiceLocations;
  finalCta: ServiceFinalCTA;
  schema: ServiceSchema;
}

// Specific service content interfaces can be defined if they have unique fields
export interface AcneTreatmentContent extends BaseServiceContent {
  // Acne treatment specific fields (for existing acne treatment page)
  whatIsAcne?: ServiceContent; // Optional for backward compatibility
}

// Generic service content type that can be used for any service
export type ServiceContentType = 
  | AcneTreatmentContent 
  | BaseServiceContent;