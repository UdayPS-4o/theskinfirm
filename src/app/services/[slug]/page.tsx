import React from 'react';
import { notFound } from 'next/navigation';
import services from '@/data/services.json';
import ServicePage from '@/components/ServicePage';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const Page = ({ params }: ServicePageProps) => {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
};

export default Page;
