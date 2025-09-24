import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../../../convex/_generated/api';
import AnimatedServicePage from './AnimatedServicePage';

interface ServiceDetailsPageProps {
  params: Promise<{
    service: string;
  }>;
}

// Create Convex HTTP client for server-side data fetching
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Generate metadata for each service page
export async function generateMetadata({ params }: ServiceDetailsPageProps): Promise<Metadata> {
  const resolvedParams = await params;

  try {
    // Fetch service data from Convex by slug
    const serviceData = await convex.query(api.services.queries.getServiceBySlug, {
      slug: resolvedParams.service
    });

    if (!serviceData) {
      return {
        title: 'Service Not Found | The Skin Firm',
        description: 'The requested service could not be found.',
      };
    }

    const serviceName = serviceData.name;
    const serviceDescription = serviceData.data.about?.description || serviceData.data.hero?.description || '';
    const shortDescription = serviceDescription.length > 160
      ? serviceDescription.substring(0, 157) + '...'
      : serviceDescription;

    return {
      title: `${serviceName} in Pune | Expert Treatment at The Skin Firm`,
      description: shortDescription,
      keywords: [
        `${serviceName.toLowerCase()} Pune`,
        `${serviceName.toLowerCase()} treatment`,
        'skin treatment Pune',
        'dermatology Pune',
        'skincare clinic',
        'The Skin Firm'
      ],
      openGraph: {
        title: `${serviceName} Treatment | The Skin Firm Pune`,
        description: shortDescription,
        images: [
          {
            url: serviceData.data.about?.image || '/hero-graphic-2.png',
            width: 800,
            height: 600,
            alt: `${serviceName} treatment at The Skin Firm`,
          },
        ],
      },
      alternates: {
        canonical: `https://theskinfirm.in/services/${resolvedParams.service}`,
      },
    };
  } catch (error) {
    console.error('Error fetching service metadata:', error);
    return {
      title: 'Service | The Skin Firm',
      description: 'Professional dermatology and skin care services in Pune.',
    };
  }
}

const ServiceDetailsPage = async ({ params }: ServiceDetailsPageProps) => {
  const resolvedParams = await params;

  try {
    // Fetch service data from Convex by slug
    const serviceData = await convex.query(api.services.queries.getServiceBySlug, {
      slug: resolvedParams.service
    });

    // If service not found, return 404
    if (!serviceData) {
      notFound();
    }

    // Transform Convex data to match the expected format for AnimatedServicePage
    const transformedServiceData = {
      hero: {
        serviceCategory: serviceData.type.charAt(0).toUpperCase() + serviceData.type.slice(1),
        title: serviceData.data.hero.title,
        description: serviceData.data.hero.description,
        image: serviceData.data.about?.image || '/hero-graphic-2.png',
        doctor: {
          name: "Dr. Karishma Singh",
          title: "Dermatologist & Aesthetic Physician"
        }
      },
      about: serviceData.data.about ? {
        title: serviceData.data.about.title,
        description: serviceData.data.about.description,
        highlight: serviceData.data.about.highlight || '',
        image: serviceData.data.about.image
      } : {
        title: "About " + serviceData.name,
        description: serviceData.data.hero.description,
        highlight: '',
        image: '/hero-graphic-2.png'
      },
      process: serviceData.data.process ? {
        title: serviceData.data.process.title,
        subtitle: "Our step-by-step approach",
        steps: serviceData.data.process.steps
      } : {
        title: "Treatment Process",
        subtitle: "Our professional approach to your care",
        steps: [
          {
            title: "Consultation",
            description: "Initial assessment and treatment planning"
          },
          {
            title: "Treatment",
            description: "Professional treatment delivery"
          },
          {
            title: "Follow-up",
            description: "Post-treatment care and monitoring"
          }
        ]
      },
      benefits: serviceData.data.benefits ? {
        title: serviceData.data.benefits.title,
        subtitle: "Why choose this treatment",
        items: serviceData.data.benefits.items
      } : {
        title: "Treatment Benefits",
        subtitle: "Key advantages of this treatment",
        items: ["Professional treatment", "Expert care", "Proven results"]
      },
      // Signs & Symptoms section
      signsSymptoms: serviceData.data.signsSymptoms ? {
        subtitle: serviceData.data.signsSymptoms.subtitle,
        title: serviceData.data.signsSymptoms.title,
        items: serviceData.data.signsSymptoms.items
      } : {
        subtitle: "Symptoms",
        title: "Signs & Symptoms",
        items: ["Consult with our experts for proper diagnosis"]
      },
      
      // Types of Treatments section
      treatments: serviceData.data.treatments ? {
        subtitle: serviceData.data.treatments.subtitle,
        title: serviceData.data.treatments.title,
        items: serviceData.data.treatments.items
      } : {
        subtitle: "Treatment Options",
        title: "Available Treatments",
        items: [
          { title: "Professional Treatment", description: "Expert care tailored to your needs" },
          { title: "Advanced Technology", description: "State-of-the-art equipment and techniques" },
          { title: "Personalized Approach", description: "Customized treatment plans" }
        ]
      },
      
      postCare: serviceData.data.postCare ? {
        title: serviceData.data.postCare.title || "Post-Treatment Care",
        subtitle: serviceData.data.postCare.subtitle || "Important aftercare information",
        downtime: serviceData.data.postCare.downtime || {
          title: "Recovery Time",
          items: ["Minimal downtime", "Resume normal activities"]
        },
        postCare: serviceData.data.postCare.postCare || {
          title: "Care Instructions",
          items: ["Follow prescribed care", "Regular follow-ups"]
        }
      } : {
        title: "Post-Treatment Care",
        subtitle: "Important aftercare information",
        downtime: {
          title: "Recovery Time",
          items: ["Minimal downtime", "Resume normal activities"]
        },
        postCare: {
          title: "Care Instructions",
          items: ["Follow prescribed care", "Regular follow-ups"]
        }
      },
      
      // Before & After Transformations section
      transformations: serviceData.data.transformations ? {
        subtitle: serviceData.data.transformations.subtitle,
        title: serviceData.data.transformations.title,
        description: serviceData.data.transformations.description,
        images: serviceData.data.transformations.images
      } : {
        subtitle: "Results",
        title: "Before & After Results",
        description: "See the amazing transformations our patients have achieved",
        images: [
          { src: "/gallery/2.png", alt: "Treatment Results", storageId: undefined },
          { src: "/gallery/4.png", alt: "Treatment Results", storageId: undefined },
          { src: "/gallery/9.png", alt: "Treatment Results", storageId: undefined }
        ]
      },
      
      // Testimonials section
      testimonials: serviceData.data.testimonials ? {
        subtitle: serviceData.data.testimonials.subtitle,
        title: serviceData.data.testimonials.title,
        items: serviceData.data.testimonials.items
      } : {
        subtitle: "Testimonials",
        title: "Patient Testimonials",
        items: [
          "The treatment was excellent and the results exceeded my expectations. The team was professional and caring throughout the process.",
          "I'm so happy with the results. The staff explained everything clearly and made me feel comfortable during the entire treatment."
        ]
      },
      
      // Who Can Benefit section
      whoBenefits: serviceData.data.whoBenefits ? {
        title: serviceData.data.whoBenefits.title,
        items: serviceData.data.whoBenefits.items
      } : {
        title: "Who Can Benefit from This Treatment?",
        items: [
          "Anyone looking for professional skin care",
          "Patients seeking expert dermatological treatment",
          "Individuals wanting to improve their skin health",
          "Safe for all skin types and tones"
        ]
      },
      faq: serviceData.data.faq ? {
        title: serviceData.data.faq.title,
        subtitle: serviceData.data.faq.subtitle,
        questions: serviceData.data.faq.questions
      } : {
        title: "Frequently Asked Questions",
        subtitle: "Common questions about this treatment",
        questions: [
          {
            question: "How long does the treatment take?",
            answer: "Treatment duration varies based on individual needs and will be discussed during consultation."
          },
          {
            question: "Is the treatment safe?",
            answer: "Yes, all our treatments are performed by qualified professionals using safe, approved methods."
          }
        ]
      }
    };

    return <AnimatedServicePage serviceData={transformedServiceData} />;

  } catch (error) {
    console.error('Error fetching service data:', error);
    notFound();
  }
};

export default ServiceDetailsPage;

// Generate static params for all services
export async function generateStaticParams() {
  try {
    // Fetch all services from Convex
    const services = await convex.query(api.services.queries.getServices);

    // Return array of service slugs for static generation
    return services.map((service: any) => ({
      service: service.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return empty array if error occurs
    return [];
  }
}