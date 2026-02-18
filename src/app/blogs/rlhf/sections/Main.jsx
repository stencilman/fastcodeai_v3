"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. About" },
  { id: "topic2", label: "2. Molding LLMs with RLHF" },
  { id: "topic3", label: "3. Challenges" },
];

const RECOMMENDED_SLUGS = [
  "federated-learning",
  "ai-dangers-and-preventing-monopolization",
  "solving-complex-problem",
];

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
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              RLHF: Shaping Language Models with Human Wisdom
            </h4>
            <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                src="/blogs/rlhf/content/rlhf.jpeg"
                width="744"
                height="355"
                alt=""
              />
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Reinforcement Learning from Human Feedback (RLHF), is a
              transformative technique that harnesses human feedback to steer
              and refine machine learning models. It is a sophisticated
              technique where models undergo fine-tuning using human feedback as
              a direct reward signal. The process begins with data collection,
              where the model generates responses that human reviewers
              subsequently rank. Using this collected data, a reward model is
              constructed. This model ranks the {"machine's"} outputs based on
              human preferences. The model is then fine-tuned using Proximal
              Policy Optimization (PPO), an advanced reinforcement learning
              algorithm. The reward model serves as a guide during this
              optimization. This entire process of data collection, reward
              modelling, and PPO-based fine-tuning is iteratively performed,
              ensuring continuous refinement of the {"model's"} behavior.
            </p>
          </div>

          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Molding LLMs with RLHF
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              It is an indispensable mechanism in the realm of Language Learning
              Models (LLMs), acting as a pivotal steering agent in content
              generation. At its core, RLHF employs a sophisticated blend of
              human feedback and advanced reinforcement learning algorithms to
              calibrate and fine-tune LLM outputs. By leveraging real-time
              evaluations from human reviewers, RLHF systematically guides the
              model to align its responses with predefined guidelines, human
              values, and ethical standards. This iterative feedback loop,
              combined with techniques such as Proximal Policy Optimization
              (PPO) for model optimization, ensures that LLMs not only produce
              high-quality content but also avoid generating outputs that could
              be biased, misleading, or potentially harmful. Through RLHF, LLMs
              are equipped with a dynamic and adaptive framework, enabling them
              to navigate the intricate nuances of human language with
              precision, accuracy, and ethical integrity.
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
              Challenges
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              While Reinforcement Learning from Human Feedback (RLHF) provides a
              robust framework for guiding Language Learning Models (LLMs) in
              content generation, {"it's"} not impervious to challenges.
              Specifically crafted prompts, designed with intricate knowledge of
              the {"model's"} architecture and training data, can exploit latent
              vulnerabilities, leading the model to produce unintended or
              undesired outputs. Additionally, advanced adversarial techniques,
              which introduce carefully calibrated noise or perturbations to the
              input, can mislead the model into deviating from its expected
              behavior. These techniques, often rooted in deep understanding of
              neural network behaviors, can effectively bypass the safeguards
              put in place by RLHF, highlighting the perpetual cat-and-mouse
              game between model developers and adversarial actors in the AI
              landscape.
            </p>
          </div>
          {/* end topic-3 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
