import type { Metadata } from "next";
import HomePage from "@/components/home/home-page";

export const metadata: Metadata = {
  title: "Best Skincare Clinic in Pune | Advanced Skin & Hair Treatments",
  description: "Transform your skin at The Skin Firm Pune. Expert treatments for acne, pigmentation, anti-aging, laser hair removal & more. Book your free consultation today! ✨",
  keywords: [
    "best skincare clinic Pune", "skin treatment Pune", "acne treatment", "laser hair removal Pune",
    "anti-aging treatment", "pigmentation treatment", "dermatology clinic", "facial treatment Pune"
  ],
  openGraph: {
    title: "Best Skincare Clinic in Pune | The Skin Firm",
    description: "Expert skincare treatments in Pune. Acne, pigmentation, anti-aging & laser solutions. Book consultation now!",
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

export default function Home() {
  return (
      <HomePage />
  );
}
