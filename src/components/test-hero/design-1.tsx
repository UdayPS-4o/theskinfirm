"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { MaxWidthWrapper } from "@/components/layout/max-width";

export const Design1 = () => {
    return (
        <div className="w-full bg-[#FBEDE4] py-12 lg:py-20 overflow-hidden">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h1 className="text-[#8A7B70] text-4xl lg:text-6xl font-medium leading-tight font-serif italic">
                                Where Skin Meets <br />
                                <span className="not-italic">Science & Sophistication</span>
                            </h1>
                            <p className="text-[#A89689] text-lg lg:text-xl leading-relaxed max-w-lg">
                                Experience advanced dermatology and aesthetic treatments at The Skin Firm, led by renowned skin specialist Dr. Karishma Singh.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="rounded-full bg-[#D4A380] hover:bg-[#c49270] text-white px-8 py-6 text-lg h-auto">
                                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" className="rounded-full border-[#8A7B70] text-[#8A7B70] hover:bg-[#8A7B70]/10 px-8 py-6 text-lg h-auto bg-transparent">
                                Explore Our Services
                            </Button>
                        </div>

                        <div className="flex items-center gap-2 text-[#8A7B70] font-medium pt-2">
                            <Star className="fill-[#D4A380] text-[#D4A380] h-5 w-5" />
                            <span>Trusted by 2,000+ clients across Pune</span>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 h-[400px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="/theskinfirm.mp4"
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};
