"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";
import Image from "next/image";

export const Design4 = () => {
    return (
        <div className="w-full bg-[#FFFBF7] py-20 px-4 lg:px-20">
            <div className="container mx-auto max-w-6xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Image Area */}
                    <div className="lg:col-span-7 relative">
                        <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/groom-putting-ring-bride-finger.jpg"
                                alt="Bridal Prep"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden lg:block">
                            <div className="flex items-center gap-2 mb-2">
                                <Star className="w-5 h-5 fill-[#D4A380] text-[#D4A380]" />
                                <span className="font-bold text-[#4A4036]">Top Rated</span>
                            </div>
                            <p className="text-sm text-[#606060]">Voted Best Bridal Skincare Clinic in Pune</p>
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="lg:col-span-5 lg:-ml-12 z-10">
                        <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl border border-[#F0E6DE]">
                            <h2 className="text-[#4A4036] text-3xl lg:text-4xl font-serif font-bold mb-6">
                                Pre-Wedding <br />
                                <span className="text-[#D4A380]">Perfection</span>
                            </h2>
                            <p className="text-[#606060] mb-8 leading-relaxed">
                                From chemical peels to laser toning, our customized 3-month bridal bootcamps ensure you are camera-ready.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-[#4A4036]">
                                    <div className="w-2 h-2 rounded-full bg-[#D4A380]" />
                                    Customized Skin Routine
                                </li>
                                <li className="flex items-center gap-3 text-[#4A4036]">
                                    <div className="w-2 h-2 rounded-full bg-[#D4A380]" />
                                    Diet & Nutrition Guidance
                                </li>
                                <li className="flex items-center gap-3 text-[#4A4036]">
                                    <div className="w-2 h-2 rounded-full bg-[#D4A380]" />
                                    Last Minute Glow-Ups
                                </li>
                            </ul>
                            <Button className="w-full bg-[#4A4036] text-white rounded-xl py-6 text-lg hover:bg-[#5C5148]">
                                <Calendar className="w-5 h-5 mr-2" />
                                View Packages
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
