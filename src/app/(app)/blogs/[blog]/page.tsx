import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { notFound } from "next/navigation";
import { Blog } from "@/payload-types";

interface BlogArticlePageProps {
  params: Promise<{ blog: string }>;
}

// Simple seeded random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function shuffleArray<T>(array: T[], seedString: string): T[] {
  let seed = 0;
  for (let i = 0; i < seedString.length; i++) {
    seed += seedString.charCodeAt(i);
  }

  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { blog } = await params;

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
    return notFound();
  }

  const article = docs[0];

  // Fetch other blogs for "Read More" section
  const { docs: allOtherPosts } = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        not_equals: blog,
      },
    },
    depth: 1,
    limit: 100, // Fetch enough to shuffle
  });

  // "Read More" logic: show only if at least 2 other blogs exist
  const showReadMore = allOtherPosts.length >= 2;
  let relatedPosts: Blog[] = [];

  if (showReadMore) {
    // Shuffle deterministically based on current blog slug
    const shuffled = shuffleArray(allOtherPosts, blog);
    relatedPosts = shuffled.slice(0, 3);
  }

  // Format date
  const formattedDate = article.publishedDate
    ? new Date(article.publishedDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    : "";

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-[#333333]">
      {/* Article Header */}
      <header className="pt-32 pb-16 px-6 max-w-[900px] mx-auto text-center">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4 text-sm tracking-widest uppercase text-[#B76E79] font-medium">
            <span>{article.category || "Blog"}</span>
            {article.readTime && (
              <>
                <span className="w-1 h-1 bg-[#B76E79] rounded-full"></span>
                <span>{article.readTime}</span>
              </>
            )}
          </div>

          <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-[#1a1a1a]">
            <RichText data={article.heroTitle} />
          </div>

          <div className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto">
            <RichText data={article.heroDescription} />
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4A380] overflow-hidden relative">
                <Image
                  src="/images/services/Karishma1.png"
                  alt="Dr. Karishma Singh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[#1a1a1a]">Dr. Karishma Singh</p>
                <p className="text-xs text-[#666666]">Dermatologist</p>
              </div>
            </div>
            {formattedDate && (
              <>
                <div className="w-px h-8 bg-[#E5E5E5] mx-2"></div>
                <div className="text-sm text-[#666666]">
                  {formattedDate}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full max-w-[900px] mx-auto px-6 mb-16">
        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-sm">
          <Image
            src={
              typeof article.heroImage === "string"
                ? article.heroImage
                : article.heroImage?.url || "/placeholder.svg"
            }
            alt="Featured Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-[720px] mx-auto px-6 pb-24">
        <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:font-medium prose-a:text-[#D4A380] prose-img:rounded-lg">
          <RichText data={article.article} />
        </div>
      </article>

      {/* Related Posts Section */}
      {showReadMore && (
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
              {relatedPosts.map((post, i) => (
                <Link key={i} href={`/blogs/${post.slug}`} className="group cursor-pointer block">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                    <Image
                      src={
                        typeof post.heroImage === "string"
                          ? post.heroImage
                          : post.heroImage?.url || "/placeholder.svg"
                      }
                      alt="Blog Post"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {post.category && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] rounded-sm">
                        {post.category}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-serif font-medium text-[#1a1a1a] mb-3 group-hover:text-[#D4A380] transition-colors">
                    <RichText data={post.heroTitle} />
                  </h3>
                  <div className="text-[#666666] text-sm leading-relaxed mb-4 line-clamp-2">
                    <RichText data={post.heroDescription} />
                  </div>
                  <div className="flex items-center text-[#D4A380] text-sm font-medium group/link">
                    Read Article <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link href="/blogs" className="inline-flex items-center gap-2 text-[#D4A380] font-medium">
                View All Articles <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
