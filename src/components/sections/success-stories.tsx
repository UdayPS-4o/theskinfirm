"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import { MaxWidthWrapper } from "../layout/max-width";
const reviews = [
  {
    name: "Wankam. Konyak",
    review:
      "The Skin Firm has been a complete game changer for my confidence. The personalized approach to my skin concerns has delivered results I never thought were possible.",
  },
  {
    name: "Meghna. B",
    review:
      "I had great results with my laser hair reduction treatment here. The process was surprisingly comfortable, and the staff made sure I understood the aftercare, leading to fantastic results.",
  },
  {
    name: "Neha Singh",
    review:
      "The level of care and professionalism at this clinic is truly outstanding. Keep doing the good work; it's rare to find a team so dedicated to their clients' well-being.",
  },
  {
    name: "Hritika Shegaokar",
    review:
      "Dr. Karishma truly worked magic on my skin. Her treatment plan cleared up my persistent issues and has given me a glow and a boost of confidence I haven't felt in years.",
  },
  {
    name: "Shazia Misquitta",
    review:
      "The clinic is exceptionally hygienic and the entire team operates with such a high level of professionalism. It’s very reassuring to know you're in a clean and safe environment for your treatments.",
  },
];
export const SuccessStories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <MaxWidthWrapper>
      <div className="mx-4 lg:mx-24 mt-8">
        <h2 className="mt-5 text-center font-semibold text-5xl text-[#333333]">
          Success Stories
        </h2>
        <div className="relative w-full h-full bg-no-repeat pb-7 mt-16">
          <Image
            src="/success-stories-bg.svg"
            alt=""
            layout="fill"
            objectFit="contain"
            className="-z-10"
            loading="lazy"
          />
          <div className="flex items-center justify-center gap-x-8">
            <button
              className="text-4xl text-gray-400 hover:text-gray-600 transition-colors"
              onClick={scrollPrev}
            >
              ←
            </button>
            <div className="overflow-hidden w-full max-w-4xl" ref={emblaRef}>
              <div className="flex">
                {reviews.map((review, index) => (
                  <div className="flex-[0_0_100%] min-w-0 px-4" key={index}>
                    <div className="w-full bg-white rounded-lg shadow-lg border border-gray-100">
                      <div className="pt-12 pb-16 px-8 lg:px-16 text-center">
                        <p className="text-[#333333] text-lg lg:text-xl leading-relaxed mb-8">
                          {review.review}
                        </p>
                        <h4 className="text-[#333333] text-xl font-semibold">
                          {review.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="text-4xl text-gray-400 hover:text-gray-600 transition-colors"
              onClick={scrollNext}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
