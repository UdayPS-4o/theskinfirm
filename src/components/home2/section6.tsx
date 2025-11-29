"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Award, Calendar, TrendingUp } from "lucide-react";
import { AnimatedContent, StaggeredChildren, StaggerItem } from "@/components/shared/animated-content";

const content = {
    headline: "Meet Dr. Karishma Singh - Pune's Trusted Skin Specialist",
    highlights: [
        "Skin Specialist",
        "Certified in Aesthetic & Laser Medicine",
        "10+ Years of Experience",
        "Thousands of Successful Treatments",
    ],
    cta: "Know More About Dr. Karishma Singh",
};

const DoctorImage = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`relative overflow-hidden bg-[#e8dcd0] ${className}`} style={style}>
        <Image
            src="/images/dr/Karishma_Singh.png"
            alt="Dr. Karishma Singh"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
        />
    </div>
);

export const Section6Home2 = () => {
    return (
        <section className="w-full bg-[#F8F4EB]/30 py-16 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Image */}
                    <AnimatedContent className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#D4A380]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                            <DoctorImage className="w-full h-full" />
                        </div>
                    </AnimatedContent>

                    {/* Right Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <AnimatedContent delay={0.2}>
                            <span className="inline-block text-[#C17A58] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                                Meet The Expert
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-[#333333] leading-tight">
                                {content.headline}
                            </h2>
                        </AnimatedContent>

                        <StaggeredChildren className="flex flex-col gap-4 max-w-lg mx-auto lg:mx-0" staggerDelay={0.1}>
                            {content.highlights.map((item, idx) => {
                                const icons = [Stethoscope, Award, Calendar, TrendingUp];
                                const Icon = icons[idx];
                                return (
                                    <StaggerItem key={idx} className="flex items-center gap-4 bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-8 h-8 rounded-full bg-[#F8F4EB] flex items-center justify-center text-[#D4A380]">
                                            <Icon size={16} />
                                        </div>
                                        <span className="text-[#333333] font-medium">{item}</span>
                                    </StaggerItem>
                                );
                            })}
                        </StaggeredChildren>

                        <AnimatedContent delay={0.6}>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <Link href="/about-us" className="text-[#D4A380] font-bold text-lg hover:text-[#333333] transition-colors flex items-center gap-2">
                                    {content.cta}
                                </Link>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </section>
    );
};
