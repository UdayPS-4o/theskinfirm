import { DashedSeparator } from "@/components/sections/dashed-separator";
import { CategoriesSection } from "./_sections/CategoriesSection";
import { HeroSection } from "./_sections/HeroSection";
import { TrendingSection } from "./_sections/TrendingSection";

export default async function BlogsPage() {
  return (
    <main className="w-full space-y-8">
      <HeroSection />
      <div className="w-7xl mx-auto h-[1px] bg-[rgba(51,51,51,0.4)]" />
      <CategoriesSection />
      <TrendingSection />
    </main>
  );
}
