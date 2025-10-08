import Image from "next/image";
import Link from "next/link";

export interface FeaturedBlogProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function FeaturedBlog({
  title,
  description,
  image,
  href,
}: FeaturedBlogProps) {
  return (
    <div className="relative w-full h-[500px] lg:h-[702px] flex-shrink-0">
      {/* Hero Image - Absolute positioned */}
      <div className="absolute right-0 top-0 w-full sm:w-[70%] md:w-[60%] lg:w-[600px] h-full rounded-sm overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 600px"
        />
      </div>

      {/* Text Content - Absolute positioned */}
      <div className="absolute left-4 sm:left-8 lg:left-20 top-12 lg:top-[99px] z-10 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-[630px]">
        <div className="flex flex-col gap-8">
          {/* Text Content */}
          <div className="flex flex-col gap-2">
            {/* Tagline */}
            <span
              className="text-[#B76E79] text-sm font-semibold uppercase tracking-wide"
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                lineHeight: "1.364em",
              }}
            >
              FEATURED
            </span>

            {/* Headline */}
            <h1
              className="text-[#333333] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1em] tracking-[-0.01em] w-full lg:w-[604px]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className="text-[rgba(51,51,51,0.8)] text-base sm:text-lg lg:text-[21px] leading-[1.364em] w-full lg:w-[511px] mt-6"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <Link href={href} className="inline-flex">
            <button
              className="bg-[#D4A380] hover:bg-[#C19660] text-white px-6 py-2 rounded transition-all duration-200"
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "16px",
                lineHeight: "1.364em",
              }}
            >
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
