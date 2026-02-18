"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["pinns-hom2d", "pinns-hom-lid", "why-ai"];

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
              Revolutionizing Biochemistry with AI!
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {` We're excited to share how AlphaFold2, developed by Demis Hassabis and John Jumper, is transforming structural biology. Honored with the Nobel Prize in Chemistry in 2024, this AI model has accurately predicted the structures of nearly all 200 million proteins identified by researchers.`}
            </p>

            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              {" "}
              Understanding AlphaFold2:
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              1. Data Entry and Database Searches: The model analyzes amino acid
              sequences to predict unknown protein structures.
              <br />
              2. Sequence Analysis: It identifies evolutionary patterns and
              potential interactions within chains.
              <br />
              3. AI-Driven Refinement: Through deep learning, AlphaFold2
              iteratively refines its predictions to enhance accuracy.
              <br />
              4. Hypothesis Testing: The AI predicts and verifies complex
              protein structures.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {` Since its launch, AlphaFold2 has been utilized by over 2 million scientists from 190 countries, aiding in breakthroughs from combating antibiotic resistance to engineering enzymes that decompose plastic.
`}
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {`  
AlphaFold2 exemplifies how AI can be a powerful tool in solving critical scientific challenges, paving the way for future innovations.
                  `}
            </p>

            <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                src="/blogs/structural-biology/main.jpeg"
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
