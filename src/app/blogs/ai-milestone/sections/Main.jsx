"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["animated-drawings", "authenticity-race", "why-ai"];

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
              Celebrating a Milestone in AI and Physics!
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`Incredibly thrilled to hear about Geoffrey Hinton and John J. Hopfield receiving the Nobel Prize in Physics for their foundational discoveries and inventions that enable machine learning with artificial neural networks. It's amazing to see neural networks being recognized at such a level!`}
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`I still remember presenting my poster at NeurIPS 2014 in Montreal. Geoffrey Hinton stopped by and took just a minute to grasp my work on the first heat map-based human pose estimation using deep learning. In the era just after AlexNet, it was time to apply CNNs to everything, and I was the first to apply them to 2D human pose estimation in this way. Outputting a heat map instead of regression was key to address the multimodality of the output. He succinctly explained it back to me as "per-pixel regression," and that moment has stayed with me ever since.`}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`Super happy for Hinton, Hopfield, and the entire AI community! This recognition not only honors their past contributions but also inspires all of us to keep pushing the boundaries of what's possible.`}
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
