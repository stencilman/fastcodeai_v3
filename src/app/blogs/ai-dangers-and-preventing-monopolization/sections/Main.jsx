"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["gan", "authenticity-race", "deep-learning"];

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
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/ai-dangers/content/img1.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              The Key to Counterbalancing {"AI's"} Dangers and Preventing
              Monopolization by Large Corporations
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Today, I want to highlight Yann LeCun, a Turing Award-winning
              computer scientist and VP and Chief Scientist at #Meta, who
              exemplifies this drive.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              When I was a post-doc at NYU Courant Institute of Mathematical
              Sciences, I had the privilege of being his office neighbor and
              collaborating on four research papers. The most notable was our
              #NeurIPS 2014 paper, co-authored with the brilliant Jonathan and
              Chris, SciTech Oscar winner and the best mentor ever, now cited
              nearly 2000 times. It marked a breakthrough in heatmap-based human
              pose estimation using deep learning.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A personal anecdote that stands out from our collaboration
              involves a challenge we faced while working on this paper. We
              needed non-negative outputs for a particular computation, but the
              commonly used ReLUs were problematic. Without hesitation, he
              suggested SoftPlus — a function I {"hadn't"} even heard of at the
              time. His intuition and depth of knowledge were not just
              impressive but transformative for our research.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              His relentless advocacy for #opensource #AI at #Meta is a beacon
              in an industry where many giants, like #Google and #OpenAI, are
              increasingly becoming more closed. His approach not only fosters
              innovation but also builds a collaborative and inclusive AI
              community and accelerates research.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This aligns perfectly with our ethos at Fast Code AI , where we
              believe in the power of sharing knowledge.The advancement in
              creating large language models (#LLMs) for regional languages,
              propelled by open-source frameworks, is pivotal. {"It's"} key to
              integrating the next billion users from linguistically diverse
              regions like India into the digital world.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In an industry that evolves by the minute, leaders like him, who
              champion open-source, are indispensable. They pave the way towards
              a future where collaboration and openness in AI are norms, not
              exceptions.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              What are your experiences with open-source AI? {"Let's"} share and
              grow together. Thank you for your dedication and for being an
              exemplary figure in the tech community, reminding us that when
              knowledge is shared, everyone wins!
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
