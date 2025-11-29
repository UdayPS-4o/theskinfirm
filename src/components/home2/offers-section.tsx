"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedContent } from "@/components/shared/animated-content";

const offers = [
    {
        id: 1,
        title: "Stubborn Acne Scars?",
        description: "They won't fade on their own. Expert treatment is here.",
        discount: "Upto 30% Off*",
        image: "/images/services/acne treatment.png",
    },
    {
        id: 2,
        title: "Worried About Ageing?",
        description: "Don't let fine lines define you. Reclaim your youth.",
        discount: "Free Skin Analysis*",
        image: "/images/services/anti aging.png",
    },
    {
        id: 3,
        title: "Dull, Lifeless Skin?",
        description: "Stop hiding behind makeup. Get your natural glow back.",
        discount: "Special Peel Packages*",
        image: "/images/services/chemical peel.png",
    },
    {
        id: 4,
        title: "Hairfall Anxiety?",
        description: "Watching your hair thin daily? We can stop it.",
        discount: "Get Flat 20% Off*",
        image: "/images/services/hair loss.png",
    },
];

export const OffersSection = () => {
    return (
        <section className="py-12 md:py-16 bg-[#FDFBF7]">
            <AnimatedContent>
                {/* Match the max-width with section3-5 (max-w-7xl) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8">
                        {offers.map((offer) => (
                            <div key={offer.id} className="bg-[#f9efe7] rounded-lg overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-all duration-300">
                                {/* Use h-full for image to fill entire card height */}
                                <div className="relative w-full md:w-1/2 h-32 xs:h-40 sm:h-48 md:h-full">
                                    <Image src={offer.image} alt={offer.title} fill className="object-cover" />
                                </div>
                                <div className="p-3 xs:p-4 md:p-6 lg:p-8 w-full md:w-1/2 flex flex-col justify-center items-start">
                                    <h3 className="text-sm xs:text-base md:text-lg lg:text-xl font-bold text-[#333] mb-1 md:mb-2 leading-tight whitespace-nowrap uppercase tracking-tight">{offer.title}</h3>
                                    <p className="text-[#666] text-[10px] xs:text-xs md:text-sm mb-2 md:mb-4 lg:mb-6 line-clamp-2 md:line-clamp-none font-medium">{offer.description}</p>
                                    <div className="mt-auto w-full border-t border-[#D4A380]/20 pt-2 md:pt-0 md:border-none">
                                        <p className="text-xs xs:text-sm md:text-base lg:text-lg font-black text-[#EC7754] mb-2 md:mb-3 lg:mb-4">{offer.discount}</p>
                                        <Link href="/contact" className="w-full block">
                                            <Button className="w-full bg-[#4A4036] hover:bg-[#EC7754] text-white rounded-sm transition-colors text-[10px] md:text-xs h-8 md:h-10 font-bold">BOOK NOW</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedContent>
        </section>
    );
};
