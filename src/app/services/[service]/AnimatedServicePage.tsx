"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface ServiceData {
  hero: {
    serviceCategory: string;
    title: string;
    description: string;
    image: string;
    doctor: {
      name: string;
      title: string;
    };
  };
  about: {
    title: string;
    description: string;
    highlight: string;
    image: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: string[];
  };
  postCare: {
    title: string;
    subtitle: string;
    downtime: {
      title: string;
      items: string[];
    };
    postCare: {
      title: string;
      items: string[];
    };
  };
  faq: {
    title: string;
    subtitle: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
}

interface AnimatedServicePageProps {
  serviceData: ServiceData;
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-20 bg-[color:var(--color-light-background)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-6 md:gap-8 xl:gap-12">
            {/* Left Content */}
            <div
              id="hero-left"
              data-animate
              className={`flex flex-col gap-6 md:gap-8 xl:gap-[50px] w-full xl:w-[511px] transform transition-all duration-1000 ease-out ${
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
                  {serviceData.hero.serviceCategory}
                </small>
                <h1
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] leading-tight xl:leading-[50px] tracking-[-0.01em] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                    isVisible("hero-left")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  {serviceData.hero.title}
                </h1>
                <h4
                  className={`text-base sm:text-lg md:text-xl xl:text-[21px] leading-relaxed xl:leading-[25px] text-[color:var(--color-dark-text)]/80 transform transition-all duration-700 delay-400 ease-out ${
                    isVisible("hero-left")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  {serviceData.hero.description}
                </h4>
              </div>
              <div
                className={`flex flex-col sm:flex-row gap-3 md:gap-5 transform transition-all duration-700 delay-500 ease-out ${
                  isVisible("hero-left")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <Link href="/#contact">
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

            {/* Right Content */}
            <div
              id="hero-right"
              data-animate
              className={`flex flex-col items-center xl:items-end w-full xl:w-[523px] relative transform transition-all duration-1000 delay-300 ease-out ${
                isVisible("hero-right")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div
                  className={`shadow-lg rounded-full border-4 md:border-8 border-[color:var(--color-light-background)] w-full max-w-[400px] md:max-w-[450px] xl:max-w-[504px] h-[250px] sm:h-[280px] md:h-[320px] xl:h-[355px] mx-auto transform transition-all duration-700 delay-600 ease-out hover:scale-105 overflow-hidden ${
                    isVisible("hero-right") ? "scale-100" : "scale-95"
                  }`}
                >
                  <img
                    src={"/Dr-Karishma-Singh-The-Skin-Firm-Pune2.png"}
                    alt={"Dr. Karishma Singh"}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div
                  className={`absolute -bottom-2 md:-bottom-4 right-2 md:right-4 xl:right-0 shadow-lg rounded-lg border border-[color:var(--color-light-border)] p-3 md:p-4 bg-white max-w-[150px] md:max-w-[178px] transform transition-all duration-700 delay-800 ease-out hover:scale-105 ${
                    isVisible("hero-right")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <div className="text-xs md:text-[13.6px] font-medium text-[color:var(--color-dark-text)]">
                    {serviceData.hero.doctor.name}
                  </div>
                  <div className="text-[10px] md:text-[11.9px] text-[color:var(--color-light-text)]">
                    {serviceData.hero.doctor.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-[100px] px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
            <div className="rounded-xl w-full lg:w-[470px] h-[280px] lg:h-[360px] overflow-hidden hover:shadow-xl transition-all duration-1000 ease-out">
              <img
                id="about-image"
                data-animate
                src={serviceData.about.image}
                alt={`${serviceData.hero.title} Process`}
                className={`w-full h-full object-cover transform transition-all duration-1000 ease-out hover:scale-105 ${
                  isVisible("about-image")
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              />
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
              <h4
                className={`text-xl md:text-2xl uppercase text-[color:var(--color-primary-brown)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("about-content")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                {serviceData.about.title}
              </h4>
              <p
                className={`text-sm leading-[22px] text-[color:var(--color-dark-text)] font-medium transform transition-all duration-700 delay-400 ease-out ${
                  isVisible("about-content")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                {serviceData.about.description}
              </p>
              <div
                className={`rounded-[10px] px-5 py-4 bg-[color:var(--color-light-background)] transform transition-all duration-700 delay-500 ease-out hover:scale-105 hover:shadow-md ${
                  isVisible("about-content")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-sm leading-5 text-black">
                  {serviceData.about.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
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
                ---------- {serviceData.process.subtitle} ----------
              </h4>
              <h2
                className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("process-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                {serviceData.process.title}
              </h2>
            </div>
            <div
              id="process-steps"
              data-animate
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${
                serviceData.process.steps.length === 4
                  ? "lg:grid-cols-2"
                  : "lg:grid-cols-3"
              }`}
            >
              {serviceData.process.steps.map((step, index) => (
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
                    <small className="text-sm leading-5 text-[color:var(--color-dark-text)]">
                      {step.description}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-[color:var(--color-light-background)]">
        <div className="max-w-6xl mx-auto">
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
                ---------- {serviceData.benefits.subtitle} ----------
              </h4>
              <h2
                className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("benefits-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                {serviceData.benefits.title}
              </h2>
            </div>
            <div
              id="benefits-grid"
              data-animate
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
            >
              {serviceData.benefits.items.map((benefit, index) => (
                <div
                  key={index}
                  className={`rounded-[10px] border border-[color:var(--color-light-background)] p-4 md:p-5 bg-white flex flex-row items-start gap-3 md:gap-4 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
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
                  <p className="text-sm md:text-base leading-[20px] md:leading-[22px] text-black flex-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post Care Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
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
                ---------- {serviceData.postCare.subtitle} ----------
              </h4>
              <h2
                className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("postcare-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                {serviceData.postCare.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[84px]">
              {/* Downtime Information */}
              <div
                id="postcare-downtime"
                data-animate
                className={`flex flex-col gap-4 transform transition-all duration-1000 delay-400 ease-out ${
                  isVisible("postcare-downtime")
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <h5 className="text-xl text-[color:var(--color-dark-text)] font-semibold">
                  {serviceData.postCare.downtime.title}
                </h5>
                <div className="rounded-[10px] border border-[color:var(--color-light-background)] p-5 bg-[color:var(--color-light-background-alt)] flex flex-col gap-[30px] hover:shadow-lg transition-shadow duration-300">
                  {serviceData.postCare.downtime.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-[14px] items-start transform transition-all duration-500 ease-out hover:scale-105 ${
                        isVisible("postcare-downtime")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="w-[30px] h-[30px] flex-shrink-0">
                        <img
                          src="/alert-circle.svg"
                          alt="Alert"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-base leading-[22px] text-black">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post-Care Information */}
              <div
                id="postcare-info"
                data-animate
                className={`flex flex-col gap-[30px] transform transition-all duration-1000 delay-500 ease-out ${
                  isVisible("postcare-info")
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <h5 className="text-xl text-[color:var(--color-dark-text)] font-semibold">
                  {serviceData.postCare.postCare.title}
                </h5>
                <div className="flex flex-col gap-[30px]">
                  {serviceData.postCare.postCare.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-[14px] items-start transform transition-all duration-500 ease-out hover:scale-105 ${
                        isVisible("postcare-info")
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${700 + index * 100}ms` }}
                    >
                      <div className="w-[30px] h-[30px] flex-shrink-0">
                        <img
                          src="/post-care.svg"
                          alt="Post Care"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-base leading-[22px] text-black">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 md:gap-20">
            <div
              id="faq-header"
              data-animate
              className={`text-center max-w-[602px] mx-auto transform transition-all duration-1000 ease-out ${
                isVisible("faq-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h4
                className={`text-xl md:text-2xl text-[color:var(--color-primary-orange)] font-medium mb-3 transform transition-all duration-700 delay-200 ease-out ${
                  isVisible("faq-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                ---------- {serviceData.faq.subtitle} ----------
              </h4>
              <h2
                className={`text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("faq-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                {serviceData.faq.title}
              </h2>
            </div>
            <div
              id="faq-grid"
              data-animate
              className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"
            >
              {serviceData.faq.questions.map((faq, index) => (
                <div
                  key={index}
                  className={`shadow-lg rounded-[10px] border border-[color:var(--color-border-light)] p-6 bg-white transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
                    isVisible("faq-grid")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex gap-2.5 items-center">
                      <p className="text-base leading-[22px] tracking-[-0.01em] text-[#d4a380] font-semibold">
                        {faq.question}
                      </p>
                    </div>
                    <small className="text-sm leading-[22px] text-[#333333]">
                      {faq.answer}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedServicePage;
