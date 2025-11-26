import React from "react";
import Image from "next/image";
import { Zap, User, Star, Activity, CheckCircle2, Sparkles } from "lucide-react";

// Content data
const content = {
    subtitle: "What’s Special at The Skin Firm",
    title: "What Makes The Skin Firm Exceptional",
    items: [
        {
            icon: Zap,
            title: "Advanced Technology",
            description: "US-FDA approved equipment ensuring precision and safety.",
        },
        {
            icon: User,
            title: "Personalized Care",
            description: "Tailored treatment plans curated by Dr. Karishma Singh herself.",
        },
        {
            icon: Star,
            title: "Premium Experience",
            description: "A serene, boutique-style clinic offering comfort and privacy.",
        },
        {
            icon: Activity,
            title: "Visible Results",
            description: "Scientifically designed solutions that bring lasting transformations.",
        },
    ],
};

// Simple placeholder for the right‑hand image (50% width)
const ImagePlaceholder = ({ className = "" }: { className?: string }) => (
    <div className={`bg-[#e8dcd0] relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center text-[#D4A380]/30 font-serif text-4xl">
            Image
        </div>
        {/* subtle pattern overlay */}
        <div
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: "radial-gradient(#D4A380 1px, transparent 1px)",
                backgroundSize: "20px 20px",
            }}
        />
    </div>
);

// ---------------------------------------------------
// Design 1 – Clean 2×2 grid of cards (Option 1)
// ---------------------------------------------------
export const Design1 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left – text & cards */}
                <div className="space-y-10">
                    <div>
                        <span className="text-[#D4A380] font-semibold uppercase text-sm tracking-wider">
                            {content.subtitle}
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-[#333333] leading-tight">
                            {content.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {content.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="w-12 h-12 bg-[#F8F4EB] rounded-xl flex items-center justify-center text-[#D4A380] mb-4 group-hover:bg-[#D4A380] group-hover:text-white transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-semibold text-lg text-[#333333] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#6C6C6C] leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right – image */}
                <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-xl">
                    <ImagePlaceholder className="w-full h-full" />
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 5 – Overlapping / floating cards (Option 5)
// ---------------------------------------------------
export const Design5 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left – text & staggered cards */}
                <div className="relative z-10 space-y-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-white text-[#D4A380] text-xs font-bold tracking-wider mb-6 shadow-sm">
                        {content.subtitle}
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-10 leading-tight">
                        {content.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {content.items.map((item, idx) => (
                            <div
                                key={idx}
                                className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${idx % 2 !== 0 ? "sm:translate-y-8" : ""
                                    }`}
                            >
                                <div className="w-10 h-10 bg-[#F8F4EB] rounded-lg flex items-center justify-center text-[#D4A380] mb-4">
                                    <item.icon size={20} />
                                </div>
                                <h3 className="font-bold text-lg text-[#333333] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#6C6C6C] leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right – image */}
                <div className="relative h-[700px] lg:-mr-20">
                    <ImagePlaceholder className="w-full h-full rounded-l-[3rem]" />
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 6 – Timeline style (Option 6)
// ---------------------------------------------------
export const Design6 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left – timeline */}
                <div className="space-y-12">
                    <div>
                        <span className="text-[#D4A380] font-semibold uppercase text-sm tracking-wider">
                            {content.subtitle}
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-[#333333] leading-tight">
                            {content.title}
                        </h2>
                    </div>
                    <div className="relative space-y-8 pl-8 border-l-2 border-[#F8F4EB]">
                        {content.items.map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-4 border-[#F8F4EB] group-hover:border-[#D4A380] transition-colors duration-300" />
                                <div className="bg-[#F8F4EB]/50 p-5 rounded-xl hover:bg-[#F8F4EB] transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-2">
                                        <item.icon size={20} className="text-[#D4A380]" />
                                        <h3 className="font-semibold text-lg text-[#333333]">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-[#6C6C6C]">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right – image */}
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700">
                    <ImagePlaceholder className="w-full h-full" />
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 7 – Glassmorphism (Option 7)
// ---------------------------------------------------
export const Design7 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24 relative overflow-hidden">
        {/* background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A380]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A380]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left – text & cards */}
                <div className="space-y-10">
                    <div>
                        <span className="text-[#D4A380] font-semibold uppercase text-sm tracking-wider">
                            {content.subtitle}
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-serif text-[#333333] leading-tight">
                            {content.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {content.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-[#D4A380]/10 rounded-lg text-[#D4A380]">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-300">0{idx + 1}</span>
                                </div>
                                <h3 className="font-semibold text-lg text-[#333333] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#6C6C6C] leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right – image */}
                <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
                    <ImagePlaceholder className="w-full h-full" />
                    <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center text-white">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <p className="font-semibold text-[#333333]">Rated #1 in Pune</p>
                                <p className="text-xs text-[#6C6C6C]">For Advanced Dermatology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Section3Variations – only the selected options (1,5,6,7)
// ---------------------------------------------------
export const Section3Variations = () => (
    <div className="flex flex-col gap-20 pb-20 bg-gray-50">
        <div className="text-center py-12 bg-white border-b sticky top-0 z-50 shadow-sm">
            <h1 className="text-3xl font-bold mb-2 text-[#333333]">Section 3 – Selected Layouts</h1>
            <p className="text-gray-500">Options 1, 5, 6 and 7</p>
        </div>
        <div className="relative">
            <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                Option 1: Clean Grid
            </div>
            <Design1 />
        </div>
        <div className="relative">
            <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                Option 5: Floating Staggered
            </div>
            <Design5 />
        </div>
        <div className="relative">
            <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                Option 6: Timeline Style
            </div>
            <Design6 />
        </div>
        <div className="relative">
            <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                Option 7: Glassmorphism
            </div>
            <Design7 />
        </div>
    </div>
);
