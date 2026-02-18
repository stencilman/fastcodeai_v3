"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. Vision Transformers Need Registers" },
  { id: "topic2", label: "2. Solution" },
];

const RECOMMENDED_SLUGS = [
  "vision-transformers",
  "ai-dangers-and-preventing-monopolization",
  "pinns-hom-lid",
];

const Main = () => {
  return (
    <BlogArticleLayout topics={TOPICS} recommendedSlugs={RECOMMENDED_SLUGS}>
      {(topicRefs) => (
        <>
          {/* topic-1 */}
          <div
            id="topic1"
            ref={(el) => (topicRefs.current[0] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Vision Transformers Need Registers
            </h4>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/vision-transformers/hero/img1.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The outstanding paper at #ICLR 2024,{" "}
              {`"Vision Transformers Need Registers”`} by Dracet et al., which
              tackles the challenge in vision transformers (#ViTs) of high-norm
              tokens skewing attention towards uninformative background regions.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In traditional ViTs, each image patch is treated like a sequence
              before self-attention mechanisms. However, this often results
              emphasis on background noise, detracting from the
              {"model’s"} ability to concentrate on salient features.
            </p>
          </div>

          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              The Solution
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Introducing additional {`"register tokens"`} into the
              architecture. These tokens {"aren't"} derived from the image data
              but are included to accumulate and refine essential features
              across transformer layers. By balancing the attention mechanism,
              these registers help mitigate the impact of high-norm tokens and
              enhance the overall focus and efficacy of the model.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This approach not only improves clarity and relevance in image
              analysis but also sets a new standard for addressing common
              pitfalls in vision transformers, potentially revolutionizing how
              we tackle various image-based tasks.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Dive deeper into this transformative work and explore its
              implications for the future of computer vision:
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                href="https://arxiv.org/abs/2309.16588"
              >
                {" "}
                https://arxiv.org/abs/2309.16588
              </a>
            </p>
          </div>

          {/* end topic-2 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
