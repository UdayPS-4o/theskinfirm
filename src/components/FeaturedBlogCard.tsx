import Image from "next/image";
import Link from "next/link";

interface FeaturedBlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export default function FeaturedBlogCard({
  title,
  description,
  image,
  slug,
  featured = false,
}: FeaturedBlogCardProps) {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] min-h-[500px] bg-[#f9efe7] overflow-hidden">
      {/* Content Section */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
          {featured && (
            <p className="text-[#D4A380] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
              FEATURED
            </p>
          )}

          <h1 className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] mb-4 md:mb-6">
            {title}
          </h1>

          <p className="text-[#8A7B70] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-lg">
            {description}
          </p>

          <Link
            href={`/blogs/${slug}`}
            className="inline-block bg-[#D4A380] text-white px-8 py-3 rounded text-sm md:text-base font-medium hover:bg-[#c49370] transition-colors duration-300"
          >
            Read more
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[55%] flex items-center justify-end p-4 md:p-6 lg:p-8">
        <div className="relative w-full h-[70%] md:h-[75%] lg:h-[80%] max-w-[500px] md:max-w-none">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
}
