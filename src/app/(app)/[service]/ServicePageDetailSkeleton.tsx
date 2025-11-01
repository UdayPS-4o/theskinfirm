"use client";

import React from "react";
import { MaxWidthWrapper } from "@/components/layout/max-width";

const ServicePageDetailSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="relative bg-gray-200 overflow-hidden">
        <div className="flex flex-col xl:flex-row min-h-[500px] xl:min-h-[600px]">
          <div className="relative z-10 flex items-center justify-center xl:w-1/2 px-4 md:px-8 lg:px-[50px] py-8 md:py-10">
            <div className="flex flex-col gap-4 md:gap-6 w-full">
              <div className="flex flex-col gap-2.5">
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                <div className="h-12 bg-gray-300 rounded w-3/4 mt-2"></div>
                <div className="h-8 bg-gray-300 rounded w-1/2 mt-4"></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mt-4">
                <div className="h-16 bg-gray-300 rounded-lg w-full sm:w-auto px-10"></div>
              </div>
            </div>
          </div>
          <div className="relative xl:w-1/2 min-h-[400px] xl:min-h-full bg-gray-300"></div>
        </div>
      </section>

      {/* Info Section Skeleton */}
      <section className="py-6 md:py-8 px-4 md:px-8">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-col gap-6">
            <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="space-y-4 mt-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bullet Points Section Skeleton */}
      <section className="py-6 md:py-8 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
          <div className="flex flex-wrap justify-center gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-[10px] p-4 md:p-5 bg-white flex flex-row items-center gap-3 md:gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="h-6 bg-gray-200 rounded flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-6 md:py-8 px-4 md:px-8">
        <MaxWidthWrapper>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
            <div className="rounded-xl w-full lg:w-[470px] h-[280px] lg:h-[360px] bg-gray-200"></div>
            <div className="w-full lg:w-[500px] space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default ServicePageDetailSkeleton;
