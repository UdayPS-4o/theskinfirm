"use client";

import React from "react";
import Link from "next/link";

// Only the services mentioned by the user
const skinTreatments = [
  { title: "Acne Treatment", slug: "acne-treatment-in-pune" },
  { title: "Acne Scars", slug: "acne-scars-removal" },
  { title: "Pigmentation Treatment", slug: "pigmentation-treatment" },
  { title: "Melasma Treatment", slug: "melasma-treatment" },
  { title: "Chemical Peels", slug: "chemical-peel-in-pune" },
  { title: "Facials & Glow Boosters", slug: "hydrafacial-in-pune" },
  { title: "Anti-Aging Treatment", slug: "anti-ageing-treatment-in-pune" },
  { title: "Wrinkle Treatment", slug: "wrinkle-treatment-in-pune" },
  { title: "Lifting and Tightening", slug: "face-lift-treatment" },
  { title: "Skin Texture & Radiance", slug: "dark-circle-under-eye-treatment-in-pune" },
];

const hairTreatments = [
  { title: "Hair Fall & Thinning Solutions", slug: "hair-loss-treatment-in-pune" },
  { title: "Hair Mesotherapy", slug: "hair-mesotherapy" },
  { title: "QR678 Hair Growth Therapy", slug: "qr678-treatment" },
  { title: "GFC Hair Regrowth Treatment", slug: "gfc-therapy-in-pune" },
  { title: "Postnatal Hair Loss Solutions", slug: "postnatal-hair-loss-treatment" },
  { title: "PRP Hair Treatment", slug: "prp-hair-treatment" },
];

const laserTreatments = [
  { title: "Laser Hair Removal (Face & Body)", slug: "laser-hair-removal-in-pune" },
  { title: "Bikini Hair Removal", slug: "bikini-hair-removal" },
  { title: "Q-Switch Laser for Pigmentation", slug: "qswitch-nd-yag-laser" },
  { title: "Tattoo Removal", slug: "tattoo-removal" },
  { title: "CO₂ Laser Skin Rejuvenation", slug: "co2-laser-for-skin" },
  { title: "Beard Shaping & Grooming", slug: "laser-beard-shaping" },
];

export const ComprehensiveTreatments = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-gradient-to-b from-white to-[color:var(--color-light-background)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] leading-tight md:leading-[48px] text-[color:var(--color-dark-text)] font-semibold mb-4">
            Comprehensive Skin, Hair & Laser Treatments for NIBM Road Residents
          </h2>
          <p className="text-base md:text-lg text-[color:var(--color-light-text)] max-w-4xl mx-auto leading-relaxed">
            Whether your goal is to treat acne, pigmentation, or hair fall - or to simply enhance your skin&apos;s glow - 
            The Skin Firm offers personalized treatments designed to suit every skin type and concern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Skin Treatments */}
          <div className="group relative rounded-2xl bg-white p-6 md:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[color:var(--color-light-border)] hover:border-[color:var(--color-primary-brown)]/30 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[color:var(--color-light-border)]">
              <div className="w-10 h-10 rounded-xl bg-[color:var(--color-primary-brown)]/10 flex items-center justify-center group-hover:bg-[color:var(--color-primary-brown)]/20 transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[color:var(--color-primary-brown)]">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[color:var(--color-dark-text)]">
                Skin Treatments
              </h3>
            </div>
            <ul className="space-y-3">
              {skinTreatments.map((treatment, idx) => (
                <li key={idx}>
                  <Link 
                    href={`/${treatment.slug}`}
                    className="group/item flex items-center gap-3 text-sm md:text-base text-[color:var(--color-light-text)] hover:text-[color:var(--color-primary-brown)] transition-all duration-200 py-1.5 px-2 rounded-lg hover:bg-[color:var(--color-primary-brown)]/5"
                  >
                    <svg className="w-4 h-4 flex-shrink-0 text-[color:var(--color-primary-brown)] opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">{treatment.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hair Treatments */}
          <div className="group relative rounded-2xl bg-white p-6 md:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[color:var(--color-light-border)] hover:border-[color:var(--color-primary-brown)]/30 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[color:var(--color-light-border)]">
              <div className="w-10 h-10 rounded-xl bg-[color:var(--color-primary-brown)]/10 flex items-center justify-center group-hover:bg-[color:var(--color-primary-brown)]/20 transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[color:var(--color-primary-brown)]">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[color:var(--color-dark-text)]">
                Hair Treatments
              </h3>
            </div>
            <ul className="space-y-3">
              {hairTreatments.map((treatment, idx) => (
                <li key={idx}>
                  <Link 
                    href={`/${treatment.slug}`}
                    className="group/item flex items-center gap-3 text-sm md:text-base text-[color:var(--color-light-text)] hover:text-[color:var(--color-primary-brown)] transition-all duration-200 py-1.5 px-2 rounded-lg hover:bg-[color:var(--color-primary-brown)]/5"
                  >
                    <svg className="w-4 h-4 flex-shrink-0 text-[color:var(--color-primary-brown)] opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">{treatment.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Laser Treatments */}
          <div className="group relative rounded-2xl bg-white p-6 md:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[color:var(--color-light-border)] hover:border-[color:var(--color-primary-brown)]/30 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[color:var(--color-light-border)]">
              <div className="w-10 h-10 rounded-xl bg-[color:var(--color-primary-brown)]/10 flex items-center justify-center group-hover:bg-[color:var(--color-primary-brown)]/20 transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[color:var(--color-primary-brown)]">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[color:var(--color-dark-text)]">
                Laser Treatments
              </h3>
            </div>
            <ul className="space-y-3">
              {laserTreatments.map((treatment, idx) => (
                <li key={idx}>
                  <Link 
                    href={`/${treatment.slug}`}
                    className="group/item flex items-center gap-3 text-sm md:text-base text-[color:var(--color-light-text)] hover:text-[color:var(--color-primary-brown)] transition-all duration-200 py-1.5 px-2 rounded-lg hover:bg-[color:var(--color-primary-brown)]/5"
                  >
                    <svg className="w-4 h-4 flex-shrink-0 text-[color:var(--color-primary-brown)] opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">{treatment.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
