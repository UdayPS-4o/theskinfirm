"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Content Data - Real blog data from the site  
const content = {
    title: "News From Blog",
    cta: "Read More Articles",
    blogs: [
        {
            title: "Liposuction to your Tummy Tuck",
            description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
            category: "Treatment",
            author: "Olivia Rhye",
            date: "20 Jan 2022",
            authorImage: "/olivia.png",
            coverImage: "/liposuction.png"
        },
        {
            title: "Skin Care Advice From A Surgeon",
            description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
            category: "Advice",
            author: "Phoenix Baker",
            date: "19 Jan 2022",
            authorImage: "/pheonix.png",
            coverImage: "/advice.png"
        },
        {
            title: "Gynecomastia After Weight Loss",
            description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
            category: "Surgery",
            author: "Lana Steiner",
            date: "18 Jan 2022",
            authorImage: "/lana.png",
            coverImage: "/surgery.png"
        }
    ]
};

// ---------------------------------------------------
// Design 1: Classic Cards
// ---------------------------------------------------
const Design1 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-6">{content.title}</h2>
                <Button className="bg-[#333333] text-white hover:bg-[#EC7754]">
                    {content.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.blogs.map((blog, idx) => (
                    <div key={idx} className="shadow-md bg-white p-6 hover:shadow-xl transition-all">
                        <Image width={336} height={240} src={blog.coverImage} alt={blog.title} className="w-full h-auto" />
                        <div className="pt-8">
                            <h4 className="text-[#D4A380] text-sm font-semibold">{blog.category}</h4>
                            <div className="pt-3 flex flex-col justify-center items-center space-y-3">
                                <div className="flex flex-row items-start justify-between w-full">
                                    <Link href={""} className="text-3xl underline font-semibold text-start">
                                        {blog.title}
                                    </Link>
                                    <ArrowUpRight />
                                </div>
                                <p className="text-[#667085] text-lg">{blog.description}</p>
                            </div>
                            <div className="pt-8 flex flex-row items-center justify-start gap-x-3">
                                <Image width={40} height={40} alt={blog.author} src={blog.authorImage} />
                                <div className="text-start text-sm">
                                    <h4 className="font-medium text-[#101828]">{blog.author}</h4>
                                    <h4 className="text-[#667085]">{blog.date}</h4>
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
// Design 2: Featured + Side Posts
// ---------------------------------------------------
const Design2 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
                <Button variant="outline" className="hidden md:flex border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white">
                    {content.cta}
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Featured Post */}
                <div className="group relative rounded-2xl overflow-hidden shadow-md h-full min-h-[400px]">
                    <div className="relative h-full">
                        <Image
                            src={content.blogs[0].coverImage}
                            alt={content.blogs[0].title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                        <span className="bg-[#EC7754] text-white text-xs px-3 py-1 rounded-full mb-4 inline-block">{content.blogs[0].category}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#D4A380] transition-colors">{content.blogs[0].title}</h3>
                        <p className="text-white/80 mb-6 line-clamp-2">{content.blogs[0].description}</p>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                            <span>{content.blogs[0].author}</span>
                            <span>•</span>
                            <span>{content.blogs[0].date}</span>
                        </div>
                    </div>
                </div>

                {/* Side Posts */}
                <div className="flex flex-col gap-8">
                    {content.blogs.slice(1).map((blog, idx) => (
                        <div key={idx} className="flex gap-6 group cursor-pointer">
                            <div className="w-1/3 aspect-square rounded-xl overflow-hidden relative flex-shrink-0">
                                <Image
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-xs font-bold text-[#EC7754] uppercase tracking-wider mb-2">{blog.category}</span>
                                <h3 className="font-bold text-[#333333] text-lg mb-2 group-hover:text-[#EC7754] transition-colors">{blog.title}</h3>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{blog.description}</p>
                                <span className="text-xs text-gray-400">{blog.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 3: Horizontal Cards
// ---------------------------------------------------
const Design3 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-12 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x">
            {content.blogs.map((blog, idx) => (
                <div key={idx} className="min-w-[300px] md:min-w-[380px] snap-center bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                    <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                        <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="px-2 pb-4">
                        <span className="text-xs font-bold text-[#EC7754] uppercase tracking-wider mb-2 block">{blog.category}</span>
                        <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#EC7754] transition-colors">{blog.title}</h3>
                        <p className="text-gray-500 text-sm mb-6">{blog.description}</p>
                        <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                            <Image
                                src={blog.authorImage}
                                alt={blog.author}
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-[#333333]">{blog.author}</span>
                                <span className="text-[10px] text-gray-400">{blog.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

// ---------------------------------------------------
// Design 4: Stacked Full Width
// ---------------------------------------------------
const Design4 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="space-y-12">
                {content.blogs.map((blog, idx) => (
                    <div key={idx} className="border-2 border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="relative aspect-video md:aspect-square">
                                <Image
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <span className="text-[#D4A380] text-sm font-bold uppercase tracking-wider mb-4">{blog.category}</span>
                                <h3 className="text-3xl font-bold text-[#333333] mb-4">{blog.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{blog.description}</p>
                                <div className="flex items-center gap-4 mb-6">
                                    <Image
                                        src={blog.authorImage}
                                        alt={blog.author}
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-medium text-[#101828]">{blog.author}</h4>
                                        <p className="text-sm text-[#667085]">{blog.date}</p>
                                    </div>
                                </div>
                                <Button variant="link" className="text-[#333333] p-0 h-auto font-bold hover:text-[#EC7754] w-fit">
                                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 5: Compact Grid
// ---------------------------------------------------
const Design5 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.blogs.map((blog, idx) => (
                    <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                        <div className="relative aspect-video">
                            <Image
                                src={blog.coverImage}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <span className="bg-[#F8F4EB] text-[#333333] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{blog.category}</span>
                            <h3 className="font-bold text-[#333333] text-lg mt-4 mb-2 group-hover:text-[#EC7754] transition-colors">{blog.title}</h3>
                            <p className="text-gray-500 text-sm line-clamp-2 mb-4">{blog.description}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span>{blog.author}</span>
                                <span>•</span>
                                <span>{blog.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 6: Magazine Style
// ---------------------------------------------------
const Design6 = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-8">{content.title}</h2>
                        <div className="space-y-8">
                            {content.blogs.map((blog, idx) => (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setActiveIdx(idx)}
                                    className={`group border-b border-gray-200 pb-8 cursor-pointer transition-colors ${activeIdx === idx ? 'border-[#EC7754]' : 'hover:border-gray-300'}`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-xs font-bold uppercase tracking-wider ${activeIdx === idx ? 'text-[#EC7754]' : 'text-gray-400'}`}>{blog.category}</span>
                                        <span className="text-xs text-gray-400">{blog.date}</span>
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 ${activeIdx === idx ? 'text-[#333333]' : 'text-gray-600'}`}>{blog.title}</h3>
                                    <p className={`text-sm transition-all duration-300 ${activeIdx === idx ? 'text-gray-600 max-h-20 opacity-100' : 'text-gray-400 max-h-0 opacity-0 overflow-hidden'}`}>
                                        {blog.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        {content.blogs.map((blog, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-500 ${activeIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <Image
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Image
                                            src={blog.authorImage}
                                            alt={blog.author}
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                        <span className="text-sm font-medium">{blog.author}</span>
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
// Design 7: Masonry Style
// ---------------------------------------------------
const Design7 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">{content.title}</h2>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {content.blogs.map((blog, idx) => (
                    <div key={idx} className="break-inside-avoid bg-[#F8F4EB] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                        <div className="relative aspect-video">
                            <Image
                                src={blog.coverImage}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <span className="bg-white text-[#333333] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{blog.category}</span>
                            <h3 className="font-bold text-[#333333] text-lg mt-4 mb-2 group-hover:text-[#EC7754] transition-colors">{blog.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                            <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                                <Image
                                    src={blog.authorImage}
                                    alt={blog.author}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                                <div>
                                    <h4 className="text-xs font-bold text-[#333333]">{blog.author}</h4>
                                    <p className="text-[10px] text-gray-400">{blog.date}</p>
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
// Main Component to Render All Variations
// ---------------------------------------------------
export const Section12Variations = () => {
    return (
        <div className="flex flex-col gap-20 pb-20 bg-gray-50">
            <div className="text-center py-12 bg-white border-b sticky top-0 z-50 shadow-sm">
                <h1 className="text-3xl font-bold mb-2 text-[#333333]">Section 12 – Variations</h1>
                <p className="text-gray-500">Blog / News</p>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 1: Classic Cards
                </div>
                <Design1 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 2: Featured + Side Posts
                </div>
                <Design2 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 3: Horizontal Cards
                </div>
                <Design3 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 4: Stacked Full Width
                </div>
                <Design4 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 5: Compact Grid
                </div>
                <Design5 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 6: Magazine Style
                </div>
                <Design6 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 7: Masonry Style
                </div>
                <Design7 />
            </div>
        </div>
    );
};
