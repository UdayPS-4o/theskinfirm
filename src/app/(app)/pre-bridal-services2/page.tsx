"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/layout/max-width";
import { DashedSeparator } from "@/components/sections/dashed-separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PreBridalServicesPage = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all animated sections
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  const packages = [
    {
      title: "6-Month Wedding Glow Plan",
      subtitle: "Ideal for those starting early, this comprehensive program targets long-term skin health.",
      features: [
        "Advanced acne & pigmentation management",
        "Anti-tan and brightening therapies",
        "Hydration & rejuvenation facials",
        "Laser-based hair removal and skin tightening sessions",
        "Hair & body polishing options",
        "Skin boosters",
      ],
    },
    {
      title: "3-Month Radiance Plan",
      subtitle: "Perfect for brides & grooms balancing busy schedules.",
      features: [
        "Corrective treatments for pigmentation, acne, or dullness",
        "Intensive hydration facials & peels",
        "Skin brightening and polishing",
        "Grooming add-ons: beard contour laser, scalp health",
      ],
    },
    {
      title: "1-Month Express Glow Plan",
      subtitle: "A last-minute boost designed for visible results in weeks.",
      features: [
        "Quick brightening facials & exfoliation",
        "IV Hydration & glow-boosting therapies",
        "Pre-event touch-up sessions",
        "Add-ons: skin boosters",
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert-Led Skin Rituals",
      description:
        "Every treatment is thoughtfully curated and overseen by dermatologists, blending medical precision with refined care.",
    },
    {
      title: "Tailored Treatment Timelines",
      description:
        "Personalised plans are crafted around your wedding schedule, skin type, and unique skincare goals to deliver lasting radiance.",
    },
    {
      title: "Advanced Aesthetic Technology",
      description:
        "From medical-grade peels to state-of-the-art lasers and rejuvenation therapies, we offer results that go far beyond surface treatments.",
    },
    {
      title: "Luxury Meets Clinical Excellence",
      description:
        "A serene, spa-like experience paired with proven dermatological outcomes for truly luminous skin.",
    },
    {
      title: "For Brides and Grooms Alike",
      description:
        "Inclusive couple-focused programs ensure both partners share the spotlight with confidence and glow.",
    },
  ];

  const commonConcerns = [
    "Dull and uneven skin tone",
    "Acne, breakouts, and scars",
    "Pigmentation and tanning",
    "Fine lines and loss of radiance",
    "Groom-specific issues: rough texture, razor bumps, uneven beard area, oily skin",
  ];

  const processSteps = [
    {
      title: "Personalised Consultation",
      description: "Comprehensive skin analysis and understanding of your wedding timeline.",
    },
    {
      title: "Custom Treatment Plan",
      description: "Treatment plan aligned with your wedding timeline and skin goals.",
    },
    {
      title: "Scheduled Sessions",
      description: "Sessions spaced for best results and minimal downtime.",
    },
    {
      title: "Pre-Event Glow Therapy",
      description: "Final touch-up treatments for the perfect wedding day glow.",
    },
  ];

  const aftercareGuidelines = [
    "Use prescribed skincare consistently.",
    "Stay hydrated, sleep well, and eat a balanced diet.",
    "Protect skin daily with sunscreen.",
    "Avoid unplanned treatments close to your wedding.",
  ];

  const faqs = [
    {
      question: "When should I begin my wedding skincare plan?",
      answer:
        "We recommend starting 6 months before, but even 1 month can bring visible improvements.",
    },
    {
      question: "Do you offer treatments for grooms too?",
      answer: "Yes, our packages are designed for both brides and grooms.",
    },
    {
      question: "Will my plan be customised?",
      answer:
        "Absolutely, your dermatologist will build a plan around your concerns, lifestyle, and wedding date.",
    },
    {
      question: "What if I have acne or sensitive skin?",
      answer:
        "We have specialised protocols for acne-prone and sensitive skin to ensure safe results.",
    },
    {
      question: "Do treatments have downtime?",
      answer:
        "Most are low-downtime but we still schedule carefully so you're event-ready.",
    },
    {
      question: "Can body care be included in the package?",
      answer: "Yes, we offer body tan removal and laser hair reduction.",
    },
    {
      question: "Do you provide couple packages?",
      answer:
        "Yes, we can design couple plans so both bride and groom enjoy the journey together.",
    },
    {
      question: "What results can I expect?",
      answer:
        "Brighter, more even skin tone, improved texture, reduced blemishes, and a healthy, confident glow.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Design 2: Premium Gradient Card */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/bridal-hero.jpg"
            fill
            alt="Pre-Wedding Glow Services"
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div
              id="hero-left"
              data-animate
              className={`transform transition-all duration-1000 ease-out ${
                isVisible("hero-left")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6">
                    <div className="h-px w-12 bg-[#d4a380]"></div>
                    <span className="text-sm md:text-base text-[#d4a380] uppercase tracking-widest font-semibold">
                      Pre-Wedding Services
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                    Your Wedding Glow,
                    <span className="block text-[#d4a380] mt-2">
                      Perfected at The Skin Firm
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                    Personalised pre-wedding couple treatments to restore, rejuvenate & glow.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#d4a380] text-white px-6 py-3 rounded-full">
                    <span className="text-2xl mr-2">🎉</span>
                    <span className="font-bold text-lg">Upto 30% Off</span>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="group bg-white text-[#1a1a1a] px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#d4a380] hover:text-white transition-all duration-300 shadow-2xl hover:scale-105">
                    Start Your Wedding Journey
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right - Features Card */}
            <div
              id="hero-right"
              data-animate
              className={`transform transition-all duration-1000 delay-300 ease-out ${
                isVisible("hero-right")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
                    Why Choose Us?
                  </h3>
                  <p className="text-gray-600">Your trusted partner for the perfect wedding glow</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group hover:bg-[#d4a380]/5 p-4 rounded-xl transition-all">
                    <div className="w-14 h-14 bg-[#d4a380]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a380] transition-all">
                      <svg className="w-7 h-7 text-[#d4a380] group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Expert Dermatologists</h4>
                      <p className="text-gray-600 text-sm">Treatments by certified specialists</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-[#d4a380]/5 p-4 rounded-xl transition-all">
                    <div className="w-14 h-14 bg-[#d4a380]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a380] transition-all">
                      <svg className="w-7 h-7 text-[#d4a380] group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Couple Packages</h4>
                      <p className="text-gray-600 text-sm">Special plans for bride & groom</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-[#d4a380]/5 p-4 rounded-xl transition-all">
                    <div className="w-14 h-14 bg-[#d4a380]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a380] transition-all">
                      <svg className="w-7 h-7 text-[#d4a380] group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Customized Timeline</h4>
                      <p className="text-gray-600 text-sm">1, 3, or 6-month packages available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-[#d4a380]/5 p-4 rounded-xl transition-all">
                    <div className="w-14 h-14 bg-[#d4a380]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a380] transition-all">
                      <svg className="w-7 h-7 text-[#d4a380] group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Advanced Technology</h4>
                      <p className="text-gray-600 text-sm">State-of-the-art treatments & lasers</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#d4a380]">500+</div>
                      <div className="text-xs text-gray-600">Happy Couples</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#d4a380]">15+</div>
                      <div className="text-xs text-gray-600">Years Exp.</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#d4a380]">100%</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-col gap-8 md:gap-12">
            <div
              id="info-header"
              data-animate
              className={`transform transition-all duration-1000 ease-out ${
                isVisible("info-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2
                className={`text-center text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-6 transform transition-all duration-700 delay-200 ease-out ${
                  isVisible("info-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                For the Bride & Groom Who Want to Glow
              </h2>
              <p
                className={`text-base md:text-lg text-[color:var(--color-dark-text)] text-center transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("info-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                Your wedding day is one of life&apos;s most photographed moments, so your skin should look as radiant as your love story. At The Skin Firm, we design dermatologist-led pre-wedding treatments for both brides and grooms, ensuring you look your most confident and refreshed on your big day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Wedding Packages */}
      <section id="packages" className="py-12 md:py-20 px-4 md:px-8 bg-[color:var(--color-light-background)]">
        <div className="max-w-6xl mx-auto">
          <div
            id="packages-header"
            data-animate
            className={`text-center max-w-[800px] mx-auto mb-12 transform transition-all duration-1000 ease-out ${
              isVisible("packages-header")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold">
              Tailored Wedding Packages
            </h2>
          </div>

          <div
            id="packages-grid"
            data-animate
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border border-[color:var(--color-light-border)] p-6 md:p-8 shadow-lg transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible("packages-grid")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--color-primary-brown)] mb-3">
                  {pkg.title}
                </h3>
                <p className="text-sm md:text-base text-[color:var(--color-light-text)] mb-6">
                  {pkg.subtitle}
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[color:var(--color-primary-brown)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[color:var(--color-primary-brown)]"></div>
                      </div>
                      <span className="text-sm md:text-base text-[color:var(--color-dark-text)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-12 md:gap-20">
            <div
              id="why-choose-header"
              data-animate
              className={`text-center max-w-[700px] mx-auto transform transition-all duration-1000 ease-out ${
                isVisible("why-choose-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h4
                className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                  isVisible("why-choose-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                ---------- Why Choose Us ----------
              </h4>
              <h2
                className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("why-choose-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                Why Choose The Skin Firm for Your Pre-Wedding Journey
              </h2>
              <p
                className={`text-base md:text-lg text-[color:var(--color-light-text)] mt-4 transform transition-all duration-700 delay-400 ease-out ${
                  isVisible("why-choose-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                More than a salon experience.
              </p>
            </div>
            <div
              id="why-choose-grid"
              data-animate
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
            >
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-[10px] border border-[color:var(--color-light-border)] p-4 md:p-6 bg-white flex flex-col gap-3 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
                    isVisible("why-choose-grid")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[color:var(--color-primary-brown)]">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[color:var(--color-dark-text)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Common Concerns */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-[color:var(--color-light-background)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 md:gap-12">
            <div
              id="concerns-header"
              data-animate
              className={`text-center max-w-[800px] mx-auto transform transition-all duration-1000 ease-out ${
                isVisible("concerns-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-8">
                Common Concerns We Address
              </h2>
            </div>
            <div
              id="concerns-grid"
              data-animate
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {commonConcerns.map((concern, index) => (
                <div
                  key={index}
                  className={`rounded-[10px] border border-[color:var(--color-light-border)] p-4 md:p-5 bg-white flex flex-row items-center gap-3 md:gap-4 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
                    isVisible("concerns-grid")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[color:var(--color-primary-brown)]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[color:var(--color-primary-brown)]"></div>
                    </div>
                  </div>
                  <span className="text-sm md:text-base leading-[20px] md:leading-[22px] text-black flex-1 text-center">
                    {concern}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect - Process */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-col gap-12 md:gap-[90px]">
            <div
              id="process-header"
              data-animate
              className={`text-center mx-auto transform transition-all duration-1000 ease-out ${
                isVisible("process-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h4
                className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                  isVisible("process-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                ---------- Process ----------
              </h4>
              <h2
                className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("process-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                What to Expect
              </h2>
            </div>
            <div
              id="process-steps"
              data-animate
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
              {processSteps.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className={`flex items-start gap-4 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg hover:bg-gray-50 rounded-lg p-4 ${
                    isVisible("process-steps")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + stepIndex * 100}ms` }}
                >
                  <div className="w-[50px] h-[50px] rounded-full bg-[color:var(--color-primary-brown)] flex items-center justify-center shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-300">
                    <span className="text-[22px] font-medium text-white">
                      {stepIndex + 1}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-lg font-medium text-black">
                      {step.title}
                    </p>
                    <p className="text-sm leading-5 text-[color:var(--color-dark-text)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Guidelines */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-[color:var(--color-light-background)]">
        <div className="max-w-4xl mx-auto">
          <div
            id="aftercare-header"
            data-animate
            className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
              isVisible("aftercare-header")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h4
              className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                isVisible("aftercare-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              ---------- Post Care ----------
            </h4>
            <h2
              className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                isVisible("aftercare-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Aftercare Guidelines
            </h2>
          </div>
          <div
            id="aftercare-content"
            data-animate
            className={`bg-white border border-[color:var(--color-light-border)] rounded-lg p-6 md:p-8 transform transition-all duration-1000 delay-400 ease-out ${
              isVisible("aftercare-content")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aftercareGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transform transition-all duration-500 ease-out hover:scale-105 ${
                    isVisible("aftercare-content")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                    <img
                      src="/post-care.svg"
                      alt="Post Care"
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-base text-gray-800">{guideline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <MaxWidthWrapper>
          <div className="mx-6 lg:mx-24">
            <div className="mx-auto flex items-center justify-center max-w-xs gap-x-2">
              <DashedSeparator />
              <h3 className="text-[#EC7754] text-3xl font-medium">FAQ</h3>
              <DashedSeparator />
            </div>
            <h2 className="mt-2 text-[#333333] text-3xl lg:text-5xl font-semibold text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq, index) => (
                <AccordionItem
                  value={`${index + 1}`}
                  key={index}
                  className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
                >
                  <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4B5563] text-2xl">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Final CTA */}
      <section
        className="py-12 md:py-20 px-4 md:px-8 bg-cover bg-center mb-12"
        style={{ backgroundColor: "#F8F4EB" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] font-semibold mb-6 text-[color:var(--color-dark-text)]">
            Begin Your Wedding Glow Journey
          </h2>
          <p className="mb-8 text-[color:var(--color-dark-text)] text-lg">
            Whether you&apos;re the bride or the groom, your skin deserves the very best care before your big day. Book your consultation with The Skin Firm today and let us design a personalised glow plan just for you.
          </p>
          <Link href="/contact">
            <button className="rounded-lg px-8 py-4 bg-[#d4a380] text-white font-bold text-lg hover:bg-[#c19970] hover:scale-105 transition-all duration-300 shadow-lg">
              Book Your Consultation →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PreBridalServicesPage;

