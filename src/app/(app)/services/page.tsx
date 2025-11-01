import { getPayload } from "payload";
import config from "@payload-config";
import { Service, ServiceCategory } from "@/payload-types";
import ServicePageClient from "./ServicePageClient";

export const revalidate = 3600; // Revalidate every hour

export default async function ServicePage() {
  try {
    // Fetch services from PayloadCMS
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "services",
      depth: 1, // This will populate the category relationship
      limit: 1000, // Adjust as needed
    });

    const services = result.docs as (Service & { category: ServiceCategory })[];

    return <ServicePageClient services={services} />;
  } catch (error) {
    console.error("Error fetching services:", error);
    // Return empty services array as fallback
    const services: (Service & { category: ServiceCategory })[] = [];
    return <ServicePageClient services={services} />;
  }
}
