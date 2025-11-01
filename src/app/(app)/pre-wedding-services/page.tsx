import type { Metadata } from "next";
import PreWeddingServicesPageClient from "./PreWeddingServicesPageClient";

export const metadata: Metadata = {
  title: "Get Personalised Pre-Wedding Glow & Couple Skin Packages | The Skin Firm",
      description:
    "Achieve your wedding day glow with personalised pre-wedding skin, hair & laser treatments for brides & grooms at The Skin Firm in Pune.",
};

export default function PreWeddingServicesPage() {
  return <PreWeddingServicesPageClient />;
}
