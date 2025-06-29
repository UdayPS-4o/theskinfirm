import React from 'react';
import serviceData from './data.json';
import { notFound } from 'next/navigation';
import AnimatedServicePage from './AnimatedServicePage';

interface ServiceDetailsPageProps {
  params: Promise<{
    service: string;
  }>;
}

const ServiceDetailsPage = async ({ params }: ServiceDetailsPageProps) => {
  // Await the params Promise
  const resolvedParams = await params;
  
  // Convert URL parameter to service key
  const serviceKey = resolvedParams.service
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