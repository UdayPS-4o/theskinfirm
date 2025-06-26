import type { Metadata } from "next";
import HeroSection from "@/components/about-us/hero";
import JennyStorySection from "@/components/about-us/story";
import AboutStatsSection from "@/components/about-us/about-us-stats";
import MissionSection from "@/components/about-us/mission";
import ReviewSection from "@/components/about-us/review";
import { teamMembers, values, testimonials } from "@/data/about-us";

export const metadata: Metadata = {
  title: "About Us - SkinFirm",
  description: "Learn about our mission, values, and the team behind SkinFirm.",
};

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <JennyStorySection />
      <AboutStatsSection />
      <MissionSection values={values} />
      <ReviewSection testimonials={testimonials} />
    </>
  );
}
