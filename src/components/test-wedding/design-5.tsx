"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Design5 = () => {
    return (
        <div className="w-full bg-[#F5F5F5] py-24 px-4 lg:px-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 order-2 lg:order-1">
                        <span className="text-[#999] text-sm tracking-[0.2em] uppercase mb-4 block">The Wedding Edit</span>
                        <h2 className="text-[#333] text-5xl lg:text-7xl font-light mb-8 leading-none">
                            Timeless <br />
                            <span className="font-serif italic">Elegance.</span>
                        </h2>
                        <p className="text-[#666] text-lg max-w-md mb-10 font-light">
                            Subtle enhancements for natural beauty. Let your confidence shine brighter than your jewelry.
                        </p>
                        <div className="flex items-center gap-8">
                            <Button variant="link" className="text-[#333] p-0 text-lg hover:no-underline group">
                                Book Consultation
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#333] mt-1"></span>
                            </Button>
                            <div className="w-12 h-[1px] bg-[#ccc]" />
                            <span className="text-[#999] text-sm">01 / 05 Packages</span>
                        </div>
                    </div>

                    <div className="flex-1 relative order-1 lg:order-2">
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                            <Image
                                src="/wedding-bride.png"
                                alt="Minimal Bride"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                            <div className="absolute -z-10 top-8 -right-8 w-full h-full border border-[#333] hidden lg:block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
