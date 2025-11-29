"use client";

import { motion } from "framer-motion";
import { MaxWidthWrapper } from "@/components/layout/max-width";
import Image from "next/image";

const content = {
    header: "The Skin Firm",
    quote: "Where Skin Meets Science, and Self-Care Feels Like Home",
    p1: "At The Skin Firm, we believe that great skin isn't just about looking good—it's about feeling deeply confident in your skin.",
    p2: "Founded in Pune by Dr. Karishma Singh, The Skin Firm is a modern dermatology and aesthetic clinic rooted in precision care, ethical practices, and personalised results. Every treatment here is designed to go beyond the surface, addressing not just the symptom, but the story behind your skin.",
    p3: "We combine cutting-edge technology with a warm, welcoming environment where every client feels heard, valued, and cared for. From advanced laser treatments to gentle skincare solutions, we're here to help you achieve the healthy, radiant skin you deserve.",
    p4: "We specialise in advanced dermatological and aesthetic treatments including laser therapies, skin rejuvenation, anti-ageing solutions, acne and pigmentation correction, and hair restoration. Our clinic blends medical-grade technology with an artistic understanding of beauty, ensuring your results look natural, not overdone.",
    highlight: "But what truly sets us apart is the way we treat people"
};

const Variation1 = () => (
    <section className="py-20 bg-[#FDFBF7]">
        <MaxWidthWrapper>
            <div className="flex flex-col items-center text-center gap-10">
                <h2 className="text-5xl font-light text-[#4A4A4A]">{content.header}</h2>
                <div className="w-24 h-1 bg-[#D4A373] rounded-full"></div>
                <blockquote className="text-2xl italic text-[#6B6B6B] max-w-3xl">&quot;{content.quote}&quot;</blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-[#555] leading-relaxed">
                    <div className="space-y-6">
                        <p>{content.p1}</p>
                        <p>{content.p2}</p>
                    </div>
                    <div className="space-y-6">
                        <p>{content.p3}</p>
                        <p>{content.p4}</p>
                    </div>
                </div>
                <div className="mt-10 px-8 py-4 bg-[#F5E6D3] rounded-full text-[#8C6B4A] font-medium tracking-wide">
                    {content.highlight}
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation2 = () => (
    <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAFAFA] -skew-x-12 transform origin-top-right"></div>
        <MaxWidthWrapper className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/3">
                    <h2 className="text-6xl font-serif text-[#2C2C2C] mb-6">{content.header}</h2>
                    <p className="text-xl text-[#D4A373] italic mb-8">{content.quote}</p>
                    <div className="w-16 h-16 border-t-4 border-l-4 border-[#D4A373]"></div>
                </div>
                <div className="lg:w-2/3 space-y-6 text-lg text-[#444]">
                    <p>{content.p1}</p>
                    <p>{content.p2}</p>
                    <p>{content.p3}</p>
                    <p>{content.p4}</p>
                    <p className="font-bold text-[#2C2C2C] mt-8">{content.highlight}</p>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation3 = () => (
    <section className="py-20 bg-gradient-to-b from-[#FFF5EB] to-white">
        <MaxWidthWrapper>
            <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-[#F0E0D0]">
                <h2 className="text-4xl font-bold text-center text-[#8C5E3C] mb-8 uppercase tracking-widest">{content.header}</h2>
                <p className="text-center text-xl text-[#A07050] mb-12 font-serif">{content.quote}</p>
                <div className="space-y-6 text-[#5D4037] leading-loose">
                    <p>{content.p1} {content.p2}</p>
                    <p>{content.p3} {content.p4}</p>
                </div>
                <div className="mt-12 text-center">
                    <span className="inline-block border-b-2 border-[#D4A373] pb-2 text-[#D4A373] font-semibold text-lg">
                        {content.highlight}
                    </span>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation4 = () => (
    <section className="py-24 bg-[#2C2C2C] text-white">
        <MaxWidthWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 border-r border-gray-700 pr-8">
                    <h2 className="text-5xl font-light mb-8 text-[#E0C097]">{content.header}</h2>
                    <p className="text-2xl font-thin italic text-gray-300">{content.quote}</p>
                </div>
                <div className="lg:col-span-8 space-y-8 text-gray-300 text-lg font-light">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <p>{content.p1}</p>
                        <p>{content.p2}</p>
                        <p>{content.p3}</p>
                        <p>{content.p4}</p>
                    </div>
                    <div className="pt-8 border-t border-gray-700">
                        <p className="text-[#E0C097] text-xl text-center">{content.highlight}</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation5 = () => (
    <section className="py-20 bg-[#F8F4EB]">
        <MaxWidthWrapper>
            <div className="text-center mb-16">
                <span className="text-[#D4A373] font-bold tracking-widest uppercase text-sm">About Us</span>
                <h2 className="text-5xl mt-4 font-serif text-[#333]">{content.header}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[#D4A373] text-4xl mb-4">01.</div>
                    <p className="text-gray-600">{content.p1}</p>
                    <p className="text-gray-600 mt-4">{content.p2}</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow md:mt-12">
                    <div className="text-[#D4A373] text-4xl mb-4">02.</div>
                    <p className="text-gray-600">{content.p3}</p>
                    <p className="text-gray-600 mt-4">{content.p4}</p>
                </div>
                <div className="bg-[#E0C097] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-white flex flex-col justify-center items-center text-center">
                    <p className="text-xl italic font-medium mb-6">&quot;{content.quote}&quot;</p>
                    <div className="w-12 h-1 bg-white mb-6"></div>
                    <p className="font-bold">{content.highlight}</p>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation6 = () => (
    <section className="py-24 bg-white">
        <MaxWidthWrapper>
            <div className="flex flex-col items-start max-w-5xl mx-auto">
                <h2 className="text-[80px] leading-none font-bold text-[#F2F2F2] absolute select-none z-0 -ml-10">
                    SKIN FIRM
                </h2>
                <div className="relative z-10 pt-10 pl-4">
                    <h3 className="text-4xl font-bold text-[#333] mb-2">{content.header}</h3>
                    <p className="text-[#D4A373] text-lg font-medium mb-10">{content.quote}</p>

                    <div className="flex flex-col md:flex-row gap-12 border-l-2 border-[#F2F2F2] pl-8">
                        <div className="space-y-4 text-gray-600">
                            <p>{content.p1}</p>
                            <p>{content.p2}</p>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p>{content.p3}</p>
                            <p>{content.p4}</p>
                        </div>
                    </div>
                    <div className="mt-12 bg-[#333] text-white py-4 px-8 inline-block rounded-lg shadow-lg">
                        {content.highlight}
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation7 = () => (
    <section className="py-20 bg-[#FDFBF7] border-y border-[#EAEAEA]">
        <MaxWidthWrapper>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 relative">
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D4A373]"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#D4A373]"></div>
                    <div className="p-12 text-center">
                        <h2 className="text-4xl font-serif text-[#4A4A4A] mb-6">{content.header}</h2>
                        <p className="text-xl italic text-[#888]">{content.quote}</p>
                    </div>
                </div>
                <div className="md:w-1/2 space-y-6 text-[#555]">
                    <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#D4A373] first-letter:mr-2 float-left">
                        {content.p1.substring(0, 1)}
                    </p>
                    <p>{content.p1.substring(1)}</p>
                    <p>{content.p2}</p>
                    <p>{content.p3}</p>
                    <p>{content.p4}</p>
                    <p className="text-[#D4A373] font-semibold border-t border-[#EAEAEA] pt-4">{content.highlight}</p>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation8 = () => (
    <section className="py-24 bg-[#F5F5F5]">
        <MaxWidthWrapper>
            <div className="bg-white p-10 md:p-16 rounded-tl-[80px] rounded-br-[80px] shadow-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-light text-[#333] mb-4">{content.header}</h2>
                    <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#D4A373] to-transparent mx-auto"></div>
                </div>
                <div className="columns-1 md:columns-2 gap-10 space-y-6 text-gray-600 text-lg">
                    <p className="font-medium text-black">{content.quote}</p>
                    <p>{content.p1}</p>
                    <p>{content.p2}</p>
                    <p>{content.p3}</p>
                    <p>{content.p4}</p>
                    <div className="bg-[#F9F9F9] p-6 rounded-lg border-l-4 border-[#D4A373] break-inside-avoid-column">
                        <p className="text-[#D4A373] font-bold">{content.highlight}</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation9 = () => (
    <section className="py-20 bg-[#1A1A1A] text-gray-300 overflow-hidden">
        <MaxWidthWrapper>
            <div className="relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4A373] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#E0C097] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] to-[#E0C097] mb-8">
                        {content.header}
                    </h2>
                    <p className="text-2xl text-white mb-12 font-light">{content.quote}</p>

                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="space-y-4">
                                <p>{content.p1}</p>
                                <p>{content.p2}</p>
                            </div>
                            <div className="space-y-4">
                                <p>{content.p3}</p>
                                <p>{content.p4}</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10 text-center">
                            <p className="text-[#D4A373] tracking-widest uppercase text-sm">{content.highlight}</p>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation10 = () => (
    <section className="py-24 bg-white">
        <MaxWidthWrapper>
            <div className="flex flex-col items-center">
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-center bg-[#FDFBF7] lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200">
                        <h2 className="text-4xl font-bold text-[#333] mb-6">{content.header}</h2>
                        <p className="text-[#D4A373] italic text-xl leading-relaxed">{content.quote}</p>
                    </div>
                    <div className="p-10 lg:p-16 lg:col-span-2 bg-white flex flex-col justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                            <div className="space-y-4">
                                <p>{content.p1}</p>
                                <p>{content.p2}</p>
                            </div>
                            <div className="space-y-4">
                                <p>{content.p3}</p>
                                <p>{content.p4}</p>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center gap-4">
                            <div className="h-[1px] flex-grow bg-gray-200"></div>
                            <p className="text-[#333] font-medium whitespace-nowrap">{content.highlight}</p>
                            <div className="h-[1px] flex-grow bg-gray-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

export default function About2TestPage() {
    return (
        <div className="bg-gray-50">
            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 1: Minimalist Centered</h1>
            </div>
            <Variation1 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 2: Asymmetric Modern</h1>
            </div>
            <Variation2 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 3: Card Style</h1>
            </div>
            <Variation3 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 4: Dark Mode</h1>
            </div>
            <Variation4 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 5: Grid Layout</h1>
            </div>
            <Variation5 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 6: Typographic Background</h1>
            </div>
            <Variation6 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 7: Split with Drop Cap</h1>
            </div>
            <Variation7 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 8: Rounded Paper</h1>
            </div>
            <Variation8 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 9: Dark Glassmorphism</h1>
            </div>
            <Variation9 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 10: Structured Grid</h1>
            </div>
            <Variation10 />
        </div>
    );
}
