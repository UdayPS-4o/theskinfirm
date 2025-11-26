"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const Design2 = () => {
    return (
        <div className="w-full bg-[#FBEDE4] h-screen flex flex-col lg:flex-row overflow-hidden">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 xl:p-20 order-2 lg:order-1">
                <div className="max-w-xl flex flex-col gap-6">
                    <h1 className="text-[#4A4036] text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
                        Where Skin Meets <br />
                        <span className="text-[#D4A380]">Science & Sophistication</span>
                    </h1>
                    <p className="text-[#606060] text-base lg:text-lg leading-relaxed">
                        Experience advanced dermatology and aesthetic treatments at The Skin Firm, led by renowned skin specialist Dr. Karishma Singh.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="rounded-full bg-[#4A4036] hover:bg-[#5C5148] text-white px-8 py-5 text-base lg:text-lg h-auto shadow-lg">
                            Book a Consultation
                        </Button>
                        <Button variant="ghost" className="rounded-full text-[#4A4036] hover:bg-[#4A4036]/5 px-8 py-5 text-base lg:text-lg h-auto underline underline-offset-4">
                            Explore Our Services
                        </Button>
                    </div>

                    <div className="flex items-center gap-3 text-[#4A4036] font-semibold bg-white/50 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="fill-[#D4A380] text-[#D4A380] h-4 w-4" />
                            ))}
                        </div>
                        <span className="text-sm">Trusted by 2,000+ clients</span>
                    </div>
                </div>
            </div>

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
