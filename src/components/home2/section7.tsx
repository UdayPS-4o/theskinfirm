"use client";

import React from "react";
import { Users, ShieldCheck, UserCheck, CheckCircle2, Star, Sparkles, Heart } from "lucide-react";
import { AnimatedContent, StaggeredChildren, StaggerItem } from "@/components/shared/animated-content";

const content = {
    title: "Why Choose Us",
    paragraphs: [
        "If you're looking for a qualified Dermatologist and Skin Specialist in the NIBM, Kondhwa or Undri area, The Skin Firm offers medically supervised skin, hair and laser treatments designed to deliver visible and lasting results.",
        "At our clinic, treatments are customized by a Dermatologist based on your skin type, concern and lifestyle. We focus on safe, gentle and result-oriented care in a comfortable and transparent environment.",
        "We believe in combining medical expertise with aesthetic care to restore your skin's natural health and glow - without over-treating or over-promising."
    ],
    points: [
        { icon: Users, text: "Over 5,000+ Happy Clients" },
        { icon: ShieldCheck, text: "US-FDA Approved Equipment" },
        { icon: UserCheck, text: "Personalized Consultations" },
        { icon: CheckCircle2, text: "Proven & Safe Results" },
        { icon: Star, text: "Trained & Certified Medical Experts" },
    ],
    cta: "Book your consultation with our Dermatologist today"
};

export const Section7Home2 = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedContent>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-[#333333] mb-6">{content.title}</h2>
                        <p className="text-[#6C6C6C] max-w-3xl mx-auto text-lg">{content.paragraphs[0]}</p>
                    </div>
                </AnimatedContent>

                <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        <StaggerItem className="bg-[#F8F4EB] p-8 rounded-3xl h-full flex flex-col justify-center">
                            <p className="text-[#6C6C6C] italic leading-relaxed">&ldquo;{content.paragraphs[2]}&rdquo;</p>
                        </StaggerItem>
                        <StaggerItem className="bg-white border border-[#F8F4EB] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                            <Users className="text-[#D4A380] mb-4" size={32} />
                            <h3 className="text-lg font-bold text-[#333333]">{content.points[0].text}</h3>
                        </StaggerItem>
                    </div>

                    {/* Middle Column (Tall) */}
                    <StaggerItem className="bg-[#4A4036] p-8 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A380]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <Sparkles className="text-[#D4A380] mb-6" size={48} />
                            <h3 className="text-2xl font-bold mb-4">Excellence in Dermatology</h3>
                            <p className="text-gray-300 mb-8">{content.paragraphs[1]}</p>
                            <div className="space-y-4">
                                {content.points.slice(1, 4).map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#D4A380]" size={20} />
                                        <span className="text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="mt-8 w-full bg-white text-[#333333] py-3 rounded-xl font-bold hover:bg-[#D4A380] hover:text-white transition-colors">
                            Book Now
                        </button>
                    </StaggerItem>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        <StaggerItem className="bg-white border border-[#F8F4EB] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                            <Star className="text-[#D4A380] mb-4" size={32} />
                            <h3 className="text-lg font-bold text-[#333333]">{content.points[4].text}</h3>
                        </StaggerItem>
                        <StaggerItem className="bg-[#F8F4EB] p-8 rounded-3xl h-full flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#D4A380] mb-4 shadow-sm">
                                <Heart size={32} fill="#D4A380" />
                            </div>
                            <p className="text-[#333333] font-medium">Trusted by thousands for safe & effective care.</p>
                        </StaggerItem>
                    </div>
                </StaggeredChildren>
            </div>
        </section>
    );
};

