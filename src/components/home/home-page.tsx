'use client';

import { About } from "@/components/sections/about";
import { AnimatedComponent } from "@/components/shared/animated-component";
import { BookYourConsultation } from "@/components/shared/book-your-consultation";
import { Cta } from "@/components/shared/cta";
import { Cta2 } from "@/components/shared/cta2";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { News } from "@/components/sections/news";
import { PremiumServices } from "@/components/sections/premium-services";
import { Services } from "@/components/sections/services";
import { ServicesDetailed } from "@/components/sections/services-detailed";
import { Specialist } from "@/components/sections/specialist";
import { Stats } from "@/components/sections/stats";
import { SuccessStories } from "@/components/sections/success-stories";
import { WhyChooseUs } from "@/components/sections/why-choose-us";



export default function HomePage() {
  return (
    <div className="w-full">
      <section id="home">
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
      {/* <section id="gallery">
        <AnimatedComponent>
          <Gallery />
        </AnimatedComponent>
      </section>
      <AnimatedComponent>
        <Stories />
      </AnimatedComponent> */}
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
