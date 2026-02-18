import Link from "next/link";
import React from "react";

const RecommendBlogCard = ({ blog, isMiddle = false }) => {
  return (
    <Link className="md:w-[30%]" href={blog?.href}>
      <div className={`relative group ${isMiddle ? "md:top-[-70px]" : ""}`}>
        <div>
          <div
            className={`group-hover:scale-[0.98] bg-center bg-cover ${blog?.thumbnail} transition-all duration-500 ease-in-out w-full max-w-[430px] h-[353px] rounded-[18px]`}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <ul className="flex group-hover:text-gray-500 transition-all duration-500 ease-in-out gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
            <li>{blog?.authorName}</li>
            <li className="text-[33px]">.</li>
            <li>{blog?.publicationDate}</li>
            <li className="text-[33px]">.</li>
            <li>{blog?.comments} Comments</li>
          </ul>
          <b className="text-white text-2xl font-aeonik group-hover:scale-[0.98] transition-all duration-300 ease-in-out">
            {blog?.title}
          </b>
          <p className="text-[#9EB3CF] text-base font-bwmss01">
            {blog?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const RecommendBlogSection = ({ blogs = [] }) => {
  return (
    <>
      {blogs.map((blog, index) => (
        <RecommendBlogCard
          key={blog?.slug || blog?.href || index}
          blog={blog}
          isMiddle={index === 1}
        />
      ))}
    </>
  );
};

export default RecommendBlogSection;
