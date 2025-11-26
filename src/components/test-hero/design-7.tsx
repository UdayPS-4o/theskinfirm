"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Design7 = () => {
    return (
        <div className="w-full bg-[#FBEDE4] h-screen flex flex-col lg:flex-row overflow-hidden">
            {/* Left Side - Text Content (50%) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 xl:p-20 order-2 lg:order-1">
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
                        Experience advanced dermatology and aesthetic treatments at The Skin Firm, led by renowned skin specialist <span className="text-[#4A4036] font-semibold">Dr. Karishma Singh</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mt-4">
                        <Button className="rounded-2xl bg-[#4A4036] hover:bg-[#5C5148] text-white px-8 py-7 text-lg h-auto shadow-xl shadow-[#4A4036]/10">
                            Book a Consultation
                        </Button>
                        <Button variant="ghost" className="rounded-2xl text-[#4A4036] hover:bg-[#D4A380]/10 px-8 py-7 text-lg h-auto flex items-center gap-3">
                            Explore Services
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>

                </div>
            </div>

            {/* Right Side - Video (50%) */}
            <div className="w-full lg:w-1/2 h-[40vh] lg:h-full relative order-1 lg:order-2">
                <video
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 40%' }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/theskinfirm.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBEDE4] to-transparent lg:w-32 w-full h-32 lg:h-full lg:bg-gradient-to-r lg:from-[#FBEDE4] lg:to-transparent top-0 lg:top-0 left-0 pointer-events-none opacity-50 lg:opacity-100" />
            </div>
        </div>
    );
};
