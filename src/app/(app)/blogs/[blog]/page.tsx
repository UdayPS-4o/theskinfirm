import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogArticlePageProps {
  params: Promise<{ blog: string }>;
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { blog } = await params;

  // Mock data - replace with actual data fetching
  const article = {
    tag: "FEATURED",
    title: "Reviewing the Latest Beauty Innovations in 2025",
    description:
      "Stay on the cutting edge of beauty with a comprehensive review of the latest innovations in the industry. From skincare breakthroughs to high-tech beauty gadgets, explore what's new in 2025.",
    heroImage: "/test-blog-image.png",
    author: "Jane Doe",
    readTime: "5min read",
  };

  const trendingPosts = [
    {
      title: "Inside BB: Product Development Journey",
      description:
        "Take an exclusive behind-the-scenes look at the creation of beauty products. Learn about commitment to quality, innovation, and the meticulous process that goes into each product.",
      image: "/test-blog-image.png",
      author: "Jane Doe",
      readTime: "5min read",
      slug: "product-development-journey",
    },
    {
      title: "Exclusive Interview with Jenna Milhouse @missyb",
      description:
        "Gain insights from a renowned beauty influencer or expert in an exclusive interview. Discover their favorite beauty tips, product recommendations, and the secrets behind their success in the industry.",
      image: "/test-blog-image.png",
      author: "Jane Doe",
      readTime: "5min read",
      slug: "interview-jenna-milhouse",
    },
    {
      title: "Step-by-Step Guide: Achieving the Perfect Smokey Eye",
      description:
        "Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.",
      image: "/test-blog-image.png",
      author: "Jane Doe",
      readTime: "5min read",
      slug: "perfect-smokey-eye",
    },
  ];

  return (
    <div className="bg-white">
      {/* Blog Post Section */}
      <div className="max-w-[1248px] mx-auto px-6 py-16 space-y-16">
        {/* Header Text */}
        <div className="max-w-[826px] mx-auto text-center space-y-12">
          <div className="space-y-2">
            <p className="text-[#B76E79] text-sm font-semibold tracking-[0.2em] uppercase">
              {article.tag}
            </p>
            <h1 className="text-[#333333] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              {article.title}
            </h1>
            <p className="text-[#333333]/80 text-lg md:text-xl leading-relaxed">
              {article.description}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[640px] rounded-sm border border-[#333333]/40 overflow-hidden">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blog Content */}
        <div className="max-w-[722px] mx-auto space-y-10">
          {/* <p className="text-[#333333]/80 text-base leading-relaxed tracking-wide">
            As we step into a new era, the beauty industry continues to evolve
            with groundbreaking innovations that redefine skincare, makeup, and
            self-care practices. In this review, we'll explore the cutting-edge
            beauty products and technologies that are set to make waves in 2023,
            promising to elevate our beauty routines to new heights.
          </p> */}

          {/* <div className="space-y-6">
            <h3 className="text-[#333333] text-2xl font-normal tracking-tight">
              Sustainable Beauty Practices and Devices
            </h3>
            <p className="text-[#333333]/80 text-base leading-relaxed tracking-wide">
              In 2023, sustainability takes center stage in the beauty industry.
              From eco-friendly packaging to product formulations that
              prioritize environmental impact, beauty brands are embracing a
              holistic approach to sustainability. Look out for products that
              not only enhance your beauty but also contribute to a healthier
              planet.
              <br />
              <br />
              Smart skincare devices are taking personalized skincare to the
              next level. From AI-powered skin analysis tools to smart cleansing
              devices, these innovations provide tailored recommendations based
              on individual skin needs. Expect to see a surge in at-home devices
              designed to mimic professional spa treatments, offering a
              luxurious experience in the comfort of your own space.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[#333333] text-2xl font-normal tracking-tight">
              Biometric Beauty
            </h3>
            <p className="text-[#333333]/80 text-base leading-relaxed tracking-wide">
              Biometric technology is making its mark in the beauty world.
              Customized skincare formulations based on individual biometric
              data, such as DNA and skin microbiome analysis, are becoming more
              prevalent. These personalized approaches ensure that beauty
              products are tailored to meet the specific needs of each user,
              unlocking the potential for truly individualized skincare.
              <br />
              <br />
              Virtual try-ons and augmented reality (AR) experiences are
              transforming the way we shop for beauty products online. Brands
              are integrating AR technology into their platforms, allowing users
              to virtually try on makeup, experiment with different hairstyles,
              and test skincare products before making a purchase. This
              immersive online shopping experience enhances user engagement and
              confidence in product selection.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[#333333] text-2xl font-normal tracking-tight">
              Neurocosmetics
            </h3>
            <p className="text-[#333333]/80 text-base leading-relaxed tracking-wide">
              Neurocosmetics, blending neuroscience and beauty, is gaining
              momentum.
              <br />
              <br />
              Products enhance mood and well-being through sensory experiences.
              <br />
              <br />
              Skincare and makeup infused with ingredients promote relaxation
              and stress relief.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[#333333] text-2xl font-normal tracking-tight">
              Virtual Try-Ons and AR Experiences
            </h3>
            <p className="text-[#333333]/80 text-base leading-relaxed tracking-wide">
              AR technology transforms online beauty shopping.
              <br />
              <br />
              Virtual try-ons allow users to experiment with makeup, hairstyles,
              and skincare products.
              <br />
              <br />
              Immersive online experiences enhance user confidence and
              engagement.
            </p>
          </div> */}

          {/* Image in content */}
          {/* <div className="relative w-full h-[480px] rounded-sm border border-[#333333]/40 overflow-hidden">
            <Image
              src="/test-blog-image.png"
              alt="Beauty innovations"
              fill
              className="object-cover"
            />
          </div> */}
          {/* 
          <div className="space-y-6">
            <h3 className="text-[#333333] text-2xl font-normal tracking-tight">
              Biometric Beauty
            </h3>
            <p className="text-[#333333]/80 text-base leading-relaxed tracking-wide">
              Biometric technology is making its mark in the beauty world.
              Customized skincare formulations based on individual biometric
              data, such as DNA and skin microbiome analysis, are becoming more
              prevalent. These personalized approaches ensure that beauty
              products are tailored to meet the specific needs of each user,
              unlocking the potential for truly individualized skincare.
              <br />
              <br />
              Virtual try-ons and augmented reality (AR) experiences are
              transforming the way we shop for beauty products online. Brands
              are integrating AR technology into their platforms, allowing users
              to virtually try on makeup, experiment with different hairstyles,
              and test skincare products before making a purchase. This
              immersive online shopping experience enhances user engagement and
              confidence in product selection.
            </p>
          </div>

          <p className="text-[#333333]/80 text-base leading-relaxed tracking-wide">
            As we navigate the ever-evolving landscape of beauty innovations in
            2023, one thing is clear – the future of beauty is remarkably
            exciting. These cutting-edge developments not only enhance our
            beauty routines but also redefine our relationship with self-care.
            Stay tuned as we explore and embrace the transformative power of
            these latest beauty innovations, setting new standards for a radiant
            and empowered you.
          </p> */}
        </div>
      </div>

      {/* Trending Section */}
      <div className="border-t border-[#333333]/40 py-20">
        <div className="max-w-[1248px] mx-auto px-6 space-y-10">
          {/* Heading */}
          <div className="flex items-end justify-center gap-[620px]">
            <div className="space-y-2">
              <p className="text-[#B76E79] text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-nunito-sans)]">
                Trending Topics
              </p>
              <h2 className="text-[#333333] text-[48px] font-semibold leading-[1em] tracking-[-0.01em] w-[511px] font-[family-name:var(--font-nunito-sans)]">
                Stay Trendy with Our Latest Insights
              </h2>
            </div>
            <Link
              href="/blogs"
              className="px-6 py-2 border border-[#333333]/40 rounded text-[#333333] text-base leading-[1.364em] font-normal hover:bg-[#333333]/5 transition-colors whitespace-nowrap font-[family-name:var(--font-nunito-sans)]"
            >
              See More
            </Link>
          </div>

          {/* Posts */}
          <div className="flex gap-4">
            {trendingPosts.map((post, index) => (
              <div
                key={index}
                className="w-[405px] flex-shrink-0 flex flex-col gap-2 bg-white rounded p-2 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative w-full h-[240px] rounded-sm border border-[#333333]/40 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Wrapper */}
                <div className="flex flex-col gap-4 px-2 pt-2">
                  <h3 className="text-[#333333] text-2xl font-normal leading-[1em] tracking-[-0.01em] font-[family-name:var(--font-nunito-sans)]">
                    {post.title}
                  </h3>
                  <p className="text-[#333333]/80 text-base font-light leading-[1.4em] tracking-[0.01em] font-[family-name:var(--font-nunito-sans)]">
                    {post.description}
                  </p>

                  {/* Author button wrapper */}
                  <div className="flex items-center justify-between gap-2.5 py-3 border-t border-[#333333]/[0.16]">
                    <div className="flex items-center gap-4 w-[227.85px]">
                      <span className="text-[#333333] text-sm font-normal leading-[1em] tracking-[-0.01em] font-[family-name:var(--font-nunito-sans)]">
                        {post.author}
                      </span>
                      <span className="text-[#333333] text-sm font-normal leading-[1em] tracking-[-0.01em] font-[family-name:var(--font-nunito-sans)]">
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-5 h-[6.66px] text-[#333333]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="max-w-[1248px] mx-auto px-6 py-16">
        <div className="flex items-center justify-between gap-28 p-12 pl-16 border border-[#333333]/40 rounded">
          <div className="flex-1 space-y-12">
            <div className="max-w-[455px] space-y-2">
              <p className="text-[#B76E79] text-sm font-semibold tracking-[0.2em] uppercase">
                Subscription
              </p>
              <h2 className="text-[#333333] text-4xl md:text-5xl font-semibold tracking-tight">
                Join our exclusive beauty community
              </h2>
              <p className="text-[#333333]/80 text-base leading-relaxed">
                Elevate your beauty journey with personalized recommendations
                and stay connected with a community that shares your passion for
                self-care. Subscribe now and embark on a beauty adventure with
                us!
              </p>
            </div>
            <div className="relative w-[400px] h-[46px]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-full px-4 bg-white/40 border border-[#333333]/40 rounded text-sm text-[#333333]/60 placeholder:text-[#333333]/60 focus:outline-none focus:ring-2 focus:ring-[#D4A380]"
              />
              <button className="absolute right-1 top-1 px-6 py-2 bg-[#D4A380] rounded text-[#333333] text-base font-normal hover:bg-[#c49370] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="relative w-[604px] h-[529px] flex-shrink-0 rounded border border-[#333333]/40 overflow-hidden">
            <Image
              src="/test-blog-image.png"
              alt="Subscription"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
