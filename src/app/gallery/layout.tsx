import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Gallery | Skin Treatment Results - The Skin Firm Pune",
  description: "View amazing before & after results from our skin treatments in Pune. Real transformations from acne treatment, pigmentation removal, anti-aging & more at The Skin Firm.",
  keywords: [
    "before after gallery", "skin treatment results Pune", "acne treatment before after",
    "pigmentation treatment results", "anti-aging results", "skin transformation gallery",
    "dermatology results Pune", "skincare before after photos"
  ],
  openGraph: {
    title: "Before & After Gallery | Skin Treatment Results - The Skin Firm",
    description: "See real transformations from our advanced skin treatments. Amazing before & after results from Pune's premier skincare clinic.",
    images: [
      {
        url: "/gallery/2.png",
        width: 800,
        height: 600,
        alt: "Before and after skin treatment results at The Skin Firm",
      },
    ],
  },
  alternates: {
    canonical: "https://theskinfirm.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}