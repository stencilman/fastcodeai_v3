"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. About" },
  { id: "topic2", label: "2. Challenges" },
  { id: "topic3", label: "3. Strategies" },
  { id: "topic4", label: "4. Cost-Effective Solutions" },
  { id: "topic5", label: "5. Exciting Developments" },
  { id: "topic6", label: "6. Why Sharing" },
];

const RECOMMENDED_SLUGS = ["animated-drawings", "authenticity-race", "rlhf"];

const Main = () => {
  return (
    <BlogArticleLayout topics={TOPICS} recommendedSlugs={RECOMMENDED_SLUGS}>
      {(topicRefs) => (
        <>
          {/* topic-1 */}
          <div
            id="topic1"
            ref={(el) => (topicRefs.current[0] = el)}
            className="flex flex-col gap-[20px]"
          >
            {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  What is Lid Driven Cavity (LDC)?
                </h4> */}

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              I know firsthand how challenging it can be for small startups to
              break into the world of large diffusion models. The high cost of
              hardware can make it feel like an insurmountable barrier. {"I've"}{" "}
              been there, feeling overwhelmed and unsure of how to proceed.{" "}
              {"That's"} why I want to share our experience—not to boast, but to
              help others who might be in the same situation.
            </p>
          </div>

          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Our Challenge
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              We needed to train large diffusion models but lacked the resources
              for expensive hardware setups. Instead of letting this halt our
              progress, we sought out creative solutions to work within our
              means.
            </p>
          </div>
          {/* end topic-2 */}

          {/* topic-3 */}
          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Strategies That Helped Us Overcome Hardware Constraints
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white"> 1. Memory Optimization Techniques</b>
              <br />
              <b> ZeRO Stage 2 and Stage 3:</b> We utilized the Zero Redundancy
              Optimizer (ZeRO) to significantly reduce memory usage. Stage 2
              allowed us to partition optimizer states and gradients across
              GPUs, while Stage 3 took it a step further by partitioning the
              model parameters themselves. Yes, this led to larger
              checkpoints—sometimes up to 150GB—but the memory savings were
              invaluable.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">2. Precision Formats</b>
              <br />
              <b> bfloat16 and FP8:</b> Precision formats play a crucial role in
              performance and memory consumption. While FP8 offers benefits on
              advanced GPUs like {"NVIDIA's"} H100 and L40 series, we found{" "}
              <b>bfloat16</b> to be a widely supported alternative that
              effectively managed memory without compromising performance.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">3. Efficient Optimizers</b>
              <br />
              <b>8-bit Optimizers:</b> Switching to 8-bit optimizers, such as
              the 8-bit Adam optimizer, was a game-changer. By quantizing
              momentum and variance terms to 8-bit precision, we reduced memory
              requirements without sacrificing model convergence or accuracy.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">
                4. Resource Sharing and Collaboration
              </b>
              <br />
              <b> Community Partnerships:</b> We reached out to other
              researchers and institutions. These collaborations not only
              provided access to shared resources but also fostered a supportive
              network for problem-solving.
              <br />
              <b> Cloud Credits and Grants:</b> We explored programs offering
              computational resources or funding assistance. These opportunities
              can be a lifeline for startups needing extra computational power.
              E.g. a mercury bank account in the US gives you a 5000 USD AWS
              credits. Similarly, SVB bank, etc.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">5. Incremental Experimentation</b>
              <br />
              <b>Smarter Experiment Design:</b> Instead of running countless
              full-scale experiments, we tested ideas on smaller subsets of
              data. This approach saved time and resources, allowing us to
              refine our models efficiently.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">6. Group Query Attention (GQA)</b>
              <br />
              Implementing GQA helped us reduce the number of keys in attention
              mechanisms, decreasing computational complexity and memory usage.
            </p>
          </div>
          {/* end topic-3 */}

          {/* topic-4 */}
          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Embracing Cost-Effective Solutions
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              We also turned to platforms like{" "}
              <a
                href="https://vast.ai"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Vast.ai
              </a>{" "}
              for more affordable hardware options. While this came with
              trade-offs—such as occasional hardware issues with GPUs—the cost
              benefits were significant. For example, running 8x H100s costs
              about $20/hr, whereas 2x L40s are just $2/hr.
            </p>
          </div>
          {/* end topic-4 */}

          {/* topic-5 */}
          <div
            id="topic5"
            ref={(el) => (topicRefs.current[4] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Exciting Developments Ahead
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"We're"} thrilled about the recent release of{" "}
              <a
                href="https://huggingface.co/spaces/stabilityai/stable-diffusion-3.5-medium"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Stable Diffusion 3.5 Medium weights
              </a>
              . This advancement allows us to push our models further without
              incurring additional costs.
            </p>
          </div>
          {/* end topic-5 */}

          {/* topic-6 */}
          <div
            id="topic6"
            ref={(el) => (topicRefs.current[5] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Why {"I'm"} Sharing This
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              I remember what it felt like to face these challenges without a
              clear path forward. My hope is that by sharing our journey, I can
              help others navigate similar obstacles. {"You're"} not alone, and
              with a bit of creativity and resourcefulness, {"it's"}
              possible to achieve great things even on a tight budget.
            </p>{" "}
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              If {"you're"} facing similar challenges or have questions about
              the strategies {"we've"} used, please {"don't"} hesitate to reach
              out.
              {"Let's"} support each other in pushing the boundaries of{" "}
              {"what's"}
              possible.
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
