import type { Metadata } from "next";
import { Faq } from "@/components/sections/faq";
import { BookYourConsultation } from "@/components/shared/book-your-consultation";
import Map from "@/components/sections/map";

export const metadata: Metadata = {
  title: "Contact The Skin Firm for the Best Dermatology & Aesthetic Clinic in Pune",
  description:
    "Get in touch with The Skin Firm, Pune’s trusted dermatology & aesthetic clinic. Call, visit, or book your consultation with Dr. Karishma Singh today.",
  alternates: { canonical: "https://theskinfirm.in/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Booking Section */}
      <section className="px-4 sm:px-6 lg:px-32">
        <BookYourConsultation />
      </section>

      {/* Location Section */}
      <section className="bg-white py-16">
        <div className="px-4 sm:px-6 lg:px-32">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] bg-[#EC7754] w-20 md:w-32" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #EC7754 0px, #EC7754 4px, transparent 4px, transparent 8px)' }}></div>
              <h3 className="text-[#EC7754] text-lg md:text-xl font-medium uppercase tracking-wider">
                Location
              </h3>
              <div className="h-[1px] bg-[#EC7754] w-20 md:w-32" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #EC7754 0px, #EC7754 4px, transparent 4px, transparent 8px)' }}></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-6">
              Visit Our Clinic
            </h2>
            <p className="text-[#5E6282] text-lg max-w-2xl mx-auto">
              Located in the heart of Pune, our state-of-the-art facility 
              is designed to provide you with the best skincare experience.
            </p>
          </div>
          <Map />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-32 py-16">
        <Faq />
      </section>
    </main>
  );
}
