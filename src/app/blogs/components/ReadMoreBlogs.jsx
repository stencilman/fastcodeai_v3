import React from "react";
import Image from "next/image";
import Link from "next/link";
import RecommendBlogSection from "../sections/RecommendBlogSection";
import { getRecommendedBlogs } from "../data/blogData";

const ReadMoreBlogs = ({ recommendedSlugs = [] }) => {
  const recommendedBlogs = getRecommendedBlogs(recommendedSlugs);

  return (
    <div>
      <div className="w-full flex justify-between items-center my-[50px]">
        <h4 className="text-white text-[7vw] md:text-[42px] font-aeonik tracking-wide">
          Read More Blogs
        </h4>
        <Link href="/blogs">
          <div className="group flex gap-[5px]">
            <p className="text-white text-base font-aeonik">View All</p>
            <Image
              className="relative group-hover:translate-x-2 transition-all duration-500 ease-in"
              src="/arrowRight.svg"
              width="17"
              height="17"
              alt="arrow right"
            />
          </div>
        </Link>
      </div>
      <div className="w-full relative flex flex-col md:flex-row gap-[56px] md:gap-[5%] mt-[90px] md:mt-[220px]">
        <RecommendBlogSection blogs={recommendedBlogs} />
      </div>
    </div>
  );
};

export default ReadMoreBlogs;
