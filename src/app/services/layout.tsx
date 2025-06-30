import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Skin & Hair Services in Pune | The Skin Firm",
  description: "Explore our comprehensive range of advanced skin and hair treatments in Pune. Acne treatment, laser hair removal, anti-aging, pigmentation solutions & more. Book consultation!",
  keywords: [
    "skin services Pune", "hair services Pune", "laser services Pune", "acne treatment Pune",
    "pigmentation treatment", "anti-aging treatment", "laser hair removal", "hydrafacial",
    "chemical peel", "microneedling", "botox Pune", "dermatology services"
  ],
  openGraph: {
    title: "Advanced Skin & Hair Services | The Skin Firm Pune",
    description: "Professional skin and hair treatments in Pune. Expert solutions for all your skincare needs. Book your consultation today!",
    images: [
      {
        url: "/hero-graphic-2.png",
        width: 800,
        height: 600,
        alt: "Advanced skin and hair treatments at The Skin Firm",
      },
    ],
  },
  alternates: {
    canonical: "https://theskinfirm.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}