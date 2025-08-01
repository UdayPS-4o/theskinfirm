import type { Metadata } from "next";
import HeroSection from "@/components/about-us/hero";
import KarishmaStorySection from "@/components/about-us/story";
import AboutStatsSection from "@/components/about-us/about-us-stats";
import CompanyAboutSection from "@/components/about-us/company-about";
import ReviewSection from "@/components/about-us/review";
import { testimonials } from "@/data/about-us";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About The Skin Firm | Expert Dermatology Clinic in Pune",
  description: "Discover The Skin Firm's story - Pune's premier skincare clinic. Meet our expert dermatologists, learn about our mission to transform skin health with advanced treatments.",
  keywords: [
    "about The Skin Firm", "dermatology clinic Pune", "skincare experts Pune", "skin specialists",
    "dermatologist Pune", "skincare clinic story", "beauty clinic about us", "skin treatment experts"
  ],
  openGraph: {
    title: "About The Skin Firm | Expert Dermatology Clinic in Pune",
    description: "Meet the experts behind Pune's premier skincare clinic. Learn about our mission to transform skin health with advanced treatments.",
    images: [
      {
        url: "/about-us-images/jenny.png",
        width: 800,
        height: 600,
        alt: "The Skin Firm team - Expert dermatologists in Pune",
      },
    ],
  },
  alternates: {
    canonical: "https://theskinfirm.in/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <CompanyAboutSection />
      <KarishmaStorySection />
      <AboutStatsSection />
      <ReviewSection testimonials={testimonials} />
      <Footer />
    </>
  );
}
