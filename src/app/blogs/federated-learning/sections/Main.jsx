"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. Federated Learning (FL)" },
  {
    id: "topic2",
    label: "2. Electric Vehicles (EVs) & FL: A Glimpse of the Future?",
  },
];

const RECOMMENDED_SLUGS = [
  "federated-learning",
  "ai-dangers-and-preventing-monopolization",
  "animated-drawings",
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
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/federated-learning/content/img1.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Federated Learning (FL)
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Federated Learning (FL) is a decentralised machine learning
              approach that enables model training across multiple devices while
              keeping the data localised. Unlike traditional machine learning,
              where data is sent to a central server for training, FL sends the
              model to each device, performs local training, and aggregates the
              model updates on the server. This approach preserves data privacy
              and security, as raw data never leaves the device. FL offers a
              unique blend of privacy and real-time insights. But {"it's"} true
              potential lies in specific use cases.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              FL {"isn't"} just a buzzword; {"it's"} a transformative approach
              for sectors like healthcare, finance, and automotive, where data
              privacy is non-negotiable. With techniques like Secure Aggregation
              and Differential Privacy, FL ensures data remains at its source,
              addressing genuine privacy concerns.
            </p>
          </div>

          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Electric Vehicles (EVs) & FL: A Glimpse of the Future?
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Consider EVs. Here, each {"car's"} data remains onboard, providing
              insights into battery health without compromising user privacy. FL
              shines by enabling on-board sensors to train machine learning
              models locally, predicting battery health in real-time. These
              local models are aggregated on a central server using various
              aggregation algorithms like FedAvg, FedProx, FedSCG, etc, refined,
              and then redistributed, ensuring adaptability to each {"car's"}{" "}
              unique conditions. With techniques like Secure Aggregation and
              Differential Privacy, FL ensures robust data privacy. The result?
              EV owners get real-time battery insights without compromising
              data, and the system scales seamlessly across numerous vehicles.
              However, {"it's"} worth noting that the real-world variability and
              the non-IID nature of data across vehicles present their own set
              of challenges.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              While Federated Learning (FL) shines in scenarios like Electric
              Vehicles (EVs), Healthcare, etc by prioritising data privacy,{" "}
              {"it's"} not a catch-all solution. Its design, which decentralises
              machine learning, can sometimes introduce communication overheads,
              especially with bandwidth constraints or geographically dispersed
              devices. The non-IID nature of data across devices can pose
              challenges in model aggregation and may lead to suboptimal model
              performance. Also, sometimes it might happen that some devices are
              not available due to connectivity issues, device failure etc.
              which poses an additional challenge. In essence, FL is a potent
              tool in the machine learning arsenal, but its efficacy hinges on
              the specific problem {"it's"} applied to.
            </p>
          </div>

          {/* end topic-2 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
