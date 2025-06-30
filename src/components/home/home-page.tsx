'use client';

import { About } from "@/components/sections/about";
import { AnimatedComponent } from "@/components/shared/animated-component";
import { BookYourConsultation } from "@/components/shared/book-your-consultation";
import { Cta } from "@/components/shared/cta";
import { Cta2 } from "@/components/shared/cta2";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import CategoriesSection from "@/components/home/categories";
import { Services } from "@/components/sections/services";

import { Specialist } from "@/components/sections/specialist";
import { Stats } from "@/components/sections/stats";
import { SuccessStories } from "@/components/sections/success-stories";
import { WhyChooseUs } from "@/components/sections/why-choose-us";



export default function HomePage() {
  return (
    <div className="w-full">
      <main role="main">
        <section id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>
        <AnimatedComponent><Cta /></AnimatedComponent>
        {/* <AnimatedComponent><PremiumServices /></AnimatedComponent> */}
        <section id="categories" aria-labelledby="categories-heading">
          <AnimatedComponent><CategoriesSection /></AnimatedComponent>
        </section>
        <section id="services" aria-labelledby="services-heading">
          <AnimatedComponent><Services /></AnimatedComponent>
        </section>
        <AnimatedComponent><Specialist /></AnimatedComponent>
        <AnimatedComponent><Stats /></AnimatedComponent>
        <section id="about" aria-labelledby="about-heading">
          <AnimatedComponent><About /></AnimatedComponent>
        </section>
        <section id="stories" aria-labelledby="stories-heading">
          <AnimatedComponent><SuccessStories /></AnimatedComponent>
        </section>
        <AnimatedComponent><WhyChooseUs /></AnimatedComponent>
        <section id="contact" aria-labelledby="contact-heading">
          <AnimatedComponent><BookYourConsultation /></AnimatedComponent>
        </section>
        {/* <section id="news"><AnimatedComponent><News /></AnimatedComponent></section> */}
        {/* <section id="gallery"><AnimatedComponent><Gallery /></AnimatedComponent></section>
        <AnimatedComponent><Stories /></AnimatedComponent> */}
        <AnimatedComponent><Cta2 /></AnimatedComponent>
        <AnimatedComponent><Faq /></AnimatedComponent>
      </main>
      <Footer />
    </div>
  );
}
