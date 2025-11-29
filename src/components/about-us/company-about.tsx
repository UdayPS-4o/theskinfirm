"use client";

import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../layout/max-width";

export default function CompanyAboutSection() {
  return (
    <section className="py-12 md:py-20 bg-[#FDFBF7]">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center text-center gap-8 md:gap-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#4A4A4A]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            THE SKIN FIRM
          </h2>
          <div className="w-16 h-1 md:w-24 bg-[#D4A373] rounded-full"></div>
          <blockquote className="text-xl md:text-2xl lg:text-3xl italic text-[#6B6B6B] w-full max-w-5xl px-4">
            &quot;Where Skin Meets Science, and Self-Care Feels Like Home&quot;
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left text-base md:text-lg lg:text-xl text-[#555] leading-relaxed">
            <div className="space-y-4 md:space-y-6">
              <p>
                At <span className="text-black font-medium">The Skin Firm</span>, we believe that great skin isn&apos;t just about looking good—it&apos;s about feeling deeply confident in your skin.
              </p>
              <p>
                Founded in Pune by <span className="text-black font-medium">Dr. Karishma Singh</span>, The Skin Firm is a modern dermatology and aesthetic clinic rooted in precision care, ethical practices, and personalised results. Every treatment here is designed to go beyond the surface, addressing not just the symptom, but the story behind your skin.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p>
                We combine <span className="text-black font-medium">cutting-edge technology</span> with a warm, welcoming environment where every client feels heard, valued, and cared for. From advanced laser treatments to gentle skincare solutions, we&apos;re here to help you achieve the <span className="text-black font-medium">healthy, radiant skin</span> you deserve.
              </p>
              <p>
                We specialise in advanced dermatological and aesthetic treatments including laser therapies, skin rejuvenation, anti-ageing solutions, acne and pigmentation correction, and hair restoration. Our clinic blends medical-grade technology with an artistic understanding of beauty, ensuring your results look natural, not overdone.
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-10 relative group w-full max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5C4] via-[#F5E6D3] to-[#E8D5C4] rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative px-6 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5C4] rounded-2xl shadow-lg">
              <p className="text-[#8C6B4A] font-semibold tracking-wide text-base md:text-lg lg:text-xl">
                But what truly sets us apart is the way we treat people
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
