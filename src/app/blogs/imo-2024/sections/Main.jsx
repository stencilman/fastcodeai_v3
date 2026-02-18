"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/component/Button";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["silu", "dvdb", "pinns-hom-lid"];

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
              🌟 Kudos to Team India at IMO 2024! 🌟
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              At FastCode.AI, {"we're"} tipping our hats to the Indian team for
              their spectacular show at this {"year’s"} International
              Mathematical Olympiad. Who said math {"wasn’t"} fun? Clearly, they{" "}
              {"haven’t"} seen our team in action!
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Curious about the brain teasers they tackled?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"Here’s"} a quick look:
              <br />
              - Day 1 Challenges: From real numbers that play nice with
              multiples (Problem 1) to matchmaking pairs of integers (Problem
              2), and predicting the behavior of infinite sequences (Problem 3).
              <br />- Day 2 Puzzles: Geometry that twists better than a thriller
              novel (Problem 4), a snail dodging monsters in a grid—because why
              not? (Problem 5), and functions that mix numbers like a DJ
              (Problem 6).
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Inspired? Flex your own math muscles by checking out the problems
              for all previous years here:{" "}
              <a
                href="https://www.imo-official.org/problems.aspx"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://www.imo-official.org/problems.aspx
              </a>
            </p>
            <div className="flex w-full flex-col md:flex-row gap-[25px] md:gap-[5%]">
              <Image
                className="rounded-[20px] block lg:hidden w-[100%]"
                src="/blogs/imo-2024/content/set1.png"
                width="400"
                height="400"
                alt=""
              />
              <Image
                className="rounded-[20px] block lg:hidden w-[100%]"
                src="/blogs/imo-2024/content/set2.png"
                width="400"
                height="400"
                alt=""
              />

              <object
                type="application/pdf"
                className="rounded-[20px] w-[100%] h-[auto] hidden lg:block lg:h-[600px]"
                data="/blogs/imo-2024/content/2024_eng.pdf"
                // width="400"
                // height="400"
              >
                <div className="h-[auto]">
                  <Button
                    to="/blogs/imo-2024/content/2024_eng.pdf"
                    name="Download Mathematical Olympiad 2024 PDF"
                  />
                </div>
              </object>
            </div>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
