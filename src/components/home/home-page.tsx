"use client";

import { About } from "@/components/sections/about";
import { AnimatedComponent } from "@/components/shared/animated-component";
import { Cta } from "@/components/shared/cta";
import { Cta2 } from "@/components/shared/cta2";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/home/hero";
import CategoriesSection from "@/components/home/categories";
import { Services } from "@/components/sections/services";

import { Specialist } from "@/components/sections/specialist";
import { Stats } from "@/components/sections/stats";
import { SuccessStories } from "@/components/sections/success-stories";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { VideoTestimonials } from "@/components/sections/video-yt";
import type { HeroOffer } from "@/payload-types";

interface HomePageProps {
  heroOffer?: HeroOffer | null;
}

export default function HomePage({ heroOffer }: HomePageProps) {
  return (
    <div className="w-full">
      <main role="main">
        <section id="home" aria-labelledby="hero-heading">
          <Hero heroOffer={heroOffer} />
        </section>
        <AnimatedComponent>
          <Cta />
        </AnimatedComponent>
        {/* <AnimatedComponent><PremiumServices /></AnimatedComponent> */}
        <section id="categories" aria-labelledby="categories-heading">
          <AnimatedComponent>
            <CategoriesSection />
          </AnimatedComponent>
        </section>
        <AnimatedComponent>
          <Specialist />
        </AnimatedComponent>
        <AnimatedComponent>
          <Stats />
        </AnimatedComponent>
        <section id="services" aria-labelledby="services-heading">
          <AnimatedComponent>
            <Services />
          </AnimatedComponent>
        </section>
        <section id="about" aria-labelledby="about-heading">
          <AnimatedComponent>
            <About />
          </AnimatedComponent>
        </section>
        <section id="stories" aria-labelledby="stories-heading">
          <AnimatedComponent>
            <SuccessStories />
          </AnimatedComponent>
        </section>
        <AnimatedComponent>
          <WhyChooseUs />
        </AnimatedComponent>
        <AnimatedComponent>
          <Cta2 />
        </AnimatedComponent>
        <AnimatedComponent>
          <VideoTestimonials />
        </AnimatedComponent>
        <AnimatedComponent>
          <Faq />
        </AnimatedComponent>
      </main>
    </div>
  );
}
