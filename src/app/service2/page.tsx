'use client';
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { useState } from "react";
import {ServiceCardModern} from "@/components/ServiceCardModern";

type ServiceTab = {
  label: string;
  key: string;
};

const SERVICES_TABS: ServiceTab[] = [
  {
    label: "Skin Services",
    key: "skin",
  },
  {
    label: "Hair Services",
    key: "hair",
  },
  {
    label: "Laser Services",
    key: "laser",
  },
] as const;

type TabKey = typeof SERVICES_TABS[number]["key"];

type ServiceCard = {
  image: string;
  title: string;
  treatments: string[];
};

const SERVICES_CARDS: Record<TabKey, ServiceCard[]> = {
  skin: [
    {
      image: "/mesotherapy.png",
      title: "PIGMENTATION",
      treatments: ["Chemical Peels", "Laser Toning", "Microdermabrasion"],
    },
    {
      image: "/prp.png",
      title: "ACNE SCARS",
      treatments: ["Microneedling", "PRP Therapy", "Subcision"],
    },
    {
      image: "/about.png",
      title: "ANTI-AGING",
      treatments: ["Botox", "Fillers", "Thread Lift"],
    },
    {
      image: "/botox.png",
      title: "DARK CIRCLES",
      treatments: ["Laser", "Fillers", "Topical Creams"],
    },
    {
      image: "/after-treatment.png",
      title: "OPEN PORES",
      treatments: ["Laser Resurfacing", "Peels", "Microneedling"],
    },
  ],
  hair: [
    {
      image: "/prp.png",
      title: "HAIR LOSS",
      treatments: ["PRP Therapy", "Mesotherapy", "Hair Transplant"],
    },
    {
      image: "/about.png",
      title: "DANDRUFF",
      treatments: ["Medicated Shampoos", "Topical Solutions", "Oral Medications"],
    },
    {
      image: "/mesotherapy.png",
      title: "ALOPECIA",
      treatments: ["Steroid Injections", "PRP", "Minoxidil"],
    },
    {
      image: "/botox.png",
      title: "HAIR THINNING",
      treatments: ["Nutritional Therapy", "Low Level Laser", "PRP"],
    },
    {
      image: "/after-treatment.png",
      title: "SCALP INFECTIONS",
      treatments: ["Antifungal Treatment", "Antibiotics", "Topical Solutions"],
    },
  ],
  laser: [
    {
      image: "/laser.png",
      title: "LASER HAIR REMOVAL",
      treatments: ["Face", "Arms", "Legs"],
    },
    {
      image: "/laser.png",
      title: "TATTOO REMOVAL",
      treatments: ["Q-Switched Laser", "Multiple Sessions"],
    },
    {
      image: "/laser.png",
      title: "PIGMENT REMOVAL",
      treatments: ["Laser Toning", "Spot Treatment"],
    },
    {
      image: "/laser.png",
      title: "SKIN REJUVENATION",
      treatments: ["Laser Resurfacing", "Fractional CO2"],
    },
    {
      image: "/laser.png",
      title: "VASCULAR LESIONS",
      treatments: ["Laser Therapy", "IPL"],
    },
  ],
};

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("skin");

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f8eee7] overflow-x-hidden">
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-[#f8eee7]">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-10 md:py-16 flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-20">
            {/* Left Side (Text) */}
            <div className="flex-1 w-full text-center md:text-left">
              <div className="uppercase text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-[#b76c6c] tracking-widest">services</div>
              <h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2d1c10] leading-tight mb-3 sm:mb-6">
                Our Advanced Skin & Hair Treatments
              </h1>
              <p className="text-sm sm:text-lg text-gray-500 mb-5 sm:mb-8 max-w-xs sm:max-w-xl mx-auto md:mx-0">
                Discover premium solutions for glowing skin, healthy hair, and a confident you.
              </p>
              <button
                className="rounded-full bg-[#d19b7d] text-white px-5 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-sm hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-[#d19b7d]/50"
                aria-label="Read more about our services"
              >
                Read more
              </button>
            </div>
            {/* Right Side (Image) */}
            <div className="flex-1 w-full flex justify-center items-center mb-4 md:mb-0">
              <div className="rounded-xl sm:rounded-3xl overflow-hidden bg-[#f3e0d3] p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center w-full max-w-[260px] sm:max-w-sm md:max-w-md">
                <Image
                  src="/hero-graphic-2.png"
                  alt="Woman gently touching her face"
                  width={260}
                  height={320}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white w-full py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Section Title */}
            <div className="flex flex-col gap-2 sm:gap-3 items-center w-full max-w-2xl mx-auto mb-8 sm:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-tight text-center text-[#ec7754]">
                <span className="text-[#ec7754] font-medium">---------- Our Services ----------</span>
              </h3>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-tight text-[#333333] text-center">
                <span className="text-[#333333] font-semibold">What Services We Offer</span>
              </h1>
            </div>

            {/* Tabs Navigation */}
            <div className="flex w-full mx-auto mb-6 sm:mb-8 md:mb-10 border-b border-[#e5d3c2]">
              {/* Skin Services Tab */}
              <div
                className={`flex flex-col gap-3 sm:gap-4 md:gap-6 items-center flex-1 relative w-full cursor-pointer min-w-0 ${activeTab === 'skin' ? 'pb-0' : 'pb-3 sm:pb-4'}`}
                onClick={() => setActiveTab('skin')}
              >
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center text-[#8a7b70] px-2">
                  <span className={`text-[#8a7b70] whitespace-nowrap ${activeTab === 'skin' ? 'font-semibold' : 'font-normal'}`}>Skin Services</span>
                </h4>
                {activeTab === 'skin' && (
                  <div className="rounded-t-[10px] rounded-b-none w-full h-1 bg-[#d4a380]"></div>
                )}
              </div>
              {/* Hair Services Tab */}
              <div
                className={`flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full cursor-pointer min-w-0 ${activeTab === 'hair' ? 'pb-0' : 'pb-3 sm:pb-4'}`}
                onClick={() => setActiveTab('hair')}
              >
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center text-[#8a7b70] px-2">
                  <span className={`text-[#8a7b70] whitespace-nowrap ${activeTab === 'hair' ? 'font-semibold' : 'font-normal'}`}>Hair Services</span>
                </h4>
                {activeTab === 'hair' && (
                  <div className="rounded-t-[10px] rounded-b-none w-full h-1 bg-[#d4a380]"></div>
                )}
              </div>
              {/* Laser Services Tab */}
              <div
                className={`flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full cursor-pointer min-w-0 ${activeTab === 'laser' ? 'pb-0' : 'pb-3 sm:pb-4'}`}
                onClick={() => setActiveTab('laser')}
              >
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center text-[#8a7b70] px-2">
                  <span className={`text-[#8a7b70] whitespace-nowrap ${activeTab === 'laser' ? 'font-semibold' : 'font-normal'}`}>Laser Services</span>
                </h4>
                {activeTab === 'laser' && (
                  <div className="rounded-t-[10px] rounded-b-none w-full h-1 bg-[#d4a380]"></div>
                )}
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
              {SERVICES_CARDS[activeTab].map((card: ServiceCard, idx: number) => (
                <ServiceCardModern
                  key={card.title + idx}
                  image={card.image}
                  title={card.title}
                  services={card.treatments}
                  link="#"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}