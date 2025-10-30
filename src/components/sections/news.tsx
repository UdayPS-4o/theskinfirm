import React from "react";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const News = () => {
  return (
    <div className="mt-24 px-5 lg:px-20">
      <h2 className="mt-2 text-center font-semibold text-4xl text-[#333333]">
        News From Blog
      </h2>
      <div className="mt-9 flex flex-col lg:flex-row items-center justify-center gap-8 flex-wrap">
        <NewsItem
          category="Treatment"
          title="Liposuction to your Tummy Tuck"
          description="How do you create compelling presentations that wow your colleagues and impress your managers?"
          author="Olivia Rhye"
          date="20 Jan 2022"
          authorImageUrl="/olivia.png"
          coverImageUrl="/liposuction.png"
        />
        <NewsItem
          author="Phoenix Baker"
          authorImageUrl="/pheonix.png"
          category="Advice"
          coverImageUrl="/advice.png"
          date="19 Jan 2022"
          description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
          title="Skin Care Advice From A Surgeon"
        />
        <NewsItem
          author="Lana Steiner"
          authorImageUrl="/lana.png"
          category="Surgery"
          coverImageUrl="/surgery.png"
          date="18 Jan 2022"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          title="Gynecomastia After Weight Loss"
        />
      </div>
    </div>
  );
};

function NewsItem({
  author,
  authorImageUrl,
  category,
  coverImageUrl,
  date,
  title,
  description,
}: {
  category: string;
  title: string;
  date: string;
  author: string;
  coverImageUrl: string;
  authorImageUrl: string;
  description: string;
}) {
  return (
    <div className="shadow-md bg-white p-6 max-w-sm">
      <Image width={336} height={240} src={coverImageUrl} alt="" />
      <div className="pt-8">
        <h4 className="text-[#D4A380] text-sm font-semibold">{category}</h4>
        <div className="pt-3 flex flex-col justify-center items-center space-y-3">
          <div className="flex flex-row items-start justify-between w-full">
            <Link
              href={""}
              className="text-3xl underline font-semibold text-start"
            >
              {title}
            </Link>
            <ArrowUpRight />
          </div>
          <p className="text-[#667085] text-lg">{description}</p>
        </div>
        <div className="pt-8 flex flex-row items-center justify-start gap-x-3">
          <Image width={40} height={40} alt={author} src={authorImageUrl} />
          <div className="text-start text-sm">
            <h4 className="font-medium text-[#101828]">{author}</h4>
            <h4 className="text-[#667085]">{date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
