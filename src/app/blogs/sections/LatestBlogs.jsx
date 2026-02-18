import React from "react";
import BlogCard from "../components/BlogCard";
import { getAllBlogs } from "../data/blogData";

const getColSpan = (index) => {
  const cyclePos = index % 10;
  if (cyclePos === 0 || cyclePos === 6) return "md:col-span-2";
  return "md:col-span-1";
};

const LatestBlogs = () => {
  const blogs = getAllBlogs();

  return (
    <div className="w-full h-auto px-[20px] md:px-[50px] lg:px-[100px] pt-[150px] pb-[100px]">
      <div className="mb-[40px]">
        <h1 className="text-[51px] text-white font-aeonik tracking-wide">
          Blogs
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard
            key={blog.slug}
            blog={blog}
            className={`col-span-1 ${getColSpan(index)}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
