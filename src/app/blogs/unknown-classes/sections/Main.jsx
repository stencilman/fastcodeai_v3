"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. Problem" },
  { id: "topic2", label: "2. Solution" },
  { id: "topic3", label: "3. Limitations" },
];

const RECOMMENDED_SLUGS = ["crafting-visions", "deep-learning", "gan"];

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
            <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                src="/blogs/unknown/main/known-unknown.webp"
                width="744"
                height="355"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Problem
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A Convolutional Neural Network (ConvNet) trained on the MNIST
              dataset when presented images from the Devanagari dataset will
              wrongly classify the Devanagari letter to one of the MNIST classes
              0-9, usually with very high confidence. What can we do to fix
              this?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Systems trained without a background class can lead to nasty false
              positives when deployed in production. While most of the academic
              datasets such as PASCAL, MS-COCO or MNIST where algorithms are
              often evaluated, do not have this problem because all classes are
              known, it is a likely source of {"negative"} dataset bias and does
              not necessarily hold true in the real world where the negative
              space has near infinite variety of inputs that need to be
              rejected.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              For example, let us look as this image below:
            </p>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/unknown/content/known-unknown-plot-1.webp"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In the 3 scatter plots on the top row, the 10 different colors
              represent the 10 MNIST classes 0-9, and the black color represents
              the unknown Devanagari class. The softmax probability is plotted
              with the origin being zero, and the value increases to one as we
              go out radially along the lines.
              <br />
              In the plots on the bottom row are histograms of softmax
              probability values for samples of known MNIST data (Red) and
              unknown Devanagari data (red) with a logarithmic vertical axis.
              <br />
              As it can be clearly seen, in the plot (a), some of the samples
              from the Devanagari dataset have very high scores. Even when an
              additional unknown class is added in plot (b), some black dots
              falling in the 0-9 classes are still far away from the origin. In
              an application, a score threshold θ should be chosen to optimally
              to separate unknown from known samples. Unfortunately, such a
              threshold is difficult to find for either (a) or (b), however, a
              better separation is achievable with the Objectosphere loss (c)
              which I will describe next in this post.
            </p>
          </div>
          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Solution
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The most common approach taken to deal with unknown classes to
              prevent false positives are by:
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              1. thresholding softmax, or
              <br /> 2. using an additional background, garbage or nota class.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              However, they still have problems as shown in the plots (a) and
              (b) above. Dhamija et al. in the paper{" "}
              <a
                href="https://arxiv.org/pdf/1811.04110v2.pdf"
                target="_blank"
                className="underline text-white italic"
              >
                Reducing Network Agnostophobia
              </a>{" "}
              from NeurIPS 2018 present a simple yet effective approach which
              leads to a better solution to this unknown class problem and the
              results can be seen in the plot (c) above. They achieve this using
              the Objectosphere loss.
            </p>
            <b className="text-[#9EB3CF] text-lg font-bwmss01">
              In simple words, all they say is: do no use the additional
              background, garbage or nota class. Instead, force the unknown
              classes to output a uniform distribution. And, also force the
              magnitude of activations for known classes to be at least a margin
              m and that of unknown classes to be zero. Thats it!
            </b>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To understand it more formally, please check the equations (1) and
              (2) from their{" "}
              <a
                href="https://arxiv.org/pdf/1811.04110v2.pdf"
                target="_blank"
                className="underline text-white italic"
              ></a>{" "}
              paper.
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
              Limitations
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              There are two kinds of unknowns - the known unknown and the
              unknown unknown. This method only works best for the known
              unknowns. E.g. in one experiment, for a MNIST classifier, they
              find that training with CIFAR samples as the unknowns does not
              provide robustness to unknowns from the samples of NIST Letters
              dataset. Whereas, training with NIST Letters does provide
              robustness against CIFAR images. This is because CIFAR images are
              distinctly different from the MNIST digits where as NIST letters
              have attributes very similar to them. This finding however is
              consistent with the well known importance of hard-negatives in
              deep network training.
            </p>
          </div>
          {/* end topic-3 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
