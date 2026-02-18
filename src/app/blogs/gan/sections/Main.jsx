"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["nas", "vits", "why-ai"];

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
              Generative Adversarial Networks (GANs)
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A short, ~2-minute video that explains in a simple and intuitive
              way how I think about training GANs.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              From my class yesterday in the DLCV course at Indian Institute of
              Science (IISc).
            </p>
            <div className="flex w-full gap-[5%]">
              <video
                loop
                type="video/mp4"
                controls
                playsInline
                src="/blogs/gan/content/video.mp4"
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
