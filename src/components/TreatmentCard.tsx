import React from 'react';
import Link from 'next/link';

interface TreatmentCardProps {
  imageSrc: string;
  imageBgSrc: string;
  title: string;
  description: string;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  imageSrc,
  imageBgSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-white border border-[color:var(--color-border-light)] rounded-[10px] p-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-shadow duration-300">
      <div className="flex gap-[16px] items-start">
        <div className="w-[140px] h-[140px] flex-shrink-0 rounded-[8px] overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            style={{ backgroundImage: `url('${imageBgSrc}')` }}
          />
        </div>
        <div className="flex-1 flex flex-col justify-start">
          <h3 className="text-[color:var(--color-primary-brown)] text-[16px] font-semibold leading-[20px] tracking-[-0.1px] m-0 mb-[8px]">
            {title}
          </h3>
          <p className="text-[color:var(--color-dark-text)] text-[13px] font-normal leading-[18px] tracking-[-0.05px] m-0 mb-[12px] line-clamp-4 overflow-hidden">
            {description}
          </p>
          <Link href="/services" className="flex items-center gap-[6px] cursor-pointer group">
            <span className="text-[#000000] text-[12px] font-medium leading-[16px] group-hover:text-[color:var(--color-dark-text)] transition-colors duration-300">
              Learn More
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-[2px] transition-transform duration-300"
            >
              <path
                d="M2.33333 1H9V7.66667M9 1L1 9L9 1Z"
                stroke="var(--color-primary-brown)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;