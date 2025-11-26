"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { MaxWidthWrapper } from "@/components/layout/max-width";

export const Design5 = () => {
    return (
        <div className="w-full bg-[#FBEDE4] py-12 lg:py-24 border-b border-[#D4A380]/20">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-7 flex flex-col gap-8 pr-0 lg:pr-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8A7B70]/30 text-[#8A7B70] text-xs font-medium w-fit uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-[#D4A380]" />
                            Pune's Premier Skin Clinic
                        </div>

                        <h1 className="text-[#4A4036] text-5xl lg:text-[5rem] leading-[1.1] font-medium tracking-tight">
                            Where Skin Meets <br />
                            <span className="text-[#D4A380] font-serif italic">Science.</span>
                        </h1>

                        <p className="text-[#606060] text-lg lg:text-xl leading-relaxed max-w-xl border-l-4 border-[#D4A380] pl-6">
                            Experience advanced dermatology and aesthetic treatments at The Skin Firm, led by renowned skin specialist <span className="text-[#4A4036] font-semibold">Dr. Karishma Singh</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 mt-4">
                            <Button className="rounded-2xl bg-[#4A4036] hover:bg-[#5C5148] text-white px-8 py-7 text-lg h-auto shadow-xl shadow-[#4A4036]/10">
                                Book a Consultation
                            </Button>
                            <Button variant="ghost" className="rounded-2xl text-[#4A4036] hover:bg-[#D4A380]/10 px-8 py-7 text-lg h-auto flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#D4A380] flex items-center justify-center text-white">
                                    <Play className="w-3 h-3 fill-current" />
                                </div>
                                Watch Our Story
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-[#4A4036]">2k+</span>
                                <span className="text-xs text-[#606060] uppercase tracking-wide">Happy Clients</span>
                            </div>
                            <div className="w-px h-10 bg-[#D4A380]/30" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-[#4A4036]">15+</span>
                                <span className="text-xs text-[#606060] uppercase tracking-wide">Years Exp.</span>
                            </div>
                            <div className="w-px h-10 bg-[#D4A380]/30" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-[#4A4036]">4.9</span>
                                <span className="text-xs text-[#606060] uppercase tracking-wide">Google Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Video Content */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative w-full aspect-[9/16] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="/theskinfirm.mp4"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <p className="font-serif italic text-lg opacity-90">"Reveal your most radiant self"</p>
                            </div>
                        </div>

                        {/* Decorative background blob */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D4A380] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#FBEDE4] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10" />
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};
