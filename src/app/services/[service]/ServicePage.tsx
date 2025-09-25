"use client";

import AnimatedServicePage from "./AnimatedServicePage";
import data from "./data.json";
import data2 from "./data_2.json";
import { AcneTreatmentClientPage } from "./Design2Page";
import serviceSlugMapping from "../../../../service-slug-mapping.json";
import { notFound } from "next/navigation";

const design2Slugs = Object.keys(data2);

const ServicePage = ({ service: slug }: { service: string }) => {
  if (design2Slugs.includes(slug)) {
    const serviceData = data2[slug as keyof typeof data2];
    return <AcneTreatmentClientPage contentData={serviceData} />;
  } else {
    const serviceTitle = getServiceTitleFromSlug(slug);

    if (!serviceTitle || !data[serviceTitle as keyof typeof data]) {
      notFound();
    }
    const serviceData = data[serviceTitle as keyof typeof data];
    return <AnimatedServicePage serviceData={serviceData} />;
  }
};

export default ServicePage;

function getServiceTitleFromSlug(slug: string): string | undefined {
  const slugMapping = (serviceSlugMapping as any).slugToService;
  if (slugMapping && slugMapping[slug]) {
    return slugMapping[slug];
  }
  return undefined;
}
