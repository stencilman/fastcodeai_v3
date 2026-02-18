"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["gan", "deep-learning", "animated-drawings"];

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
                  Basics of Deep Learning
                </h4> */}

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Excited to share a glimpse of my recent session at IISc in Prof.
              Anirban {"Chakraborty's"} course, where we looked into the basics
              of Deep Learning. We started with the feedforward aspect of a
              neural network, exploring how it is essentially a composition of
              functions, with each function representing a module or a layer. In
              this process, the input is transformed into activations, which
              ultimately become the output. At this stage, we also consider the
              label or the ground truth and compute the loss. This loss provides
              a scalar value indicating our satisfaction with the output. We
              then backpropagate the gradient of the loss with respect to the
              output throughout our network, using this gradient to update
              weights. Each module performs two key computations: the gradient
              of the output with respect to the input, and the gradient of the
              output with respect to the weights. These gradients are then
              multiplied with the gradient coming in from the next layer. This
              process exemplifies how the chain rule functions. It offers a
              straightforward yet profound insight into how neural networks
              learn and evolve. Eager to hear your thoughts and insights on this
              fundamental aspect of AI and machine learning!
            </p>
            <div className="flex w-full gap-[5%]">
              <video
                type="video/mp4"
                loop
                controls
                playsInline
                src="/blogs/deep-learning/content/video.mp4"
                className="rounded-[20px] w-[100%]"
                width="400"
                height="400"
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
