"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = [
  "solving-complex-problem",
  "ai-dangers-and-preventing-monopolization",
  "authenticity-race",
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
            {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  🌟 Kudos to Team India at IMO 2024! 🌟
                </h4> */}

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {` It's been an exciting journey watching our team grow, and we're just getting started! 🚀
In February 2023, we were a small but mighty group of 8. Fast forward to today, and we're 25 strong – a 317% increase in just 2 years! At this rate, we could reach 50 amazing team members by mid-2025, and we couldn’t be more excited about what’s ahead.`}
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`If you're as excited about the future of AI and technology as we are, we’d love to have you join us as we continue to grow. 💼`}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {` A huge thank you to everyone who has been part of this journey. Together, we’re creating something special, and we’re just getting started. The future is bright, and we can’t wait to see what’s next! 🌟`}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`   What’s driving this growth? It’s our commitment to #Excellence, #Integrity, and #Innovation. These values are at the heart of everything we do, and they’re the reason we’ve been able to build a team that’s passionate, dedicated, and ready to push boundaries.
                  `}
            </p>

            <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                src="/blogs/journey/growth-journey.jpeg"
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
