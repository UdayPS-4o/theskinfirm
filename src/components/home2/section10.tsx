"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedContent } from "@/components/shared/animated-content";
import { Button } from "@/components/ui/button";

// Pre-framed before/after images from gallery - randomly selected 6 different treatment types
const galleryImages = [
    "/gallery/2.png",   // Example: Acne treatment
    "/gallery/7.png",   // Example: Pigmentation
    "/gallery/12.png",  // Example: Skin therapy
    "/gallery/15.png",  // Example: Anti-aging
    "/gallery/18.png",  // Example: Laser treatment
    "/gallery/21.png",  // Example: Scar treatment
];

export const Section10Home2 = () => {
    return (
        <section className="w-full bg-[#F8F4EB] py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedContent>
                    <div className="text-center mb-16">
                        <span className="text-[#D4A380] font-medium tracking-wider uppercase text-sm block mb-2">
                            Before & After Gallery
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-[#333333] mb-6">
                            Real Transformations. Real Confidence.
                        </h2>
                    </div>
                </AnimatedContent>

                <Carousel
                    plugins={[Autoplay({ delay: 3000 })]}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {galleryImages.map((imagePath, idx) => (
                            <CarouselItem key={idx} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <Image
                                        src={imagePath}
                                        alt={`Before and After Transformation ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <AnimatedContent delay={0.3}>
                    <div className="flex justify-center mt-12">
                        <Link href="/gallery">
                            <Button
                                className="bg-[#4A4036] hover:bg-[#D4A380] text-white transition-colors duration-200"
                                size="lg"
                            >
                                Explore Full Gallery
                                <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
};
