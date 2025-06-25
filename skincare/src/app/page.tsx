import HomePage from "@/components/home-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | dermaelegance- Your Journey to Radiant Skin Starts Here",
  description: "Welcome to The Skin Firm. We offer a wide range of personalized skincare treatments to help you look and feel your best. Explore our services and book a consultation.",
};

export default function Home() {
  return (
    <HomePage />
  );
}
