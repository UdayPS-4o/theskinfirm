"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { DashedSeparator } from "@/components/sections/dashed-separator";
import { MaxWidthWrapper } from "@/components/layout/max-width";
import ReactMarkdown from 'react-markdown';

interface Service {
  title: string;
  slug: string;
  content: string;
}

interface ServicePageProps {
  service: Service;
}

const ServicePage = ({ service }: ServicePageProps) => {
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

  // Helper function to extract section content from markdown
  const getSectionContent = (sectionTitle: string, content: string) => {
    const regex = new RegExp(`(?:#|##|###|####)\\s*${sectionTitle.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}[\\s\\S]*?\\n([\\s\\S]*?)(?=\\n(?:#|##|###|####)|$)`, 'i');
    const match = content.match(regex);
    return match ? match[1].trim() : '';
  };

  const getFaqs = (content: string) => {
    const faqSection = getSectionContent("FAQs on", content);
    if (!faqSection) return [];
    const faqs = faqSection.split('').map(faq => faq.trim()).filter(faq => faq);
    return faqs.map(faq => {
        const parts = faq.split('\n');
        return {
            question: parts[0],
            answer: parts.slice(1).join('\n')
        }
    })
  }

  const heroContent = getSectionContent("Hero Section", service.content);
  const whatIsContent = getSectionContent("What Is", service.content);
  const faqs = getFaqs(service.content);
  const metaTitle = service.content.match(/Meta Title.*?\n(.*?)\n/)?.[1] || service.title;
  const metaDescription = service.content.match(/Meta Description.*?\n(.*?)\n/)?.[1] || "Read more about " + service.title;
  const keywords = service.content.match(/Keywords\n([\s\S]*?)(?=\n\n|##)/)?.[1] || "";


  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords.replace(//g, '').replace(/\n/g, ', ')} />
        <meta name="author" content="The Skin Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://theskinfirm.com/services/${service.slug}`} />
        <meta property="og:image" content="https://theskinfirm.com/TSF-Hero-Section.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://theskinfirm.com/TSF-Hero-Section.png" />
        <link rel="canonical" href={`https://theskinfirm.com/services/${service.slug}`} />
      </Head>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[color:var(--color-light-background)]">
        <div className="flex flex-col xl:flex-row min-h-[500px] xl:min-h-[600px]">
          {/* Left Content */}
          <div className="flex items-center justify-center xl:w-1/2 px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-20">
            <div
              id="hero-left"
              data-animate
              className={`flex flex-col gap-6 md:gap-8 xl:gap-[50px] w-full max-w-[511px] transform transition-all duration-1000 ease-out ${
                isVisible("hero-left")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-2.5">
                <small
                  className={`text-sm leading-[17px] uppercase text-[#b76e79] font-semibold transform transition-all duration-700 delay-200 ease-out ${
                    isVisible("hero-left")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  {service.title}
                </small>
                <div className="flex flex-col gap-1">
                  <ReactMarkdown className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] leading-tight xl:leading-[50px] tracking-[-0.01em] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                    isVisible("hero-left")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}>{heroContent.split('\n')[0]}</ReactMarkdown>
                </div>
                <ReactMarkdown
                  className={`text-base sm:text-lg md:text-xl xl:text-[21px] leading-relaxed xl:leading-[25px] text-[color:var(--color-dark-text)]/80 transform transition-all duration-700 delay-400 ease-out ${
                    isVisible("hero-left")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  {heroContent.split('\n').slice(1).join('\n')}
                </ReactMarkdown>
              </div>
              <div
                className={`flex flex-col sm:flex-row gap-3 md:gap-5 transform transition-all duration-700 delay-500 ease-out ${
                  isVisible("hero-left")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <Link href="/contact">
                  <button className="w-full sm:w-auto rounded-lg px-4 md:px-[22px] py-3 md:py-[15px] bg-[#d4a380] text-white font-medium text-base md:text-lg flex items-center justify-center gap-2 hover:bg-[#c19970] hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    Book Consultation
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="w-full sm:w-auto rounded-lg border border-[color:var(--color-primary-brown)] px-4 md:px-[22px] py-3 md:py-[15px] bg-white text-[color:var(--color-dark-text)] font-medium text-base md:text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Full Edge-to-Edge */}
          <div
            id="hero-right"
            data-animate
            className={`relative xl:w-1/2 min-h-[400px] xl:min-h-full transform transition-all duration-1000 delay-300 ease-out ${
              isVisible("hero-right")
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <Image
              src={"/TSF-Hero-Section.png"}
              fill
              alt={`${service.title} Collage`}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-light-background)] via-[color:var(--color-light-background)]/80 via-20% to-transparent to-40% pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 md:gap-12">
            <div
              id="what-is-acne-header"
              data-animate
              className={`text-center max-w-[800px] mx-auto transform transition-all duration-1000 ease-out ${
                isVisible("what-is-acne-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
                <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-6">What is {service.title}?</h2>
                <ReactMarkdown
                    className={`text-base md:text-lg leading-relaxed text-[color:var(--color-dark-text)]`}
                >{whatIsContent}</ReactMarkdown>
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
              FAQs on {service.title}
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq, index) => (
                <AccordionItem value={`${index + 1}`} key={index} className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg">
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
      </div>
    </>
  );
};

export default ServicePage;
