import type { Metadata } from "next";
import HomePage from "@/components/home/home-page";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { HeroOffer } from "@/payload-types";

export const metadata: Metadata = {
  title: "Best Skin, Hair & Laser Treatment in Pune| The Skin Firm Clinic",
  description:
    "Personalized skin, hair & laser treatments in Pune by Dr. Karishma Singh, certified skin specialist. Get personalized care for acne, anti-ageing, skin pigmentation, hydrafacials & bridal skincare.",
  keywords: [
    "best skincare clinic Pune",
    "skin treatment Pune",
    "acne treatment",
    "laser hair removal Pune",
    "anti-aging treatment",
    "pigmentation treatment",
    "dermatology clinic",
    "facial treatment Pune",
  ],
  openGraph: {
    title: "Best Skincare Clinic in Pune | The Skin Firm",
    description:
      "Expert skincare treatments in Pune. Acne, pigmentation, anti-aging & laser solutions. Book consultation now!",
    images: [
      {
        url: "/hero-graphic-2.png",
        width: 800,
        height: 600,
        alt: "Professional skincare treatment at The Skin Firm Pune",
      },
    ],
  },
  alternates: {
    canonical: "https://theskinfirm.in",
  },
};

export default async function Home() {
  const payload = await getPayload({ config });

  // Fetch active hero offer
  const heroOfferData = await payload.find({
    collection: "hero-offer",
    where: {
      isActive: {
        equals: true,
      },
    },
    limit: 1,
  });

  const heroOffer: HeroOffer | null = heroOfferData.docs[0] || null;

  return <HomePage heroOffer={heroOffer} />;
}
