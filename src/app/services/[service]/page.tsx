import React from 'react';
import type { Metadata } from 'next';
import serviceData from './data.json';
import { notFound } from 'next/navigation';
import AnimatedServicePage from './AnimatedServicePage';

interface ServiceDetailsPageProps {
  params: Promise<{
    service: string;
  }>;
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServiceDetailsPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  // Slug to service name mapping for exact matches
  const slugToServiceMap: Record<string, string> = {
    "acne-treatment": "Acne Treatment",
    "acne-marks-treatment": "Acne Marks Treatment",
    "acne-scars-removal": "Acne Scars Removal",
    "open-pores-treatment": "Open Pores Treatment",
    "pigmentation-treatment": "Pigmentation Treatment",
    "melasma-treatment": "Melasma Treatment",
    "skin-whitening": "Skin Whitening",
    "tan-removal": "Tan Removal",
    "underarm-whitening": "Underarm Whitening",
    "anti-ageing-treatment": "Anti-Ageing Treatment",
    "wrinkle-treatment": "Wrinkle Treatment",
    "stretch-marks-removal": "Stretch Marks Removal",
    "dark-circle-treatment": "Dark Circle Treatment",
    "skin-tag-removal": "Skin Tag Removal",
    "wart-removal-treatment": "Wart Removal Treatment",
    "fire-and-ice-facial": "Fire and Ice Facial",
    "hollywood-facial": "Hollywood Facial",
    "hydrafacial-treatment": "Hydrafacial Treatment",
    "vampire-facial": "Vampire Facial",
    "prp-facial": "PRP Facial",
    "medicated-facial": "Medicated Facial",
    "pumpkin-peel-facial": "Pumpkin Peel Facial",
    "carbon-peel-facial": "Carbon Peel Facial",
    "salicylic-peel": "Salicylic Peel",
    "chemical-peel": "Chemical Peel",
    "black-peel": "Black Peel",
    "yellow-peel": "Yellow Peel",
    "cosmelan-peel": "Cosmelan Peel",
    "microneedling": "Microneedling",
    "microdermabrasion": "Microdermabrasion",
    "skin-boosters": "Skin Boosters",
    "gfc-therapy": "GFC Therapy",
    "face-lift-treatment": "Face Lift Treatment",
    "hifu-treatment": "HIFU Treatment",
    "double-chin-removal": "Double Chin Removal",
    "mesotherapy-for-skin": "Mesotherapy For Skin",
    "iv-therapy": "IV Therapy",
    "hyperhidrosis-treatment": "Hyperhidrosis Treatment",
    "prp-hair-treatment": "PRP Hair Treatment",
    "hair-loss-treatment": "Hair Loss Treatment",
    "hair-mesotherapy": "Hair Mesotherapy",
    "qr678-treatment": "QR678 Treatment",
    "hair-density-improvement": "Hair Density Improvement",
    "hair-regrowth": "Hair Regrowth",
    "postnatal-hair-loss-treatment": "Postnatal Hair Loss Treatment",
    "alopecia-areata-treatment": "Alopecia Areata Treatment",
    "hair-loss-treatment-for-men": "Hair Loss Treatment for Men",
    "laser-hair-removal": "Laser Hair Removal",
    "leg-hair-removal": "Leg Hair Removal",
    "bikini-hair-removal": "Bikini Hair Removal",
    "laser-beard-shaping": "Laser Beard Shaping",
    "diode-laser-hair-removal": "Diode Laser Hair Removal",
    "co2-laser-for-skin": "CO2 Laser for Skin",
    "qswitch-nd-yag-laser": "QSwitch ND YAG Laser",
    "carbon-facial-treatment": "Carbon Facial Treatment",
    "tattoo-removal": "Tattoo Removal",
    "carbon-laser-facial": "Carbon Laser Facial",
    "platelet-rich-plasma-facial": "Platelet-Rich Plasma Facial"
  };

  // Get service key from mapping or fallback to title case conversion
  const serviceKey = slugToServiceMap[resolvedParams.service] || resolvedParams.service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const currentServiceData = serviceData[serviceKey as keyof typeof serviceData];

  if (!currentServiceData) {
    return {
      title: 'Service Not Found | The Skin Firm',
      description: 'The requested service could not be found.',
    };
  }

  const serviceName = serviceKey;
  const serviceDescription = currentServiceData.about?.description || currentServiceData.hero?.description || '';
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
          url: currentServiceData.hero?.image || '/hero-graphic-2.png',
          width: 800,
          height: 600,
          alt: `${serviceName} treatment at The Skin Firm`,
        },
      ],
    },
    alternates: {
      canonical: `https://theskinfirm.com/services/${resolvedParams.service}`,
    },
  };
}

const ServiceDetailsPage = async ({ params }: ServiceDetailsPageProps) => {
  // Await the params Promise
  const resolvedParams = await params;
  
  // Slug to service name mapping for exact matches
  const slugToServiceMap: Record<string, string> = {
    "acne-treatment": "Acne Treatment",
    "acne-marks-treatment": "Acne Marks Treatment",
    "acne-scars-removal": "Acne Scars Removal",
    "open-pores-treatment": "Open Pores Treatment",
    "pigmentation-treatment": "Pigmentation Treatment",
    "melasma-treatment": "Melasma Treatment",
    "skin-whitening": "Skin Whitening",
    "tan-removal": "Tan Removal",
    "underarm-whitening": "Underarm Whitening",
    "anti-ageing-treatment": "Anti-Ageing Treatment",
    "wrinkle-treatment": "Wrinkle Treatment",
    "stretch-marks-removal": "Stretch Marks Removal",
    "dark-circle-treatment": "Dark Circle Treatment",
    "skin-tag-removal": "Skin Tag Removal",
    "wart-removal-treatment": "Wart Removal Treatment",
    "fire-and-ice-facial": "Fire and Ice Facial",
    "hollywood-facial": "Hollywood Facial",
    "hydrafacial-treatment": "Hydrafacial Treatment",
    "vampire-facial": "Vampire Facial",
    "prp-facial": "PRP Facial",
    "medicated-facial": "Medicated Facial",
    "pumpkin-peel-facial": "Pumpkin Peel Facial",
    "carbon-peel-facial": "Carbon Peel Facial",
    "salicylic-peel": "Salicylic Peel",
    "chemical-peel": "Chemical Peel",
    "black-peel": "Black Peel",
    "yellow-peel": "Yellow Peel",
    "cosmelan-peel": "Cosmelan Peel",
    "microneedling": "Microneedling",
    "microdermabrasion": "Microdermabrasion",
    "skin-boosters": "Skin Boosters",
    "gfc-therapy": "GFC Therapy",
    "face-lift-treatment": "Face Lift Treatment",
    "hifu-treatment": "HIFU Treatment",
    "double-chin-removal": "Double Chin Removal",
    "mesotherapy-for-skin": "Mesotherapy For Skin",
    "iv-therapy": "IV Therapy",
    "hyperhidrosis-treatment": "Hyperhidrosis Treatment",
    "prp-hair-treatment": "PRP Hair Treatment",
    "hair-loss-treatment": "Hair Loss Treatment",
    "hair-mesotherapy": "Hair Mesotherapy",
    "qr678-treatment": "QR678 Treatment",
    "hair-density-improvement": "Hair Density Improvement",
    "hair-regrowth": "Hair Regrowth",
    "postnatal-hair-loss-treatment": "Postnatal Hair Loss Treatment",
    "alopecia-areata-treatment": "Alopecia Areata Treatment",
    "hair-loss-treatment-for-men": "Hair Loss Treatment for Men",
    "laser-hair-removal": "Laser Hair Removal",
    "leg-hair-removal": "Leg Hair Removal",
    "bikini-hair-removal": "Bikini Hair Removal",
    "laser-beard-shaping": "Laser Beard Shaping",
    "diode-laser-hair-removal": "Diode Laser Hair Removal",
    "co2-laser-for-skin": "CO2 Laser for Skin",
    "qswitch-nd-yag-laser": "QSwitch ND YAG Laser",
    "carbon-facial-treatment": "Carbon Facial Treatment",
    "tattoo-removal": "Tattoo Removal",
    "carbon-laser-facial": "Carbon Laser Facial",
    "platelet-rich-plasma-facial": "Platelet-Rich Plasma Facial"
  };

  // Get service key from mapping or fallback to title case conversion
  const serviceKey = slugToServiceMap[resolvedParams.service] || resolvedParams.service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Get service data
  const currentServiceData = serviceData[serviceKey as keyof typeof serviceData];

  // If service not found, return 404
  if (!currentServiceData) {
    notFound();
  }

  return <AnimatedServicePage serviceData={{
    ...currentServiceData,
    about: {
      ...currentServiceData.about,
      highlight: currentServiceData.about.highlight || '' // Convert null to empty string
    }
  }} />;


};

export default ServiceDetailsPage;

// Generate static params for all services
export async function generateStaticParams() {
  const serviceData = await import('./data.json');
  
  return Object.keys(serviceData.default).map((serviceKey) => ({
    service: serviceKey.toLowerCase().replace(/\s+/g, '-'),
  }));
}