'use client';

import { About } from "@/components/about";
import { AnimatedComponent } from "@/components/animated-component";
import { BookYourConsultation } from "@/components/book-your-consultation";
import { Cta } from "@/components/cta";
import { Cta2 } from "@/components/cta2";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { News } from "@/components/news";
import { PremiumServices } from "@/components/premium-services";
import { Services } from "@/components/services";
import { Specialist } from "@/components/specialist";
import { Stats } from "@/components/stats";
import { Stories } from "@/components/stories";
import { SuccessStories } from "@/components/success-stories";
import { WhyChooseUs } from "@/components/why-choose-us";



export default function HomePage() {
  return (
    <div className="w-full">
      <section id="home">
        <Navbar />
        <Hero />
      </section>

      <AnimatedComponent>
        <Cta />
      </AnimatedComponent>
      <AnimatedComponent>
        <PremiumServices />
      </AnimatedComponent>
      <section id="services">
        <AnimatedComponent>
          <Services />
        </AnimatedComponent>
      </section>
      <AnimatedComponent>
        <Specialist />
      </AnimatedComponent>
      <AnimatedComponent>
        <Stats />
      </AnimatedComponent>
      <section id="about">
        <AnimatedComponent>
          <About />
        </AnimatedComponent>
      </section>
      <section id="stories">
        <AnimatedComponent>
          <SuccessStories />
        </AnimatedComponent>
      </section>
      <AnimatedComponent>
        <WhyChooseUs />
      </AnimatedComponent>
      <section id="contact">
        <AnimatedComponent>
          <BookYourConsultation />
        </AnimatedComponent>
      </section>
      <section id="news">
        <AnimatedComponent>
          <News />
        </AnimatedComponent>
      </section>
      <section id="gallery">
        <AnimatedComponent>
          <Gallery />
        </AnimatedComponent>
      </section>
      <AnimatedComponent>
        <Stories />
      </AnimatedComponent>
      <AnimatedComponent>
        <Cta2 />
      </AnimatedComponent>
      <AnimatedComponent>
        <Faq />
      </AnimatedComponent>
      <Footer />
    </div>
  );
} 