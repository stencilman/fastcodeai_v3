"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["pinns-hom2d", "pinns-hom-lid", "swiglu"];

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
            <div className="flex w-full gap-[5%]">
              <video
                loop
                controls
                playsInline
                src="/blogs/thesis-reality/content/video.mp4"
                className="rounded-[20px] w-[100%]"
                width="400"
                height="400"
                alt=""
              />
            </div>
            {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Approach to solve complex problems
                </h4> */}

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              As the sun sets on this Sunday evening, I find myself reflecting
              on my journey from over a decade ago. I was pursuing my #PhD at
              the Max Planck Institute for Informatics{" "}
              <a
                href="https://www.mpi-inf.mpg.de/home/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://www.mpi-inf.mpg.de/home/
              </a>{" "}
              and my thesis titled{" "}
              {`"Data-driven methods for interactive visual content creation and manipulation"`}{" "}
              marked my first venture into what is now known as the bustling
              landscape of #GenAI.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Back then, I could never have imagined the impact our ideas would
              have on the creative world. In those early days, the concept of
              using data-driven strategies for creation and manipulation was
              just beginning to take shape. My ambition was to develop #ML
              models trained on extensive corpora of visual content, to
              democratize #ContentCreation by making it accessible and intuitive
              for novices.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Fast forward to today, and the fruits of those early dreams are
              evident in the GenAI tools that have become indispensable to our
              creative endeavors. These innovations have shattered barriers,
              unlocking creativity across the spectrum of users. Yet, as we
              marvel at our progress, we also recognize the journey ahead. Our
              current interactions are largely limited to text prompts. I
              envision a future where our engagement with AI becomes more rich
              and nuanced, pushing the boundaries of creativity even further.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              On this Sunday evening, as I ponder the evolution from those
              nascent ideas to the technologies that now shape our creative
              expressions, I am filled with gratitude for being part of this
              remarkable journey.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"I'm"} curious to hear your reflections. How do you envision the
              future of GenAI in content creation?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Link to my PhD thesis:{" "}
              <a
                href="https://www.researchgate.net/publication/298070734_Data-driven_methods_for_interactive_visual_content_creation_and_manipulation"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://www.researchgate.net/publication/
              </a>
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              My work on GenAI for automatically assigning materials to 3D
              Objects (from 2012) -{" "}
              <a
                href="https://resources.mpi-inf.mpg.de/MaterialMemex/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://resources.mpi-inf.mpg.de/MaterialMemex/
              </a>
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
