"use client";

import React, { useState } from "react";
import { ArrowRight, Play, PlayCircle, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

// Content Data - Real video URLs from the site
const content = {
    title: "Expert Skincare Advice",
    subtitle: "Learn from Dr. Karishma Singh",
    cta: "View All Videos",
    videos: [
        {
            url: "https://www.youtube.com/watch?v=KVBON1lA9N8",
            title: "Expert Skincare Tips",
            category: "Skincare",
            embedUrl: "https://www.youtube.com/embed/KVBON1lA9N8"
        },
        {
            url: "https://www.youtube.com/watch?v=i9p0tZaVdS4",
            title: "Treatment Guide",
            category: "Treatment",
            embedUrl: "https://www.youtube.com/embed/i9p0tZaVdS4"
        },
        {
            url: "https://www.youtube.com/watch?v=fmB8-4zusV8",
            title: "Skin Care Routine",
            category: "Skincare",
            embedUrl: "https://www.youtube.com/embed/fmB8-4zusV8"
        },
        {
            url: "https://www.youtube.com/watch?v=jY-7vEx8R3I",
            title: "Professional Advice",
            category: "Tips",
            embedUrl: "https://www.youtube.com/embed/jY-7vEx8R3I"
        }
    ]
};

// ---------------------------------------------------
// Design 1: Classic Grid
// ---------------------------------------------------
const Design1 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-4">{content.title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">{content.subtitle}</p>
                <Button className="bg-[#333333] text-white hover:bg-[#EC7754]">
                    {content.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.videos.slice(0, 3).map((video, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white border border-gray-100">
                        <div className="aspect-video relative">
                            <iframe
                                src={video.embedUrl}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="h-full w-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-bold text-[#EC7754] uppercase tracking-wider mb-2 block">{video.category}</span>
                            <h3 className="font-bold text-[#333333] text-lg leading-tight">{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 2: Featured Hero
// ---------------------------------------------------
const Design2 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">Expert Insights</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
                    <p className="text-gray-600 text-lg">{content.subtitle}</p>

                    <div className="space-y-4 pt-4">
                        {content.videos.slice(1, 4).map((video, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors cursor-pointer group">
                                <div className="w-24 h-16 bg-gray-200 rounded-lg overflow-hidden relative flex-shrink-0">
                                    <div className="w-full h-full flex items-center justify-center bg-black/5">
                                        <PlayCircle className="text-[#EC7754]" size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#333333] text-sm group-hover:text-[#EC7754] transition-colors">{video.title}</h4>
                                    <p className="text-xs text-gray-500">{video.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button variant="link" className="text-[#333333] font-bold p-0 hover:text-[#EC7754]">
                        {content.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="w-full">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
                        <iframe
                            src={content.videos[0].embedUrl}
                            title={content.videos[0].title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="h-full w-full"
                            loading="lazy"
                        />
                    </div>
                    <div className="mt-4 px-2">
                        <span className="bg-[#EC7754] text-white text-xs px-3 py-1 rounded-full">Featured</span>
                        <h3 className="text-xl font-bold text-[#333333] mt-3">{content.videos[0].title}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 3: Bento Grid
// ---------------------------------------------------
const Design3 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                {/* Header Block */}
                <div className="md:col-span-2 row-span-1 bg-[#F8F4EB] rounded-3xl p-8 flex flex-col justify-center items-start">
                    <h2 className="text-3xl font-bold text-[#333333] mb-2">{content.title}</h2>
                    <p className="text-gray-600 mb-6">{content.subtitle}</p>
                    <Button variant="outline" className="border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white rounded-full">
                        {content.cta}
                    </Button>
                </div>

                {/* Main Video */}
                <div className="md:col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-md">
                    <iframe
                        src={content.videos[0].embedUrl}
                        title={content.videos[0].title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full"
                        loading="lazy"
                    />
                </div>

                {/* Secondary Videos */}
                <div className="md:col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-md">
                    <iframe
                        src={content.videos[1].embedUrl}
                        title={content.videos[1].title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full"
                        loading="lazy"
                    />
                </div>

                <div className="md:col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-md">
                    <iframe
                        src={content.videos[2].embedUrl}
                        title={content.videos[2].title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 4: Minimalist List
// ---------------------------------------------------
const Design4 = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-8">{content.title}</h2>
                        <div className="space-y-6">
                            {content.videos.map((video, idx) => (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setActiveIdx(idx)}
                                    className={`group flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeIdx === idx ? 'bg-[#F8F4EB]' : 'hover:bg-gray-50'}`}
                                >
                                    <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${activeIdx === idx ? 'bg-[#EC7754] border-[#EC7754] text-white' : 'border-gray-300 text-gray-400'}`}>
                                        {activeIdx === idx ? <Play size={12} fill="currentColor" /> : <span className="text-xs font-bold">{idx + 1}</span>}
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-bold mb-1 ${activeIdx === idx ? 'text-[#333333]' : 'text-gray-500'}`}>{video.title}</h3>
                                        <p className="text-sm text-gray-400">{video.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pl-4">
                            <Button variant="link" className="text-[#EC7754] p-0 font-bold">
                                {content.cta} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                            {content.videos.map((video, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-opacity duration-500 ${activeIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                >
                                    <iframe
                                        src={video.embedUrl}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="h-full w-full"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 5: Horizontal Scroll
// ---------------------------------------------------
const Design5 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
            <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-2">{content.title}</h2>
                <p className="text-gray-600">{content.subtitle}</p>
            </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x">
            {content.videos.map((video, idx) => (
                <div key={idx} className="min-w-[320px] md:min-w-[400px] snap-center group cursor-pointer">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-md mb-4">
                        <iframe
                            src={video.embedUrl}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="h-full w-full"
                            loading="lazy"
                        />
                    </div>
                    <div className="px-2">
                        <h3 className="font-bold text-[#333333] mb-1">{video.title}</h3>
                        <p className="text-xs text-gray-500">{video.category}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

// ---------------------------------------------------
// Design 6: Stacked Cards
// ---------------------------------------------------
const Design6 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-4">{content.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
            {content.videos.map((video, idx) => (
                <div
                    key={idx}
                    className="border-2 border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2 aspect-video">
                            <iframe
                                src={video.embedUrl}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="h-full w-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-center">
                            <span className="text-xs font-bold text-[#EC7754] uppercase tracking-wider mb-2">{video.category}</span>
                            <h3 className="text-xl font-bold text-[#333333] mb-3">{video.title}</h3>
                            <p className="text-gray-600 text-sm">Watch this expert video guide</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

// ---------------------------------------------------
// Design 7: Two Column Fixed
// ---------------------------------------------------
const Design7 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
                <p className="text-gray-600 mt-4">{content.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.videos.map((video, idx) => (
                    <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <div className="aspect-video">
                            <iframe
                                src={video.embedUrl}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="h-full w-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-bold text-[#EC7754] uppercase tracking-wider">{video.category}</span>
                            <h3 className="font-bold text-[#333333] text-lg mt-2">{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Main Component to Render All Variations
// ---------------------------------------------------
export const Section11Variations = () => {
    return (
        <div className="flex flex-col gap-20 pb-20 bg-gray-50">
            <div className="text-center py-12 bg-white border-b sticky top-0 z-50 shadow-sm">
                <h1 className="text-3xl font-bold mb-2 text-[#333333]">Section 11 – Variations</h1>
                <p className="text-gray-500">Videos / Expert Insights</p>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 1: Classic Grid
                </div>
                <Design1 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 2: Featured Hero
                </div>
                <Design2 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 3: Bento Grid
                </div>
                <Design3 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 4: Minim alist List
                </div>
                <Design4 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 5: Horizontal Scroll
                </div>
                <Design5 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 6: Stacked Cards
                </div>
                <Design6 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 7: Two Column Fixed
                </div>
                <Design7 />
            </div>
        </div>
    );
};
