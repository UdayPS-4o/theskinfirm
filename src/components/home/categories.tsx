"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

import Autoplay from 'embla-carousel-autoplay';

const CategoriesSection = () => {
  const router = useRouter();

  const [carouselApi, setCarouselApi] = React.useState<any>();
  
  const categoriesData = [
    {
      title: 'Skincare',
      imageUrl: '/images/category/skin.png',
      tabKey: 'skin'
    },
    {
      title: 'Haircare',
      imageUrl: '/images/category/hair.png',
      tabKey: 'hair'
    },
    {
      title: 'Laser',
      imageUrl: '/images/category/laser.png',
      tabKey: 'laser'
    },
  ];

  const scrollPrev = () => {
    carouselApi?.scrollPrev();
  };

  const scrollNext = () => {
    carouselApi?.scrollNext();
  };

  const ArrowButton = ({ direction, onClick, fill = '#6B7280', opacity = '0.8' }:any) => {
    const pathD = 'M20.0978 3.32906L20.4514 3.68261C20.5451 3.58885 20.5978 3.46167 20.5978 3.32906C20.5978 3.19645 20.5451 3.06928 20.4514 2.97551L20.0978 3.32906ZM17.2694 0.500633L17.6229 0.14708C17.5531 0.0769365 17.4639 0.0291255 17.3668 0.0097079C17.2697 -0.00970967 17.169 0.000140645 17.0775 0.0380103C16.986 0.07588 16.9079 0.140063 16.8529 0.222424C16.7979 0.304784 16.7686 0.401612 16.7688 0.500633L17.2694 0.500633ZM17.2694 6.15749L16.7688 6.15749C16.7686 6.25651 16.7979 6.35334 16.8529 6.4357C16.9079 6.51806 16.986 6.58224 17.0775 6.62011C17.169 6.65798 17.2697 6.66783 17.3668 6.64841C17.4639 6.629 17.5531 6.58118 17.6229 6.51104L17.2694 6.15749ZM17.2694 2.82843L0.298828 2.82843L0.298828 3.82969L17.2694 3.82969V2.82843ZM20.4514 2.97551L17.6229 0.14708L16.9158 0.854187L19.7443 3.68261L20.4514 2.97551ZM16.7688 0.500633V6.15749L17.77 6.15749L17.77 0.500633L16.7688 0.500633ZM17.6229 6.51104L20.4514 3.68261L19.7443 2.97551L16.9158 5.80393L17.6229 6.51104Z';

    return (
      <div
        className={`p-2.5 flex flex-col gap-2.5 items-start relative cursor-pointer hover:opacity-70 transition-opacity ${
          direction === 'left' ? 'rotate-180' : ''
        }`}
        onClick={onClick}
      >
        <svg width="21" height="7" viewBox="0 0 21 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={pathD} fill={fill} fillOpacity={opacity} />
        </svg>
      </div>
    );
  };

  const CategoryCard = ({ title, imageUrl, tabKey } : any) => {
    const handleCardClick = () => {
      router.push(`/services?tab=${tabKey}`);
    };

    return (
      <div 
        className="rounded border border-gray-200 px-2 pt-2 pb-4 flex flex-col gap-4 items-start relative w-full hover:border-gray-300 transition-colors cursor-pointer"
        onClick={handleCardClick}
      >
        <img
          src={imageUrl}
          className="rounded-sm border border-gray-200 w-full h-[450px] sm:h-[520px] md:h-[480px] lg:h-[486px] object-cover"
          alt={title}
        />
        <div className="px-4 flex justify-between items-center self-stretch relative w-full">
          <h4 className="text-xl sm:text-2xl leading-6 tracking-[-0.01em] text-gray-800">
            <span className="text-gray-800 text-xl sm:text-2xl tracking-[-0.01em] font-normal">
              {title}
            </span>
          </h4>
          <div className="flex gap-2 justify-center items-center relative hover:opacity-80 transition-opacity">
            <svg
              width="21"
              height="8"
              viewBox="0 0 21 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0978 3.99996L20.4514 4.35351C20.5451 4.25974 20.5978 4.13257 20.5978 3.99996C20.5978 3.86735 20.5451 3.74017 20.4514 3.64641L20.0978 3.99996ZM17.2694 1.17153L17.6229 0.817978C17.5531 0.747835 17.4639 0.700024 17.3668 0.680606C17.2697 0.661189 17.169 0.671039 17.0775 0.708909C16.986 0.746778 16.9079 0.810962 16.8529 0.893322C16.7979 0.975683 16.7686 1.07251 16.7688 1.17153L17.2694 1.17153ZM17.2694 6.82839L16.7688 6.82839C16.7686 6.92741 16.7979 7.02424 16.8529 7.1066C16.9079 7.18896 16.986 7.25314 17.0775 7.29101C17.169 7.32888 17.2697 7.33873 17.3668 7.31931C17.4639 7.29989 17.5531 7.25208 17.6229 7.18194L17.2694 6.82839ZM17.2694 3.49933L0.298828 3.49933L0.298828 4.50059L17.2694 4.50059V3.49933ZM20.4514 3.64641L17.6229 0.817978L16.9158 1.52509L19.7443 4.35351L20.4514 3.64641ZM16.7688 1.17153V6.82839L17.77 6.82839L17.77 1.17153L16.7688 1.17153ZM17.6229 7.18194L20.4514 4.35351L19.7443 3.64641L16.9158 6.47483L17.6229 7.18194Z"
                fill="#6B7280"
                fillOpacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  const handleSeeMore = () => {
    console.log('See More clicked!');
    // Add your navigation logic here, e.g., using React Router:
    // navigate('/services');
    router.push('/services');
  };

  return (
    <div className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:gap-12 mt-10">
        {/* Mobile header section - only visible on mobile */}
        <div className="lg:hidden w-full mb-8">
          <div className="mx-auto flex items-center justify-center max-w-md w-full gap-x-0.5">
            <div className="w-full h-0.5" style={{backgroundImage: 'repeating-linear-gradient(to right,#EC7754 0 8px,transparent 8px 16px)'}}></div>
            <h3 className="text-[#EC7754] text-base sm:text-lg font-medium w-full text-center">Categories</h3>
            <div className="w-full h-0.5" style={{backgroundImage: 'repeating-linear-gradient(to right,#EC7754 0 8px,transparent 8px 16px)'}}></div>
          </div>
          <h2 className="mt-2 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#333333] font-semibold leading-tight">Dive into the Beauty</h2>
        </div>

        {/* Text content on the left */}
        <div className="max-lg:hidden flex flex-col gap-4 items-start relative lg:flex-shrink-0 lg:h-full lg:justify-between lg:min-h-[550px]">
          {/* Arrows at the top - only visible on desktop */}
          <div className="hidden lg:flex gap-2 items-center lg:self-start">
            <ArrowButton direction="left" onClick={scrollPrev} fill="#B76E79" opacity="0.5" />
            <ArrowButton direction="right" onClick={scrollNext} fill="#B76E79" opacity="1" />
          </div>
          
          {/* Text content at the bottom */}
          <div className="flex flex-col gap-4 items-start lg:mt-auto">
            <small className="text-sm leading-[17px] uppercase text-[#b76e79]">
              <span className="text-[#b76e79] text-sm font-semibold">categories </span>
            </small>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[48px] tracking-[-0.01em] text-gray-800 font-semibold whitespace-nowrap">
              Dive into <br/>Beauty
            </h1>
            <button
              className="rounded border border-gray-300 px-6 py-2 flex gap-2.5 justify-center items-center relative hover:bg-gray-100 hover:border-gray-400 transition-colors"
              onClick={handleSeeMore}
            >
              <p className="text-base leading-[19px] text-gray-700">
                <span className="text-gray-700 text-base font-normal">See More</span>
              </p>
            </button>
          </div>
        </div>

        {/* Image cards on the right */}
        <div className="w-full">
          {/* Desktop: Original layout, Mobile/Tablet: Carousel */}
          <div className="hidden lg:flex lg:flex-row gap-4 items-center justify-center relative">
            {categoriesData.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
          
          <div className="lg:hidden">
            <Carousel
              plugins={[Autoplay({ delay: 3000 })]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setCarouselApi}
            >
              <CarouselContent className="flex -ml-2 sm:-ml-4">
                {categoriesData.map((category, index) => (
                  <CarouselItem key={index} className="pl-2 sm:pl-4 basis-4/5 sm:basis-3/4 md:basis-1/2">
                    <CategoryCard {...category} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;