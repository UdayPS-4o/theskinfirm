"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MaxWidthWrapper } from "@/components/layout/max-width";

export const Design3 = () => {
    return (
        <div className="w-full bg-[#FBEDE4] py-12 lg:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f4e4db] rounded-l-[100px] -z-0 hidden lg:block" />

            <MaxWidthWrapper className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 z-20 mb-10 lg:mb-0">
                        <div className="bg-white/80 backdrop-blur-md p-8 lg:p-12 rounded-[2rem] shadow-xl border border-white/50">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A380]/10 text-[#D4A380] font-semibold text-sm mb-6 tracking-wide uppercase">
                                Premium Skincare
                            </span>
                            <h1 className="text-[#2D2D2D] text-3xl lg:text-5xl font-serif italic mb-6 leading-tight">
                                Where Skin Meets <br />
                                <span className="not-italic font-medium">Science & Sophistication</span>
                            </h1>
                            <p className="text-[#606060] mb-8 leading-relaxed">
                                Experience advanced dermatology and aesthetic treatments at The Skin Firm, led by renowned skin specialist Dr. Karishma Singh.
                            </p>

                            <div className="flex flex-col gap-4">
                                <Button className="w-full sm:w-fit rounded-xl bg-[#D4A380] hover:bg-[#c49270] text-white px-8 py-6 text-lg h-auto shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                                    Book a Consultation
                                </Button>
                                <Button variant="outline" className="w-full sm:w-fit rounded-xl border-2 border-[#D4A380] text-[#D4A380] hover:bg-[#D4A380]/5 px-8 py-6 text-lg h-auto bg-transparent">
                                    Explore Our Services
                                </Button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
                                    ))}
                                </div>
                                <p className="text-sm text-[#606060] font-medium">
                                    Trusted by <span className="text-[#2D2D2D] font-bold">2,000+ clients</span> across Pune
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5 lg:-ml-20 h-[400px] lg:h-[650px] relative z-10">
                        <div className="absolute inset-0 bg-[#D4A380] rounded-[2.5rem] rotate-3 opacity-20 transform scale-95" />
                        <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="/theskinfirm.mp4"
                            />

                            {/* Floating badge on video */}
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Certified</p>
                                    <p className="text-sm text-gray-900 font-bold">Specialists</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};
