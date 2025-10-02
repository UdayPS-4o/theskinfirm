"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Service, ServiceCategory } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { MaxWidthWrapper } from "@/components/layout/max-width";
import { DashedSeparator } from "@/components/sections/dashed-separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AnimatedServicePageProps {
  serviceData: Service & {
    category: ServiceCategory; // Ensure category is populated
  };
}


const AnimatedServicePage = ({ serviceData }: AnimatedServicePageProps) => {
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
  // Safe function to render text with markdown-style bold formatting
  const renderTextWithBold = (text: string) => {
    if (!text) return "";
    return text
      .replace(/^\s*>\s*/gm, "") // Remove markdown blockquote characters
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/(\r\n|\n|\r)/gm, "<br/>"); // Preserve line breaks
  };
  return (
    <div className="min-h-screen">
      {serviceData.sections?.map((section) => {
        switch (section.blockType) {
          case "hero":
            return (
              <section
                key={section.blockType}
                className="relative bg-[color:var(--color-light-background)]"
              >
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
                          {serviceData.category.name}
                        </small>
                        <div className="flex flex-col gap-1">
                          <h1
                            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] leading-tight xl:leading-[50px] tracking-[-0.01em] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                              isVisible("hero-left")
                                ? "translate-y-0 opacity-100"
                                : "translate-y-5 opacity-0"
                            }`}
                          >
                            {section.title}
                          </h1>
                        </div>
                        <RichText
                          className={`text-base sm:text-lg md:text-xl xl:text-[21px] leading-relaxed xl:leading-[25px] text-[color:var(--color-dark-text)]/80 transform transition-all duration-700 delay-400 ease-out ${
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
                      src={
                        typeof section.image !== "number" &&
                        typeof section.image?.url === "string"
                          ? section.image?.url
                          : "/TSF-Hero-Section.png"
                      }
                      fill
                      alt={"Acne Treatment Collage"}
                      className="object-cover"
                    />
                    {/* Left edge blur/fade overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-light-background)] via-[color:var(--color-light-background)]/80 via-20% to-transparent to-40% pointer-events-none"></div>
                  </div>
                </div>
              </section>
            );
          case "info":
            return (
              <section
                key={section.blockType}
                className="py-12 md:py-20 px-4 md:px-8"
              >
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
                      <h2
                        className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-6 transform transition-all duration-700 delay-200 ease-out ${
                          isVisible("what-is-acne-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        {section.title}
                      </h2>
                      <div
                        className={`text-base md:text-lg leading-relaxed text-[color:var(--color-dark-text)] whitespace-pre-line transform transition-all duration-700 delay-300 ease-out ${
                          isVisible("what-is-acne-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        <RichText data={section.description} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          case "bullet-points":
            return (
              <section
                key={section.blockType}
                className="py-12 md:py-20 px-4 md:px-8 bg-[color:var(--color-light-background)]"
              >
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col gap-8 md:gap-12">
                    <div
                      id="symptoms-header"
                      data-animate
                      className={`text-center max-w-[800px] mx-auto transform transition-all duration-1000 ease-out ${
                        isVisible("symptoms-header")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <h2
                        className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-8 transform transition-all duration-700 delay-200 ease-out ${
                          isVisible("symptoms-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        {section.title}
                      </h2>
                    </div>
                    <div
                      id="symptoms-grid"
                      data-animate
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                    >
                      {section.items.map(
                        (symptom, index) =>
                          symptom.content && (
                            <div
                              key={index}
                              className={`rounded-[10px] border border-[color:var(--color-light-border)] p-4 md:p-5 bg-white flex flex-row items-center gap-3 md:gap-4 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
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
                                className="text-sm md:text-base leading-[20px] md:leading-[22px] text-black flex-1 text-center"
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
                key={section.blockType}
                className="py-12 md:py-[100px] px-4 md:px-8"
              >
                <MaxWidthWrapper>
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
                    <div className="rounded-xl w-full lg:w-[470px] h-[280px] lg:h-[360px] overflow-hidden hover:shadow-xl transition-all duration-1000 ease-out">
                      {typeof section.image !== "number" && (
                        <img
                          id="about-image"
                          data-animate
                          src={section.image?.url || "/placeholder.svg"}
                          alt={section.title}
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
                      className={`flex flex-col gap-4 w-full lg:w-[500px] transform transition-all duration-1000 delay-200 ease-out ${
                        isVisible("about-content")
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                    >
                      <h2
                        className={`text-xl md:text-2xl text-[color:var(--color-primary-brown)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                          isVisible("about-content")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        {section.title}
                      </h2>
                      <RichText
                        className="whitespace-pre-line"
                        data={section.description}
                      />
                    </div>
                  </div>
                </MaxWidthWrapper>
              </section>
            );
          case "process":
            return (
              <section
                key={section.blockType}
                className="py-12 md:py-20 px-4 md:px-8"
              >
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col gap-12 md:gap-[90px]">
                    <div
                      id="process-header"
                      data-animate
                      className={`text-center max-w-[602px] mx-auto transform transition-all duration-1000 ease-out ${
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
                        {section.title}
                      </h2>
                    </div>
                    <div
                      id="process-steps"
                      data-animate
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                    >
                      {section.items.map((step, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-4 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg hover:bg-gray-50 rounded-lg p-4 ${
                            isVisible("process-steps")
                              ? "translate-y-0 opacity-100"
                              : "translate-y-10 opacity-0"
                          }`}
                          style={{ transitionDelay: `${400 + index * 100}ms` }}
                        >
                          <div className="w-[50px] h-[50px] rounded-full bg-[color:var(--color-primary-brown)] flex items-center justify-center shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-300">
                            <span className="text-[22px] font-medium text-white">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex flex-col gap-3">
                            <p className="text-lg font-medium text-black">
                              {step.title}
                            </p>
                            <RichText
                              className="text-sm leading-5 text-[color:var(--color-dark-text)]"
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
                key={section.blockType}
                className="py-12 md:py-20 px-4 md:px-8 bg-[color:var(--color-light-background)]"
              >
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-12">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className="group p-6 md:p-7 rounded-xl border border-[color:var(--color-light-border)] bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center"
                      >
                        <p className="text-base md:text-lg font-semibold text-black">
                          {item.title}
                        </p>
                        <RichText
                          className="text-xs md:text-sm text-[color:var(--color-light-text)] mt-1"
                          data={item.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "benifits":
            return (
              <section
                key={section.blockType}
                className="py-12 md:py-20 px-4 md:px-8 bg-[color:var(--color-light-background)]"
              >
                <MaxWidthWrapper>
                  <div className="flex flex-col gap-12 md:gap-20">
                    <div
                      id="benefits-header"
                      data-animate
                      className={`text-center max-w-[602px] mx-auto transform transition-all duration-1000 ease-out ${
                        isVisible("benefits-header")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <h4
                        className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                          isVisible("benefits-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        ---------- Benefits ----------
                      </h4>
                      <h2
                        className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                          isVisible("benefits-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        {section.title}
                      </h2>
                    </div>
                    <div
                      id="benefits-grid"
                      data-animate
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
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
                            className="text-sm md:text-base leading-[20px] md:leading-[22px] text-black flex-1"
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
                key={section.blockType}
                className="py-12 md:py-20 px-4 md:px-8"
              >
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col gap-12 md:gap-20">
                    <div
                      id="postcare-header"
                      data-animate
                      className={`text-center max-w-[602px] mx-auto transform transition-all duration-1000 ease-out ${
                        isVisible("postcare-header")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <h4
                        className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                          isVisible("postcare-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        ---------- Post Care ----------
                      </h4>
                      <h2
                        className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                          isVisible("postcare-header")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                      >
                        {section.downtimeTitle}
                      </h2>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                          {section.downtime.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                <img
                                  src="/post-care.svg"
                                  alt="Post Care"
                                  className="w-full h-full"
                                />
                              </div>
                              <div className="text-base text-gray-800">
                                <RichText
                                  data={item.content}

                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-[color:var(--color-light-background)] border border-[color:var(--color-light-border)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                          <h2 className="text-lg font-semibold text-[color:var(--color-dark-text)] mb-6">
                            {section.postCareTitle}
                          </h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {section.postCareItems.map((item, index) => (
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
                                <RichText
                                  className="text-base text-gray-800"
                                  data={item.content}
                                />
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
              <section
                key={section.blockType}
                className="py-12 md:py-20 px-4 md:px-8"
              >
                <div className="max-w-6xl mx-auto">
                  <div
                    id="testimonials-header"
                    data-animate
                    className={`text-center max-w-[800px] mx-auto transform transition-all duration-1000 ease-out ${
                      isVisible("testimonials-header")
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <h4
                      className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                        isVisible("testimonials-header")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                    >
                      ---------- Testimonials ----------
                    </h4>
                    <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-center text-[color:var(--color-dark-text)] font-semibold mb-12">
                      {section.title}
                    </h2>
                  </div>
                  <div
                    id="testimonials-grid"
                    data-animate
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                  >
                    {section.items.map((text, index) => (
                      <div
                        key={index}
                        className={`relative bg-white p-6 md:p-8 rounded-2xl border border-[color:var(--color-light-border)] shadow-lg overflow-hidden transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 ${
                          isVisible("testimonials-grid")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                        style={{ transitionDelay: `${400 + index * 150}ms` }}
                      >
                        <div className="absolute -top-6 -left-2 text-[64px] text-[color:var(--color-primary-brown)]/20 select-none">
                          “
                        </div>
                        <RichText
                          className="italic text-[color:var(--color-dark-text)] leading-relaxed"
                          data={text.content}
                        />
                        <div className="mt-6 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[color:var(--color-primary-brown)]/20"></div>
                          <div className="h-3 w-24 rounded-full bg-[color:var(--color-primary-brown)]/30"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "eligibility":
            return (
              <section
                key={section.blockType}
                className="py-12 mt-10 md:py-20 px-4 md:px-8"
              >
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-12">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className="p-6 rounded-lg bg-white shadow-md border border-[color:var(--color-light-border)] hover:border-[color:var(--color-primary-brown)]/50 hover:bg-[color:var(--color-light-background)] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                      >
                        <RichText
                          className="text-base font-semibold text-black text-center"
                          data={item.content}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          
          case 'faq':
            return (
               <section key={section.blockType} className="py-12 md:py-20 px-4 md:px-8">
                        <MaxWidthWrapper>
                          <div className="mx-6 lg:mx-24">
                            <div className="mx-auto flex items-center justify-center max-w-xs gap-x-2">
                              <DashedSeparator />
                              <h3 className="text-[#EC7754] text-3xl font-medium">FAQ</h3>
                              <DashedSeparator />
                            </div>
                            <h2 className="mt-2 text-[#333333] text-3xl lg:text-5xl font-semibold text-center">
                              {section.title}
                            </h2>
                            <Accordion type="single" collapsible className="mt-10">
                              {section.items.map((faq, index) => (
                                <AccordionItem
                                  value={`${index + 1}`}
                                  key={index}
                                  className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
                                >
                                  <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                                    {faq.question}
                                  </AccordionTrigger>
                                  <AccordionContent asChild className="text-[#4B5563] text-2xl">
                                    <RichText data={faq.answer}/>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </div>
                        </MaxWidthWrapper>
                      </section>
            )
        }
      })}

       {/* Patients Visit Us From Section */}
              <section className="py-12 md:py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-6">
                    Patients Visit Us From Across Pune
                  </h2>
                  <p className="mb-4">
                    At The Skin Firm, we proudly serve patients not only from Mohammad
                    Wadi and NIBM Road, but also from several nearby areas in Pune who
                    visit us for trusted treatments, skin care, and hair solutions.
                  </p>
                  <p className="mb-6 font-medium">
                    Many of our patients travel to our clinic from:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
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
                        className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full"
                      >
                        {loc}
                      </span>
                    ))}
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">
                      & many other far locations in Pune as well.
                    </span>
                  </div>
                  <p>
                    Our convenient location makes it easy for people across South Pune
                    and Central Pune to access advanced treatments and other
                    dermatology services under the expert care of Dr. Karishma Singh.
                  </p>
                </div>
              </section>
      
              {/* Final CTA */}
              <section
                className="py-12 md:py-20 px-4 md:px-8 bg-cover bg-center mb-12"
                style={{ backgroundColor: "#F8F4EB" }}
              >
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] font-semibold mb-6 text-[color:var(--color-dark-text)]">
                    Book Your Consultation at The Skin Firm, NIBM, Mohammad Wadi, Pune
                  </h2>
                  <p className="mb-6 text-[color:var(--color-dark-text)]">
                    Don&apos;t let skin concerns hold back your confidence. At The Skin
                    Firm, we understand how skin issues can affect not just your
                    appearance, but also the way you feel about yourself. With Dr.
                    Karishma Singh&apos;s expert care and customized treatments, healthier
                    skin - and renewed confidence - can truly be yours.
                  </p>
                  <p className="font-semibold mb-8 text-[color:var(--color-dark-text)]">
                    Appointments fill quickly. Start your journey to healthier,
                    confident skin today.
                  </p>
                  <Link href="/contact">
                    <button className="rounded-lg px-8 py-4 bg-[#d4a380] text-white font-bold text-lg hover:bg-[#c19970] hover:scale-105 transition-all duration-300 shadow-lg">
                      Book Your Treatment Appointment →
                    </button>
                  </Link>
                </div>
              </section>
    </div>
  );
};

export default AnimatedServicePage;
