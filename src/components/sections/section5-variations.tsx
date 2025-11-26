"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MoveHorizontal, Check, Sparkles, Plus, Minus } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Content Data
const content = {
    overline: "Our Main Services",
    title: "Our Signature Treatments",
    items: [
        {
            title: "Acne & Acne Scar Treatment",
            description: "Clear your skin and restore confidence with our advanced acne solutions.",
            imageBefore: "/images/services/acne-before.png",
            imageAfter: "/images/services/acne-after.png",
            link: "/services/acne"
        },
        {
            title: "Skin Brightening & Glow Therapies",
            description: "Reveal your inner radiance with our specialized brightening treatments.",
            imageBefore: "/images/services/glow-before.png",
            imageAfter: "/images/services/glow-after.png",
            link: "/services/brightening"
        },
        {
            title: "Anti-Ageing & Botox",
            description: "Turn back time and smooth fine lines for a youthful appearance.",
            imageBefore: "/images/services/anti-ageing-before.png",
            imageAfter: "/images/services/anti-ageing-after.png",
            link: "/services/anti-ageing"
        },
        {
            title: "Pigmentation Correction",
            description: "Even out your skin tone and reduce dark spots effectively.",
            imageBefore: "/images/services/pigmentation-before.png",
            imageAfter: "/images/services/pigmentation-after.png",
            link: "/services/pigmentation"
        },
        {
            title: "Hair Fall & PRP Therapy",
            description: "Stimulate hair growth and strengthen your scalp health.",
            imageBefore: "/images/services/hair-before.png",
            imageAfter: "/images/services/hair-after.png",
            link: "/services/hair-fall"
        }
    ]
};

// Helper for Before/After Placeholder
const BeforeAfterPlaceholder = ({ className = "", label = "Image", color = "#D4A380" }: { className?: string, label?: string, color?: string }) => (
    <div className={`bg-[#e8dcd0] relative overflow-hidden flex items-center justify-center ${className}`}>
        <span className="font-medium tracking-widest uppercase text-xs z-10 px-2 py-1 bg-white/80 rounded-sm" style={{ color: color }}>{label}</span>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`, backgroundSize: "10px 10px" }} />
    </div>
);

// ---------------------------------------------------
// Design 1: Classic Split Cards (Slider Simulation)
// ---------------------------------------------------
const Design1 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">{content.overline}</span>
                <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="relative h-64 w-full">
                            <div className="absolute inset-0 flex">
                                <BeforeAfterPlaceholder className="w-1/2 h-full border-r border-white" label="Before" />
                                <BeforeAfterPlaceholder className="w-1/2 h-full bg-[#D4A380]" label="After" color="#333" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-lg">
                                    <MoveHorizontal size={16} className="text-[#333333]" />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-[#333333] mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                            <Button variant="ghost" className="text-[#EC7754] hover:text-[#D4A380] hover:bg-transparent p-0 h-auto font-medium">
                                View Result <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 2: Hover Reveal Carousel
// ---------------------------------------------------
const Design2 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">{content.overline}</span>
                    <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
                </div>
                <Button variant="outline" className="hidden md:flex border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white mt-4 md:mt-0">
                    View All Services
                </Button>
            </div>

            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-4">
                    {content.items.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 z-10">
                                    <BeforeAfterPlaceholder className="w-full h-full" label="Before" />
                                </div>
                                <div className="absolute inset-0 z-0">
                                    <BeforeAfterPlaceholder className="w-full h-full bg-[#D4A380]" label="After" color="#333" />
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 3: Elegant List with Preview
// ---------------------------------------------------
const Design3 = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">{content.overline}</span>
                            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
                        </div>
                        <div className="space-y-2">
                            {content.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setActiveIdx(idx)}
                                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${activeIdx === idx ? 'bg-white border-[#EC7754] shadow-sm' : 'border-transparent hover:bg-white/50'}`}
                                >
                                    <h3 className={`text-lg font-semibold ${activeIdx === idx ? 'text-[#333333]' : 'text-gray-500'}`}>{item.title}</h3>
                                    {activeIdx === idx && (
                                        <p className="text-gray-600 text-sm mt-2 animate-fadeIn">{item.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7 relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        {content.items.map((item, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-700 flex ${activeIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <BeforeAfterPlaceholder className="w-1/2 h-full border-r border-white/20" label="Before" />
                                <BeforeAfterPlaceholder className="w-1/2 h-full bg-[#D4A380]" label="After" color="#333" />
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-lg text-sm font-semibold text-[#333333]">
                                    Real Patient Results
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 4: Flip Cards (New)
// ---------------------------------------------------
const Design4 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">{content.overline}</span>
                <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.items.map((item, idx) => (
                    <div key={idx} className="group h-[400px] perspective-1000">
                        <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                            {/* Front */}
                            <div className="absolute inset-0 backface-hidden bg-[#F8F4EB] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                                <div className="h-2/3 relative">
                                    <BeforeAfterPlaceholder className="w-full h-full" label="Before" />
                                </div>
                                <div className="h-1/3 p-6 flex flex-col justify-center items-center text-center">
                                    <h3 className="text-xl font-bold text-[#333333] mb-2">{item.title}</h3>
                                    <p className="text-xs text-[#EC7754] font-bold uppercase tracking-wider">Hover to see result</p>
                                </div>
                            </div>

                            {/* Back */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#333333] rounded-2xl overflow-hidden shadow-xl text-white">
                                <div className="h-2/3 relative">
                                    <BeforeAfterPlaceholder className="w-full h-full bg-[#D4A380]" label="After" color="#333" />
                                </div>
                                <div className="h-1/3 p-6 flex flex-col justify-center items-center text-center bg-[#333333]">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 5: Side-by-Side Comparison Grid
// ---------------------------------------------------
const Design5 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-8">
                <div>
                    <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">{content.overline}</span>
                    <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
                </div>
            </div>

            <div className="space-y-12">
                {content.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col lg:flex-row gap-8 items-center group">
                        <div className="w-full lg:w-1/3">
                            <h3 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#EC7754] transition-colors">{item.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center text-sm text-gray-500"><Check size={14} className="text-[#EC7754] mr-2" /> FDA Approved</li>
                                <li className="flex items-center text-sm text-gray-500"><Check size={14} className="text-[#EC7754] mr-2" /> Minimal Downtime</li>
                            </ul>
                            <Button className="bg-[#F8F4EB] text-[#333333] hover:bg-[#EC7754] hover:text-white border-none shadow-none">
                                Learn More
                            </Button>
                        </div>
                        <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
                            <div className="relative h-64 rounded-2xl overflow-hidden">
                                <BeforeAfterPlaceholder className="w-full h-full" label="Before" />
                            </div>
                            <div className="relative h-64 rounded-2xl overflow-hidden">
                                <BeforeAfterPlaceholder className="w-full h-full bg-[#D4A380]" label="After" color="#333" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#EC7754] shadow-sm">
                                    Result
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 6: Overlapping Elegance (New)
// ---------------------------------------------------
const Design6 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
                {content.items.map((item, idx) => (
                    <div key={idx} className="relative group">
                        {/* Image Card */}
                        <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-md relative z-0">
                            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                                <BeforeAfterPlaceholder className="w-full h-full" label="Before" />
                            </div>
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <BeforeAfterPlaceholder className="w-full h-full bg-[#D4A380]" label="After" color="#333" />
                            </div>
                        </div>

                        {/* Floating Text Card */}
                        <div className="absolute -bottom-12 left-8 right-8 bg-white p-6 rounded-xl shadow-xl z-10 border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-[#333333] mb-2">{item.title}</h3>
                                    <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                                </div>
                                <div className="bg-[#F8F4EB] p-2 rounded-full text-[#EC7754]">
                                    <Sparkles size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 7: Vertical Accordion (New)
// ---------------------------------------------------
const Design7 = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-12 text-center">{content.title}</h2>

                <div className="flex flex-col md:flex-row gap-2 h-[600px] w-full">
                    {content.items.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveIdx(idx)}
                            className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIdx === idx ? 'flex-[4]' : 'flex-[1]'}`}
                        >
                            <div className="absolute inset-0">
                                <BeforeAfterPlaceholder className={`w-full h-full ${activeIdx === idx ? 'bg-[#D4A380]' : 'bg-[#e8dcd0]'}`} label={activeIdx === idx ? "After" : "Before"} color={activeIdx === idx ? "#333" : "#D4A380"} />
                            </div>

                            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors" />

                            <div className={`absolute bottom-0 left-0 w-full p-6 text-white transition-all duration-500 ${activeIdx === idx ? 'opacity-100' : 'opacity-80'}`}>
                                <h3 className={`font-bold whitespace-nowrap ${activeIdx === idx ? 'text-2xl mb-2' : 'text-lg -rotate-90 origin-bottom-left translate-x-8 mb-8'}`}>
                                    {item.title}
                                </h3>
                                {activeIdx === idx && (
                                    <p className="text-sm text-white/90 max-w-md animate-fadeIn delay-100">{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 8: Circle Reveal (New)
// ---------------------------------------------------
const Design8 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">{content.overline}</span>
                <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {content.items.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="relative w-64 h-64 mb-8">
                            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 transition-transform duration-500 group-hover:scale-95 group-hover:opacity-0">
                                <BeforeAfterPlaceholder className="w-full h-full" label="Before" />
                            </div>
                            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#EC7754] shadow-lg z-0 scale-95 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                                <BeforeAfterPlaceholder className="w-full h-full bg-[#D4A380]" label="After" color="#333" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#333333] mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                        <Button variant="link" className="text-[#EC7754] p-0">View Details</Button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 9: Tabbed Transformation (New)
// ---------------------------------------------------
const Design9 = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Tabs List */}
                    <div className="lg:col-span-4 flex flex-col justify-center space-y-2">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#333333] mb-8">{content.title}</h2>
                        {content.items.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-between ${activeTab === idx ? 'bg-[#333333] text-white shadow-lg' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                <span className="font-medium">{item.title}</span>
                                {activeTab === idx && <ArrowRight size={16} />}
                            </div>
                        ))}
                        <div className="pt-8">
                            <Button className="w-full bg-[#EC7754] hover:bg-[#D4A380] text-white">View All Services</Button>
                        </div>
                    </div>

                    {/* Display Area */}
                    <div className="lg:col-span-8 relative h-[500px] rounded-3xl overflow-hidden bg-[#F8F4EB]">
                        {content.items.map((item, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-all duration-500 flex flex-col md:flex-row ${activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <div className="w-full md:w-1/2 h-1/2 md:h-full relative border-r border-white/20">
                                    <BeforeAfterPlaceholder className="w-full h-full" label="Before Treatment" />
                                </div>
                                <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                                    <BeforeAfterPlaceholder className="w-full h-full bg-[#D4A380]" label="After Treatment" color="#333" />
                                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                                        <p className="text-sm text-[#333333] font-medium">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Main Component to Render All Variations
// ---------------------------------------------------
export const Section5Variations = () => {
    return (
        <div className="flex flex-col gap-20 pb-20 bg-gray-50">
            <div className="text-center py-12 bg-white border-b sticky top-0 z-50 shadow-sm">
                <h1 className="text-3xl font-bold mb-2 text-[#333333]">Section 5 – Variations</h1>
                <p className="text-gray-500">Our Signature Treatments (Spotlight)</p>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 1: Classic Split Cards
                </div>
                <Design1 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 2: Hover Reveal Carousel
                </div>
                <Design2 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 3: Elegant List with Preview
                </div>
                <Design3 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 4: Flip Cards
                </div>
                <Design4 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 5: Side-by-Side Comparison
                </div>
                <Design5 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 6: Overlapping Elegance
                </div>
                <Design6 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 7: Vertical Accordion
                </div>
                <Design7 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 8: Circle Reveal
                </div>
                <Design8 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 9: Tabbed Transformation
                </div>
                <Design9 />
            </div>
        </div>
    );
};
