"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. About" },
  { id: "topic2", label: "2. Leveraging P&ID" },
  { id: "topic3", label: "3. Solution" },
  { id: "topic4", label: "4. Extracting P&ID from a simple PDF" },
  { id: "topic5", label: "5. Toward 100% Accuracy" },
  { id: "topic6", label: "6. Impact" },
];

const RECOMMENDED_SLUGS = ["swiglu", "thesis-reality", "vision-transformers"];

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
            {/* <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
                  <Image
                    src="/blogs/unknown/main/known-unknown.webp"
                    width="744"
                    height="355"
                    alt=""
                  />
                </div> */}
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              About
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Oil & Gas which was once was a lucrative investment, now struggles
              to ensure the same level of light. A lot of things have changed in
              the past few years which has pushed the Oil & Gas industry into a
              less profitable terrain for the investments. The slump in the oil
              market and the resulting fall in new investments has drastically
              changed the Oil & Gas EPC market. This has led to fewer interests
              from investors and projects for EPC clients implying a low number
              of deals in the market. This shift has led to a reduction in the
              number of {"Proposals to Conversion"} ratio. In order to sustain
              the same order every year, EPC companies are having to respond to
              almost twice the number of proposals. This has put the scalability
              of the proposal process to test.
            </p>
          </div>
          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/oil-gas/content/pic1.webp"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Leveraging P&ID
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              One of the cumbersome and manual processes is to read the hundreds
              of P&ID diagrams and arrive at the correct MTO (Material take
              off). This process is highly time-consuming and incurs
              miscalculations due to manual errors. This could end up affecting
              overall profitability in the project. Also most of the times, EPC
              companies keep a high buffer in order to hedge the risk of
              last-minute change required because of incorrect MTO created
              manually by the engineers. This is a risky affair altogether as
              the process is monotonic and requires a lot of human-involvement,
              leaving a large room for standardization.
            </p>
          </div>

          {/* end topic-2 */}
          {/* topic-3 */}

          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/oil-gas/content/pic2.webp"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Fast Code Solution
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              With a leading EPC Oil & Gas player, Fast Code has automated the
              process of developing AutoMTO, thereby saving a huge amount of
              time and resources for the in terms of man-hours and costs for the
              EPC giant. Fast Code leveraged Artificial Intelligence techniques
              which automatically detects all the instruments, pipes, texts and
              codes. This step takes less than a minute to extract all the MTO
              information from a P&ID.
            </p>
          </div>
          {/* end topic-3 */}

          {/* topic-4 */}

          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/oil-gas/content/pic3.webp"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Extracting P&ID from a simple PDF
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Reading of P&ID from pdf and image-based format: Computer vision
              techniques were employed to read P&ID files in PDF/image form and
              identify the text, lines and other components. Machine learning
              was leveraged to identify and locate all the Equipment,
              Instruments, and Valves. It also identifies T-joints, Spec Brakes,
              Reducers etc. involved in MTO generation. This complete process
              which takes an engineer 3-4 days of work, is finished by AutoMTO
              in 3 steps as shown in the above figure. The components were then
              associated with the lines and thus preparing the Line List,
              Equipment List and the full MTO automatically. The process
              improved the overall efficiency of reading and reduced the time
              taken to process per P&ID sheet by a factor of 15. Provision has
              also been provided to bring in a human in the loop to review and
              make necessary modifications to ensure 100% accuracy of MTO.
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
              Toward 100% Accuracy
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              AutoMTO as a state of the art system lets achieve 100% accuracy
              whilst preparing MTO and this accuracy is then translated into
              better sales, lean buffer size and competitiveness in the bidding
              stage. The solution achieved 100% accuracy in the generation of
              MTO. This reduced engineering work drastically by leveraging
              one-shot and active learning AI techniques. The product has led to
              saving about 90% the time taken to generate the MTO. The version
              tracking mechanism has allowed more efficient identification of
              changes made to the input P&IDs.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Lean Buffer and Competitiveness: The solution ensured a more
              accurate MTO and thus provides a higher degree of confidence to
              the proposal owners. This has allowed the client to reduce the
              Material cost buffer, thus making the proposals more competitive.
              Fast Code enabled the EPC player to create MTO with leaner buffer
              size and in the process making the bids for EPC much more
              competitive.
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
              Impact
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Divisions like Sales, Proposals, Procurement get direct advantage
              in terms of this impact as AutoMTO ensures digitization benefits
              are distributed across the system
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              1. 14x Improvement in Efficiency in reading and processing P&ID
              sheets
              <br />
              2. 90% Reduction in time while reading and generating an MTO
              <br />
              3. 100% Accuracy generated from the solution
              <br />
              4. {">"} $3m Cost saved per year (40 proposals/year)
              <br />
            </p>
          </div>
          {/* end topic-6 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
