import React from "react";
import Image from "next/image";
import { ArrowRight, Check, Star, Award, ShieldCheck, Sparkles, UserCheck, BadgeCheck, Clock, Users } from "lucide-react";

const content = {
    headline: "Meet Dr. Karishma Singh - Pune’s Trusted Skin Specialist",
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

// --- Design 1: Classic Elegance (Updated Font) ---
export const Design1 = () => {
    return (
        <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Image */}
                    <div className="relative h-[550px] rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-lg border-4 border-white">
                        <DoctorImage className="w-full h-full" />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl sm:text-5xl font-semibold text-[#333333] leading-tight">
                            {content.headline}
                        </h2>
                        <div className="w-24 h-1 bg-[#D4A380]"></div>

                        <ul className="space-y-5">
                            {content.highlights.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-lg text-[#6C6C6C]">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#D4A380] shadow-sm">
                                        <Check size={18} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <button className="bg-[#333333] text-white px-8 py-4 rounded-full hover:bg-[#D4A380] transition-colors duration-300 font-medium tracking-wide">
                                {content.cta}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 2: Modern Minimal (Updated Font) ---
export const Design2 = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Image */}
                    <div className="relative">
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-[#D4A380] rounded-3xl z-0"></div>
                        <div className="relative h-[600px] rounded-3xl overflow-hidden z-10 shadow-xl bg-gray-100">
                            <DoctorImage className="w-full h-full" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-10">
                        <h2 className="text-3xl sm:text-5xl font-bold text-[#333333] leading-tight">
                            {content.headline}
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {content.highlights.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F4EB]/50 hover:bg-[#F8F4EB] transition-colors duration-300">
                                    <Star className="text-[#D4A380] shrink-0" size={24} fill="#D4A380" />
                                    <span className="text-lg text-[#333333] font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="text-[#333333] text-lg font-bold border-b-2 border-[#333333] pb-1 hover:text-[#D4A380] hover:border-[#D4A380] transition-all">
                            {content.cta}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 3: Soft & Organic (Updated Font) ---
export const Design3 = () => {
    return (
        <section className="w-full bg-[#FDFBF7] py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-[#D4A380]/10 rounded-[3rem] rotate-3"></div>
                        <div className="relative h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <DoctorImage className="w-full h-full" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="inline-block px-4 py-1 rounded-full bg-[#e8dcd0] text-[#333333] text-sm font-semibold tracking-wider mb-2">
                            EXPERT DERMATOLOGIST
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#333333]">
                            {content.headline}
                        </h2>

                        <div className="space-y-6 pt-4">
                            {content.highlights.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="mt-1">
                                        <Award size={20} className="text-[#D4A380]" />
                                    </div>
                                    <p className="text-xl text-[#6C6C6C] font-normal">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <button className="px-8 py-3 rounded-lg border border-[#D4A380] text-[#D4A380] font-semibold hover:bg-[#D4A380] hover:text-white transition-all duration-300">
                                {content.cta}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 4: Split Card (Updated Font) ---
export const Design4 = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#F8F4EB] rounded-3xl overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Image */}
                        <div className="relative h-[500px] lg:h-auto">
                            <DoctorImage className="w-full h-full" />
                        </div>

                        {/* Right Content */}
                        <div className="p-10 lg:p-16 flex flex-col justify-center space-y-8">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] leading-snug">
                                {content.headline}
                            </h2>

                            <div className="space-y-4">
                                {content.highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 pb-3 border-b border-[#D4A380]/20 last:border-0">
                                        <ShieldCheck className="text-[#D4A380]" size={20} />
                                        <span className="text-[#555555] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="self-start flex items-center gap-2 text-[#333333] font-bold hover:gap-4 transition-all duration-300">
                                {content.cta}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 5: Minimalist Grid (Updated Font) ---
export const Design5 = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="relative h-[600px] rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 border-[16px] border-[#F8F4EB] z-20 pointer-events-none"></div>
                        <DoctorImage className="w-full h-full" />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-12 pl-0 lg:pl-10">
                        <h2 className="text-4xl sm:text-6xl font-light text-[#333333] leading-tight">
                            Meet <br />
                            <span className="font-semibold">Dr. Karishma Singh</span>
                        </h2>

                        <p className="text-xl text-[#6C6C6C]">Pune’s Trusted Skin Specialist</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            {content.highlights.map((item, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="w-8 h-1 bg-[#D4A380] mb-2"></div>
                                    <p className="text-[#333333] font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <button className="bg-[#F8F4EB] text-[#333333] px-10 py-4 rounded-none hover:bg-[#D4A380] hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-bold">
                            {content.cta}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 6: Overlapping Circle ---
export const Design6 = () => {
    return (
        <section className="w-full bg-[#F8F4EB]/30 py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Image */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#D4A380]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                            <DoctorImage className="w-full h-full" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-[#333333] leading-tight">
                            {content.headline}
                        </h2>

                        <div className="flex flex-col gap-4 max-w-lg mx-auto lg:mx-0">
                            {content.highlights.map((item, idx) => {
                                const icons = [BadgeCheck, Award, Clock, Users];
                                const Icon = icons[idx];
                                return (
                                    <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-8 h-8 rounded-full bg-[#F8F4EB] flex items-center justify-center text-[#D4A380]">
                                            <Icon size={16} />
                                        </div>
                                        <span className="text-[#333333] font-medium">{item}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pt-4">
                            <button className="text-[#D4A380] font-bold text-lg hover:text-[#333333] transition-colors flex items-center justify-center lg:justify-start gap-2">
                                {content.cta} <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 7: Clean Split with Accent ---
export const Design7 = () => {
    return (
        <section className="w-full bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left Image */}
                <div className="relative h-[500px] lg:h-auto bg-[#F8F4EB]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[80%] h-[80%] relative rounded-2xl overflow-hidden shadow-xl">
                            <DoctorImage className="w-full h-full" />
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex items-center p-12 lg:p-24">
                    <div className="space-y-10 max-w-xl">
                        <h2 className="text-3xl sm:text-5xl font-bold text-[#333333] leading-tight">
                            {content.headline}
                        </h2>

                        <div className="space-y-6">
                            {content.highlights.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded border border-[#D4A380] flex items-center justify-center text-[#D4A380] group-hover:bg-[#D4A380] group-hover:text-white transition-colors">
                                        <Check size={14} />
                                    </div>
                                    <p className="text-lg text-[#6C6C6C] group-hover:text-[#333333] transition-colors">{item}</p>
                                </div>
                            ))}
                        </div>

                        <button className="bg-[#333333] text-white px-8 py-4 rounded-lg hover:bg-[#D4A380] transition-colors duration-300 w-full sm:w-auto">
                            {content.cta}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 8: Floating Card with Accent Border ---
export const Design8 = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Image */}
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4A380] rounded-tl-[4rem] rounded-br-[4rem] z-0"></div>
                        <div className="relative h-[600px] bg-white rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-2xl z-10">
                            <DoctorImage className="w-full h-full" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-2">
                            <UserCheck className="text-[#D4A380]" size={28} />
                            <span className="text-[#333333] font-bold tracking-widest uppercase text-sm">Profile</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] leading-tight">
                            {content.headline}
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {content.highlights.map((item, idx) => (
                                <div key={idx} className="p-4 border-l-4 border-[#F8F4EB] hover:border-[#D4A380] hover:bg-[#F8F4EB]/30 transition-all duration-300">
                                    <p className="text-lg text-[#555555] font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <button className="inline-flex items-center gap-3 text-[#333333] font-bold text-lg hover:text-[#D4A380] transition-colors">
                            <span className="border-b-2 border-current pb-1">{content.cta}</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Section6Variations = () => {
    return (
        <div className="flex flex-col gap-20 pb-20 bg-gray-50">
            <div className="text-center py-12 bg-white border-b sticky top-0 z-50 shadow-sm">
                <h1 className="text-3xl font-bold mb-2 text-[#333333]">Section 6 Variations (Expanded)</h1>
                <p className="text-gray-500">8 Options | Consistent Font | Left Image / Right Text</p>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 1: Classic Elegance</div>
                <Design1 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 2: Modern Minimal</div>
                <Design2 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 3: Soft & Organic</div>
                <Design3 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 4: Split Card</div>
                <Design4 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 5: Minimalist Grid</div>
                <Design5 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 6: Overlapping Circle</div>
                <Design6 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 7: Clean Split</div>
                <Design7 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 8: Floating Card</div>
                <Design8 />
            </div>
        </div>
    );
};
