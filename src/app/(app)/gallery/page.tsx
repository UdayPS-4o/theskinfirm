import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Before & After Gallery - Skin, Hair & Laser Treatment Results in Pune",
  description:
    "Explore our transformations: real before-and-after photos of skin, hair and laser treatments at The Skin Firm in Pune. See what’s possible.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
