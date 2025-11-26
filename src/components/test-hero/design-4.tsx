"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { MaxWidthWrapper } from "@/components/layout/max-width";

export const Design4 = () => {
    return (
        <div className="w-full bg-[#FBEDE4] py-12 lg:py-20">
            <MaxWidthWrapper>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="w-16 h-1 bg-[#D4A380]" />
                        <h1 className="text-[#4A4036] text-4xl lg:text-6xl font-light tracking-wide uppercase">
                            Where Skin Meets <br />
                            <span className="font-serif normal-case italic font-medium block mt-2">Science & Sophistication</span>
                        </h1>
                        <p className="text-[#606060] text-lg leading-relaxed max-w-md">
                            Experience advanced dermatology and aesthetic treatments at The Skin Firm, led by renowned skin specialist Dr. Karishma Singh.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <Button className="rounded-none bg-[#4A4036] hover:bg-[#5C5148] text-white px-10 py-7 text-lg h-auto transition-all hover:px-12">
                                Book Consultation
                            </Button>
                            <Button variant="outline" className="rounded-none border-[#4A4036] text-[#4A4036] hover:bg-[#4A4036] hover:text-white px-10 py-7 text-lg h-auto bg-transparent transition-all">
                                Explore Services <ArrowUpRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center gap-4 text-sm font-medium text-[#606060]">
                            <div className="flex -space-x-2">
                                {/* Mock avatars */}
                                <div className="w-8 h-8 rounded-full bg-gray-300 border border-white" />
                                <div className="w-8 h-8 rounded-full bg-gray-400 border border-white" />
                                <div className="w-8 h-8 rounded-full bg-gray-500 border border-white" />
                            </div>
                            <p>Trusted by 2,000+ clients across Pune</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] max-w-md mx-auto">
                            {/* Arch Shape Mask */}
                            <div className="absolute inset-0 rounded-t-[200px] overflow-hidden border-[8px] border-white shadow-2xl">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    src="/theskinfirm.mp4"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A380] rounded-full -z-10 opacity-50 blur-2xl" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FBEDE4] border-2 border-[#D4A380] rounded-full -z-10" />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};
