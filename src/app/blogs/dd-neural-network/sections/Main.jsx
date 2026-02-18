"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["swiglu", "silu", "kans"];

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
              In a recent talk by{" "}
              <a
                href="https://www.linkedin.com/in/yann-lecun/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Yann LeCun
              </a>
              , he touched upon the phenomenon of {"double descent"}, a concept
              I was not aware of.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The double⁠ descent⁠ phenomenon⁠ occurs in CNNs, ResNets, and
              transformers: performance first improves, then gets worse, and
              then improves again with increasing model size, data size, or
              training time. While this behavior appears to be fairly universal,
              we don’t yet fully understand why it happens. This goes against
              the traditional bias-variance tradeoff, where it was believed that
              increasing model complexity beyond a certain point only leads to
              worse performance. However, in modern neural networks, we see that
              after a dip in performance due to overfitting, larger models can
              recover and perform even better.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Yann likened this to historical innovations such as steam engines
              and airplanes, which were effective long before their underlying
              principles were understood. This analogy beautifully illustrates
              how neural networks can perform remarkably well even though we{" "}
              {"haven't"} fully deciphered their underlying mechanics.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In the paper by{" "}
              <a
                href="https://www.linkedin.com/company/openai/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                OpenAI
              </a>
              , they show that the peak occurs at a “critical regime,” where the
              models are barely able to fit the training set. As we increase the
              number of parameters in a neural network, the test error initially
              decreases, increases, and, just as the model is able to fit the
              train set, undergoes a second descent.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Neither classical statisticians’ conventional wisdom that too
              large models are worse nor the modern ML paradigm that bigger
              models are better uphold. We find that double descent also occurs
              over train epochs. Surprisingly, they show these phenomena can
              lead to a regime where more data hurts, and training a deep
              network on a larger train set actually performs worse.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Paper :{" "}
              <a
                href="https://arxiv.org/abs/1912.02292"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://arxiv.org/abs/1912.02292
              </a>
              <br />
              Open AI blog :{" "}
              <a
                href="https://openai.com/index/deep-double-descent/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://openai.com/index/deep-double-descent/
              </a>
            </p>

            <div className="p-[40px]  rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                className="rounded-[20px]"
                src="/blogs/dd-neural-network/main.jpeg"
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
