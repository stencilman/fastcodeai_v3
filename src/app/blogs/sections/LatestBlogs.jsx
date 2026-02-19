import React from "react";
import BlogCard from "../components/BlogCard";
import { getAllBlogs } from "../data/blogData";

const LatestBlogs = () => {
  const blogs = getAllBlogs();

  return (
    <div className="w-full h-auto px-[20px] md:px-[50px] lg:px-[100px] pt-[150px] pb-[100px]">
      <div className="mb-[40px]">
        <h1 className="text-[51px] text-white font-aeonik tracking-wide">
          Blogs
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
