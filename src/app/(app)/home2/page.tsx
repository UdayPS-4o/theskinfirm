"use client";

import React from "react";
import { Design6 as Hero } from "@/components/test-hero/design-6";
import { Section3Home2 } from "@/components/home2/section3";
import { Section4Home2 } from "@/components/home2/section4";
import { Section5Home2 } from "@/components/home2/section5";
import { Section6Home2 } from "@/components/home2/section6";
import { Section7Home2 } from "@/components/home2/section7";
import { Section9Home2 } from "@/components/home2/section9";
import { Section10Home2 } from "@/components/home2/section10";
import { VideoTestimonials } from "@/components/sections/video-yt";
import { Cta2 } from "@/components/shared/cta2";
import { Faq } from "@/components/sections/faq";
import { AnimatedComponent } from "@/components/shared/animated-component";
import { SectionDivider } from "@/components/shared/section-divider";
import { LenisScrollProvider } from "@/components/shared/lenis-scroll-provider";

export default function Home2Page() {
    return (
        <LenisScrollProvider>
            <div className="w-full">
                <main role="main">
                    <section id="hero">
                        <Hero />
                    </section>

                    {/* Section backgrounds should NOT animate, only content within */}
                    <AnimatedComponent animateWrapper={false}>
                        <Section3Home2 />
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
                </main>
            </div>
        </LenisScrollProvider>
    );
}

