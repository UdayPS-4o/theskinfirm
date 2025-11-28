import { getPayload } from "payload";
import { HeroSection } from "./_sections/HeroSection";
import { TrendingSection } from "./_sections/TrendingSection";
import config from "@payload-config";

export const revalidate = 60;

export default async function BlogsPage() {
  const payload = await getPayload({ config });
  const { docs: trendingPosts } = await payload.find({
    collection: "blogs",
    sort: "-updatedAt",
  });
  const { docs: featuredBlogs } = await payload.find({
    collection: "blogs",
    where: {
      featured: {
        equals: true,
      },
    },
  });
  return (
    <main className="w-full space-y-8">
      <HeroSection featuredBlogs={featuredBlogs} />
      <div className="w-7xl mx-auto h-[1px] bg-[rgba(51,51,51,0.4)]" />
      <TrendingSection blogs={trendingPosts} />
    </main>
  );
}
