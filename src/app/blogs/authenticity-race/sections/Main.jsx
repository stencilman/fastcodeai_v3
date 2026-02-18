"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. About" },
  { id: "topic2", label: "2. Vanguards" },
  { id: "topic3", label: "3. Invisible Yet Omnipresent" },
  { id: "topic4", label: "4. Decoding the Code" },
];

const RECOMMENDED_SLUGS = ["pinns-hom2d", "pinns", "dvdb"];

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
              Deepfakes, AI-imagery, and the Race for Authenticity
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"We're"} living in a digital age where discerning reality from
              fiction has never been more critical. In an era abundant with
              deepfakes and AI-crafted visuals, watermarking {"isn't"} just
              about branding anymore; {"it's"} about truth and ethics.
            </p>
          </div>

          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Vanguards of the Digital Frontier
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              When giants like Google, Facebook, Microsoft, and OpenAI step up,
              you know {"it's"} a big deal. {"They're"} leading the watermarking
              revolution, aiming to leave an unmistakable digital footprint.
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
              Invisible Yet Omnipresent
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Dive into Google {"DeepMind's"} SynthID or the genius collab
              between Microsoft & OpenAI with DALL-E 3. They embed covert
              patterns into images, ensuring that no matter how you tweak them,
              the watermark stands firm. {"Don't"} miss Meta {"AI's"} Stable
              Signature; {"it's"} a neural dance in two steps, but with a twist!
            </p>
          </div>
          {/* end topic-3 */}

          {/* topic-4*/}

          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Decoding the Code
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To our coder community - Unravelling these watermarks might feel
              like a quest. But with specialized algorithms and tools from these
              tech behemoths, {"we're"} stepping into a world of digital
              forensics and image authenticity.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              AI, too, can paint a thousand words!
              <br />
              (DALL-E 3 generated art)
            </p>
          </div>
          {/* end topic-4 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
