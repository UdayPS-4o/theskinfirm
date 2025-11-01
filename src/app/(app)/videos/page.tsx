import type { Metadata } from "next";
import VideosPageClient from "./VideosPageClient";

export const metadata: Metadata = {
  title: "Video Library - Expert Skincare Advise for Skin, Hair & Laser Treatments",
  description:
    "Watch our expert videos on skin care, hair restoration and laser treatments at The Skin Firm in Pune. Real stories & guides from our dermatology clinic.",
};

export default function VideosPage() {
  return <VideosPageClient />;
}
