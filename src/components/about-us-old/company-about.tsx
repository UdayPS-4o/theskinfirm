"use client";

import { MaxWidthWrapper } from "../layout/max-width";

export default function CompanyAboutSection() {
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] justify-center items-center w-full">
          {/* Header Section */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-[29px] items-center w-full max-w-[1240px]">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-[22px] leading-tight lg:leading-[28px] text-[#ec7754] font-medium text-center">
              ---------- About ----------
            </h3>
            
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[42px] leading-tight lg:leading-[50px] text-[#333333] font-semibold text-center">
              The Skin Firm
            </h1>
          </div>
          
          {/* Main Content */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] items-center w-full max-w-[1000px]">
            {/* Quote Section */}
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-2xl leading-6 text-center text-[#d4a380] px-4">
              <span className="text-[#d4a380] font-semibold">
                &ldquo;Where Skin Meets Science, and Self-Care Feels Like Home&rdquo;
              </span>
            </h4>
            
            {/* First Content Block */}
            <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] items-start w-full">
              <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-5 sm:leading-6 md:leading-6 lg:leading-6">
                <span className="text-[#333333] font-medium">At</span>
                <span className="text-black font-semibold"> The Skin Firm,</span>
                <span className="text-[#333333] font-medium">
                  {" "}we believe that great skin isn&apos;t just about looking good it&apos;s about feeling deeply confident in your skin.
                </span>
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-5 sm:leading-6 md:leading-6 lg:leading-6 text-[#333333]">
                <span className="text-[#333333] font-medium">
                  Founded in Pune by Dr. Karishma Singh, The Skin Firm is a modern dermatology and aesthetic clinic rooted in precision care, ethical practices, and personalised results. Every treatment here is designed to go beyond the surface, addressing not just the symptom, but the story behind your skin.
                </span>
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-5 sm:leading-6 md:leading-6 lg:leading-6 text-[#333333]">
                <span className="text-[#333333] font-medium">
                  We specialise in advanced dermatological and aesthetic treatments including laser therapies, skin rejuvenation, anti-ageing solutions, acne and pigmentation correction, and hair restoration. Our clinic blends medical-grade technology with an artistic understanding of beauty, ensuring your results look natural, not overdone.
                </span>
              </p>
            </div>
            
            {/* Highlight Box */}
            <div className="rounded-[10px] px-4 sm:px-5 md:px-6 lg:px-6 py-4 sm:py-4 md:py-5 lg:py-5 flex gap-2.5 justify-center items-center bg-[#f9efe7] w-full">
              <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-4 sm:leading-5 md:leading-5 lg:leading-5 uppercase text-[#333333] text-center">
                <span className="text-[#333333] font-semibold">
                  But what truly sets us apart is the way we treat people
                </span>
              </p>
            </div>
            
            {/* Second Content Block */}
            <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] items-start w-full">
              <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-5 sm:leading-6 md:leading-6 lg:leading-6 text-[#333333]">
                <span className="text-[#333333] font-medium">
                  From the moment you walk into our NIBM, Pune clinic, you&apos;re not just another appointment; you&apos;re a person with real concerns, goals, and emotions. We take time to understand your skin, your story, and your comfort zone, tailoring every plan with honesty and empathy.
                </span>
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-5 sm:leading-6 md:leading-6 lg:leading-6 text-[#333333]">
                <span className="text-[#333333] font-medium">
                  Whether you&apos;re here for a quick glow-up or a long-term transformation, The Skin Firm is where science meets soul, and skincare becomes self-care.
                </span>
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}