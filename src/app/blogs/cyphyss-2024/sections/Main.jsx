"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = [
  "vision-transformers",
  "pinns-hom2d",
  "solving-complex-problem",
];

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
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Join Me at CyPhySS 2024 for a Deep Dive into the Future of
              Autonomous Vehicles
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Come, attend and join me tomorrow at CyPhySS2024 at the{" "}
              <a
                href="https://www.linkedin.com/company/indian-institute-of-science/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Indian Institute of Science (IISc)
              </a>
              , where I will be speaking on{" "}
              {`"Autonomy at Scale: Where Are We Headed?"`} This presentation is
              part of {"India's"} largest annual summit on Cyber-Physical
              Systems, spearheaded by Prof.{" "}
              <a
                href="https://www.linkedin.com/in/amrutur/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Bharadwaj Amrutur
              </a>
              . The summit convenes leading experts to discuss advancements in
              Robotics, Control, and AI.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Session Details:
              <br />
              Date: July 25, 2024
              <br />
              Venue: Division of Biological Sciences, IISc Bangalore
              <br />
              Time: 13:45-14:30
              <br />
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This symposium is an excellent opportunity for anyone interested
              in the intersections of technology with sectors like industry,
              space, agriculture, and more. Expect insights into how AI and
              robotics are reshaping mobility and smart infrastructure. Link to
              symposium:{" "}
              <a
                href="https://cps.iisc.ac.in/cyphyss2024/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://cps.iisc.ac.in/cyphyss2024/
              </a>
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Below is the PDF to preview some of the insights I will be
              sharing!
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              I look forward to engaging with fellow researchers, industry
              leaders, and enthusiasts. {"Let’s"} explore the possibilities that
              lie at the frontier of autonomous systems!
            </p>
            <div className="flex w-full flex-col md:flex-row gap-[25px] md:gap-[5%]">
              <object
                type="application/pdf"
                className="rounded-[20px] w-[100%] h-[auto]  lg:h-[600px]"
                data="/blogs/cyphyss-2024/content/cyphyss-artcl.pdf"
                // width="400"
                // height="400"
              >
                <a
                  href="/blogs/cyphyss-2024/content/cyphyss-artcl.pdf"
                  download
                >
                  <div className="main_cta_button rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg justify-between">
                    Preview PDF
                    <div>
                      <span className="button__icon-wrapper ">
                        <svg
                          width="10"
                          className="button__icon-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 15"
                        >
                          <path
                            fill="currentColor"
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          ></path>
                        </svg>

                        <svg
                          className="button__icon-svg  button__icon-svg--copy"
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          fill="none"
                          viewBox="0 0 14 15"
                        >
                          <path
                            fill="currentColor"
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </object>
            </div>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
