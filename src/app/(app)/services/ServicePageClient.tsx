"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Helper from "./helper";
import { Service, ServiceCategory } from "@/payload-types";

type TabKey = "skin" | "hair" | "laser";

interface ServicePageProps {
  services: (Service & { category: ServiceCategory })[];
}

interface ServicePageContentProps {
  services: (Service & { category: ServiceCategory })[];
}

// Extract search params logic into separate component
function ServicePageContent({ services }: ServicePageContentProps) {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabKey>("skin");
  const servicesRef = useRef<HTMLElement>(null);

  // Handle URL search params for tab selection
  useEffect(() => {
    const tabParam = searchParams.get("tab") as TabKey;
    if (tabParam && ["skin", "hair", "laser"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // Handle hash scrolling for skin services
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Set active tab to skin for hash navigation
        setActiveTab("skin");

        // Wait for the component to render with skin tab active
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    // Smooth scroll to top of services section
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[color:var(--color-light-background)] overflow-x-hidden">
      <main className="flex-1 w-full">
        {/* Services Section */}
        <section ref={servicesRef} className="bg-white w-full">
          <div className="sticky top-0 z-10 bg-white py-8 sm:py-12 md:py-16 !pb-0 mt-[-20px]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="wrapper">
                {/* Section Title */}
                <div className="flex flex-col gap-2 sm:gap-3 items-center w-full max-w-2xl mx-auto mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-tight text-[color:var(--color-dark-text)] text-center">
                    <span className="text-[color:var(--color-dark-text)] font-semibold">
                      What Services We Offer
                    </span>
                  </h2>
                </div>

                {/* Tabs Navigation */}
                <div className="flex w-full mx-auto mb-6 sm:mb-8 md:mb-10 relative">
                  {/* Bottom border line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[color:var(--color-light-border-alt)]"></div>

                  {/* Skin Services Tab */}
                  <div
                    className={`flex flex-col gap-3 sm:gap-4 md:gap-6 items-center flex-1 relative w-full cursor-pointer min-w-0 transition-all duration-300 pb-3 sm:pb-4`}
                    onClick={() => handleTabChange("skin")}
                  >
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center px-2 transition-all duration-300">
                      <span
                        className={`whitespace-nowrap transition-all duration-300 ${
                          activeTab === "skin"
                            ? "font-semibold text-[color:var(--color-primary-brown)]"
                            : "font-normal text-[color:var(--color-light-text)] hover:text-[color:var(--color-primary-brown)]"
                        }`}
                      >
                        Skin Services
                      </span>
                    </h4>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[color:var(--color-primary-brown)] transition-all duration-300 ${
                        activeTab === "skin"
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      }`}
                    ></div>
                  </div>

                  {/* Hair Services Tab */}
                  <div
                    className={`flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full cursor-pointer min-w-0 transition-all duration-300 pb-3 sm:pb-4`}
                    onClick={() => handleTabChange("hair")}
                  >
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center px-2 transition-all duration-300">
                      <span
                        className={`whitespace-nowrap transition-all duration-300 ${
                          activeTab === "hair"
                            ? "font-semibold text-[color:var(--color-primary-brown)]"
                            : "font-normal text-[color:var(--color-light-text)] hover:text-[color:var(--color-primary-brown)]"
                        }`}
                      >
                        Hair Services
                      </span>
                    </h4>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[color:var(--color-primary-brown)] transition-all duration-300 ${
                        activeTab === "hair"
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      }`}
                    ></div>
                  </div>

                  {/* Laser Services Tab */}
                  <div
                    className={`flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full cursor-pointer min-w-0 transition-all duration-300 pb-3 sm:pb-4`}
                    onClick={() => handleTabChange("laser")}
                  >
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center px-2 transition-all duration-300">
                      <span
                        className={`whitespace-nowrap transition-all duration-300 ${
                          activeTab === "laser"
                            ? "font-semibold text-[color:var(--color-primary-brown)]"
                            : "font-normal text-[color:var(--color-light-text)] hover:text-[color:var(--color-primary-brown)]"
                        }`}
                      >
                        Laser Services
                      </span>
                    </h4>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[color:var(--color-primary-brown)] transition-all duration-300 ${
                        activeTab === "laser"
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">
            <Helper activeTab={activeTab} services={services} />
          </div>
        </section>
      </main>
    </div>
  );
}

// Fallback component for loading state
function ServicePageFallback({ services }: ServicePageContentProps) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[color:var(--color-light-background)] overflow-x-hidden">
      <main className="flex-1 w-full">
        <section className="bg-white w-full">
          <div className="sticky top-0 z-10 bg-white py-8 sm:py-12 md:py-16 !pb-0 mt-[-20px]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="wrapper">
                {/* Section Title */}
                <div className="flex flex-col gap-2 sm:gap-3 items-center w-full max-w-2xl mx-auto mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-tight text-[#333333] text-center">
                    <span className="text-[#333333] font-semibold">
                      What Services We Offer
                    </span>
                  </h2>
                </div>

                {/* Tabs Navigation */}
                <div className="flex w-full mx-auto mb-6 sm:mb-8 md:mb-10 relative">
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[color:var(--color-light-border-alt)]"></div>

                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 items-center flex-1 relative w-full cursor-pointer min-w-0 transition-all duration-300 pb-3 sm:pb-4">
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center px-2">
                      <span className="whitespace-nowrap font-semibold text-[#d4a380]">
                        Skin Services
                      </span>
                    </h4>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#d4a380]"></div>
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full cursor-pointer min-w-0 transition-all duration-300 pb-3 sm:pb-4">
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center px-2">
                      <span className="whitespace-nowrap font-normal text-[#8a7b70]">
                        Hair Services
                      </span>
                    </h4>
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full cursor-pointer min-w-0 transition-all duration-300 pb-3 sm:pb-4">
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center px-2">
                      <span className="whitespace-nowrap font-normal text-[#8a7b70]">
                        Laser Services
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">
            <Helper activeTab="skin" services={services} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default function ServicePageClient({ services }: ServicePageProps) {
  return (
    <Suspense fallback={<ServicePageFallback services={services} />}>
      <ServicePageContent services={services} />
    </Suspense>
  );
}
