"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["kans", "pinns-hom-lid", "gan"];

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
              Exciting breakthrough from FAIR at Meta!
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`Introducing the "Open Materials 2024 (OMat24)" dataset and models, a game-changing resource in materials science with over 110 million data points. This initiative aims to accelerate the discovery of innovative materials through AI, similar to how AlphaFold transformed protein modeling.`}
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Will OMat24 be as transformative as AlphaFold2 in its field? Only
              time will tell, but the potential is huge!
            </p>

            <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                src="/blogs/omat-2024/content.jpeg"
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
