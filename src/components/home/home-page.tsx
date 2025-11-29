"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/hero-section";
import { LenisScrollProvider } from "@/components/shared/lenis-scroll-provider";
import type { HeroOffer } from "@/payload-types";

// Lazy load all below-the-fold sections for better FCP/LCP
const Section3Home2 = dynamic(() => import("@/components/home2/section3").then(mod => ({ default: mod.Section3Home2 })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const Section3Point5Home2 = dynamic(() => import("@/components/home2/section3-5").then(mod => ({ default: mod.Section3Point5Home2 })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const Section4Home2 = dynamic(() => import("@/components/home2/section4").then(mod => ({ default: mod.Section4Home2 })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const Section5Home2 = dynamic(() => import("@/components/home2/section5").then(mod => ({ default: mod.Section5Home2 })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const Section6Home2 = dynamic(() => import("@/components/home2/section6").then(mod => ({ default: mod.Section6Home2 })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const Section7Home2 = dynamic(() => import("@/components/home2/section7").then(mod => ({ default: mod.Section7Home2 })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const Section9Home2 = dynamic(() => import("@/components/home2/section9").then(mod => ({ default: mod.Section9Home2 })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const Section10Home2 = dynamic(() => import("@/components/home2/section10").then(mod => ({ default: mod.Section10Home2 })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const VideoTestimonials = dynamic(() => import("@/components/sections/video-yt").then(mod => ({ default: mod.VideoTestimonials })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false // Videos don't need SSR
});

const Cta2 = dynamic(() => import("@/components/shared/cta2").then(mod => ({ default: mod.Cta2 })), {
  loading: () => <div className="min-h-[200px]" />,
  ssr: true
});

const Faq = dynamic(() => import("@/components/sections/faq").then(mod => ({ default: mod.Faq })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const AnimatedComponent = dynamic(() => import("@/components/shared/animated-component").then(mod => ({ default: mod.AnimatedComponent })), {
  ssr: true
});

const SectionDivider = dynamic(() => import("@/components/shared/section-divider").then(mod => ({ default: mod.SectionDivider })), {
  ssr: true
});

const OffersSection = dynamic(() => import("@/components/home2/offers-section").then(mod => ({ default: mod.OffersSection })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

interface HomePageProps {
  heroOffer?: HeroOffer | null;
}

export default function HomePage({ heroOffer }: HomePageProps) {
  return (
    <LenisScrollProvider>
      <div className="w-full">
        <main role="main">
          {/* Hero Section - Load immediately for best FCP/LCP */}
          <section id="hero">
            <HeroSection />
          </section>

          {/* All below-the-fold sections are lazy loaded */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            {/* Section backgrounds should NOT animate, only content within */}
            <AnimatedComponent animateWrapper={false}>
              <Section3Home2 />
            </AnimatedComponent>

            <SectionDivider fromColor="#FFFBF7" toColor="#FDFBF7" height="60px" />

            {/* Exclusive Offers Section */}
            <AnimatedComponent animateWrapper={false}>
              <OffersSection />
            </AnimatedComponent>

            <SectionDivider fromColor="#FDFBF7" toColor="#F8F4EB" height="60px" />

            {/* What Makes The Skin Firm Exceptional */}
            <AnimatedComponent animateWrapper={false}>
              <Section3Point5Home2 />
            </AnimatedComponent>

            {/* Section3 and Section4 have same BG */}
            <AnimatedComponent animateWrapper={false}>
              <Section4Home2 />
            </AnimatedComponent>

            {/* Section4 and Section5 have same BG */}
            <AnimatedComponent animateWrapper={false}>
              <Section5Home2 />
            </AnimatedComponent>

            <SectionDivider fromColor="#F8F4EB" toColor="#F8F4EB" height="60px" />

            <AnimatedComponent animateWrapper={false}>
              <Section6Home2 />
            </AnimatedComponent>

            <SectionDivider fromColor="#F8F4EB" toColor="#FFFFFF" height="60px" />

            <AnimatedComponent animateWrapper={false}>
              <Section7Home2 />
            </AnimatedComponent>

            <SectionDivider fromColor="#FFFFFF" toColor="#FFFFFF" height="60px" />

            <AnimatedComponent animateWrapper={false}>
              <Section9Home2 />
            </AnimatedComponent>

            <SectionDivider fromColor="#FFFFFF" toColor="#F8F4EB" height="60px" />

            {/* Before & After Gallery */}
            <AnimatedComponent animateWrapper={false}>
              <Section10Home2 />
            </AnimatedComponent>

            <SectionDivider fromColor="#F8F4EB" toColor="#FFFFFF" height="60px" />

            {/* Video Testimonials */}
            <AnimatedComponent animateWrapper={false}>
              <VideoTestimonials />
            </AnimatedComponent>

            <AnimatedComponent animateWrapper={false}>
              <Cta2 />
            </AnimatedComponent>

            <AnimatedComponent animateWrapper={false}>
              <Faq />
            </AnimatedComponent>
          </Suspense>
        </main>
      </div>
    </LenisScrollProvider>
  );
}

