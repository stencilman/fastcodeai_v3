"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = [
  "solving-complex-problem",
  "pinns-hom-lid",
  "ai-dangers-and-preventing-monopolization",
];

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
              The Day Claude Took the Wheel
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`In a world teeming with AI advancements, Anthropic's latest breakthrough feels like a scene from the future. Today, Claude isn't just another AI—it's an agent capable of controlling your computer, marking its territory where no AI has gone before.`}
            </p>

            <h4 className="text-white text-xl font-aeonik tracking-wide">
              The Adventure Begins:
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {` On a early Wednesday morning in Bangalore, our team gathered to test Claude's "computer use" feature, now in public beta. What started as routine testing turned into a jaw-dropping display of AI competence. Claude seamlessly navigated through screens, typed, clicked, and even executed complex tasks with an almost eerie precision.`}
            </p>
            <h4 className="text-white text-xl font-aeonik tracking-wide">
              A Closer Look:
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`Claude's method involves a sophisticated dance of visual analysis and logical reasoning. It captures screenshots, dissects the contents, and plans its moves down to the last pixel. However, not all was smooth sailing. But, for some user, Claude momentarily abandoned a coding task to explore images of Yellowstone—showing us both the marvels and the humorous mishaps of AI autonomy.`}
            </p>
            <h4 className="text-white text-xl font-aeonik tracking-wide">
              The Reality Check:
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`Despite scoring 14.9% on computer skills—far below human standards—Claude's potential to revolutionize how we interact with digital environments is undeniable. But with great power comes great responsibility. Anthropic has wisely implemented stringent safety measures to curb misuse, ensuring Claude remains a helpful ally rather than a rogue agent.`}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`This isn't just tech evolution; it's a narrative about the rise of autonomous agents, crafted by the hands of visionaries aiming to blend AI with everyday life.`}
            </p>

            <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                src="/blogs/claude/content.jpeg"
                width="744"
                height="355"
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
