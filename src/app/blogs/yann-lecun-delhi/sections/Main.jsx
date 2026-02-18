"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["oil-gas", "solving-complex-problem", "why-ai"];

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
                  
                </h4> */}

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              It was great seeing{" "}
              <a
                href="https://www.linkedin.com/in/yann-lecun/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Yann LeCun
              </a>{" "}
              in Delhi, nearly a decade after my post-doc days at #NYU, where I
              worked with him. In his talk, Yann discussed the limitations of
              Large Language Models (LLMs) and believing that its not enough to
              achieve Artificial General Intelligence (AGI). He pointed out that
              LLMs treat both simple and complex problems with similar
              computational efforts, which can be inefficient. He argued that
              the {"chain of thought"} is just a creative hack to this issue.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Yann highlighted the sheer volume of data that LLMs are trained
              on—approximately 6 x 10^13 bytes which is almost all of the
              internet, which would take thousands of human hours to process. To
              provide a comparison, a typical four-year-old processes an immense
              amount of visual data in just 16,000 hours of life, at 2
              megapixels per image captured by the eyes. This context
              underscores the current limitations and the need for progress
              beyond purely text-based training.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              He stressed the importance of pioneering new methods, like
              training self supervised models on video, to achieve a more
              nuanced understanding and a closer approximation to human-like
              intelligence, complete with a world model and the ability to plan.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Let’s embrace these challenges and push towards more
              sophisticated, efficient AI systems.
            </p>

            <div className="p-[40px]  rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                className="rounded-[20px]"
                src="/blogs/delhi/content.jpeg"
                width="544"
                height="255"
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
