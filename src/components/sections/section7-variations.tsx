import React from "react";
import { Users, ShieldCheck, UserCheck, CheckCircle2, Star, ArrowRight, Heart, Sparkles, Activity } from "lucide-react";

const content = {
    title: "Why Choose Us",
    paragraphs: [
        "If you’re looking for a qualified Dermatologist and Skin Specialist in the NIBM, Kondhwa or Undri area, The Skin Firm offers medically supervised skin, hair and laser treatments designed to deliver visible and lasting results.",
        "At our clinic, treatments are customized by a Dermatologist based on your skin type, concern and lifestyle. We focus on safe, gentle and result-oriented care in a comfortable and transparent environment.",
        "We believe in combining medical expertise with aesthetic care to restore your skin’s natural health and glow - without over-treating or over-promising."
    ],
    points: [
        { icon: Users, text: "Over 5,000+ Happy Clients" },
        { icon: ShieldCheck, text: "US-FDA Approved Equipment" },
        { icon: UserCheck, text: "Personalized Consultations" },
        { icon: CheckCircle2, text: "Proven & Safe Results" },
        { icon: Star, text: "Trained & Certified Medical Experts" },
    ],
    cta: "Book your consultation with our Dermatologist today"
};

// --- Design 1: Left Text, Right List (Formerly Option 2) ---
export const Design1 = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#333333]">
                            {content.title}
                        </h2>
                        <div className="space-y-6 text-lg text-[#6C6C6C]">
                            {content.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                        <button className="hidden lg:inline-flex items-center gap-2 text-[#D4A380] font-bold border-b-2 border-[#D4A380] pb-1 hover:text-[#333333] hover:border-[#333333] transition-all">
                            {content.cta} <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {content.points.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-6 p-6 border border-[#F8F4EB] rounded-2xl hover:border-[#D4A380] transition-colors bg-[#FDFBF7]">
                                <item.icon className="text-[#D4A380] shrink-0" size={32} />
                                <span className="text-xl text-[#333333] font-medium">{item.text}</span>
                            </div>
                        ))}
                        <div className="lg:hidden mt-6 text-center">
                            <button className="inline-flex items-center gap-2 text-[#D4A380] font-bold border-b-2 border-[#D4A380] pb-1">
                                {content.cta}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 2: Interactive List (Formerly Option 7) ---
export const Design2 = () => {
    return (
        <section className="w-full bg-[#FDFBF7] py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#333333]">{content.title}</h2>
                        <div className="space-y-6 text-[#6C6C6C] leading-relaxed">
                            {content.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <button className="bg-[#D4A380] text-white px-8 py-3 rounded-lg hover:bg-[#333333] transition-colors shadow-lg shadow-[#D4A380]/20">
                            {content.cta}
                        </button>
                    </div>

                    <div className="lg:w-1/2 flex flex-col justify-center gap-4">
                        {content.points.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-6 hover:translate-x-2 transition-transform duration-300 border-l-4 border-transparent hover:border-[#D4A380]">
                                <item.icon className="text-[#D4A380]" size={28} />
                                <span className="text-lg font-medium text-[#333333]">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 3: Masonry Grid with Central Focus ---
export const Design3 = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">{content.title}</h2>
                    <p className="text-[#6C6C6C] max-w-3xl mx-auto text-lg">{content.paragraphs[0]}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-[#F8F4EB] p-8 rounded-3xl h-full flex flex-col justify-center">
                            <p className="text-[#6C6C6C] italic leading-relaxed">&ldquo;{content.paragraphs[2]}&rdquo;</p>
                        </div>
                        <div className="bg-white border border-[#F8F4EB] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                            <Users className="text-[#D4A380] mb-4" size={32} />
                            <h3 className="text-lg font-bold text-[#333333]">{content.points[0].text}</h3>
                        </div>
                    </div>

                    {/* Middle Column (Tall) */}
                    <div className="bg-[#333333] p-8 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A380]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <Sparkles className="text-[#D4A380] mb-6" size={48} />
                            <h3 className="text-2xl font-bold mb-4">Excellence in Dermatology</h3>
                            <p className="text-gray-300 mb-8">{content.paragraphs[1]}</p>
                            <div className="space-y-4">
                                {content.points.slice(1, 4).map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#D4A380]" size={20} />
                                        <span className="text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="mt-8 w-full bg-white text-[#333333] py-3 rounded-xl font-bold hover:bg-[#D4A380] hover:text-white transition-colors">
                            Book Now
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white border border-[#F8F4EB] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                            <Star className="text-[#D4A380] mb-4" size={32} />
                            <h3 className="text-lg font-bold text-[#333333]">{content.points[4].text}</h3>
                        </div>
                        <div className="bg-[#F8F4EB] p-8 rounded-3xl h-full flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#D4A380] mb-4 shadow-sm">
                                <Heart size={32} fill="#D4A380" />
                            </div>
                            <p className="text-[#333333] font-medium">Trusted by thousands for safe & effective care.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Design 4: Vertical Steps Process ---
export const Design4 = () => {
    return (
        <section className="w-full bg-[#FDFBF7] py-16 lg:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#D4A380] font-bold tracking-widest uppercase text-sm">Our Promise</span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mt-2">{content.title}</h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#D4A380]/20 lg:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {content.points.map((item, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Icon Bubble */}
                                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-[#D4A380] rounded-full lg:-translate-x-1/2 border-4 border-white shadow-sm z-10"></div>

                                {/* Content Side */}
                                <div className="pl-20 lg:pl-0 lg:w-1/2 lg:text-right">
                                    <div className={`bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#D4A380] ${idx % 2 !== 0 ? 'lg:border-l-0 lg:border-r-4 lg:text-left' : ''}`}>
                                        <div className={`flex items-center gap-4 mb-2 ${idx % 2 === 0 ? 'lg:justify-end' : ''}`}>
                                            <item.icon className="text-[#D4A380] lg:hidden" size={24} />
                                            <h3 className="text-xl font-bold text-[#333333]">{item.text}</h3>
                                            <item.icon className="text-[#D4A380] hidden lg:block" size={24} />
                                        </div>
                                        <p className="text-sm text-[#6C6C6C]">Experience the difference with our dedicated approach to skin health.</p>
                                    </div>
                                </div>

                                {/* Empty Side for spacing */}
                                <div className="hidden lg:block lg:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <p className="text-[#6C6C6C] max-w-2xl mx-auto mb-8">{content.paragraphs[1]}</p>
                    <button className="bg-[#333333] text-white px-10 py-4 rounded-full hover:bg-[#D4A380] transition-colors font-bold">
                        {content.cta}
                    </button>
                </div>
            </div>
        </section>
    );
};

// --- Design 5: Big Icon Watermark ---
export const Design5 = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24 overflow-hidden relative">
            {/* Watermark */}
            <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
                <ShieldCheck size={600} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                        <h2 className="text-5xl sm:text-7xl font-bold text-[#333333] leading-none">
                            Why <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A380] to-[#b07e5d]">Choose</span> <br />
                            Us?
                        </h2>
                        <div className="w-20 h-2 bg-[#333333]"></div>
                        <p className="text-xl text-[#6C6C6C] leading-relaxed">
                            {content.paragraphs[0]}
                        </p>
                        <button className="self-start px-8 py-3 border-2 border-[#333333] text-[#333333] font-bold hover:bg-[#333333] hover:text-white transition-all duration-300">
                            {content.cta}
                        </button>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {content.points.map((item, idx) => (
                            <div key={idx} className="group p-8 bg-[#F8F4EB] hover:bg-[#333333] transition-colors duration-500 rounded-[2rem]">
                                <item.icon className="text-[#333333] group-hover:text-[#D4A380] transition-colors duration-500 mb-6" size={40} strokeWidth={1.5} />
                                <h3 className="text-xl font-bold text-[#333333] group-hover:text-white transition-colors duration-500 mb-2">{item.text}</h3>
                                <div className="w-8 h-1 bg-[#D4A380] group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                        <div className="p-8 flex items-center justify-center bg-white border-2 border-dashed border-[#D4A380] rounded-[2rem]">
                            <p className="text-center text-[#D4A380] font-medium italic">
                                &ldquo;Your skin deserves the best.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Section7Variations = () => {
    return (
        <div className="flex flex-col gap-20 pb-20 bg-gray-50">
            <div className="text-center py-12 bg-white border-b sticky top-0 z-50 shadow-sm">
                <h1 className="text-3xl font-bold mb-2 text-[#333333]">Section 7 Variations (Refined)</h1>
                <p className="text-gray-500">5 Options | Light Theme | Gold Accents</p>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 1: Left Text, Right List</div>
                <Design1 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 2: Interactive List</div>
                <Design2 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 3: Masonry Grid</div>
                <Design3 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 4: Vertical Steps</div>
                <Design4 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">Option 5: Big Icon Watermark</div>
                <Design5 />
            </div>
        </div>
    );
};
