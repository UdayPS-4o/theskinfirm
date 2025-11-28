"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Crown, Users, Award, Calendar, Shield, Heart, Check, ArrowRight } from "lucide-react";

// Design 1: Royal Split with Card (Inspired by Reference)
export const Design1 = () => {
    return (
        <div className="w-full bg-[#F5EFE7] py-24 px-4 lg:px-20">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm">
                        <Sparkles className="w-5 h-5 text-[#D4A380]" />
                        <span className="text-[#8A7B70] uppercase tracking-[0.2em] text-xs font-semibold">Wedding Glow</span>
                    </div>
                    <h2 className="text-[#64442A] text-5xl lg:text-6xl font-serif leading-tight">
                        For the <br />
                        Bride & Groom <br />
                        Who Want to <span className="text-[#D4A380]">Glow</span>
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-16 bg-[#D4A380]" />
                        <div className="w-3 h-3 rounded-full border-2 border-[#D4A380]" />
                    </div>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#F0E6DE]">
                    <p className="text-[#64442A] text-lg leading-relaxed mb-6">
                        Your wedding day is one of life&apos;s most photographed moments, so your skin should look as radiant as your love story.
                    </p>
                    <p className="text-[#8A7B70] text-base leading-relaxed mb-8">
                        At The Skin Firm, we design dermatologist-led pre-wedding treatments for both brides and grooms, ensuring you look your most confident and refreshed on your big day.
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#F0E6DE]">
                        <div className="flex flex-col items-center text-center gap-2">
                            <Users className="w-6 h-6 text-[#D4A380]" />
                            <span className="text-xs text-[#8A7B70]">For Both Partners</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <Award className="w-6 h-6 text-[#D4A380]" />
                            <span className="text-xs text-[#8A7B70]">Expert-Led Care</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <Calendar className="w-6 h-6 text-[#D4A380]" />
                            <span className="text-xs text-[#8A7B70]">Personalized Plans</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Design 2: Centered Elegance with Ornate Border
export const Design2 = () => {
    return (
        <div className="w-full bg-white py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="border-2 border-[#D4A380] rounded-[3rem] p-2">
                    <div className="border border-[#D4A380]/30 rounded-[2.7rem] p-16 lg:p-20 bg-gradient-to-br from-[#FBEDE4] to-white">
                        <div className="text-center max-w-3xl mx-auto space-y-8">
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
                                <Crown className="w-5 h-5 text-[#D4A380]" />
                                <span className="text-[#64442A] font-serif text-sm">Royal Bridal Experience</span>
                            </div>
                            <h2 className="text-[#64442A] text-4xl lg:text-5xl font-serif leading-tight">
                                Timeless Beauty, <br />
                                <span className="text-[#D4A380] italic">Flawless Radiance</span>
                            </h2>
                            <p className="text-[#8A7B70] text-lg max-w-2xl mx-auto">
                                Curated skin rituals designed exclusively for couples who seek perfection. From consultation to your wedding day, we ensure every moment reflects your inner glow.
                            </p>
                            <div className="flex justify-center gap-6 pt-6">
                                <div className="text-center">
                                    <div className="text-3xl font-serif text-[#D4A380]">2000+</div>
                                    <div className="text-sm text-[#8A7B70]">Happy Couples</div>
                                </div>
                                <div className="w-px bg-[#D4A380]/30" />
                                <div className="text-center">
                                    <div className="text-3xl font-serif text-[#D4A380]">15+</div>
                                    <div className="text-sm text-[#8A7B70]">Years Expertise</div>
                                </div>
                                <div className="w-px bg-[#D4A380]/30" />
                                <div className="text-center">
                                    <div className="text-3xl font-serif text-[#D4A380]">100%</div>
                                    <div className="text-sm text-[#8A7B70]">Personalized</div>
                                </div>
                            </div>
                            <Button className="bg-[#64442A] hover:bg-[#7D5A3A] text-white px-10 py-6 rounded-full text-lg shadow-xl">
                                Begin Your Journey
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Design 3: Luxury Grid Features
export const Design3 = () => {
    return (
        <div className="w-full bg-[#FBEDE4] py-24 px-4 lg:px-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-[#D4A380]" />
                        <Star className="w-6 h-6 text-[#D4A380] fill-[#D4A380]" />
                        <div className="h-px w-12 bg-[#D4A380]" />
                    </div>
                    <h2 className="text-[#64442A] text-5xl font-serif mb-4">
                        Your Wedding, <span className="text-[#D4A380]">Perfected</span>
                    </h2>
                    <p className="text-[#8A7B70] text-lg max-w-2xl mx-auto">
                        A complete transformation journey tailored to your special day
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Shield, title: "Clinical Excellence", desc: "Dermatologist-led treatments" },
                        { icon: Heart, title: "Couple Care", desc: "For bride and groom" },
                        { icon: Calendar, title: "Flexible Timeline", desc: "6, 3, or 1 month plans" },
                        { icon: Award, title: "Premium Products", desc: "Medical-grade formulations" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-[#F0E6DE] group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#D4A380] to-[#C19970] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-[#64442A] text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-[#8A7B70]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Design 4: Asymmetric Premium Layout
export const Design4 = () => {
    return (
        <div className="w-full bg-white py-24 px-4 lg:px-20">
            <div className="container mx-auto grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 space-y-8">
                    <div className="inline-flex items-center gap-2 bg-[#FBEDE4] px-5 py-2 rounded-full">
                        <Crown className="w-4 h-4 text-[#D4A380]" />
                        <span className="text-[#64442A] text-sm font-medium">Pre-Wedding Excellence</span>
                    </div>
                    <h2 className="text-[#64442A] text-6xl font-serif leading-tight">
                        Where Love Meets <br />
                        <span className="text-[#D4A380] italic">Luminous Skin</span>
                    </h2>
                    <p className="text-[#8A7B70] text-xl leading-relaxed max-w-xl">
                        Expert dermatological care meets luxury in our bespoke pre-wedding programs, designed to unveil your most confident self.
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-[#D4A380] hover:bg-[#C19970] text-white px-8 py-6 rounded-xl">
                            Book Consultation
                        </Button>
                        <Button variant="outline" className="border-[#D4A380] text-[#64442A] hover:bg-[#FBEDE4] px-8 py-6 rounded-xl">
                            View Packages
                        </Button>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                    {[
                        "Customized Treatment Plans",
                        "Advanced Laser Therapies",
                        "Skin Brightening Rituals",
                        "Post-Treatment Care"
                    ].map((item, i) => (
                        <div key={i} className="bg-[#FBEDE4] p-6 rounded-2xl flex items-center gap-4 border-l-4 border-[#D4A380]">
                            <Check className="w-6 h-6 text-[#D4A380]" />
                            <span className="text-[#64442A] font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Design 5: Sophisticated Minimal
export const Design5 = () => {
    return (
        <div className="w-full bg-[#F8F4EF] py-32 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#D4A380]" />
                        <span className="text-[#8A7B70] uppercase tracking-[0.3em] text-xs">The Skin Firm Bridal</span>
                        <div className="w-2 h-2 rounded-full bg-[#D4A380]" />
                    </div>
                    <h2 className="text-[#64442A] text-5xl lg:text-7xl font-serif leading-none">
                        Confidence for <br />
                        Your <span className="italic text-[#D4A380]">Forever Moment</span>
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto">
                    <p className="text-[#8A7B70] text-xl leading-relaxed mb-8">
                        From the first consultation to your final glow-up session, experience the pinnacle of dermatological luxury.
                    </p>
                    <div className="inline-flex items-center gap-8 text-center">
                        <div>
                            <Star className="w-6 h-6 text-[#D4A380] fill-[#D4A380] mx-auto mb-2" />
                            <span className="text-sm text-[#8A7B70]">Award Winning</span>
                        </div>
                        <div className="w-px h-12 bg-[#D4A380]/30" />
                        <div>
                            <Shield className="w-6 h-6 text-[#D4A380] mx-auto mb-2" />
                            <span className="text-sm text-[#8A7B70]">Medical Grade</span>
                        </div>
                        <div className="w-px h-12 bg-[#D4A380]/30" />
                        <div>
                            <Heart className="w-6 h-6 text-[#D4A380] mx-auto mb-2" />
                            <span className="text-sm text-[#8A7B70]">Couple Focused</span>
                        </div>
                    </div>
                </div>

                <Button className="bg-transparent border-2 border-[#64442A] text-[#64442A] hover:bg-[#64442A] hover:text-white px-12 py-7 rounded-none text-lg uppercase tracking-widest transition-all">
                    Schedule Visit
                </Button>
            </div>
        </div>
    );
};

// Design 6: Premium Card Stack
export const Design6 = () => {
    return (
        <div className="w-full bg-white py-24 px-4 lg:px-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-3 mb-8 bg-[#FBEDE4] px-6 py-3 rounded-full">
                        <Sparkles className="w-5 h-5 text-[#D4A380]" />
                        <span className="text-[#64442A] font-medium">Bridal Excellence</span>
                    </div>
                    <h2 className="text-[#64442A] text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                        The Royal <br />
                        Wedding Ritual
                    </h2>
                    <p className="text-[#8A7B70] text-lg mb-8">
                        Indulge in premium skin therapies designed for life&apos;s most precious milestone.
                    </p>
                </div>

                <div className="lg:w-1/2 space-y-6">
                    {[
                        { title: "6-Month Transformation", desc: "Complete skin renewal journey" },
                        { title: "3-Month Radiance", desc: "Intensive glow program" },
                        { title: "1-Month Express", desc: "Quick perfection boost" }
                    ].map((plan, i) => (
                        <div key={i} className="bg-gradient-to-r from-[#FBEDE4] to-white p-8 rounded-2xl border-l-4 border-[#D4A380] shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-[#64442A] text-2xl font-semibold mb-2">{plan.title}</h3>
                                    <p className="text-[#8A7B70]">{plan.desc}</p>
                                </div>
                                <ArrowRight className="w-6 h-6 text-[#D4A380] group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Design 7: Regal Statement
export const Design7 = () => {
    return (
        <div className="w-full bg-[#FBEDE4] py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl border-2 border-[#F0E6DE]">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#D4A380] to-[#C19970] rounded-2xl flex items-center justify-center mb-8">
                                <Crown className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-[#64442A] text-4xl lg:text-5xl font-serif mb-6">
                                &ldquo;True beauty is timeless, <br />
                                <span className="text-[#D4A380] italic">and your wedding deserves nothing less.&rdquo;</span>
                            </h2>
                            <p className="text-[#8A7B70] text-lg">
                                — Dr. Karishma Singh, Founder
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="text-center p-6 bg-[#FBEDE4] rounded-2xl">
                                <div className="text-4xl font-serif text-[#D4A380] mb-2">2000+</div>
                                <div className="text-sm text-[#8A7B70]">Glowing Couples</div>
                            </div>
                            <div className="text-center p-6 bg-[#FBEDE4] rounded-2xl">
                                <div className="text-4xl font-serif text-[#D4A380] mb-2">15+</div>
                                <div className="text-sm text-[#8A7B70]">Years of Mastery</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Design 8: Heritage Elegance
export const Design8 = () => {
    return (
        <div className="w-full bg-white py-24 px-4 lg:px-20">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <div className="inline-block mb-8">
                        <div className="w-20 h-20 bg-[#FBEDE4] rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                            <Sparkles className="w-10 h-10 text-[#D4A380]" />
                        </div>
                    </div>
                    <h2 className="text-[#64442A] text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                        Your Wedding Day <br />
                        Begins with <span className="text-[#D4A380]">Beautiful Skin</span>
                    </h2>
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4A380] to-transparent mx-auto mb-8" />
                    <p className="text-[#8A7B70] text-xl max-w-3xl mx-auto">
                        Experience the gold standard in pre-wedding skincare. Treatments rooted in science, elevated by luxury.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {["Expert Care", "Proven Results", "Lasting Glow"].map((item, i) => (
                        <div key={i} className="text-center p-8 border border-[#F0E6DE] rounded-2xl hover:bg-[#FBEDE4] transition-colors">
                            <div className="w-12 h-12 bg-[#D4A380] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-[#64442A] text-xl font-semibold">{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Design 9: Grand Presentation
export const Design9 = () => {
    return (
        <div className="w-full bg-gradient-to-br from-[#FBEDE4] to-[#F5EFE7] py-32 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="relative">
                    <div className="absolute -top-8 -left-8 w-full h-full border-2 border-[#D4A380]/20 rounded-[3rem] hidden lg:block" />
                    <div className="relative bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-2/3">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="h-px w-12 bg-[#D4A380]" />
                                    <Crown className="w-6 h-6 text-[#D4A380]" />
                                    <span className="text-[#8A7B70] uppercase tracking-widest text-sm">Royal Treatment</span>
                                </div>
                                <h2 className="text-[#64442A] text-5xl font-serif mb-6">
                                    Bride & Groom <br />
                                    <span className="text-[#D4A380]">Transformation Program</span>
                                </h2>
                                <p className="text-[#8A7B70] text-lg mb-8">
                                    A holistic approach to wedding-ready skin, combining medical expertise with luxurious care for both partners.
                                </p>
                                <Button className="bg-[#64442A] hover:bg-[#7D5A3A] text-white px-10 py-6 rounded-xl shadow-lg">
                                    Discover Your Plan
                                </Button>
                            </div>
                            <div className="lg:w-1/3 space-y-4">
                                {[
                                    { icon: Users, text: "Couple Packages" },
                                    { icon: Award, text: "Expert Dermatologists" },
                                    { icon: Shield, text: "Safe & Effective" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-[#FBEDE4] rounded-xl">
                                        <item.icon className="w-6 h-6 text-[#D4A380]" />
                                        <span className="text-[#64442A] font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Design 10: Majestic CTA
export const Design10 = () => {
    return (
        <div className="w-full bg-white py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-br from-[#FBEDE4] via-white to-[#F5EFE7] rounded-[3rem] p-12 lg:p-20 border-2 border-[#D4A380]/20 shadow-2xl">
                    <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg mb-10">
                        <Star className="w-6 h-6 text-[#D4A380] fill-[#D4A380]" />
                        <span className="text-[#64442A] font-semibold text-lg">Limited Slots for Wedding Season</span>
                    </div>
                    <h2 className="text-[#64442A] text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                        Ready to Unveil Your <br />
                        <span className="text-[#D4A380] italic">Most Radiant Self?</span>
                    </h2>
                    <p className="text-[#8A7B70] text-xl mb-12 max-w-2xl mx-auto">
                        Your wedding countdown begins now. Book your personalized consultation and start your transformation journey today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="w-full sm:w-auto bg-[#D4A380] hover:bg-[#C19970] text-white px-12 py-7 rounded-xl text-lg shadow-xl">
                            Book Free Consultation
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto border-2 border-[#64442A] text-[#64442A] hover:bg-[#64442A] hover:text-white px-12 py-7 rounded-xl text-lg">
                            View Bridal Packages
                        </Button>
                    </div>
                    <p className="text-sm text-[#8A7B70] mt-8 flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        100% Satisfaction Guaranteed
                    </p>
                </div>
            </div>
        </div>
    );
};
