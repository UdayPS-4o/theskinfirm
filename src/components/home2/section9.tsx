"use client";

import React from "react";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedContent } from "@/components/shared/animated-content";

// Content Data - Updated locations
const content = {
    title: "Success Stories",
    subtitle: "Real Stories from Real Clients",
    testimonials: [
        {
            name: "Wankam. Konyak",
            review: "The Skin Firm has been a complete game changer for my confidence. The personalized approach to my skin concerns has delivered results I never thought were possible.",
            location: "Pune"
        },
        {
            name: "Meghna. B",
            review: "I had great results with my laser hair reduction treatment here. The process was surprisingly comfortable, and the staff made sure I understood the aftercare, leading to fantastic results.",
            location: "Undri, Pune"
        },
        {
            name: "Neha Singh",
            review: "The level of care and professionalism at this clinic is truly outstanding. Keep doing the good work; it's rare to find a team so dedicated to their clients' well-being.",
            location: "Koregaon Park, Pune"
        },
        {
            name: "Hritika Shegaokar",
            review: "Dr. Karishma truly worked magic on my skin. Her treatment plan cleared up my persistent issues and has given me a glow and a boost of confidence I haven't felt in years.",
            location: "Pune"
        },
        {
            name: "Shazia Misquitta",
            review: "The clinic is exceptionally hygienic and the entire team operates with such a high level of professionalism. It's very reassuring to know you're in a clean and safe environment for your treatments.",
            location: "NI BM, Pune"
        }
    ]
};

// ---------------------------------------------------
// Design 2 Style in Carousel
// ---------------------------------------------------
export const Section9Home2 = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    return (
        <section className="w-full bg-white py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedContent>
                    <div className="text-center mb-16">
                        <span className="text-[#D4A380] font-semibold uppercase text-sm tracking-wider">{content.subtitle}</span>
                        <h2 className="mt-2 text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
                    </div>
                </AnimatedContent>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    plugins={[plugin.current]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 py-4">
                        {content.testimonials.map((testimonial, idx) => (
                            <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-[#F8F4EB] rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-[#D4A380] h-full flex flex-col">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-[#EC7754] text-[#EC7754]" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{testimonial.review}</p>
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
};
