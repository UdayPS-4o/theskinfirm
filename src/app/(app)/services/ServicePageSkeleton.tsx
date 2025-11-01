"use client";

import React from "react";
import { motion } from "framer-motion";

type TabKey = "skin" | "hair" | "laser";

const CardSkeleton: React.FC = () => (
  <div className="bg-white border border-[color:var(--color-border-light)] rounded-[10px] p-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full">
    <div className="flex gap-[16px] items-start">
      <div className="w-[140px] h-[140px] flex-shrink-0 rounded-[8px] overflow-hidden relative skeleton-shimmer"></div>
      <div className="flex-1 flex flex-col justify-start">
        <div className="h-[20px] skeleton-shimmer rounded w-3/4 mb-[8px]"></div>
        <div className="h-[18px] skeleton-shimmer rounded w-full mb-[4px]"></div>
        <div className="h-[18px] skeleton-shimmer rounded w-5/6 mb-[12px]"></div>
        <div className="flex items-center gap-[6px]">
          <div className="h-[16px] skeleton-shimmer rounded w-1/4"></div>
        </div>
      </div>
    </div>
  </div>
);

const SectionSkeleton: React.FC = () => (
  <div className="mb-[20px] last:mb-0">
    <div className="bg-white border border-[color:var(--color-border-light)] rounded-[10px] p-[26px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full">
      <div className="flex items-center justify-between">
        <div className="h-[24px] skeleton-shimmer rounded w-1/3"></div>
        <div className="w-[30px] h-[30px] skeleton-shimmer rounded"></div>
      </div>
      <div className="mt-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  </div>
);

const ServicePageSkeleton: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[color:var(--color-light-background)] overflow-x-hidden">
      <main className="flex-1 w-full">
        <section className="bg-white w-full">
          <div className="sticky top-0 z-10 bg-white py-8 sm:py-12 md:py-16 !pb-0 mt-[-20px]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="wrapper">
                <div className="flex flex-col gap-2 sm:gap-3 items-center w-full max-w-2xl mx-auto mb-8 sm:mb-10">
                  <div className="h-[52px] skeleton-shimmer rounded w-2/3"></div>
                </div>
                <div className="flex w-full mx-auto mb-6 sm:mb-8 md:mb-10 relative">
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[color:var(--color-light-border-alt)]"></div>
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 items-center flex-1 relative w-full pb-3 sm:pb-4">
                    <div className="h-[28px] skeleton-shimmer rounded w-1/2"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[color:var(--color-primary-brown)]"></div>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full pb-3 sm:pb-4">
                    <div className="h-[28px] skeleton-shimmer rounded w-1/2"></div>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center flex-1 relative w-full pb-3 sm:pb-4">
                    <div className="h-[28px] skeleton-shimmer rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">
            <div className="flex flex-col gap-[20px] w-full">
              <SectionSkeleton />
              <SectionSkeleton />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicePageSkeleton;
