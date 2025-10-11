import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface BlogArticlePageProps {
  params: Promise<{ blog: string }>;
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { blog } = await params;

  // Mock data - replace with actual data fetching
  const payload = await getPayload({
    config: config,
  });
  const { docs } = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: blog,
      },
    },
    depth: 1,
  });
  if (docs.length === 0) {
    return <div>Blog not found</div>;
  }
  const article = docs[0];
  const seo = article.seo?.filter((b) => b.blockType === "seo")[0];

  const { docs: trendingPosts } = await payload.find({
    collection: "blogs",
    sort: "-updatedAt",
    where: {
      slug: {
        not_equals: blog,
      },
    },
    limit: 3,
  });

  return (
    <div className="bg-white">
      {/* Blog Post Section */}
      <div className="max-w-[1248px] flex flex-col items-center justify-center mx-auto px-6 py-16 space-y-16">
        {/* Header Text */}
        <div className="max-w-[826px] mx-auto text-center space-y-12">
          <div className="space-y-2">
            <p className="text-[#B76E79] text-sm font-semibold tracking-[0.2em] uppercase">
              {article.featured && "Featured"}
            </p>

            <RichText
              className="text-[#333333] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
              data={article.heroTitle}
            />
            <RichText
              className="text-[#333333]/80 text-lg md:text-xl leading-relaxed"
              data={article.heroDescription}
            />
          </div>
        </div>

        {/* Hero Image */}
        <div className="prose relative w-full h-[640px] rounded-sm overflow-hidden">
          <Image
            src={
              typeof article.heroImage === "string"
                ? article.heroImage
                : article.heroImage?.url || "/placeholder.svg"
            }
            alt={seo?.metaTitle || ""}
            fill
            className="object-cover mx-auto"
            priority
          />
        </div>

        {/* Blog Content */}
        <div>
          <RichText
            className="max-w-[722px] mx-auto space-y-10"
            data={article.article}
          />
        </div>
      </div>

      {/* Trending Section */}
      {trendingPosts.length > 0 && (
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
            </div>

            {/* Posts */}
            <div className="flex gap-4">
              {trendingPosts?.map((post, index) => {
                const seo = post.seo?.filter((b) => b.blockType === "seo")[0];
                return (
                  <div
                    key={index}
                    className="w-[405px] flex-shrink-0 flex flex-col gap-2 bg-white rounded p-2 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative w-full h-[240px] rounded-sm border border-[#333333]/40 overflow-hidden">
                      <Image
                        src={
                          typeof post.heroImage === "string"
                            ? post.heroImage
                            : post.heroImage.url || ""
                        }
                        alt={seo?.ogTitle || ""}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text Wrapper */}
                    <div className="flex flex-col gap-4 px-2 pt-2">
                      <h3 className="text-[#333333] text-2xl font-normal leading-[1em] tracking-[-0.01em] font-[family-name:var(--font-nunito-sans)]">
                        {seo?.ogTitle}
                      </h3>
                      <p className="text-[#333333]/80 text-base font-light leading-[1.4em] tracking-[0.01em] font-[family-name:var(--font-nunito-sans)]">
                        {seo?.ogDescription}
                      </p>

                      {/* Author button wrapper */}
                      <div className="flex items-center justify-between gap-2.5 py-3 border-t border-[#333333]/[0.16]">
                        <div className="flex items-center gap-4 w-[227.85px]">
                          <span className="text-[#333333] text-sm font-normal leading-[1em] tracking-[-0.01em] font-[family-name:var(--font-nunito-sans)]">
                            {post.authorName}
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
                );
              })}
            </div>
          </div>
        </div>
      )}

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
