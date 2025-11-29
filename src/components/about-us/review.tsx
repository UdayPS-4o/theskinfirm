"use client";

import React from "react";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  review: string;
}

export default function ReviewSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="w-full bg-white pb-16 pt-8 lg:pb-20 lg:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-4">
            {testimonials.map((testimonial, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-[#F8F4EB] rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-[#D4A380] h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#EC7754] text-[#EC7754]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {testimonial.review}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#e8dcd0] flex items-center justify-center text-[#D4A380] font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#333333]">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
