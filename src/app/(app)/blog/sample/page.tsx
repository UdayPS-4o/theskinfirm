import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SampleBlogPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen font-sans text-[#333333]">
            {/* Article Header */}
            <header className="pt-32 pb-16 px-6 max-w-[900px] mx-auto text-center">
                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-4 text-sm tracking-widest uppercase text-[#B76E79] font-medium">
                        <span>Skin Care</span>
                        <span className="w-1 h-1 bg-[#B76E79] rounded-full"></span>
                        <span>5 Min Read</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-[#1a1a1a]">
                        How to Treat Facial Pigmentation: Dermatologist-Recommended Solutions
                    </h1>

                    <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto">
                        Pigmentation may be stubborn, but it isn't permanent. Discover the causes, types, and the most effective dermatologist-approved treatments for radiant, even-toned skin.
                    </p>

                    <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#D4A380] overflow-hidden relative">
                                <Image src="/images/services/Karishma1.png" alt="Dr. Karishma Singh" fill className="object-cover" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-semibold text-[#1a1a1a]">Dr. Karishma Singh</p>
                                <p className="text-xs text-[#666666]">Dermatologist</p>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-[#E5E5E5] mx-2"></div>
                        <div className="text-sm text-[#666666]">
                            November 26, 2024
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="w-full max-w-[900px] mx-auto px-6 mb-16">
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-sm">
                    <Image
                        src="/images/services/pigmentation.png"
                        alt="Facial Pigmentation Treatment"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Main Content */}
            <article className="max-w-[720px] mx-auto px-6 pb-24">
                <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:font-medium prose-a:text-[#D4A380] prose-img:rounded-lg">
                    <p className="lead text-xl md:text-2xl leading-relaxed text-[#4a4a4a] mb-8">
                        Those silent middling patches, spots, or shadows across the face are more than just a cosmetic concern; they often affect how we see ourselves in the mirror every morning.
                    </p>

                    <p>
                        But the good news for you today is : pigmentation is treatable. You no longer have to settle for filters or for full-coverage concealers for your life. At The Skin Firm, we believe in restoring not just your skin tone, but your confidence also with real solutions that begin with understanding your skin's language first.
                    </p>

                    <p>
                        Let's start by exploring how our skilled dermatologists approach facial pigmentation.
                    </p>

                    <h3>Understanding Pigmentation: What Leads To It?</h3>
                    <p>
                        Before we treat pigmentation, we start by decoding it. Facial pigmentation generally falls into one of these categories:
                    </p>

                    <ul className="space-y-2 marker:text-[#D4A380]">
                        <li><strong>Melasma</strong> - which are hormonal patches that are often triggered by sun exposure, pregnancy or sometimes oral contraceptives</li>
                        <li><strong>Post-Inflammatory Hyperpigmentation (PIH)</strong> - these are dark marks caused by acne, injury or irritation and also known as post-inflammatory hyperpigmentation (PIH).</li>
                        <li><strong>Sun Spots</strong> - also called as Age Spots are UV-triggered flat brown spots, usually found on the cheeks, nose or forehead</li>
                        <li><strong>Freckles</strong> - can be genetic or sun-induced and often deepen with time or exposure too.</li>
                    </ul>

                    <p>
                        Each type requires a slightly different treatment roadmap which is why we believe that a one-size-fits-all approach rarely works.
                    </p>

                    <h3>Treating Pigmentation : How can you get rid of it?</h3>

                    <h4>1. Topical Treatments That Work</h4>
                    <p>
                        Medical-grade topical formulations with active ingredients can help
                    </p>
                    <ul>
                        <li><strong>Kojic acid, Arbutin, Niacinamide</strong> - can brighten uneven skin tone</li>
                        <li><strong>Azelaic acid and Tranexamic acid</strong> - reduces inflammation and lightens melasma</li>
                        <li><strong>Retinoids</strong> – over time, it can promote skin cell turnover and also lessens discoloration</li>
                        <li><strong>Vitamin C</strong> – is a great antioxidant that stops the formation of new skin pigments</li>
                    </ul>
                    <p>
                        We generally include these in long-term skin-lightening regimens but for optimal effects these formulations need to be prescribed and closely watched.
                    </p>

                    <h4>2. Chemical Peels</h4>
                    <p>
                        Peels like salicylic, mandelic, glycolic, or yellow peel are used to exfoliate the outermost layers of the skin which aid by accelerating cell turnover and gently fading pigmentation over time. At The Skin Firm, we customize each and every peel on the basis of your skin sensitivity, concerns and lifestyle. We don't believe in "peeling-for-the-sake-of-it."
                    </p>

                    <h4>3. Laser Treatments</h4>
                    <p>
                        One of the most reliable methods for treating deep pigmentation like melasma, age spots and acne marks is Q-Switched ND YAG Laser which break down any excess melanin without causing damage to the surrounding skin.
                    </p>
                    <p>
                        A noticeable glow-up is visible after multiple sessions particularly when paired with some simple home care and sunscreen.
                    </p>

                    <h4>4. Medi Facials for Pigment Control</h4>
                    <p>
                        We at The Skin Firm provide you with dermatologist designed Pigmentation Correction Facials that combine exfoliation, hydration, antioxidants and healing serums to efficiently tackle uneven skin tone issues gently and effectively.
                    </p>
                    <p>
                        Perfect for those who prefer non-invasive solutions or are just starting out their skin care journey.
                    </p>

                    <h4>5. Microneedling + Serums</h4>
                    <p>
                        Microneedling also known as collagen induction therapy is a minimal invasive cosmetic procedure for textured pigmentation and PIH, it promotes the production of collagen within the skin and enables deeper penetration of pigment-lightening serums. If performed under the guidance of a professional, results are progressive and long lasting.
                    </p>

                    <h3>The Golden Rule: Sunscreen is A Non-Negotiable</h3>
                    <p>
                        Sun protection is the first and foremost step in every procedure. Even the most sophisticated treatments will not be effective without daily, religious broad-spectrum SPF application. It's your skin's best defense against recurrence.
                    </p>

                    <h3>Escalating Pigmentation: Signs You Need Professional Help</h3>
                    <ul className="space-y-2 marker:text-[#D4A380]">
                        <li>If it appears suddenly or has unexpectedly worsened over time</li>
                        <li>If over-the-counter products aren't making it better</li>
                        <li>If you have noticed acne, sensitivity, or inflammation</li>
                        <li>If it has started to impact your confidence and everyday life</li>
                    </ul>
                    <p>
                        …it's time to seek professional advice.
                    </p>

                    <div className="my-12 p-8 bg-white border-l-4 border-[#D4A380] rounded-r-lg shadow-sm">
                        <p className="text-lg italic text-[#555] m-0">
                            At The Skin Firm, our dermatologists offer comprehensive skin analysis and modified protocols because treating pigmentation isn't about just lightening the skin; it's about healing it safely and supporting it fully.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
                        <p className="text-sm text-[#8A7B70] uppercase tracking-wider font-semibold mb-4">Tags</p>
                        <div className="flex flex-wrap gap-2">
                            {["Skincare", "Pigmentation", "Dermatology", "Laser Treatment", "Beauty"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white border border-[#E5E5E5] rounded-full text-sm text-[#666666] hover:border-[#D4A380] hover:text-[#D4A380] transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts Section */}
            <section className="bg-white py-20 border-t border-[#E5E5E5]">
                <div className="max-w-[1248px] mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-[#B76E79] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Read More</p>
                            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">Related Articles</h2>
                        </div>
                        <Link href="/blogs" className="hidden md:flex items-center gap-2 text-[#D4A380] hover:text-[#c49370] transition-colors font-medium">
                            View All Articles <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Ultimate Guide to Acne Scars",
                                category: "Acne Treatment",
                                image: "/images/services/acne scars.png",
                                desc: "Learn about the different types of acne scars and the best treatments to smooth your skin texture."
                            },
                            {
                                title: "Anti-Aging Secrets: When to Start?",
                                category: "Anti-Aging",
                                image: "/images/services/anti aging.png",
                                desc: "Is it too early for anti-aging treatments? We debunk myths and give you a timeline for youthful skin."
                            },
                            {
                                title: "HydraFacial: Is it Worth the Hype?",
                                category: "Facials",
                                image: "/images/services/hydra.png",
                                desc: "Discover why this 3-step treatment is a favorite for instant glow and deep hydration."
                            }
                        ].map((post, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] rounded-sm">
                                        {post.category}
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif font-medium text-[#1a1a1a] mb-3 group-hover:text-[#D4A380] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-[#666666] text-sm leading-relaxed mb-4 line-clamp-2">
                                    {post.desc}
                                </p>
                                <div className="flex items-center text-[#D4A380] text-sm font-medium group/link">
                                    Read Article <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link href="/blogs" className="inline-flex items-center gap-2 text-[#D4A380] font-medium">
                            View All Articles <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}