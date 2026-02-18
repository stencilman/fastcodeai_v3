"use client";
import React from "react";
import SocialShare from "./SocialShare";
import CTASection from "./CTASection";
import ReadMoreBlogs from "./ReadMoreBlogs";
import TableOfContents from "./TableOfContents";
import useScrollSpy from "../hooks/useScrollSpy";

const BlogArticleLayout = ({
  children,
  recommendedSlugs = [],
  topics = [],
}) => {
  const { topicHighlight, setTopicHighlight, topicRefs, scrollToTopic } =
    useScrollSpy();

  const handleTopicClick = (id) => {
    scrollToTopic(id);
    setTopicHighlight(id);
  };

  const content =
    typeof children === "function" ? children(topicRefs) : children;

  return (
    <div className="w-full h-auto pt-[100px] pb-[50px] px-[35px] md:px-[45px] lg:px-[80px] flex justify-center flex-col">
      <div>
        <div className="flex flex-col-reverse md:flex-row gap-[50px] justify-center">
          <div className="flex flex-col md:flex-row gap-[50px]">
            <SocialShare />
            {/* Main */}
            <div className="md:w-[621%] md:max-w-[822px] flex flex-col gap-[30px]">
              {/* content */}
              {content}
              {/* CTA */}
              <CTASection />
            </div>
          </div>
          {/* nav */}
          {topics.length > 0 && (
            <TableOfContents
              topics={topics}
              topicHighlight={topicHighlight}
              onTopicClick={handleTopicClick}
            />
          )}
        </div>
      </div>
      {/* Read More */}
      <ReadMoreBlogs recommendedSlugs={recommendedSlugs} />
    </div>
  );
};

export default BlogArticleLayout;
