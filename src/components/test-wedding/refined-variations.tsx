import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Sparkles, Heart, Crown, Gem, Check, ArrowRight } from "lucide-react";
import Image from "next/image";

const imagePath = "/groom-putting-ring-bride-finger.jpg";

// --- Design 4 Variations ---

export const Design4_Var1 = () => {
    return (
        <div className="w-full bg-[#FFFBF7] py-20 px-4 lg:px-20">
            <div className="container mx-auto max-w-6xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 relative">
                        <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image src={imagePath} alt="Bridal Prep" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:-ml-12 z-10">
                        <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl border border-[#F0E6DE]">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF5F5] rounded-full text-[#D4A380] text-xs font-bold tracking-widest uppercase mb-6">
                                <Crown className="w-3 h-3" /> Pre-Wedding Excellence
                            </div>
                            <h2 className="text-[#4A4036] text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight">
                                Where Love Meets <br />
                                <span className="italic text-[#D4A380]">Luminous Skin</span>
                            </h2>
                            <p className="text-[#606060] mb-8 leading-relaxed font-light">
                                Expert dermatological care meets luxury in our bespoke pre-wedding programs, designed to unveil your most confident self.
                            </p>
                            <Button className="w-full bg-[#4A4036] text-white rounded-xl py-6 text-lg hover:bg-[#5C5148]">
                                View Packages
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Design4_Var2 = () => {
    return (
        <div className="w-full bg-white py-20 px-4 lg:px-20">
            <div className="container mx-auto max-w-6xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 relative order-1 lg:order-2">
                        <div className="relative h-[400px] lg:h-[500px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
                            <Image src={imagePath} alt="Bridal Prep" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:-mr-12 z-10 order-2 lg:order-1">
                        <div className="bg-[#F9F5F1] p-8 lg:p-12 rounded-3xl shadow-lg">
                            <h2 className="text-[#2A2A2A] text-3xl lg:text-4xl font-serif font-bold mb-4">
                                The Bridal Edit
                            </h2>
                            <div className="w-16 h-1 bg-[#D4A380] mb-6"></div>
                            <p className="text-[#555] mb-8 leading-relaxed">
                                Curated treatments for the modern bride. Focus on hydration, texture, and that signature wedding day glow.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-[#4A4036] font-medium">
                                    <Check className="w-5 h-5 text-[#D4A380]" /> 3-Month Plans
                                </li>
                                <li className="flex items-center gap-3 text-[#4A4036] font-medium">
                                    <Check className="w-5 h-5 text-[#D4A380]" /> Laser Toning
                                </li>
                                <li className="flex items-center gap-3 text-[#4A4036] font-medium">
                                    <Check className="w-5 h-5 text-[#D4A380]" /> Body Polishing
                                </li>
                            </ul>
                            <Button variant="outline" className="w-full border-[#4A4036] text-[#4A4036] hover:bg-[#4A4036] hover:text-white rounded-none py-6 text-lg uppercase tracking-wider">
                                View Packages
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Design4_Var3 = () => {
    return (
        <div className="w-full bg-[#F5F5F5] py-20 px-4 lg:px-20">
            <div className="container mx-auto max-w-6xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 relative">
                        <div className="relative h-[400px] lg:h-[500px] rounded-full overflow-hidden border-8 border-white shadow-xl">
                            <Image src={imagePath} alt="Bridal Prep" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:-ml-20 z-10">
                        <div className="bg-white/90 backdrop-blur-md p-8 lg:p-16 rounded-[3rem] shadow-2xl border border-white/50">
                            <h2 className="text-[#4A4036] text-5xl font-serif italic mb-2">
                                Forever
                            </h2>
                            <h2 className="text-[#D4A380] text-5xl font-serif font-bold mb-6">
                                Flawless
                            </h2>
                            <p className="text-[#606060] mb-8 text-lg">
                                Your wedding photos last a lifetime. Ensure your skin looks timeless with our expert-led aesthetic procedures.
                            </p>
                            <Button className="w-full bg-gradient-to-r from-[#D4A380] to-[#B08060] text-white rounded-full py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                                View Packages
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Variation 8 Variations ---

export const Variation8_Var1 = () => {
    return (
        <div className="py-20 px-0 bg-white">
            <div className="container mx-auto max-w-7xl">
                <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
                    <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                        <div className="max-w-3xl">
                            <h2 className="text-6xl lg:text-8xl font-serif text-white mb-4 tracking-tighter opacity-90">
                                Ethereal Glow
                            </h2>
                            <p className="text-white/90 text-xl lg:text-2xl font-light mb-10 tracking-wide">
                                Transcending beauty for your most special moment.
                            </p>
                            <Button className="bg-white/20 backdrop-blur-md border border-white/50 text-white hover:bg-white hover:text-black px-12 py-6 rounded-full text-lg transition-all">
                                View Packages
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Variation8_Var2 = () => {
    return (
        <div className="py-20 px-0 bg-[#FFFBF7]">
            <div className="container mx-auto max-w-7xl">
                <div className="relative h-[600px] rounded-none lg:rounded-[4rem] overflow-hidden">
                    <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A4036] via-transparent to-transparent flex items-end">
                        <div className="p-12 lg:p-24 w-full flex flex-col lg:flex-row items-end justify-between gap-8">
                            <div className="max-w-2xl">
                                <span className="text-[#D4A380] uppercase tracking-[0.3em] text-sm font-bold mb-2 block">The Collection</span>
                                <h2 className="text-5xl lg:text-6xl font-serif text-white mb-4">
                                    BRIDAL BOOTCAMP
                                </h2>
                                <p className="text-white/80 text-lg max-w-lg">
                                    Intensive, results-driven skincare regimens for the bride who wants nothing but perfection.
                                </p>
                            </div>
                            <Button className="bg-[#D4A380] text-white hover:bg-[#C09070] px-10 py-6 rounded-lg text-lg font-semibold whitespace-nowrap">
                                View Packages
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Variation8_Var3 = () => {
    return (
        <div className="py-20 px-0 bg-white">
            <div className="container mx-auto max-w-7xl">
                <div className="relative h-[600px] rounded-3xl overflow-hidden border-8 border-[#F5F0EB]">
                    <Image src={imagePath} alt="Wedding" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-white/80 mix-blend-hard-light opacity-30" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-12 lg:p-16 text-center max-w-xl shadow-2xl">
                        <div className="border-2 border-[#4A4036] p-2 inline-block mb-6 rounded-full">
                            <Heart className="w-6 h-6 text-[#4A4036]" />
                        </div>
                        <h2 className="text-4xl font-serif text-[#4A4036] mb-4">
                            Your Journey Begins
                        </h2>
                        <p className="text-[#606060] mb-8 italic">
                            "Beauty is not just about how you look, but how you feel on your big day."
                        </p>
                        <Button variant="link" className="text-[#4A4036] text-lg underline decoration-[#D4A380] decoration-2 underline-offset-4 hover:text-[#D4A380]">
                            View Packages
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Variation 9 Variations ---

export const Variation9_Var1 = () => {
    return (
        <div className="py-20 px-6 bg-[#FAFAFA]">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-0 shadow-xl rounded-[2rem] overflow-hidden">
                    <div className="bg-white p-12 lg:p-24 flex flex-col justify-center border-r border-[#F0F0F0]">
                        <h3 className="text-4xl font-serif text-[#333] mb-2">Skin & Soul</h3>
                        <p className="text-[#999] text-sm uppercase tracking-widest mb-8">Holistic Bridal Care</p>
                        <p className="text-[#666] mb-10 leading-relaxed font-light text-lg">
                            We believe in a holistic approach to bridal beauty. Combining medical expertise with relaxation therapies to calm pre-wedding jitters.
                        </p>
                        <Button className="self-start bg-black text-white hover:bg-[#333] px-10 py-5 rounded-full text-sm uppercase tracking-widest">
                            View Packages
                        </Button>
                    </div>
                    <div className="relative h-[400px] lg:h-auto">
                        <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Variation9_Var2 = () => {
    return (
        <div className="py-20 px-6 bg-[#FFFBF7]">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1 bg-[#4A4036] text-white p-12 lg:p-20 rounded-[3rem] shadow-2xl">
                        <h3 className="text-3xl lg:text-4xl font-serif mb-8">The Wedding Prep</h3>
                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-xl">
                                    <Sparkles className="w-6 h-6 text-[#D4A380]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Radiance</h4>
                                    <p className="text-white/60 text-sm">Instant glow treatments.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-xl">
                                    <Gem className="w-6 h-6 text-[#D4A380]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Refinement</h4>
                                    <p className="text-white/60 text-sm">Texture and pore correction.</p>
                                </div>
                            </div>
                        </div>
                        <Button className="w-full bg-[#D4A380] text-white hover:bg-[#C09070] py-6 rounded-xl font-bold">
                            View Packages
                        </Button>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[500px] rounded-[3rem] overflow-hidden shadow-lg">
                        <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Variation9_Var3 = () => {
    return (
        <div className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-0 border border-[#E5E5E5] rounded-xl overflow-hidden">
                    <div className="relative h-[400px] lg:h-auto">
                        <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                        <div className="absolute inset-0 bg-[#4A4036]/20" />
                    </div>
                    <div className="bg-[#FFFDFA] p-12 lg:p-20 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                            <Star className="w-4 h-4 text-[#D4A380] fill-[#D4A380]" />
                            <Star className="w-4 h-4 text-[#D4A380] fill-[#D4A380]" />
                            <Star className="w-4 h-4 text-[#D4A380] fill-[#D4A380]" />
                            <Star className="w-4 h-4 text-[#D4A380] fill-[#D4A380]" />
                            <Star className="w-4 h-4 text-[#D4A380] fill-[#D4A380]" />
                        </div>
                        <h3 className="text-4xl font-serif text-[#4A4036] mb-6">Radiance Rituals</h3>
                        <p className="text-[#606060] mb-8 leading-relaxed">
                            "I've never felt more beautiful than I did on my wedding day, thanks to The Skin Firm."
                        </p>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-[#D4A380] rounded-full flex items-center justify-center text-white font-bold">
                                98%
                            </div>
                            <p className="text-sm text-[#888]">Client Satisfaction Rate</p>
                        </div>
                        <Button variant="ghost" className="self-start text-[#4A4036] hover:bg-[#FFF5F5] hover:text-[#D4A380] px-0 hover:px-4 transition-all">
                            View Packages <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
