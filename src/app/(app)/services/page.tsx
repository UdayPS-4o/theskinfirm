import { getPayload } from "payload";
import config from "@payload-config";
import { Service, ServiceCategory } from "@/payload-types";
import ServicePageClient from "./ServicePageClient";
import type { Metadata } from "next";
import { getAllServices } from "@/lib/api";

export const metadata: Metadata = {
  title: "Get Expert Skin, Hair & Laser Services in Pune | The Skin Firm",
  description:
    "Explore dermatologist-led expert skin, hair and laser services at The Skin Firm in Pune. Acne, anti-ageing, pigmentation, HIFU & more - where skin meets science.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function ServicePage() {
  const services: (Service & { category: ServiceCategory })[] =
    await getAllServices();
  return <ServicePageClient services={services} />;
}
