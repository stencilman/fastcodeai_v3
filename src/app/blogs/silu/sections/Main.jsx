"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["swiglu", "pinns-hom-lid", "kans"];

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
              When I teach activation functions, we cover the usual
              suspects—Sigmoid, Tanh, ReLU, etc.—but I also introduce
              activations like ELU, Swish, and SiLU. Students often ask, “Where
              are these even used?”
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A great example is SD3.5, where SiLU (Sigmoid-weighted Linear
              Unit) play crucial roles. Here, SiLU is commonly paired with
              normalization layers like AdaLayerNorm and SD35AdaLayerNormZeroX.
              Large diffusion models like these require smooth gradient flows to
              ensure stable and high-quality image generation. The use of
              smoother activations like SiLU, in contrast to sharper ones like
              ReLU, enhances model stability and the synthesis of fine details,
              making them indispensable for advanced applications.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The SiLU function is defined as silu(x)=x∗σ(x), where σ(x) is the
              logistic sigmoid function. Notice how it resembles ReLU but is
              smoother at the origin, which facilitates better gradient flow.
            </p>

            <div className="p-[40px]  rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                className="rounded-[20px]"
                src="/blogs/silu/main.jpeg"
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
