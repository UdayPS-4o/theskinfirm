import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Updated Content with Real Service Images and New Offers
const offers = [
    {
        id: 1,
        title: "Stubborn Acne Scars?",
        description: "They won't fade on their own. Expert treatment is here.",
        discount: "Flat ₹500 Off First Session*",
        image: "/images/services/acne treatment.png",
    },
    {
        id: 2,
        title: "Worried About Ageing?",
        description: "Don't let fine lines define you. Reclaim your youth.",
        discount: "Complimentary Consultation*",
        image: "/images/services/anti aging.png",
    },
    {
        id: 3,
        title: "Dull, Lifeless Skin?",
        description: "Stop hiding behind makeup. Get your natural glow back.",
        discount: "Packages Starting ₹2499*",
        image: "/images/services/hydra.png",
    },
    {
        id: 4,
        title: "Hairfall Anxiety?",
        description: "Watching your hair thin daily? We can stop it.",
        discount: "Save Up To 15%*",
        image: "/images/services/hair loss.png",
    },
];

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-serif text-[#333] mb-2 md:mb-3">{title}</h2>
        {subtitle && <p className="text-[#8A7B70] uppercase tracking-widest text-[10px] md:text-xs font-medium">{subtitle}</p>}
    </div>
);

// Variation 1: The Original Classic (Base)
const Variation1 = () => (
    <section className="py-12 md:py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-2 md:px-4">
            <SectionHeader title="Exclusive Offers" subtitle="01. Original Classic Split" />
            <div className="grid grid-cols-2 gap-3 md:gap-8">
                {offers.map((offer) => (
                    <div key={offer.id} className="bg-[#f9efe7] rounded-lg overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-all duration-300">
                        <div className="relative w-full md:w-1/2 h-32 xs:h-40 sm:h-48 md:h-auto">
                            <Image src={offer.image} alt={offer.title} fill className="object-cover" />
                        </div>
                        <div className="p-3 xs:p-4 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-sm xs:text-base md:text-2xl font-serif text-[#333] mb-1 md:mb-2 leading-tight line-clamp-2 md:line-clamp-none">{offer.title}</h3>
                            <p className="text-[#8A7B70] text-[10px] xs:text-xs md:text-sm mb-2 md:mb-6 line-clamp-2 md:line-clamp-none">{offer.description}</p>
                            <div className="mt-auto border-t border-[#D4A380]/20 pt-2 md:pt-0 md:border-none">
                                <p className="text-xs xs:text-sm md:text-lg font-medium text-[#EC7754] mb-2 md:mb-4">{offer.discount}</p>
                                <Button className="w-full bg-[#333] hover:bg-[#EC7754] text-white rounded-none transition-colors text-[10px] md:text-xs h-8 md:h-10 uppercase tracking-wider">Book Now</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Variation 2: Darker Beige Background + Centered Text
const Variation2 = () => (
    <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-2 md:px-4">
            <SectionHeader title="Seasonal Specials" subtitle="02. Darker Beige + Centered" />
            <div className="grid grid-cols-2 gap-3 md:gap-8">
                {offers.map((offer) => (
                    <div key={offer.id} className="bg-[#F0E6DE] rounded-lg overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-all duration-300">
                        <div className="relative w-full md:w-1/2 h-32 xs:h-40 sm:h-48 md:h-auto">
                            <Image src={offer.image} alt={offer.title} fill className="object-cover" />
                        </div>
                        <div className="p-3 xs:p-4 md:p-8 w-full md:w-1/2 flex flex-col justify-center text-center">
                            <h3 className="text-sm xs:text-base md:text-2xl font-serif text-[#4A4036] mb-1 md:mb-2 leading-tight line-clamp-2 md:line-clamp-none">{offer.title}</h3>
                            <p className="text-[#8A7B70] text-[10px] xs:text-xs md:text-sm mb-2 md:mb-6 line-clamp-2 md:line-clamp-none">{offer.description}</p>
                            <div className="mt-auto pt-2 md:pt-0">
                                <p className="text-xs xs:text-sm md:text-lg font-bold text-[#EC7754] mb-2 md:mb-4">{offer.discount}</p>
                                <Button variant="outline" className="w-full border-[#4A4036] text-[#4A4036] hover:bg-[#4A4036] hover:text-white rounded-none transition-colors text-[10px] md:text-xs h-8 md:h-10 uppercase tracking-wider">Book Now</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Variation 3: White Background + Left Align + Bold Sans
const Variation3 = () => (
    <section className="py-12 md:py-16 bg-[#F8F4EF]">
        <div className="container mx-auto px-2 md:px-4">
            <SectionHeader title="Limited Time" subtitle="03. White BG + Bold Sans" />
            <div className="grid grid-cols-2 gap-3 md:gap-8">
                {offers.map((offer) => (
                    <div key={offer.id} className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden flex flex-col md:flex-row group hover:border-[#D4A380] transition-all duration-300">
                        <div className="relative w-full md:w-1/2 h-32 xs:h-40 sm:h-48 md:h-auto">
                            <Image src={offer.image} alt={offer.title} fill className="object-cover" />
                        </div>
                        <div className="p-3 xs:p-4 md:p-8 w-full md:w-1/2 flex flex-col justify-center items-start">
                            <h3 className="text-sm xs:text-base md:text-2xl font-bold text-[#333] mb-1 md:mb-2 leading-tight line-clamp-2 md:line-clamp-none uppercase tracking-tight">{offer.title}</h3>
                            <p className="text-[#666] text-[10px] xs:text-xs md:text-sm mb-2 md:mb-6 line-clamp-2 md:line-clamp-none font-medium">{offer.description}</p>
                            <div className="mt-auto w-full pt-2 md:pt-0">
                                <p className="text-xs xs:text-sm md:text-lg font-black text-[#EC7754] mb-2 md:mb-4">{offer.discount}</p>
                                <Button className="w-full bg-black hover:bg-[#333] text-white rounded-sm transition-colors text-[10px] md:text-xs h-8 md:h-10 font-bold">CLAIM OFFER</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Variation 4: Soft Gradient + Serif Italic Accent
const Variation4 = () => (
    <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-2 md:px-4">
            <SectionHeader title="Expert Care" subtitle="04. Gradient + Italic Serif" />
            <div className="grid grid-cols-2 gap-3 md:gap-8">
                {offers.map((offer) => (
                    <div key={offer.id} className="rounded-lg overflow-hidden flex flex-col md:flex-row group shadow-sm">
                        <div className="relative w-full md:w-1/2 h-32 xs:h-40 sm:h-48 md:h-auto">
                            <Image src={offer.image} alt={offer.title} fill className="object-cover" />
                        </div>
                        <div className="p-3 xs:p-4 md:p-8 w-full md:w-1/2 flex flex-col justify-center bg-gradient-to-br from-[#FFFBF7] to-[#FFF5F5]">
                            <h3 className="text-sm xs:text-base md:text-2xl font-serif italic text-[#333] mb-1 md:mb-2 leading-tight line-clamp-2 md:line-clamp-none">{offer.title}</h3>
                            <p className="text-[#8A7B70] text-[10px] xs:text-xs md:text-sm mb-2 md:mb-6 line-clamp-2 md:line-clamp-none">{offer.description}</p>
                            <div className="mt-auto pt-2 md:pt-0 border-t border-[#D4A380]/10 md:border-none">
                                <p className="text-xs xs:text-sm md:text-lg font-medium text-[#D4A380] mb-2 md:mb-4">{offer.discount}</p>
                                <Button variant="ghost" className="w-full hover:bg-[#f9efe7] text-[#333] rounded-none transition-colors text-[10px] md:text-xs h-8 md:h-10 uppercase tracking-wider border border-[#333]">Book Now</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Variation 5: High Contrast (Dark Text Side)
const Variation5 = () => (
    <section className="py-12 md:py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-2 md:px-4">
            <SectionHeader title="Premium Packages" subtitle="05. High Contrast Dark" />
            <div className="grid grid-cols-2 gap-3 md:gap-8">
                {offers.map((offer) => (
                    <div key={offer.id} className="bg-[#2C2C2C] rounded-lg overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-all duration-300">
                        <div className="relative w-full md:w-1/2 h-32 xs:h-40 sm:h-48 md:h-auto">
                            <Image src={offer.image} alt={offer.title} fill className="object-cover opacity-90" />
                        </div>
                        <div className="p-3 xs:p-4 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-sm xs:text-base md:text-2xl font-serif text-white mb-1 md:mb-2 leading-tight line-clamp-2 md:line-clamp-none">{offer.title}</h3>
                            <p className="text-[#CCC] text-[10px] xs:text-xs md:text-sm mb-2 md:mb-6 line-clamp-2 md:line-clamp-none font-light">{offer.description}</p>
                            <div className="mt-auto pt-2 md:pt-0 border-t border-white/10 md:border-none">
                                <p className="text-xs xs:text-sm md:text-lg font-medium text-[#EC7754] mb-2 md:mb-4">{offer.discount}</p>
                                <Button className="w-full bg-white hover:bg-[#EC7754] hover:text-white text-black rounded-none transition-colors text-[10px] md:text-xs h-8 md:h-10 uppercase tracking-wider font-bold">Book Now</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Variation 6: Minimalist (Grey BG + Thin Fonts)
const Variation6 = () => (
    <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-2 md:px-4">
            <SectionHeader title="Quick Fixes" subtitle="06. Minimalist Grey" />
            <div className="grid grid-cols-2 gap-3 md:gap-8">
                {offers.map((offer) => (
                    <div key={offer.id} className="bg-[#F5F5F5] rounded-lg overflow-hidden flex flex-col md:flex-row group">
                        <div className="relative w-full md:w-1/2 h-32 xs:h-40 sm:h-48 md:h-auto grayscale group-hover:grayscale-0 transition-all duration-500">
                            <Image src={offer.image} alt={offer.title} fill className="object-cover" />
                        </div>
                        <div className="p-3 xs:p-4 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-sm xs:text-base md:text-2xl font-sans font-light text-[#333] mb-1 md:mb-2 leading-tight line-clamp-2 md:line-clamp-none">{offer.title}</h3>
                            <p className="text-[#777] text-[10px] xs:text-xs md:text-sm mb-2 md:mb-6 line-clamp-2 md:line-clamp-none font-light">{offer.description}</p>
                            <div className="mt-auto pt-2 md:pt-0">
                                <p className="text-xs xs:text-sm md:text-lg font-normal text-[#333] mb-2 md:mb-4">{offer.discount}</p>
                                <Button variant="outline" className="w-full border-[#999] text-[#555] hover:border-[#333] hover:text-[#333] rounded-full transition-colors text-[10px] md:text-xs h-8 md:h-10">View Details</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Variation 7: HYBRID - Beige BG + Bold Sans Typography (Option 1 Design + Option 3 Text)
const Variation7 = () => (
    <section className="py-12 md:py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-2 md:px-4">
            <SectionHeader title="Special Offers" subtitle="07. Beige BG + Bold Sans (HYBRID)" />
            <div className="grid grid-cols-2 gap-3 md:gap-8">
                {offers.map((offer) => (
                    <div key={offer.id} className="bg-[#f9efe7] rounded-lg overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-all duration-300">
                        <div className="relative w-full md:w-1/2 h-32 xs:h-40 sm:h-48 md:h-auto">
                            <Image src={offer.image} alt={offer.title} fill className="object-cover" />
                        </div>
                        <div className="p-3 xs:p-4 md:p-8 w-full md:w-1/2 flex flex-col justify-center items-start">
                            <h3 className="text-sm xs:text-base md:text-2xl font-bold text-[#333] mb-1 md:mb-2 leading-tight line-clamp-2 md:line-clamp-none uppercase tracking-tight">{offer.title}</h3>
                            <p className="text-[#666] text-[10px] xs:text-xs md:text-sm mb-2 md:mb-6 line-clamp-2 md:line-clamp-none font-medium">{offer.description}</p>
                            <div className="mt-auto w-full border-t border-[#D4A380]/20 pt-2 md:pt-0 md:border-none">
                                <p className="text-xs xs:text-sm md:text-lg font-black text-[#EC7754] mb-2 md:mb-4">{offer.discount}</p>
                                <Button className="w-full bg-black hover:bg-[#EC7754] text-white rounded-sm transition-colors text-[10px] md:text-xs h-8 md:h-10 font-bold">CLAIM OFFER</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default function OffersPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-[#333] text-white py-4 text-center px-4">
                <p className="text-xs md:text-sm font-medium tracking-wide">
                    UPDATED: New Offers + Hybrid Variation
                </p>
            </div>

            <Variation1 />
            <Variation2 />
            <Variation3 />
            <Variation4 />
            <Variation5 />
            <Variation6 />
            <Variation7 />

            <div className="py-24 text-center bg-[#f9efe7] px-4">
                <h2 className="text-2xl md:text-3xl font-serif text-[#333] mb-4 md:mb-6">Ready to Choose?</h2>
                <Button size="lg" className="bg-[#333] text-white hover:bg-[#EC7754] px-8 md:px-10">
                    Select Final Design
                </Button>
            </div>
        </main>
    );
}
