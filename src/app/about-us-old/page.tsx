import type { Metadata } from "next";
import HeroSection from "@/components/about-us-old/hero";
import KarishmaStorySection from "@/components/about-us-old/story";
import AboutStatsSection from "@/components/about-us-old/about-us-stats";
import CompanyAboutSection from "@/components/about-us-old/company-about";
import ReviewSection from "@/components/about-us-old/review";
import { testimonials } from "@/data/about-us";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About Us - SkinFirm",
  description: "Learn about our mission, values, and the team behind SkinFirm.",
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
