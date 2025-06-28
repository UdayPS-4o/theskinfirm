import Image from "next/image";
import Link from "next/link";

interface ServiceCardModernProps {
  image: string;
  title: string;
  services: string[];
  link?: string;
}

export function ServiceCardModern({ image, title, services, link = "#" }: ServiceCardModernProps) {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-2xl sm:h-[260px] bg-white border border-gray-300 rounded-[16px] overflow-hidden p-3">
      {/* Image Section */}
      <div className="w-full h-48 sm:w-[250px] sm:h-full relative flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-[10px]"
          sizes="(max-width: 640px) 100vw, 250px"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between pt-4 sm:pt-2 sm:pl-5 w-full">
        {/* Title */}
        <h3 className="text-[#d4a380] text-[20px] font-semibold uppercase mb-4">
          {title}
        </h3>

        {/* Services List */}
        <ul className="space-y-3 text-[15px] text-gray-900">
          {services.map((service, idx) => (
            <li key={service + idx} className="flex items-start gap-2">
              {/* Decorative Tick Icon */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M10.696 2.7C9.897 1.9 9.497 1.5 9 1.5C8.503 1.5 8.103 1.9 7.304 2.7C6.824 3.179 6.348 3.402 5.664 3.402C5.067 3.402 4.217 3.286 3.75 3.757C3.287 4.224 3.402 5.07 3.402 5.664C3.402 6.348 3.179 6.824 2.7 7.304C1.9 8.103 1.5 8.503 1.5 9C1.5 9.497 1.9 9.897 2.7 10.696C3.237 11.234 3.402 11.581 3.402 12.336C3.402 12.933 3.286 13.783 3.757 14.25C4.224 14.713 5.071 14.598 5.664 14.598C6.393 14.598 6.743 14.74 7.263 15.26C7.706 15.703 8.3 16.5 9 16.5C9.7 16.5 10.294 15.703 10.737 15.26C11.257 14.74 11.607 14.598 12.336 14.598C12.93 14.598 13.776 14.713 14.243 14.25" stroke="#D4A380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 7.731C6 7.731 7.688 7.5 9 10.5C9 10.5 12.794 3 16.5 1.5" stroke="#D4A380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              {service}
            </li>
          ))}
        </ul>

        {/* Learn More */}
        <Link href={link} className="mt-6 flex items-center gap-2 text-[14px] font-semibold text-[#333] cursor-pointer hover:underline w-fit">
          Learn More
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.33333 1H9V7.66667M9 1L1 9L9 1Z" stroke="#D4A380" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}