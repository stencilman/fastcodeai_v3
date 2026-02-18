"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["swiglu", "thesis-reality", "vision-transformers"];

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
                src="/blogs/nas/hero/img1.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Neural Architecture Search (NAS)
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Neural Architecture Search (NAS) is widely utilized for
              automatically identifying the best-performing neural network among
              a vast array of candidate architectures. Networks identified
              through NAS often outperform those that are manually designed,
              proving their efficacy across various mainstream applications. For
              example, consider the EfficientNet family (ranging from B0 to B7),
              which was discovered using NAS (see figure). Given a certain
              compute budget (say, in terms of FLOPS), these architectures are
              likely to serve as a promising backbone for your application.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In their groundbreaking paper,{" "}
              {`"EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks,"`}{" "}
              <a
                href="https://www.linkedin.com/in/mingxing-tan-2724551b/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Mingxing Tan
              </a>{" "}
              et al. further develop the ideas introduced in their previous
              work,{" "}
              {`"MnasNet: Platform-Aware Neural Architecture Search for Mobile."`}{" "}
              They propose a multi-objective optimization problem that involves
              identifying Convolutional Neural Network (CNN) models that can
              deliver high accuracy while maintaining a low computational
              overhead, as measured by inference latency or Floating Point
              Operations Per Second (FLOPS).
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To accomplish this, Tan et al. implement the methodology outlined
              by{" "}
              <a
                href="https://www.linkedin.com/in/barret-zoph-65990543/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Barret Zoph
              </a>{" "}
              et al. in{" "}
              {`"Learning Transferable Architectures for Scalable Image Recognition."`}{" "}
              In this approach, each CNN model within the pre-defined search
              space is decomposed into a list of tokens. Instead of being chosen
              randomly, these tokens are derived from a sequence of actions
              taken by the reinforcement learning (RL) agent. The ultimate goal
              of the process is to maximize the expected rewards, interpreted in
              this case as high model accuracy and low latency or FLOPS. The RL
              agent, through a process of learning and refinement, is trained to
              choose an architecture, i.e., a sequence of actions, that leads to
              a model with superior performance metrics.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              However, The catch with Neural Architecture Search (NAS) is its
              high computational cost. For instance, the search for
              EfficientNetB0 took a whopping 3800 GPU days! The majority of
              these research papers originate from Google, which possesses the
              necessary infrastructure for such endeavors. However, individuals
              like myself and perhaps you may not have access to such resources.
              Given this circumstance, how do we circumnavigate this challenge?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Excited to learn more about how we can tackle the high
              computational cost of NAS? {"Don't"} miss my next post, where{" "}
              {"we'll"} delve into the intriguing world of zero-shot NAS such as
              ZiCo: Zero-shot NAS via Inverse Coefficient of Variation on
              Gradients by{" "}
              <a
                href="https://www.linkedin.com/in/guihong-li-694144126/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Guihong Li
              </a>
              . This exciting development in the field is all about designing
              training-free proxies that can anticipate the performance of a
              given architecture on a test dataset.
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <div>
                EfficientNet:{" "}
                <a
                  href="https://arxiv.org/abs/1905.11946"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  https://arxiv.org/abs/1905.11946
                </a>
              </div>
              <div>
                MnasNet:{" "}
                <a
                  href="https://arxiv.org/abs/1807.11626"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  https://arxiv.org/abs/1807.11626
                </a>
              </div>
              <div>
                Zico:{" "}
                <a
                  href="https://arxiv.org/abs/2301.11300"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  https://arxiv.org/abs/2301.11300
                </a>
              </div>
              <div>
                Zoph et al.:{" "}
                <a
                  href="https://arxiv.org/abs/1707.07012"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  https://arxiv.org/abs/1707.07012
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
