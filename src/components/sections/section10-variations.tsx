"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MoveHorizontal, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Content Data - Based on uploaded gallery image
const content = {
    title: "Real Transformations. Real Confidence.",
    cta: "View Full Gallery",
    // Note: These images already contain both before and after in a single image
    galleryItems: [
        {
            title: "Acne Scars Treatment",
            category: "Skin",
            image: "/gallery.png" // This is the full gallery image that shows multiple transformations
        }
    ]
};

// Individual treatment transformations (for variations that need separate images)
const treatments = [
    {
        title: "Acne Scars Treatment",
        category: "Skin Treatment"
    },
    {
        title: "Acne Marks Treatment",
        category: "Skin Treatment"
    },
    {
        title: "Under Eye Treatment",
        category: "Aesthetics"
    },
    {
        title: "Pigmentation Treatment",
        category: "Skin Treatment"
    },
    {
        title: "Hair Restoration",
        category: "Hair Treatment"
    },
    {
        title: "Anti-Ageing Treatment",
        category: "Aesthetics"
    }
];

// ---------------------------------------------------
// Design 1: Full Gallery View
// ---------------------------------------------------
const Design1 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-6">{content.title}</h2>
                <Button className="bg-[#333333] text-white hover:bg-[#EC7754]">
                    {content.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                    src="/gallery.png"
                    alt="Before and After Gallery"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                />
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 2: Grid Layout with Categories
// ---------------------------------------------------
const Design2 = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "Skin Treatment", "Aesthetics", "Hair Treatment"];

    return (
        <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
                    <Button variant="outline" className="hidden md:flex border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white">
                        {content.cta}
                    </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-[#333333] text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
                    <Image
                        src="/gallery.png"
                        alt="Before and After Transformations"
                        width={1920}
                        height={1080}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 3: Clean Layout with Header
// ---------------------------------------------------
const Design3 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-6">{content.title}</h2>
                    <p className="text-gray-600 mb-8">Witness the incredible transformations achieved by our expert dermatologists at The Skin Firm.</p>
                    <Button className="w-full md:w-auto bg-[#EC7754] hover:bg-[#D4A380] text-white">
                        {content.cta}
                    </Button>
                </div>

                <div className="lg:col-span-8">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/gallery.png"
                            alt="Treatment Results Gallery"
                            width={1920}
                            height={1080}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 4: Bordered Cards
// ---------------------------------------------------
const Design4 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">Our Results</span>
                <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-4 border-[#D4A380]/20">
                <Image
                    src="/gallery.png"
                    alt="Before After Gallery"
                    width={1920}
                    height={1080}
                    className="w-full h-auto rounded-xl"
                />

                <div className="mt-8 flex items-center justify-between">
                    <p className="text-gray-600">Swipe to see more transformations</p>
                    <Button variant="link" className="text-[#EC7754] font-bold">
                        View All Results <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 5: Elegant Minimal
// ---------------------------------------------------
const Design5 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-2">{content.title}</h2>
                    <p className="text-gray-500">See the difference our treatments make</p>
                </div>
                <Button variant="outline" className="border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white rounded-full px-8">
                    {content.cta}
                </Button>
            </div>

            <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/gallery.png"
                        alt="Gallery"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                    />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-2xl" />
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 6: Centered with Background
// ---------------------------------------------------
const Design6 = () => (
    <section className="w-full bg-gradient-to-b from-[#F8F4EB] to-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-6">{content.title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Experience the expertise of Dr. Karishma Singh through these remarkable before and after transformations.
                </p>
            </div>

            <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl">
                <Image
                    src="/gallery.png"
                    alt="Patient Transformations"
                    width={1920}
                    height={1080}
                    className="w-full h-auto rounded-2xl"
                />
            </div>

            <div className="mt-12 text-center">
                <Button className="bg-[#EC7754] text-white hover:bg-[#D4A380] rounded-full px-8 py-6 text-lg">
                    Book Your Consultation
                </Button>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 7: Full Width Showcase
// ---------------------------------------------------
const Design7 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-full px-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-4">{content.title}</h2>
                    <p className="text-gray-600">Proven results from our expert treatments</p>
                </div>
            </div>

            <div className="relative">
                <Image
                    src="/gallery.png"
                    alt="Before After Results"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                />

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <Button className="bg-white text-[#333333] hover:bg-[#F8F4EB] shadow-lg rounded-full px-8">
                        {content.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {treatments.map((treatment, idx) => (
                        <div key={idx} className="text-center p-4 bg-[#F8F4EB] rounded-lg hover:bg-[#D4A380]/20 transition-colors cursor-pointer">
                            <h4 className="font-bold text-[#333333] text-sm mb-1">{treatment.title}</h4>
                            <p className="text-xs text-gray-500">{treatment.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Main Component to Render All Variations
// ---------------------------------------------------
export const Section10Variations = () => {
    return (
        <div className="flex flex-col gap-20 pb-20 bg-gray-50">
            <div className="text-center py-12 bg-white border-b sticky top-0 z-50 shadow-sm">
                <h1 className="text-3xl font-bold mb-2 text-[#333333]">Section 10 – Variations</h1>
                <p className="text-gray-500">Before & After Gallery</p>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 1: Full Gallery View
                </div>
                <Design1 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 2: Grid Layout with Categories
                </div>
                <Design2 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 3: Clean Layout with Header
                </div>
                <Design3 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 4: Bordered Cards
                </div>
                <Design4 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 5: Elegant Minimal
                </div>
                <Design5 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 6: Centered with Background
                </div>
                <Design6 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 7: Full Width Showcase
                </div>
                <Design7 />
            </div>
        </div>
    );
};
