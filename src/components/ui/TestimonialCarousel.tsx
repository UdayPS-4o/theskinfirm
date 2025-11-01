"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { cn } from "@/lib/utils";

export const TestimonialCarousel = ({ items, isVisible }: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", updateSelectedIndex);
      return () => {
        emblaApi.off("select", updateSelectedIndex);
      };
    }
  }, [emblaApi, updateSelectedIndex]);

  return (
    <div className="w-full relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((text: any, index: number) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] p-4"
            >
              <div
                className={cn(
                  "relative bg-white p-6 md:p-8 rounded-2xl border border-[color:var(--color-light-border)] shadow-lg overflow-hidden transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 h-full",
                  {
                    "translate-y-0 opacity-100": isVisible,
                    "translate-y-10 opacity-0": !isVisible,
                  }
                )}
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
                  <div className="w-10 h-10 rounded-full bg-[color:var(--color-primary-brown)]/20 flex items-center justify-center text-lg font-semibold text-[color:var(--color-primary-brown)]">
                    {text.name.charAt(0).toUpperCase()}
                  </div>
                  <p className="font-semibold text-[color:var(--color-dark-text)]">
                    {text.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              {
                "bg-[color:var(--color-primary-brown)]": index === selectedIndex,
                "bg-gray-300": index !== selectedIndex,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
};
