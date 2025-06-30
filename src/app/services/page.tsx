'use client';
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Helper from "./helper";

type TabKey = "skin" | "hair" | "laser";



export default function ServicePage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabKey>("skin");
  const servicesRef = useRef<HTMLElement>(null);

  // Handle URL search params for tab selection
  useEffect(() => {
    const tabParam = searchParams.get('tab') as TabKey;
    if (tabParam && ['skin', 'hair', 'laser'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // Handle hash scrolling for skin services
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Set active tab to skin for hash navigation
        setActiveTab('skin');
        
        // Wait for the component to render with skin tab active
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    // Smooth scroll to top of services section
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f8eee7] overflow-x-hidden">
      <main className="flex-1 w-full">
        {/* Hero Section */}
        {/* <section className="bg-[#f8eee7]">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-10 md:py-16 flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-20">
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
            <div className="flex-1 w-full flex justify-end items-center mb-4 md:mb-0">
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
        </section> */}

        {/* Services Section */}
        <section ref={servicesRef} className="bg-white w-full">
          <div className="sticky top-0 z-10 bg-white py-8 sm:py-12 md:py-16 !pb-0 mt-[-20px]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="wrapper">
              {/* Section Title */}
              <div className="flex flex-col gap-2 sm:gap-3 items-center w-full max-w-2xl mx-auto mb-8 sm:mb-10">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-tight text-center text-[#ec7754]">
                  <span className="text-[#ec7754] font-medium">---------- Our Services ----------</span>
                </h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-tight text-[#333333] text-center">
                  <span className="text-[#333333] font-semibold">What Services We Offer</span>
                </h2>
              </div>

              {/* Tabs Navigation */}
              <div className="flex w-full mx-auto mb-6 sm:mb-8 md:mb-10 relative">
                {/* Bottom border line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#e5d3c2]"></div>
                
                {/* Skin Services Tab */}
                <div
                  className={`flex flex-col gap-3 sm:gap-4 md:gap-6 items-center flex-1 relative w-full cursor-pointer min-w-0 transition-all duration-300 pb-3 sm:pb-4`}
                  onClick={() => handleTabChange('skin')}
                >
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center px-2 transition-all duration-300">
                    <span className={`whitespace-nowrap transition-all duration-300 ${activeTab === 'skin' ? 'font-semibold text-[#d4a380]' : 'font-normal text-[#8a7b70] hover:text-[#d4a380]'}`}>Skin Services</span>
                  </h4>
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#d4a380] transition-all duration-300 ${activeTab === 'skin' ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
                </div>
                
                {/* Hair Services Tab */}
                <div
                  className={`flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full cursor-pointer min-w-0 transition-all duration-300 pb-3 sm:pb-4`}
                  onClick={() => handleTabChange('hair')}
                >
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center px-2 transition-all duration-300">
                    <span className={`whitespace-nowrap transition-all duration-300 ${activeTab === 'hair' ? 'font-semibold text-[#d4a380]' : 'font-normal text-[#8a7b70] hover:text-[#d4a380]'}`}>Hair Services</span>
                  </h4>
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#d4a380] transition-all duration-300 ${activeTab === 'hair' ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
                </div>
                
                {/* Laser Services Tab */}
                <div
                  className={`flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full cursor-pointer min-w-0 transition-all duration-300 pb-3 sm:pb-4`}
                  onClick={() => handleTabChange('laser')}
                >
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center px-2 transition-all duration-300">
                    <span className={`whitespace-nowrap transition-all duration-300 ${activeTab === 'laser' ? 'font-semibold text-[#d4a380]' : 'font-normal text-[#8a7b70] hover:text-[#d4a380]'}`}>Laser Services</span>
                  </h4>
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#d4a380] transition-all duration-300 ${activeTab === 'laser' ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Cards Grid */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">
            <Helper activeTab={activeTab} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}