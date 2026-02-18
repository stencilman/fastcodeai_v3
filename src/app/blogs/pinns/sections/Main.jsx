"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. About" },
  { id: "topic2", label: "2. Application using 2D Heat equation" },
  { id: "topic3", label: "3. Process" },
];

const RECOMMENDED_SLUGS = ["kans", "pinns-hom-lid", "animated-drawings"];

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
              What are PINNs?
            </h4>
            <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                src="/blogs/pinns/content/pinns-hero.png"
                width="744"
                height="355"
                alt=""
              />
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Physics-Informed Neural Networks (PINNs) combine the fundamental
              laws of physics with the predictive capacity of machine learning,
              thereby transforming the area of computational science. By
              integrating differential equations that represent physical rules
              in standard loss functions, they enable them to predict outcomes
              for complicated systems when standard models would not be able to.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Embedded physical principles steer the network towards physically
              feasible solutions, minimizing the reliance on big datasets. This
              makes PINNs particularly useful in situations when data is
              expensive or limited. In fields where it is essential to
              comprehend system behavior under varied conditions, such as fluid
              dynamics, material science, and geophysics, they are very helpful.
            </p>
          </div>
          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              PINNs application using 2D Heat equation
            </h4>
            <div className="flex w-full gap-[5%]">
              <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
                <Image
                  src="/blogs/pinns/content/pinns1.png"
                  width="744"
                  height="355"
                  alt=""
                />
              </div>
            </div>
            <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
              Heat transfer equation in 2D
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A fundamental concept in thermodynamics and heat transfer, the 2D
              heat equation shows how heat diffuses through a certain area over
              time. Traditionally, numerical techniques such as finite element
              or finite difference analysis have been used to solve problems.
              Although these techniques are efficient, they can be
              computationally demanding and time-consuming, particularly when
              dealing with complicated geometries and boundary conditions.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              By presenting the 2D heat equation as an optimization problem, we
              may take use of neural {"networks'"} flexibility and
              effectiveness. The basic goal is to train a neural network without
              the necessity for a mesh-based discretization of the domain to
              approximate the temperature distribution in a domain given initial
              and boundary conditions.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Imagine {"we're"} working with two outputs, a and b, for which we
              lack specific target labels. However, we understand these outputs
              must adhere to the principles of physics. To ensure this
              adherence, we introduce a penalty in the form of a regularizer
              whenever a and b deviate from these physical laws. This penalty
              serves as a guiding signal, allowing the network to learn and
              internalize the fundamentals of physics.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The problem of solving 2D heat equation can be divided into two
              types:
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  <b>Stable: </b>Take only spatial coordinates into account to
                  predict the temperature.
                </li>
                <li className="list-disc">
                  <b>Unstable: </b>Take time as an additional input parameter to
                  predict the temperature.
                </li>
              </ul>
            </div>
          </div>

          {/* end topic-2 */}
          {/* topic-3 */}

          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Overall Process:
            </h4>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  <b>Representation: </b>The neural network takes spatial
                  coordinates (and possibly time) as input and predicts the
                  temperature at those points.
                </li>
                <li className="list-disc">
                  <b>Loss Function: </b>The partial derivative of 2D heat
                  equation is calculated with input and output values and then
                  added to the standard regression loss functions.
                </li>
                <li className="list-disc">
                  <b>Training: </b>Through back-propagation and optimization
                  algorithms, the neural network adjusts its parameters to
                  minimize the loss function, effectively learning the
                  temperature distribution that satisfies the 2D heat equation
                  under the given conditions.
                </li>
              </ul>
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b>Fun Fact: </b> You don’t need very big models or LLMs to train
              such a network. A simple fully connected network with just{" "}
              <b>100-150 learnable parameters</b> is sufficient to solve this
              problem.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In our next blog in this series, we will be diving deep in the
              heat equations for the simple case of a 2D plate and implement a
              neural network that can learn the physics it in PyTorch.
            </p>
          </div>
          {/* end topic-3 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
