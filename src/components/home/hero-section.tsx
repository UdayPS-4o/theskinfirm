"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { VideoPlayer } from "@/components/shared/video-player";

export const HeroSection = () => {
    return (
        <div className="w-full bg-[#FBEDE4] min-h-screen lg:h-[90vh] flex flex-col lg:flex-row overflow-hidden">
            {/* Left Side - Text Content (60%) */}
            <div className="w-full lg:w-[60%] flex items-center justify-center px-6 pt-8 pb-4 lg:p-16 xl:p-20 order-2 lg:order-1">
                <div className="max-w-2xl flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8A7B70]/30 text-[#8A7B70] text-xs font-medium w-fit uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#D4A380]" />
                        Pune&apos;s Premier Skin Clinic
                    </div>

                    <h1 className="text-[#4A4036] text-5xl lg:text-[5rem] leading-[1.1] font-medium tracking-tight">
                        Where Skin Meets <br />
                        <span className="text-[#D4A380] font-serif italic">Science & Sophistication</span>
                    </h1>

                    <p className="text-[#606060] text-lg lg:text-xl leading-relaxed max-w-xl border-l-4 border-[#D4A380] pl-6">
                        Experience advanced dermatology and aesthetic treatments at The Skin Firm, led by renowned skin specialist <span className="text-[#4A4036] font-semibold whitespace-nowrap">Dr. Karishma Singh</span>.
                    </p>

                    <div className="flex flex-row gap-3 sm:gap-5 mt-4">
                        <Link href="/contact" className="flex-1 sm:flex-none">
                            <Button className="w-full sm:w-auto rounded-2xl bg-[#4A4036] hover:bg-[#5C5148] text-white px-6 py-6 text-base sm:px-8 sm:py-7 sm:text-lg h-auto shadow-xl shadow-[#4A4036]/10 whitespace-nowrap">
                                Book a Consultation
                            </Button>
                        </Link>
                        <Link href="/services" className="flex-1 sm:flex-none">
                            <Button variant="ghost" className="w-full sm:w-auto rounded-2xl text-[#4A4036] hover:bg-[#D4A380]/10 px-6 py-6 text-base sm:px-8 sm:py-7 sm:text-lg h-auto flex items-center justify-center sm:justify-start gap-2 sm:gap-3 whitespace-nowrap">
                                Explore Services
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>


                </div>
            </div>

            {/* Right Side - Video (40%) */}
            <div className="w-full lg:w-[40%] h-[45vh] lg:h-full relative order-1 lg:order-2 overflow-hidden">
                <VideoPlayer
                    src="/theskinfirm.mp4"
                    className="w-full h-full object-cover object-center"
                    objectPosition="center 40%"
                    posterImage="/finalframe.png"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBEDE4] to-transparent w-32 h-full pointer-events-none hidden lg:block" />
            </div>
        </div>
    );
};
