"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Star, Quote, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Content Data - Real testimonials from the site
const content = {
    title: "Success Stories",
    subtitle: "Real Stories from Real Clients",
    testimonials: [
        {
            name: "Wankam. Konyak",
            review: "The Skin Firm has been a complete game changer for my confidence. The personalized approach to my skin concerns has delivered results I never thought were possible.",
            location: "Mumbai"
        },
        {
            name: "Meghna. B",
            review: "I had great results with my laser hair reduction treatment here. The process was surprisingly comfortable, and the staff made sure I understood the aftercare, leading to fantastic results.",
            location: "Mumbai"
        },
        {
            name: "Neha Singh",
            review: "The level of care and professionalism at this clinic is truly outstanding. Keep doing the good work; it's rare to find a team so dedicated to their clients' well-being.",
            location: "Mumbai"
        },
        {
            name: "Hritika Shegaokar",
            review: "Dr. Karishma truly worked magic on my skin. Her treatment plan cleared up my persistent issues and has given me a glow and a boost of confidence I haven't felt in years.",
            location: "Mumbai"
        },
        {
            name: "Shazia Misquitta",
            review: "The clinic is exceptionally hygienic and the entire team operates with such a high level of professionalism. It's very reassuring to know you're in a clean and safe environment for your treatments.",
            location: "Mumbai"
        }
    ]
};

// ---------------------------------------------------
// Design 1: Classic Carousel with Background
// ---------------------------------------------------
const Design1 = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="w-full bg-[#F8F4EB] py-16 lg:py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#D4A380 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-16 text-center">{content.title}</h2>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {content.testimonials.map((testimonial, index) => (
                                <div className="flex-[0_0_100%] min-w-0 px-4" key={index}>
                                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center relative">
                                        <Quote className="absolute top-8 left-8 text-[#D4A380]/20 w-16 h-16" />
                                        <div className="mb-6 flex justify-center">
                                            <div className="w-20 h-20 rounded-full bg-[#e8dcd0] flex items-center justify-center text-[#D4A380] font-bold text-2xl">
                                                {testimonial.name[0]}
                                            </div>
                                        </div>
                                        <p className="text-xl md:text-2xl text-[#333333] leading-relaxed mb-8 italic">&quot;{testimonial.review}&quot;</p>
                                        <div>
                                            <h4 className="text-lg font-bold text-[#333333]">{testimonial.name}</h4>
                                            <p className="text-[#EC7754] text-sm">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={scrollPrev} className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-[#333333] hover:text-[#EC7754] transition-colors hidden md:block">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={scrollNext} className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-[#333333] hover:text-[#EC7754] transition-colors hidden md:block">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 2: Grid of Cards
// ---------------------------------------------------
const Design2 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">{content.subtitle}</span>
                <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.testimonials.slice(0, 3).map((testimonial, idx) => (
                    <div key={idx} className="bg-[#F8F4EB] rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-[#D4A380]">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="fill-[#EC7754] text-[#EC7754]" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed min-h-[100px]">{testimonial.review}</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#e8dcd0] flex items-center justify-center text-[#D4A380] font-bold">
                                {testimonial.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#333333]">{testimonial.name}</h4>
                                <p className="text-xs text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 3: Gradient Cards Grid
// ---------------------------------------------------
const Design3 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-[#F8F4EB] to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                        <div className="flex mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={16} fill="#EC7754" className="text-[#EC7754]" />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-6 text-sm italic leading-relaxed">&quot;{testimonial.review}&quot;</p>
                        <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                            <div className="w-10 h-10 bg-[#EC7754] rounded-full flex items-center justify-center font-bold text-white">
                                {testimonial.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#333333]">{testimonial.name}</h4>
                                <p className="text-xs text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 4: Featured Testimonial (Split)
// ---------------------------------------------------
const Design4 = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F8F4EB] rounded-full -z-10" />
                        <div className="bg-[#F8F4EB] rounded-[3rem] p-8 md:p-12 relative">
                            <Quote className="text-[#EC7754] w-12 h-12 mb-6" />
                            <p className="text-xl md:text-2xl text-[#333333] font-medium leading-relaxed mb-8 transition-all duration-500">
                                &quot;{content.testimonials[activeIdx].review}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-white shadow-sm text-[#D4A380] font-bold text-xl flex items-center justify-center">
                                    {content.testimonials[activeIdx].name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#333333] text-lg">{content.testimonials[activeIdx].name}</h4>
                                    <p className="text-[#6C6C6C]">{content.testimonials[activeIdx].location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">Testimonials</span>
                            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">Loved by our clients</h2>
                        </div>
                        <div className="space-y-4">
                            {content.testimonials.map((testimonial, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 ${activeIdx === idx ? 'bg-[#F8F4EB] border-l-4 border-[#EC7754]' : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#e8dcd0] flex items-center justify-center text-[#D4A380] font-bold text-sm">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <h4 className={`font-medium ${activeIdx === idx ? 'text-[#333333]' : 'text-gray-500'}`}>{testimonial.name}</h4>
                                        <p className="text-xs text-gray-400">{testimonial.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 5: Masonry Bubbles
// ---------------------------------------------------
const Design5 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {content.testimonials.map((testimonial, idx) => (
                <div key={idx} className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#e8dcd0] flex items-center justify-center text-[#D4A380] font-bold">
                            {testimonial.name[0]}
                        </div>
                        <div>
                            <h4 className="font-bold text-[#333333] text-sm">{testimonial.name}</h4>
                            <div className="flex text-[#EC7754]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">&quot;{testimonial.review}&quot;</p>
                </div>
            ))}
            {/* Rating card */}
            <div className="break-inside-avoid bg-[#D4A380] p-6 rounded-2xl text-white text-center flex flex-col items-center justify-center min-h-[200px]">
                <h3 className="text-2xl font-bold mb-2">4.9/5</h3>
                <p className="text-white/90 text-sm mb-4">Average Customer Rating</p>
                <div className="flex text-white gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-current" />)}
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 6: Large Quote Focus
// ---------------------------------------------------
const Design6 = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Quote className="text-[#EC7754] w-16 h-16 mx-auto mb-8 opacity-20" />

                <div className="min-h-[200px] flex items-center justify-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#333333] leading-tight transition-all duration-500">
                        &quot;{content.testimonials[activeIdx].review}&quot;
                    </h2>
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#F8F4EB] rounded-full flex items-center justify-center text-[#D4A380] font-bold text-2xl mb-4 border-2 border-white shadow-lg">
                        {content.testimonials[activeIdx].name.charAt(0)}
                    </div>
                    <h4 className="text-xl font-bold text-[#333333]">{content.testimonials[activeIdx].name}</h4>
                    <p className="text-gray-500 mb-8">{content.testimonials[activeIdx].location}</p>

                    <div className="flex gap-4">
                        {content.testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIdx === idx ? 'bg-[#EC7754] w-8' : 'bg-gray-200 hover:bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 7: Elegant Cards with Hover
// ---------------------------------------------------
const Design7 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
                <p className="text-gray-600 mt-4">Hear directly from our happy clients</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.testimonials.slice(0, 3).map((testimonial, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 rounded-full bg-[#F8F4EB] flex items-center justify-center text-[#EC7754] font-bold text-xl group-hover:scale-110 transition-transform">
                                {testimonial.name[0]}
                            </div>
                            <Quote className="text-[#D4A380]/20 w-10 h-10" />
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed italic">&quot;{testimonial.review}&quot;</p>
                        <div className="border-t border-gray-100 pt-4">
                            <h4 className="font-bold text-[#333333]">{testimonial.name}</h4>
                            <p className="text-xs text-gray-500">{testimonial.location}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button variant="outline" className="border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white">
                    View All Stories
                </Button>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Main Component to Render All Variations
// ---------------------------------------------------
export const Section9Variations = () => {
    return (
        <div className="flex flex-col gap-20 pb-20 bg-gray-50">
            <div className="text-center py-12 bg-white border-b sticky top-0 z-50 shadow-sm">
                <h1 className="text-3xl font-bold mb-2 text-[#333333]">Section 9 – Variations</h1>
                <p className="text-gray-500">Testimonials / Success Stories</p>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 1: Classic Carousel with Background
                </div>
                <Design1 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 2: Grid of Cards
                </div>
                <Design2 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 3: Gradient Cards Grid
                </div>
                <Design3 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 4: Featured Testimonial (Split)
                </div>
                <Design4 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 5: Masonry Bubbles
                </div>
                <Design5 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 6: Large Quote Focus
                </div>
                <Design6 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 7: Elegant Cards with Hover
                </div>
                <Design7 />
            </div>
        </div>
    );
};
