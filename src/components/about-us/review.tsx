"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Testimonial {
  name: string;
  company: string;
  image: string;
}

export default function ReviewSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-[#FBEDE4] px-4 sm:px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[#EF9273] text-sm font-medium mb-2">---------- Reviews ----------</p>
          <h2 className="text-4xl font-bold text-[#1F1F1F]">Meet Our Customers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-[#609D8F] rounded-md bg-white p-6 flex flex-col gap-4 shadow-sm">
              <div className="text-[#EF9273] text-sm">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="mr-1" />
                ))}
              </div>
              <p className="text-sm text-[#1C1E53] leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros..."
              </p>
              <div className="flex items-center gap-4 mt-auto pt-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="text-sm">
                  <p className="font-semibold text-[#1F1F1F]">{testimonial.name}</p>
                  <p className="text-xs text-[#1F1F1F]">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}