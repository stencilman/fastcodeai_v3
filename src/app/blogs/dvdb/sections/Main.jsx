"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. About" },
  { id: "topic2", label: "2. Why did we create this?" },
  { id: "topic3", label: "3. Highlights" },
];

const RECOMMENDED_SLUGS = ["authenticity-race", "crafting-visions", "rlhf"];

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
              Dart Vector DB
            </h4>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/dvdb/hero/img1.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              DVDB, an optimised, cross-platform on-device vector DB {"that's"}{" "}
              set to redefine industry standards. Check it out on GitHub:
              <a
                href="https://github.com/FastCodeAI/DVDB"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://github.com/FastCodeAI/DVDB
              </a>
            </p>
          </div>

          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Why did we create this?
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              We were working on a use case that required us to create
              privacy-preserving, on-device vector databases, ensuring that
              private user information never left their devices. So, we started
              searching for suitable on-device vector databases on the internet.
              We found SVDB, which provides on-device vector database support
              for iOS-based applications, and it worked well for our iOS
              application. However, we also needed one for Android. Alas, to the
              best of our knowledge, no such vector database existed for
              Android.
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
              DVDB Highlights
            </h4>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  Privacy First: Private user data never leaves their device,
                  and do not reside on our services. You own your data and your
                  embeddings.
                </li>
                <li className="list-disc">
                  No Server, No Cry: DVDB runs locally on device. Thus, zero
                  latency and no hassle of server upkeep!
                </li>
                <li className="list-disc">
                  {"OpenAI's"} Embeddings Support: Add OpenAI Embeddings in DVDB
                  in few lines of code.
                </li>
                <li className="list-disc">
                  Custom Embeddings: Create your own embeddings and add it in
                  DVDB instead of OpenAI embeddings.
                </li>
                <li className="list-disc">
                  Multi-platform Support: Whether {"you're"} team Android or
                  squad iOS, DVDB works on both, making app development a breezy
                  affair.
                </li>
              </ul>
            </div>
          </div>

          {/* end topic-3 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
