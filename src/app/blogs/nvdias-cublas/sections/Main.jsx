"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["oil-gas", "solving-complex-problem", "gan"];

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
              {"#NVIDIA's"} impressive $3 trillion valuation owes much to its
              mastery of matrix multiplication, a critical tool at the core of
              machine learning development.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"Here’s"} a peek at how to get up to 93% of {"NVIDIA's"} cuBLAS
              library performance:
              <br />
              1. Basic Matrix Multiplication: Starts our journey with basic
              operations, yielding 309 GFLOPs/s.
              <br />
              2. Memory Optimization: Advances through techniques like memory
              coalescing to enhance performance to 1986 GFLOPs/s.
              <br />
              3. Efficiency Scaling: Utilizes block and warp tiling to push
              limits up to 21779 GFLOPs/s, representing 93.7% of cuBLAS’s
              capabilities.
              <br />
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              For an in-depth look at each kernel’s optimization and its impact,
              check out the detailed analysis here:{" "}
              <a
                href="https://siboehm.com/articles/22/CUDA-MMM"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://siboehm.com/articles/22/CUDA-MMM
              </a>
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <a
                href="https://www.linkedin.com/in/arjunjain/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Arjun Jain
              </a>{" "}
              says that he remembers, back in 2008, in the very early days of
              CUDA, you {"couldn’t"} even write a printf inside a kernel and had
              to transfer memory back to the CPU just to debug and print{" "}
              {"it—we’ve"} definitely come a long way!
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              At{" "}
              <a
                href="https://www.fastcode.ai/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Fast Code AI
              </a>
              , we specialize in solving such tough challenges, continually
              pushing the boundaries of {"what's"} possible in computational
              performance and innovation with #excellence and #integrity.
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
