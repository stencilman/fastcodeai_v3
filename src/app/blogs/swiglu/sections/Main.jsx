"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["silu", "pinns-hom-lid", "thesis-reality"];

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
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              SwiGLU: A Popular Activation Function Used by Large Models
              Continuing my recent post about SiLU, {"let's"} explore another
              activation function commonly used in LLMs: SwiGLU. Introduced by{" "}
              <a
                href="https://www.linkedin.com/in/noam-shazeer-3b27288/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Noam Shazeer
              </a>
              , the second author of the {`"Attention Is All You Need"`} paper,
              SwiGLU has become the default activation function for large-scale
              models like {"Google's"} PaLM, {"Meta's"} LLaMA, and now{" "}
              {"Tencent's"} new Hunyuan model.
            </p>
          </div>

          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              What Is SwiGLU?
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              SwiGLU stands for Swish Gated Linear Unit. {"It's"} a variant of
              the Gated Linear Unit (GLU) that incorporates the Swish activation
              function into its gating mechanism.
            </p>
          </div>

          {/* topic-3 */}
          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Why Does It Work?
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Nobody knows. Noam in his paper writes:
              {` "We offer no explanation as to why these architectures seem to work; we attribute their success, as all else, to divine benevolence."`}
              <br />
              <br />
              SwiGLU has been empirically successful in improving model
              performance, but its theoretical underpinnings are not yet fully
              understood.
              <br />
              <br />
              Link to the pager :{" "}
              <a
                href="https://arxiv.org/abs/2002.05202"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://arxiv.org/abs/2002.05202
              </a>
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
