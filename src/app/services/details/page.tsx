'use client';

import React from 'react';
import { Footer } from '@/components/layout/footer';
import { ChevronRight } from 'lucide-react';
import serviceData from './service-data.json';


const ServiceDetailsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-[100px] py-12 md:py-20 bg-[#f9efe7]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col gap-8 lg:gap-[50px] w-full lg:w-[511px]">
              <div className="flex flex-col gap-2.5">
                <small className="text-sm leading-[17px] uppercase text-[#b76e79] font-semibold">
                  {serviceData.hero.serviceCategory}
                </small>
                <h1 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[50px] tracking-[-0.01em] text-[#333333] font-semibold">
                  {serviceData.hero.title}
                </h1>
                <h4 className="text-lg md:text-xl lg:text-[21px] leading-relaxed lg:leading-[25px] text-[#333333]/80">
                  {serviceData.hero.description}
                </h4>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="rounded-lg px-[22px] py-[15px] bg-[#d4a380] text-white font-medium text-lg flex items-center gap-2 hover:bg-[#c19970] transition-colors">
                  {serviceData.hero.buttons.primary}
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="rounded-lg border border-[#d4a380] px-[22px] py-[15px] bg-white text-[#333333] font-medium text-lg hover:bg-gray-50 transition-colors">
                  {serviceData.hero.buttons.secondary}
                </button>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="flex flex-col items-center lg:items-end w-full lg:w-[523px] relative">
              <div className="relative">
                <div className="overflow-hidden shadow-lg rounded-full border-8 border-[#f9eee7] w-full lg:w-[504px] h-[280px] lg:h-[355px]">
                  <img 
                    src={serviceData.hero.image} 
                    alt="Acne Treatment" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 right-4 lg:right-0 shadow-lg rounded-lg border border-[#e9d7c7] p-4 bg-white max-w-[178px]">
                  <div className="text-[13.6px] font-medium text-[#333333]">
                    {serviceData.hero.doctor.name}
                  </div>
                  <div className="text-[11.9px] text-[#8a7b70]">
                    {serviceData.hero.doctor.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-[100px] px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
            <img
              src={serviceData.about.image}
              alt="Acne Treatment Process"
              className="rounded-xl w-full lg:w-[470px] h-[280px] lg:h-[360px] object-cover"
            />
            <div className="flex flex-col gap-4 w-full lg:w-[500px]">
              <h4 className="text-xl md:text-2xl uppercase text-[#d4a380] font-semibold">
                {serviceData.about.title}
              </h4>
              <p className="text-sm leading-[22px] text-[#333333] font-medium">
                {serviceData.about.description}
              </p>
              <div className="rounded-[10px] px-5 py-4 bg-[#f9efe7]">
                <p className="text-sm leading-5 text-black">
                  {serviceData.about.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 md:gap-[90px]">
            <div className="text-center max-w-[602px] mx-auto">
              <h4 className="text-xl md:text-2xl text-[#ec7754] font-medium mb-3">
                ---------- {serviceData.process.subtitle} ----------
              </h4>
              <h1 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[#333333] font-semibold">
                {serviceData.process.title}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {serviceData.process.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#d4a380] flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-[22px] font-medium text-white">{index + 1}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-lg font-medium text-black">
                      {step.title}
                    </p>
                    <small className="text-sm leading-5 text-[#333333]">
                      {step.description}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-[#f8f4eb]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="text-center max-w-[602px] mx-auto">
              <h4 className="text-xl md:text-2xl text-[#ec7754] font-medium mb-3">
                ---------- {serviceData.benefits.subtitle} ----------
              </h4>
              <h1 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[#333333] font-semibold">
                {serviceData.benefits.title}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceData.benefits.items.map((benefit, index) => (
                <div key={index} className="rounded-[10px] border border-[#f9efe7] p-5 bg-white flex flex-col gap-[14px]">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8273 4.49921C16.4945 3.1664 15.8281 2.5 15 2.5C14.1719 2.5 13.5055 3.1664 12.1727 4.49921C11.3729 5.299 10.5803 5.67032 9.4401 5.67032C8.4445 5.67032 7.02803 5.47723 6.25 6.26181C5.47812 7.04018 5.67035 8.45082 5.67035 9.44007C5.67035 10.5803 5.299 11.3729 4.49919 12.1727C3.1664 13.5055 2.50001 14.1719 2.5 15C2.50002 15.8281 3.16642 16.4945 4.49922 17.8273C5.39519 18.7232 5.67035 19.3018 5.67035 20.5599C5.67035 21.5555 5.47726 22.972 6.26186 23.75C7.04023 24.5218 8.45085 24.3296 9.44008 24.3296C10.6544 24.3296 11.2391 24.5672 12.1057 25.4338C12.8437 26.1717 13.8329 27.5 15 27.5C16.1672 27.5 17.1564 26.1717 17.8943 25.4338C18.7609 24.5672 19.3456 24.3296 20.5599 24.3296C21.5492 24.3296 22.9598 24.5218 23.7381 23.75M25.5008 12.1727C26.8336 13.5055 27.5 14.1719 27.5 15C27.5 15.8281 26.8336 16.4945 25.5008 17.8273C24.6048 18.7232 24.3296 19.3018 24.3296 20.5599C24.3296 21.5555 24.5227 22.972 23.7381 23.75M23.7381 23.75H23.75"
                      stroke="#D4A380"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 12.8846C10 12.8846 12.8125 12.5 15 17.5C15 17.5 21.3235 5 27.5 2.5"
                      stroke="#D4A380"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-base leading-[22px] text-black">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post Care Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="text-center max-w-[602px] mx-auto">
              <h4 className="text-xl md:text-2xl text-[#ec7754] font-medium mb-3">
                ---------- {serviceData.postCare.subtitle} ----------
              </h4>
              <h1 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[#333333] font-semibold">
                {serviceData.postCare.title}
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[84px]">
              {/* Downtime Information */}
              <div className="flex flex-col gap-4">
                <h5 className="text-xl text-[#333333] font-semibold">
                  {serviceData.postCare.downtime.title}
                </h5>
                <div className="rounded-[10px] border border-[#f9efe7] p-5 bg-[#fdf9f5] flex flex-col gap-[30px]">
                  {serviceData.postCare.downtime.items.map((item, index) => (
                    <div key={index} className="flex gap-[14px] items-start">
                      <div className="w-[30px] h-[30px] flex-shrink-0">
                        <img src="/alert-circle.svg" alt="Alert" className="w-full h-full" />
                      </div>
                      <p className="text-base leading-[22px] text-black">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Post-Care Information */}
              <div className="flex flex-col gap-[30px]">
                <h5 className="text-xl text-[#333333] font-semibold">
                  {serviceData.postCare.postCare.title}
                </h5>
                <div className="flex flex-col gap-[30px]">
                  {serviceData.postCare.postCare.items.map((item, index) => (
                    <div key={index} className="flex gap-[14px] items-start">
                      <div className="w-[30px] h-[30px] flex-shrink-0">
                        <img src="/post-care.svg" alt="Post Care" className="w-full h-full" />
                      </div>
                      <p className="text-base leading-[22px] text-black">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="text-center max-w-[602px] mx-auto">
              <h4 className="text-xl md:text-2xl text-[#ec7754] font-medium mb-3">
                ---------- {serviceData.faq.subtitle} ----------
              </h4>
              <h1 className="text-3xl md:text-[40px] leading-tight md:leading-[48px] text-[#333333] font-semibold">
                {serviceData.faq.title}
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {serviceData.faq.questions.map((faq, index) => (
                <div key={index} className="shadow-lg rounded-[10px] border border-[#e5e5e5] p-6 bg-white">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex gap-2.5 items-center">
                      <p className="text-base leading-[22px] tracking-[-0.01em] text-[#d4a380] font-semibold">
                        {faq.question}
                      </p>
                    </div>
                    <small className="text-sm leading-[22px] text-[#333333]">
                      {faq.answer}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;