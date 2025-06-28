import type { Metadata } from "next";
import HomePage from "@/components/home/home-page";

export const metadata: Metadata = {
  title: "Home | The Skin Firm- Your Journey to Radiant Skin Starts Here",
  description: "Welcome to The Skin Firm. We offer a wide range of personalized skincare treatments to help you look and feel your best. Explore our services and book a consultation.",
};

export default function Home() {
  return (
    <HomePage />
  );
}
