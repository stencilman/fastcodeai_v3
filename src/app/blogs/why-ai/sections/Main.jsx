"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. Sorting a list of integers" },
  { id: "topic2", label: "2. Reading hand-written digit 1" },
  { id: "topic3", label: "3. Reading hand-written digit 2" },
  {
    id: "topic4",
    label: "4. Solution: Machine Learning or Data-Driven algorithms.",
  },
];

const RECOMMENDED_SLUGS = ["animated-drawings", "vision-transformers", "kans"];

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
                src="/blogs/why-ai/main/img1-2.png"
                width="744"
                height="355"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Task 1: Sorting a list of integers
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              What do we do if want to sort a list of integers [6, 99, 1, 108,
              4, 6, 22] in ascending order?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Well, we could simply write a function similar to the rule-based
              algorithm on the left in picture above (bubble sort) and we would
              be done. The input to our algorithm will be the list above and the
              output will the be sorted list [1, 4, 6, 6, 22, 99, 108].
            </p>
          </div>
          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Task 2: Reading hand-written digit{"1"}
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Now, let us suppose that our algorithm needs to decide if an image
              contains hand written digit {"1"}.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Images can be represented using a 2D array as shown above. In an
              image, white is usually represented using the value 255, black
              with 0 and gray with a value between 0-255. The image above of
              size 28x28 pixels, represented using a 2D array of size 28x28.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              So, the input to our algorithm would be a 2D array of size 28x28.
              The output needs to be yes it indeed consists of the hand-written
              digit {"1"} and no otherwise.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              So, how can we do this using a rule-based algorithm?
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Well, perhaps we can try and fit a line (orange) over the
              non-white pixels and then measure the angle θ that this line makes
              with the vertical axis as shown below. And, if this angle θ is say
              between -30 to +30, then we would output yes and otherwise no.
            </p>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[47%]"
                src="/blogs/why-ai/content/img1.jpeg"
                width="400"
                height="400"
                alt=""
              />
              <Image
                className="rounded-[20px] w-[47%]"
                src="/blogs/why-ai/content/img2.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              And this algorithm would even do a good job for images which look
              like the ones in the figure above. However, if we wanted our
              algorithm to be really robust, our algorithm should correctly
              recognize {"1"} written in different handwritings like shown
              below. Now, the current version of our algorithm may not work as
              desired on all the images below, but perhaps we can tweak it by
              adding more conditions, by fitting multiple lines, etc.
            </p>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/why-ai/content/img3.jpeg"
                width="400"
                height="400"
                alt=""
              />
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
              Task 3: Reading hand-written digit {"2"}
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Now, let us suppose that our algorithm needs to decide if an image
              contains hand written digit {"2"} like the one below.
            </p>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/why-ai/content/img4.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Writing a rule-based algorithm by detecting arches and lines like
              we did for {"1"} becomes significantly more difficult. Note that
              this becomes even more difficult if we want our algorithm to
              generalize for different hand-writing styles as shown below.
            </p>

            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/why-ai/content/img5.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              And what would we do if we were to try writing a rule-based
              algorithm for a dog?
            </p>
          </div>
          {/* end topic-3 */}

          {/* topic-4 */}
          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Solution: Machine Learning or Data-Driven algorithms
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              When the complexity of the algorithm becomes so high that it
              becomes very difficult, if not impossible to hand-code it, we
              resort to ML based algorithms. And though we will not discuss them
              in detail here, let us consider a very simple, yet a way better
              solution that we can achieve with rule-based algorithm for our
              current problem of recognizing the hand-written digit 2.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Let us start by collecting a few hand-written digits of the number
              2 (dataset). Now, for starters, let us simply average all of them
              out, as shown in the image below:
            </p>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/why-ai/content/img6.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Next, whenever we need to decide if the input image contains the
              digit 2, we can simply compare the input image with our average
              image. And if the image compares well with our average image then
              we will output yes or else no. Note that we have not defined how
              do we actually compare, and is a topic for another discussion.
            </p>
          </div>
          {/* end topic-4 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
