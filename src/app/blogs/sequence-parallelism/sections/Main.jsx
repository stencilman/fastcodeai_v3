"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. About" },
  { id: "topic2", label: "2. The Traditional Approaches" },
  { id: "topic3", label: "3. Introducing Sequence Parallelism" },
  { id: "topic4", label: "4. System Design" },
  { id: "topic5", label: "5. Implementations" },
  { id: "topic6", label: "6. Benefits" },
];

const RECOMMENDED_SLUGS = ["kans", "vision-transformers", "pinns-hom-lid"];

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
              As deep learning models continue to grow in size and complexity,
              efficiently training these massive networks has become a
              significant challenge. Traditional parallelism strategies like
              data parallelism and model parallelism have been instrumental but
              come with their own limitations. Enter sequence parallelism—a
              novel approach that addresses some of these constraints, offering
              a new avenue for optimizing large-scale model training.
            </p>
          </div>

          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              The Traditional Approaches: Data and Model Parallelism
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b>Data Parallelism</b> involves splitting the input batched data
              across multiple GPUs. Each processor works independently on its
              portion of the data using the same model parameters. After
              computation, gradients are aggregated to update the model
              synchronously. This method is relatively straightforward and
              scales well with the number of processors. However, it is not
              designed for models that exceed the memory capacity of a single
              GPU.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b>Model Parallelism</b>, on the other hand, partitions the model
              weights itself across multiple GPUs. Different layers or
              components of the model are allocated to different processors.
              While this allows for training larger models, it introduces
              significant communication overhead between GPUs, potentially
              leading to inefficiencies and slower training times.
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
              Introducing Sequence Parallelism
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Traditional strategies like data parallelism and model parallelism
              distribute workloads across multiple GPUs but often encounter
              limitations when dealing with very large models or long input
              sequences. In Sequence parallelism, the input sequence is split
              across multiple GPUs, allowing for efficient training of large
              models like transformers. Utilizing the scatter and gather design
              patterns, presents a novel solution by dividing input sequences
              across GPUs, enabling efficient training without overwhelming
              memory constraints.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">How Sequence Parallelism Works</b>
              <br />
              In sequence parallelism, an input sequence is divided into
              segments, each assigned to a different GPU. For instance, if you
              have a sequence of 1,000 tokens and four GPUs, each GPU processes
              250 tokens. This approach keeps GPUs busy and optimizes training
              in the following way:
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">Local Computations</b>
              <br />
              Each GPU independently computes the embeddings and initial layers
              for its segment of the sequence. This ensures that all GPUs are
              actively processing data without waiting on others, maximizing
              parallel efficiency.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b className="text-white">
                Attention Mechanism with Communication
              </b>
              <br />
              Transformers and similar models rely on attention mechanisms that
              require access to the entire sequence. To handle this:
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  Each GPU computes the key and value tensors for its segment.
                </li>
                <li className="list-disc">
                  GPUs then scatter these tensors, exchanging them so that every
                  GPU has access to the full set of keys and values.
                </li>
                <li className="list-disc">
                  While this exchange happens, GPUs continue computing the query
                  tensors for their segments, keeping them busy during
                  communication.
                </li>
              </ul>
            </div>
          </div>
          {/* end topic-3 */}

          {/* topic-4 */}
          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              System Design
            </h4>
            <div className=" bg-black rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                className="w-full h-full"
                src="/blogs/sequence/system-design.png"
                width="744"
                height="355"
                alt=""
              />
            </div>
            <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
              Figure 2. DeepSpeed sequence parallelism (DeepSpeed-Ulysses)
              design
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b>Figure 2</b> shows the core design of DeepSpeed-Ulysses paper.
              As with the known transformer architecture, the design consists of
              input sequences NNN partitioned across PPP available devices. Each
              local N/PN/PN/P partition is projected into queries (Q), keys (K),
              and values (V) embeddings. Next, the QKV embeddings are gathered
              into global QKV through highly optimized all-to-all collectives
              between the participating compute devices. Following the
              all-to-all collective is the attention computation per head,
              expressed in the form:
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                {" Outputcontext = Softmax((QKT )/ p(d))V"}
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              After the attention computation, another all-to-all collective
              transforms the output context tensor of the attention computation
              to sequence N/PN/PN/P parallel for subsequent operators (MLP
              MatMul, layer norm, etc.) in the remaining modules of the
              transformer layer block.
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Global Attention Computation
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              With the complete keys and values, each GPU computes attention
              scores for its queries against the entire sequence. This
              computation is intensive and fully utilizes the {"GPUs'"}{" "}
              capabilities. By employing the gather pattern, GPUs collect the
              necessary information to perform these computations, ensuring that
              each token can attend to every other token in the sequence.
            </p>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Updating Representations and Continuing Computation{" "}
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              GPUs update their token representations using the attention
              outputs and proceed to process subsequent layers like feed-forward
              networks. This continuous computation ensures GPUs remain
              occupied, maintaining high efficiency throughout the training
              process.
            </p>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Synchronization Points
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              After certain layers, GPUs synchronize to maintain model
              consistency. Efficient communication protocols minimize idle time
              during these synchronization phases, ensuring that the overall
              training process remains streamlined.
            </p>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Backward Pass and Gradient Sharing
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              During training, each GPU computes gradients for its segment.
              Necessary gradients are exchanged between GPUs to update shared
              model parameters, keeping all GPUs engaged in both computation and
              communication. This collaboration ensures that the model converges
              correctly while maximizing resource utilization.
            </p>

            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Efficiency and Scalability
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              By overlapping computation with communication, sequence
              parallelism maximizes GPU utilization. GPUs are either processing
              data or communicating essential information, significantly
              reducing idle times. This method allows for training larger models
              with longer sequences without exceeding individual GPU memory
              limits, effectively scaling deep learning models.
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
              Real-World Implementations
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Projects like{" "}
              <a
                href="https://github.com/NVIDIA/Megatron-LM"
                className="text-blue-600 hover:underline"
                target="_blank"
              >{`NVIDIA's Megatron-LM`}</a>{" "}
              and{" "}
              <a
                href="https://www.deepspeed.ai"
                className="text-blue-600 hover:underline"
                target="_blank"
              >{`Microsoft's DeepSpeed`}</a>{" "}
              have successfully implemented sequence parallelism using scatter
              and gather patterns:
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  <b>Megatron-LM:</b> Utilizes sequence parallelism to
                  efficiently train large transformer models by optimizing
                  memory usage and computation across GPUs.
                </li>
                <li className="list-disc">
                  <b>DeepSpeed ULYSSES:</b> Provides advanced parallelism
                  strategies, including sequence parallelism, enabling the
                  training of models with billions of parameters while
                  maintaining high efficiency.
                </li>
              </ul>
            </div>
          </div>
          {/* end topic-5 */}

          {/* topic-6 */}
          <div
            id="topic6"
            ref={(el) => (topicRefs.current[5] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Benefits of Sequence Parallelism with Scatter and Gather
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              By employing the scatter and gather design patterns, sequence
              parallelism offers several benefits:
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  <b>Efficient GPU Utilization:</b> GPUs are consistently
                  engaged in computation or communication, maximizing resource
                  usage and reducing idle times.
                </li>
                <li className="list-disc">
                  <b>Reduced Memory Footprint:</b> Each GPU handles a smaller
                  portion of the sequence, preventing memory overload and
                  allowing for larger models and longer sequences.
                </li>
                <li className="list-disc">
                  <b>Preserved Model Performance: </b>Gather operations ensure
                  that computations requiring global context, like attention
                  mechanisms, have access to the entire sequence, maintaining
                  model accuracy.
                </li>
                <li className="list-disc">
                  <b>Scalability: </b>The scatter and gather patterns enable the
                  model to scale across multiple GPUs seamlessly, facilitating
                  the training of increasingly large models.
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
