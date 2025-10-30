"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Service, ServiceCategory } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { MaxWidthWrapper } from "@/components/layout/max-width";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";

interface AnimatedServicePageProps {
  serviceData: Service & {
    category: ServiceCategory;
  };
}

const AnimatedServicePage = ({ serviceData }: AnimatedServicePageProps) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Standardized section title component
  const SectionTitle = ({
    data,
    className = "",
    isVisible = true,
    delay = "300",
  }: {
    data: any;
    className?: string;
    isVisible?: boolean;
    delay?: string;
  }) => (
    <div
      className={`text-3xl sm:text-4xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <RichText data={data} />
    </div>
  );

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

  const whyChooseUsSection = (
    <section className="py-6 md:py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          <div
            id="clinic-header"
            data-animate
            className={`text-center mx-auto transform transition-all duration-1000 ease-out ${
              isVisible("clinic-header")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                isVisible("clinic-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              {"Why The Skin Firm is Pune's Trusted Clinic"}
            </h2>
          </div>
          <div
            id="clinic-features"
            data-animate
            className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-6 md:gap-8"
          >
            {[
              {
                title: "Dermatologist-Led Expertise",
                text: "Dr. Karishma Singh, Skin Specialist",
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="w-8 h-8 md:w-10 md:h-10"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="12"
                      fill="var(--color-primary-brown)"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M20 12C16.686 12 14 14.686 14 18S16.686 24 20 24S26 21.314 26 18S23.314 12 20 12ZM20 22C17.794 22 16 20.206 16 18S17.794 14 20 14S24 15.794 24 18S22.206 22 20 22Z"
                      fill="var(--color-primary-brown)"
                    />
                    <path
                      d="M28 28C28 24.691 25.309 22 22 22H18C14.691 22 12 24.691 12 28V30H14V28C14 25.794 15.794 24 18 24H22C24.206 24 26 25.794 26 28V30H28V28Z"
                      fill="var(--color-primary-brown)"
                    />
                  </svg>
                ),
              },
              {
                title: "Personalised Treatment Plans",
                text: "no one-size-fits-all",
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="w-8 h-8 md:w-10 md:h-10"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="12"
                      fill="var(--color-primary-brown)"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M16 14H24V16H16V14ZM16 18H28V20H16V18ZM16 22H28V24H16V22ZM16 26H24V28H16V26Z"
                      fill="var(--color-primary-brown)"
                    />
                    <path
                      d="M12 10V30C12 31.1 12.9 32 14 32H26C27.1 32 28 31.1 28 30V10C28 8.9 27.1 8 26 8H14C12.9 8 12 8.9 12 10ZM14 10H26V30H14V10Z"
                      fill="var(--color-primary-brown)"
                    />
                  </svg>
                ),
              },
              {
                title: "Advanced Technology",
                text: "medical-grade, safe & effective",
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="w-8 h-8 md:w-10 md:h-10"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="12"
                      fill="var(--color-primary-brown)"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M20 8L22.09 13.26L28 12L26.91 17.74L32 20L26.91 22.26L28 28L22.09 26.74L20 32L17.91 26.74L12 28L13.09 22.26L8 20L13.09 17.74L12 12L17.91 13.26L20 8Z"
                      fill="var(--color-primary-brown)"
                    />
                  </svg>
                ),
              },
              {
                title: "Proven Track Record",
                text: "thousands of happy patients",
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="w-8 h-8 md:w-10 md:h-10"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="12"
                      fill="var(--color-primary-brown)"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M29 18H27C27 13.589 23.411 10 19 10S11 13.589 11 18H9C9 12.486 13.486 8 19 8S29 12.486 29 18Z"
                      fill="var(--color-primary-brown)"
                    />
                    <path
                      d="M15.293 18.707L17 20.414L22.707 14.707L24.121 16.121L17 23.242L13.879 20.121L15.293 18.707Z"
                      fill="var(--color-primary-brown)"
                    />
                    <path
                      d="M19 22C22.866 22 26 25.134 26 29V31H12V29C12 25.134 15.134 22 19 22ZM19 24C16.243 24 14 26.243 14 29H24C24 26.243 21.757 24 19 24Z"
                      fill="var(--color-primary-brown)"
                    />
                  </svg>
                ),
              },
              {
                title: "Safety First",
                text: "evidence-based, dermatologist-approved care",
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="w-8 h-8 md:w-10 md:h-10"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="12"
                      fill="var(--color-primary-brown)"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M20 8L26 12V22C26 26.418 23.314 30.347 19.5 31.5C15.686 30.347 13 26.418 13 22V12L20 8ZM20 10.273L15 13.454V22C15 25.283 16.885 28.22 19.5 29.135C22.115 28.22 24 25.283 24 22V13.454L20 10.273Z"
                      fill="var(--color-primary-brown)"
                    />
                    <path
                      d="M18.293 19.707L19 20.414L22.707 16.707L24.121 18.121L19 23.242L16.879 21.121L18.293 19.707Z"
                      fill="var(--color-primary-brown)"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group rounded-xl border border-[color:var(--color-light-border)] p-6 md:p-8 bg-white shadow-lg transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:border-[color:var(--color-primary-brown)] lg:w-[calc(33.333%-1.333rem)] ${
                  isVisible("clinic-features")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                  <div className="transform transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h6 className="text-xl md:text-2xl font-semibold text-[color:var(--color-dark-text)] leading-tight">
                      {item.title}
                    </h6>
                    <p className="text-base md:text-lg text-[color:var(--color-light-text)] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const hasTestimonials = serviceData.sections?.some(
    (section) => section.blockType === "testimonials"
  );
  const bookConsultation = serviceData.sections?.find(
    (service) => service.blockType === "book-consultation"
  );

  return (
    <div className="min-h-screen">
      {serviceData.sections?.map((section, index) => {
        switch (section.blockType) {
          case "hero":
            return (
              <section
                key={section.blockType + index}
                className="relative bg-[color:var(--color-light-background)] overflow-hidden"
              >
                <div className="flex flex-col xl:flex-row min-h-[500px] xl:min-h-[600px]">
                  {/* Left Content */}
                  <div className="relative z-10 flex items-center justify-center xl:w-1/2 px-4 md:px-8 lg:px-[50px] py-8 md:py-10">
                    <div
                      id="hero-left"
                      data-animate
                      className={`flex flex-col gap-4 md:gap-6 w-full transform transition-all duration-1000 ease-out ${
                        isVisible("hero-left")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-2.5">
                        <small
                          className={`text-base sm:text-lg leading-[17px] uppercase text-[#b76e79] font-semibold transform transition-all duration-700 delay-200 ease-out ${
                            isVisible("hero-left")
                              ? "translate-y-0 opacity-100"
                              : "translate-y-5 opacity-0"
                          }`}
                        >
                          {serviceData.category.name}
                        </small>
                        <div className="flex flex-col rich-text">
                          <RichText
                            data={section.title}
                            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[50px] leading-tight xl:leading-[50px] tracking-[-0.01em] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                              isVisible("hero-left")
                                ? "translate-y-0 opacity-100"
                                : "translate-y-5 opacity-0"
                            }`}
                          />
                        </div>
                        <RichText
                          className={`text-lg sm:text-xl md:text-2xl xl:text-[21px] leading-relaxed xl:leading-[25px] text-[color:var(--color-dark-text)]/80 transform transition-all duration-700 delay-400 ease-out ${
                            isVisible("hero-left")
                              ? "translate-y-0 opacity-100"
                              : "translate-y-5 opacity-0"
                          }`}
                          data={section.description}
                        />
                      </div>
                      <div
                        className={`flex flex-col sm:flex-row gap-3 md:gap-5 transform transition-all duration-700 delay-500 ease-out ${
                          isVisible("hero-left")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        <Link href="/contact">
                          <button className="w-full sm:w-auto rounded-lg px-4 md:px-[22px] py-3 md:py-[15px] bg-[#d4a380] text-white font-medium text-lg md:text-xl flex items-center justify-center gap-2 hover:bg-[#c19970] hover:scale-105 transition-all duration-300 hover:shadow-lg">
                            Book Your {serviceData.title} Today
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        </Link>
                        {/* <Link href="/services">
                          <button className="w-full sm:w-auto rounded-lg border border-[color:var(--color-primary-brown)] px-4 md:px-[22px] py-3 md:py-[15px] bg-white text-[color:var(--color-dark-text)] font-medium text-base md:text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                            Explore Services
                          </button>
                        </Link> */}
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
                      src={
                        typeof section.image !== "string" &&
                        typeof section.image?.url === "string"
                          ? section.image?.url
                          : "/TSF-Hero-Section.png"
                      }
                      fill
                      alt={"Acne Treatment Collage"}
                      className="object-cover"
                    />
                    {/* Left edge blur/fade overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-light-background)] via-[color:var(--color:var(--color-light-background)]/80 via-20% to-transparent to-40% pointer-events-none"></div>
                  </div>
                </div>
              </section>
            );
          case "info":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8"
              >
                <div className="w-full md:w-4/5 mx-auto">
                  <div className="flex flex-col gap-6">
                    <div
                      id={`info-header-${index}`}
                      data-animate
                      className={`transform transition-all duration-1000 ease-out ${
                        isVisible(`info-header-${index}`)
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <SectionTitle
                        data={section.title}
                        className="text-center mb-4"
                        isVisible={isVisible(`info-header-${index}`)}
                        delay="200"
                      />
                      <div
                        className={`text-lg md:text-xl text-[color:var(--color-dark-text)] whitespace-pre-line transform transition-all duration-700 delay-300 ease-out ${
                          isVisible(`info-header-${index}`)
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        <RichText
                          className="prose max-w-none prose-p:my-0 prose-ul:my-0 prose-li:my-0"
                          data={section.description}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          case "bullet-points":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8 bg-[color:var(--color-light-background)]"
              >
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col gap-6">
                    <div
                      id="symptoms-header"
                      data-animate
                      className={`text-center mx-auto transform transition-all duration-1000 ease-out ${
                        isVisible("symptoms-header")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <SectionTitle
                        data={section.title}
                        isVisible={isVisible("symptoms-header")}
                      />
                    </div>
                    <div
                      id="symptoms-grid"
                      data-animate
                      className="flex flex-wrap justify-center gap-4"
                    >
                      {section.items.map(
                        (symptom, index) =>
                          symptom.content && (
                            <div
                              key={index}
                              className={`w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-[10px] border border-[color:var(--color-light-border)] p-4 md:p-5 bg-white flex flex-row items-center gap-3 md:gap-4 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
                                isVisible("symptoms-grid")
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-10 opacity-0"
                              }`}
                              style={{
                                transitionDelay: `${300 + index * 100}ms`,
                              }}
                            >
                              <div className="flex-shrink-0">
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[color:var(--color-primary-brown)]/20 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-[color:var(--color-primary-brown)]"></div>
                                </div>
                              </div>

                              <RichText
                                className="text-base md:text-lg leading-[22px] md:leading-[24px] text-black flex-1"
                                data={symptom.content}
                              />
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          case "about":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8"
              >
                <MaxWidthWrapper>
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
                    <div className="rounded-xl w-full lg:w-[470px] h-[280px] lg:h-[360px] overflow-hidden hover:shadow-xl transition-all duration-1000 ease-out">
                      {typeof section.image !== "number" && (
                        <img
                          id="about-image"
                          data-animate
                          src={
                            (typeof section.image !== "string" &&
                              section.image?.url) ||
                            "/placeholder.svg"
                          }
                          alt={serviceData.title}
                          className={`w-full h-full object-cover transform transition-all duration-1000 ease-out hover:scale-105 ${
                            isVisible("about-image")
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-10 opacity-0"
                          }`}
                        />
                      )}
                    </div>
                    <div
                      id="about-content"
                      data-animate
                      className={`prose flex flex-col w-full lg:w-[500px] transform transition-all duration-1000 delay-200 ease-out ${
                        isVisible("about-content")
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                    >
                      <RichText
                        className={`[&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:text-[color:var(--color-primary-brown)] [&>h2]:font-semibold transform transition-all duration-700 delay-300 ease-out ${
                          isVisible("about-content")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                        data={section.title}
                      />
                      <RichText data={section.description} />
                    </div>
                  </div>
                </MaxWidthWrapper>
              </section>
            );
          case "process":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8"
              >
                <div className="w-full md:w-4/5 mx-auto">
                  <div className="flex flex-col gap-6">
                    <div
                      id={`process-header-${index}`}
                      data-animate
                      className={`text-center mx-auto transform transition-all duration-1000 ease-out ${
                        isVisible(`process-header-${index}`)
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {/* <h4
                        className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                          isVisible(`process-header-${index}`)
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        ---------- Process ----------
                      </h4> */}
                      <SectionTitle
                        data={section.title}
                        isVisible={isVisible(`process-header-${index}`)}
                      />
                    </div>
                    <div
                      id={`process-steps-${index}`}
                      data-animate
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {section.items.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className={`flex items-start gap-3 sm:gap-4 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg hover:bg-gray-50 rounded-lg p-3 sm:p-4 ${
                            isVisible(`process-steps-${index}`)
                              ? "translate-y-0 opacity-100"
                              : "translate-y-10 opacity-0"
                          }`}
                          style={{
                            transitionDelay: `${400 + stepIndex * 100}ms`,
                          }}
                        >
                          <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-[color:var(--color-primary-brown)] flex items-center justify-center shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-300">
                            <span className="text-xl sm:text-[24px] font-medium text-white">
                              {stepIndex + 1}
                            </span>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-3">
                            <p className="text-lg sm:text-xl font-medium text-black">
                              {step.title}
                            </p>
                            <RichText
                              className="text-base leading-6 text-[color:var(--color-dark-text)]"
                              data={step.description}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          case "treatments":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8 bg-[color:var(--color-light-background)]"
              >
                <div className="max-w-6xl mx-auto text-center">
                  <SectionTitle data={section.title} className="mb-6" />
                  <div className="flex flex-wrap justify-center gap-4">
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className="group p-6 md:p-7 rounded-xl border border-[color:var(--color-light-border)] bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                      >
                        <p className="text-lg md:text-xl font-semibold text-black">
                          {item.title}
                        </p>
                        <RichText
                          className="text-sm md:text-base text-[color:var(--color-light-text)] mt-1"
                          data={item.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "before-after":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8 bg-[color:var(--color-light-background)]"
              >
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col gap-6">
                    <div
                      id="transformations-header"
                      data-animate
                      className={`text-center max-w-[700px] mx-auto transform transition-all duration-1000 ease-out ${
                        isVisible("transformations-header")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {/* <h4
                        className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                          isVisible("transformations-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        ---------- Results ----------
                      </h4> */}
                      <SectionTitle
                        data={section.title}
                        className="mb-4"
                        isVisible={isVisible("transformations-header")}
                      />
                      <RichText
                        className={`text-base md:text-lg text-[color:var(--color-light-text)] leading-relaxed transform transition-all duration-700 delay-400 ease-out ${
                          isVisible("transformations-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                        data={section.subtitle}
                      />
                    </div>
                    <div
                      id="gallery-grid"
                      data-animate
                      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transform transition-all duration-1000 delay-500 ease-out ${
                        isVisible("gallery-grid")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {section.images?.map(
                        (image, index) =>
                          typeof image.image !== "string" && (
                            <div
                              key={image.id || index}
                              className="rounded-lg overflow-hidden shadow-lg group w-full"
                            >
                              <Image
                                src={image.image?.url || "/placeholder.svg"}
                                alt={image.image.alt}
                                width={300}
                                height={300}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          case "benifits":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8 bg-[color:var(--color-light-background)]"
              >
                <MaxWidthWrapper>
                  <div className="flex flex-col gap-6">
                    <div
                      id="benefits-header"
                      data-animate
                      className={`text-center mx-auto transform transition-all duration-1000 ease-out ${
                        isVisible("benefits-header")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {/* <h4
                        className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                          isVisible("benefits-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        ---------- Benefits ----------
                      </h4> */}
                      <SectionTitle
                        data={section.title}
                        isVisible={isVisible("benefits-header")}
                      />
                    </div>
                    <div
                      id="benefits-grid"
                      data-animate
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {section.items.map((benefit, index) => (
                        <div
                          key={index}
                          className={`rounded-[10px] border border-[color:var(--color-light-background)] p-4 md:p-5 bg-white flex flex-row items-center gap-3 md:gap-4 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
                            isVisible("benefits-grid")
                              ? "translate-y-0 opacity-100"
                              : "translate-y-10 opacity-0"
                          }`}
                          style={{ transitionDelay: `${400 + index * 100}ms` }}
                        >
                          <div className="flex-shrink-0">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 md:w-[30px] md:h-[30px]"
                            >
                              <path
                                d="M17.8273 4.49921C16.4945 3.1664 15.8281 2.5 15 2.5C14.1719 2.5 13.5055 3.1664 12.1727 4.49921C11.3729 5.299 10.5803 5.67032 9.4401 5.67032C8.4445 5.67032 7.02803 5.47723 6.25 6.26181C5.47812 7.04018 5.67035 8.45082 5.67035 9.44007C5.67035 10.5803 5.299 11.3729 4.49919 12.1727C3.1664 13.5055 2.50001 14.1719 2.5 15C2.50002 15.8281 3.16642 16.4945 4.49922 17.8273C5.39519 18.7232 5.67035 19.3018 5.67035 20.5599C5.67035 21.5555 5.47726 22.972 6.26186 23.75C7.04023 24.5218 8.45085 24.3296 9.44008 24.3296C10.6544 24.3296 11.2391 24.5672 12.1057 25.4338C12.8437 26.1717 13.8329 27.5 15 27.5C16.1672 27.5 17.1564 26.1717 17.8943 25.4338C18.7609 24.5672 19.3456 24.3296 20.5599 24.3296C21.5492 24.3296 22.9598 24.5218 23.7381 23.75M25.5008 12.1727C26.8336 13.5055 27.5 14.1719 27.5 15C27.5 15.8281 26.8336 16.4945 25.5008 17.8273C24.6048 18.7232 24.3296 19.3018 24.3296 20.5599C24.3296 21.5555 24.5227 22.972 23.7381 23.75M23.7381 23.75H23.75"
                                stroke="var(--color-primary-brown)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 12.8846C10 12.8846 12.8125 12.5 15 17.5C15 17.5 21.3235 5 27.5 2.5"
                                stroke="var(--color-primary-brown)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <RichText
                            className="text-base md:text-lg leading-[22px] md:leading-[24px] text-black flex-1"
                            data={benefit.content}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </MaxWidthWrapper>
              </section>
            );
          case "post-care":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8"
              >
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col gap-6">
                    <div
                      id="postcare-header"
                      data-animate
                      className={`text-center mx-auto transform transition-all duration-1000 ease-out ${
                        isVisible("postcare-header")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {/* <h4
                        className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                          isVisible("postcare-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        ---------- Post Care ----------
                      </h4> */}
                      {section.downtimeTitle ? (
                        <SectionTitle
                          data={section.downtimeTitle}
                          isVisible={isVisible("postcare-header")}
                        />
                      ) : null}
                    </div>
                    <div className="max-w-4xl mx-auto">
                      {/* Downtime and Post-Care Information */}
                      <div
                        id="postcare-content"
                        data-animate
                        className={`flex flex-col gap-6 transform transition-all duration-1000 delay-400 ease-out ${
                          isVisible("postcare-content")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        {section.downtime && section.downtime.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                            {section.downtime.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                  <img
                                    src="/post-care.svg"
                                    alt="Post Care"
                                    className="w-full h-full"
                                  />
                                </div>
                                <div className="text-lg text-gray-800">
                                  {item.content && (
                                    <RichText data={item.content} />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="bg-[color:var(--color-light-background)] border border-[color:var(--color-light-border)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                          {section.postCareTitle ? (
                            <RichText
                              className="text-xl font-semibold text-[color:var(--color-dark-text)] mb-4"
                              data={section.postCareTitle}
                            />
                          ) : null}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.postCareItems?.map((item, index) => (
                              <div
                                key={index}
                                className={`flex items-start gap-3 transform transition-all duration-500 ease-out hover:scale-105 ${
                                  isVisible("postcare-content")
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-5 opacity-0"
                                }`}
                                style={{
                                  transitionDelay: `${600 + index * 100}ms`,
                                }}
                              >
                                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                  <img
                                    src="/post-care.svg"
                                    alt="Post Care"
                                    className="w-full h-full"
                                  />
                                </div>
                                {item.content && (
                                  <RichText
                                    className="text-lg text-gray-800"
                                    data={item.content}
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          case "testimonials":
            return (
              <React.Fragment key={section.blockType + index}>
                {whyChooseUsSection}
                <section
                  key={section.blockType + index}
                  className="py-6 md:py-8 px-4 md:px-8 pb-16 md:pb-20"
                >
                  <div className="max-w-6xl mx-auto">
                    <div
                      id="testimonials-header"
                      data-animate
                      className={`text-center mx-auto transform transition-all duration-1000 ease-out ${
                        isVisible("testimonials-header")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <SectionTitle
                        data={section.title}
                        className="text-center mb-6"
                      />
                    </div>
                    <div id="testimonials-grid" data-animate>
                      <TestimonialCarousel
                        items={section.items}
                        isVisible={isVisible("testimonials-grid")}
                      />
                    </div>
                  </div>
                </section>
              </React.Fragment>
            );
          case "eligibility":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8"
              >
                <div className="max-w-6xl mx-auto text-center">
                  <SectionTitle data={section.title} className="mb-6" />
                  <div className="flex flex-wrap justify-center gap-4">
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] p-6 rounded-lg bg-white shadow-md border border-[color:var(--color-light-border)] hover:border-[color:var(--color-primary-brown)]/50 hover:bg-[color:var(--color-light-background)] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                      >
                        <RichText
                          className="text-lg font-semibold text-black text-center"
                          data={item.content}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "faq":
            return (
              <section
                key={section.blockType + index}
                className="py-6 md:py-8 px-4 md:px-8"
              >
                <MaxWidthWrapper>
                  <div className="mx-2 sm:mx-6 lg:mx-24">
                    <div className="mx-auto flex items-center justify-center max-w-xs gap-x-2"></div>
                    <SectionTitle
                      data={section.title}
                      className="mt-2 text-center"
                    />
                    <Accordion type="single" collapsible className="mt-4">
                      {section.items.map((faq, index) => (
                        <AccordionItem
                          value={`${index + 1}`}
                          key={index}
                          className="py-4 px-4 sm:px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
                        >
                          <AccordionTrigger className="text-[#1F2937] text-xl sm:text-2xl md:text-3xl font-medium text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent
                            asChild
                            className="text-[#4B5563] text-lg sm:text-xl md:text-2xl"
                          >
                            <RichText data={faq.answer} />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </MaxWidthWrapper>
              </section>
            );
          case "video-testimonials":
            return (
              <section
                key={section.blockType + index}
                className="w-full py-8 sm:py-12 md:py-20"
              >
                <MaxWidthWrapper>
                  <SectionTitle
                    data={section.title}
                    className="mt-2 text-center"
                  />
                  <div className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8">
                    {section.videos?.map((video, videoIndex) => {
                      const getYouTubeEmbedUrl = (url: string) => {
                        let videoId = "";
                        try {
                          const urlObj = new URL(url);
                          if (urlObj.hostname === "youtu.be") {
                            videoId = urlObj.pathname.slice(1);
                          } else {
                            videoId = urlObj.searchParams.get("v") || "";
                          }
                        } catch (error) {
                          console.error("Invalid URL:", url, error);
                          return "";
                        }
                        return `https://www.youtube.com/embed/${videoId}`;
                      };

                      return (
                        <div
                          key={videoIndex}
                          className="w-full max-w-sm md:max-w-md lg:max-w-lg"
                        >
                          <div className="aspect-video">
                            <iframe
                              src={getYouTubeEmbedUrl(video.url)}
                              title={`Video Testimonial ${videoIndex + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="h-full w-full rounded-lg shadow-lg"
                              loading="lazy"
                            ></iframe>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </MaxWidthWrapper>
              </section>
            );
        }
      })}

      {!hasTestimonials && whyChooseUsSection}

      {/* Patients Visit Us From Section */}
      <section className="py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-4">
            Patients Visit Us From Across Pune
          </h2>
          <p className="mb-4 text-base sm:text-lg">
            At The Skin Firm, we proudly serve patients not only from Mohammad
            Wadi and NIBM Road, but also from several nearby areas in Pune who
            visit us for trusted treatments, skin care, and hair solutions.
          </p>
          <p className="mb-4 font-medium text-base sm:text-lg">
            Many of our patients travel to our clinic from:
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            {[
              "Camp",
              "Undri",
              "Pisoli",
              "Kondhwa",
              "Hadapsar",
              "Wanowrie",
              "Handewadi",
              "Lullanagar",
            ].map((loc) => (
              <span
                key={loc}
                className="bg-gray-100 text-gray-800 text-sm sm:text-base font-medium px-3 sm:px-4 py-1 rounded-full"
              >
                {loc}
              </span>
            ))}
            <span className="bg-gray-100 text-gray-800 text-sm sm:text-base font-medium px-3 sm:px-4 py-1 rounded-full">
              & many other far locations in Pune as well.
            </span>
          </div>
          <p className="text-base sm:text-lg">
            Our convenient location makes it easy for people across South Pune
            and Central Pune to access advanced treatments and other dermatology
            services under the expert care of Dr. Karishma Singh.
          </p>
        </div>
      </section>

      {/* Book consultation */}
      {bookConsultation && (
        <section
          key={bookConsultation.blockType}
          className="py-6 md:py-8 px-4 md:px-8 bg-cover bg-center"
          style={{ backgroundColor: "#F8F4EB" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <SectionTitle data={bookConsultation.title} />
            </div>
            <div className="mb-4 text-[color:var(--color-dark-text)] text-base sm:text-lg">
              <RichText data={bookConsultation.description} />
            </div>
            {bookConsultation.secondaryDescription && (
              <div className="font-semibold mb-6 text-[color:var(--color-dark-text)] text-base sm:text-lg">
                <RichText data={bookConsultation.secondaryDescription} />
              </div>
            )}
            <Link href={bookConsultation.buttonLink || "/contact"}>
              <button className="rounded-lg px-6 sm:px-8 py-4 sm:py-5 bg-[#d4a380] text-white font-bold text-lg sm:text-xl hover:bg-[#c19970] hover:scale-105 transition-all duration-300 shadow-lg">
                {bookConsultation.buttonText ||
                  "Book Your Treatment Appointment"}{" "}
                →
              </button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default AnimatedServicePage;
