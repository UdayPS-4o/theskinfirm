"use client";

import { motion } from "framer-motion";
import { MaxWidthWrapper } from "@/components/layout/max-width";
import Image from "next/image";

const content = {
    name: "Dr. Karishma Singh",
    title: "Skin Specialist",
    subtitle: "Co-Founder & Owner, The Skin Firm",
    p1: "Dr. Karishma Singh, owner and co-founder of The Skin Firm, NIBM Pune, is a highly regarded skin specialist celebrated for her refined approach to skin and hair care. With over five years of specialised expertise, she has helped hundreds achieve radiant, youthful skin and healthy hair through treatments that deliver visible, lasting results.",
    p2: "Renowned for her gentle precision and patient-centric philosophy, Dr. Karishma combines medical excellence with an artistic eye, offering luxury skin treatments, advanced laser procedures, anti-ageing solutions, and hair restoration therapies. Her calm demeanour and ethical approach have established her as one of the most trusted dermatologists in Pune.",
    p3: "At The Skin Firm, Dr. Karishma leads a team committed to delivering premium, personalised care in an elegant, welcoming environment. Every treatment reflects her vision merging cutting-edge science with empathy to enhance natural beauty while restoring long-term skin health.",
    quote: "Whether you're beginning your skincare journey or seeking expert solutions for advanced concerns, Dr. Karishma's expertise and holistic approach make her the partner your skin has been waiting for."
};

const imageSrc = "/Dr-Karishma-Singh-The-Skin-Firm-Pune3.png";

const Variation1 = () => (
    <section className="py-20 bg-[#FDFBF7]">
        <MaxWidthWrapper>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 relative">
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                        <Image src={imageSrc} alt={content.name} fill className="object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A373] rounded-full -z-10 opacity-20"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E0C097] rounded-full -z-10 opacity-20"></div>
                </div>
                <div className="md:w-1/2 space-y-6">
                    <div>
                        <h2 className="text-4xl font-serif text-[#333]">{content.name}</h2>
                        <p className="text-xl text-[#D4A373] font-medium mt-2">{content.title}</p>
                        <p className="text-sm text-gray-500 uppercase tracking-wider">{content.subtitle}</p>
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>{content.p1}</p>
                        <p>{content.p2}</p>
                        <p>{content.p3}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-l-4 border-[#D4A373] shadow-sm">
                        <p className="italic text-gray-700">{content.quote}</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation1Point5 = () => (
    <section className="py-20 bg-[#FDFBF7]">
        <MaxWidthWrapper>
            <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-1/2 sticky top-24">
                    <div className="relative w-full max-w-sm mx-auto">
                        <div className="absolute inset-0 border-2 border-[#D4A373] transform translate-x-4 translate-y-4"></div>
                        <div className="relative aspect-[3/4] bg-gray-200">
                            <Image src={imageSrc} alt={content.name} fill className="object-cover" />
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A373] rounded-full -z-10 opacity-20"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E0C097] rounded-full -z-10 opacity-20"></div>
                </div>
                <div className="md:w-1/2 space-y-6">
                    <div className="border-b border-[#D4A373] pb-6">
                        <h2 className="text-5xl font-light text-[#2C2C2C] mb-2">{content.name}</h2>
                        <p className="text-lg text-[#666]">{content.title} | {content.subtitle}</p>
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>{content.p1}</p>
                        <p>{content.p2}</p>
                        <p>{content.p3}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-l-4 border-[#D4A373] shadow-sm">
                        <p className="italic text-gray-700">{content.quote}</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation2 = () => (
    <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAFAFA] z-0"></div>
        <MaxWidthWrapper className="relative z-10">
            <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
                <div className="md:w-1/2 space-y-8">
                    <div className="border-b border-[#D4A373] pb-6">
                        <h2 className="text-5xl font-light text-[#2C2C2C] mb-2">{content.name}</h2>
                        <p className="text-lg text-[#666]">{content.title} | {content.subtitle}</p>
                    </div>
                    <div className="text-lg text-[#444] space-y-6">
                        <p>{content.p1}</p>
                        <p>{content.p2}</p>
                        <p>{content.p3}</p>
                    </div>
                    <p className="text-[#D4A373] font-bold text-xl">{content.quote}</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-sm">
                        <div className="absolute inset-0 border-2 border-[#D4A373] transform translate-x-4 translate-y-4"></div>
                        <div className="relative aspect-[3/4] bg-gray-200">
                            <Image src={imageSrc} alt={content.name} fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation3 = () => (
    <section className="py-20 bg-[#F8F4EB]">
        <MaxWidthWrapper>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-2/5 relative min-h-[400px] md:min-h-full">
                    <Image src={imageSrc} alt={content.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h2 className="text-3xl font-bold">{content.name}</h2>
                            <p className="text-[#E0C097]">{content.title}</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                    <p className="text-sm font-bold text-[#D4A373] uppercase tracking-widest mb-6">{content.subtitle}</p>
                    <div className="space-y-6 text-gray-600 leading-loose">
                        <p>{content.p1}</p>
                        <p>{content.p2}</p>
                        <p>{content.p3}</p>
                    </div>
                    <div className="mt-10 pt-10 border-t border-gray-100">
                        <p className="text-lg italic text-gray-800 font-serif">&quot;{content.quote}&quot;</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation4 = () => (
    <section className="py-24 bg-[#1A1A1A] text-white">
        <MaxWidthWrapper>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 order-2 md:order-1">
                    <div className="relative rounded-full overflow-hidden aspect-square border-4 border-[#D4A373] shadow-[0_0_30px_rgba(212,163,115,0.3)]">
                        <Image src={imageSrc} alt={content.name} fill className="object-cover" />
                    </div>
                </div>
                <div className="md:col-span-7 order-1 md:order-2 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] to-[#FFF] mb-4">{content.name}</h2>
                    <p className="text-xl text-gray-400 mb-8">{content.title} &bull; {content.subtitle}</p>
                    <div className="space-y-6 text-gray-300 font-light text-lg">
                        <p>{content.p1}</p>
                        <p>{content.p2}</p>
                        <p>{content.p3}</p>
                    </div>
                    <div className="mt-8 bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                        <p className="text-[#E0C097]">{content.quote}</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation5 = () => (
    <section className="py-20 bg-white">
        <MaxWidthWrapper>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg ring-2 ring-[#D4A373] relative">
                    <Image src={imageSrc} alt={content.name} fill className="object-cover" />
                </div>
                <h2 className="text-4xl font-serif text-[#333] mb-2">{content.name}</h2>
                <p className="text-[#D4A373] font-medium mb-8">{content.title}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-gray-600 mb-10">
                    <p>{content.p1}</p>
                    <p>{content.p2}</p>
                    <p className="md:col-span-2 text-center">{content.p3}</p>
                </div>

                <div className="relative py-8 px-12">
                    <span className="absolute top-0 left-0 text-6xl text-[#F0E0D0] font-serif">&quot;</span>
                    <p className="text-xl text-gray-800 italic relative z-10">{content.quote}</p>
                    <span className="absolute bottom-0 right-0 text-6xl text-[#F0E0D0] font-serif">&quot;</span>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation6 = () => (
    <section className="py-24 bg-[#FDFBF7] overflow-hidden">
        <MaxWidthWrapper>
            <div className="flex flex-col lg:flex-row gap-0">
                <div className="lg:w-1/2 relative z-10">
                    <div className="bg-white p-12 lg:p-16 shadow-2xl rounded-r-3xl my-10 lg:-mr-20">
                        <h2 className="text-4xl font-bold text-[#333] mb-2">{content.name}</h2>
                        <p className="text-[#D4A373] mb-8 uppercase tracking-wider text-sm">{content.title}</p>
                        <div className="space-y-4 text-gray-600">
                            <p>{content.p1}</p>
                            <p>{content.p2}</p>
                            <p>{content.p3}</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-500">{content.quote}</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative h-[600px] lg:h-auto">
                    <Image src={imageSrc} alt={content.name} fill className="object-cover rounded-l-3xl lg:rounded-none" />
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation7 = () => (
    <section className="py-20 bg-[#F5E6D3]/30">
        <MaxWidthWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg mb-6">
                            <Image src={imageSrc} alt={content.name} fill className="object-cover" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#333]">{content.name}</h2>
                        <p className="text-[#D4A373]">{content.title}</p>
                    </div>
                </div>
                <div className="lg:col-span-2 space-y-8 pt-4">
                    <h3 className="text-3xl font-serif text-[#4A4A4A] mb-6">Meet the Expert</h3>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p>{content.p1}</p>
                        <p>{content.p2}</p>
                        <p>{content.p3}</p>
                        <blockquote className="border-l-4 border-[#D4A373] pl-4 italic text-gray-800 bg-white p-6 rounded-r-lg shadow-sm">
                            {content.quote}
                        </blockquote>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation8 = () => (
    <section className="py-24 bg-white">
        <MaxWidthWrapper>
            <div className="relative flex flex-col items-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-[#D4A373]"></div>
                <div className="mt-24 mb-16 text-center">
                    <h2 className="text-5xl font-light text-[#333] mb-4">{content.name}</h2>
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{content.title}</p>
                </div>

                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/3 text-right space-y-6 text-gray-600">
                        <p>{content.p1}</p>
                        <p>{content.p2}</p>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-80 rounded-full overflow-hidden border-8 border-[#FDFBF7] shadow-xl">
                            <Image src={imageSrc} alt={content.name} fill className="object-cover" />
                        </div>
                    </div>
                    <div className="md:w-1/3 text-left space-y-6 text-gray-600">
                        <p>{content.p3}</p>
                        <p className="text-[#D4A373] font-medium">{content.quote}</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation9 = () => (
    <section className="py-20 bg-[#222] text-white overflow-hidden">
        <MaxWidthWrapper>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 relative z-10">
                    <div className="relative aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-[#D4A373] rounded-full blur-[100px] opacity-20"></div>
                        <Image src={imageSrc} alt={content.name} fill className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                </div>
                <div className="md:w-1/2 md:-ml-12 relative z-20 mt-10 md:mt-0">
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl">
                        <h2 className="text-3xl font-bold mb-2">{content.name}</h2>
                        <p className="text-[#D4A373] mb-6">{content.title}</p>
                        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                            <p>{content.p1}</p>
                            <p>{content.p2}</p>
                            <p>{content.p3}</p>
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="italic text-gray-400 text-sm">{content.quote}</p>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

const Variation10 = () => (
    <section className="py-24 bg-[#FFFBF0]">
        <MaxWidthWrapper>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                        <Image src={imageSrc} alt={content.name} fill className="object-cover" />
                    </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-6xl font-serif text-[#D4A373] opacity-20 absolute -mt-10 ml-10 select-none">EXPERTISE</h2>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-[#333] mb-2">{content.name}</h2>
                            <p className="text-gray-500 mb-8">{content.title} | {content.subtitle}</p>
                            <div className="columns-1 md:columns-2 gap-8 text-gray-600 space-y-4">
                                <p>{content.p1}</p>
                                <p>{content.p2}</p>
                                <p>{content.p3}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 bg-[#D4A373] text-white p-6 rounded-lg">
                        <p className="font-medium text-lg text-center">{content.quote}</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
);

export default function About3TestPage() {
    return (
        <div className="bg-gray-50">
            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 1: Classic Elegance</h1>
            </div>
            <Variation1 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 1.5: Hybrid Elegance</h1>
            </div>
            <Variation1Point5 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 2: Modern Offset</h1>
            </div>
            <Variation2 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 3: Split Card</h1>
            </div>
            <Variation3 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 4: Dark Premium</h1>
            </div>
            <Variation4 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 5: Centered Circle</h1>
            </div>
            <Variation5 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 6: Overlapping Layout</h1>
            </div>
            <Variation6 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 7: Sidebar Profile</h1>
            </div>
            <Variation7 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 8: Symmetrical Balance</h1>
            </div>
            <Variation8 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 9: Glassmorphism Dark</h1>
            </div>
            <Variation9 />

            <div className="bg-black text-white py-4 text-center sticky top-0 z-50">
                <h1 className="text-xl font-bold">Variation 10: Editorial Style</h1>
            </div>
            <Variation10 />
        </div>
    );
}
