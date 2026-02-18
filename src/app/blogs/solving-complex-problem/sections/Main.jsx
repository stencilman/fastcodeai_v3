"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["federated-learning", "dvdb", "pinns-hom-lid"];

const Main = () => {
  return (
    <BlogArticleLayout recommendedSlugs={RECOMMENDED_SLUGS}>
      {(topicRefs) => (
        <>
          {/* topic-1 */}
          <div
            id="topic1"
            ref={(el) => (topicRefs.current[0] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Approach to solve complex problems
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              My strategy for tackling complex problems: start simple. Though it
              might sound trivial, {"I’ve"} frequently noticed that many{" "}
              {"don't"} apply this approach.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In a recent discussion during my class, we explored the
              intricacies of debugging neural networks—taking the example of an
              object detector that outputs both the class and the bounding box
              coordinates. The approach I advocate is to start with simplicity:
              E.g. initially focus on the class output alone before tackling the
              regression of bounding box coordinates.
            </p>
            <div className="flex w-full gap-[5%]">
              <video
                type="video/mp4"
                // style={{ mixBlendMode: "screen" }}
                loop
                controls
                playsInline
                src="/blogs/solving-complex-problem/content/video.mp4"
                className="rounded-[20px] w-[100%]"
                width="400"
                height="400"
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
