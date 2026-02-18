"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import BlogHero from "./BlogHero";
import Footer from "../../sections/Footer";
import { getBlogBySlug } from "../data/blogData";

const BlogPageWrapper = ({ children }) => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const blogMeta = getBlogBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blogMeta) return null;

  return (
    <>
      <BlogHero
        title={blogMeta.title}
        background={blogMeta.heroBackground}
        variant={blogMeta.heroVariant}
        subtitle={blogMeta.heroSubtitle}
      />
      {children}
      <Footer showExtraSpace={true} />
    </>
  );
};

export default BlogPageWrapper;
