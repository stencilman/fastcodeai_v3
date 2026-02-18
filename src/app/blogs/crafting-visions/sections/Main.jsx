"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. Democratizing Visual Creativity" },
  { id: "topic2", label: "2. Overcoming Limitations" },
  { id: "topic3", label: "3. Integration with ChatGPT" },
  { id: "topic4", label: "4. Ethical and Legal Foresight" },
];

const RECOMMENDED_SLUGS = ["solving-complex-problem", "gan", "pinns-hom-lid"];

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
                src="/blogs/crafting-visions/content/img1.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Democratizing Visual Creativity:
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              DALL-E 3 is a groundbreaking advancement, enabling users to
              translate intricate ideas into highly accurate images
              effortlessly. It has democratized visual creativity, making it
              accessible to a wider audience without the need for deep prompt
              engineering expertise.
            </p>
          </div>
          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Overcoming Limitations:
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Previous models like Midjourney and Stable Diffusion excelled in
              generating high-quality images of solitary characters and objects
              but struggled with scenes involving specific relationships and
              interactions between multiple objects. DALL-E 3 has made
              significant strides in generating images that represent intricate
              scenes with multiple objects maintaining specific spatial and
              interactive relationships, a challenge that predecessors like
              Midjourney and Stable Diffusion found formidable. For instance:
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b>Prompt:</b>{" "}
              {` "A bustling city street at night with people walking, neon signs glowing, cars parked on the side, and a full moon visible between the skyscrapers."`}
              <br />
              <b>Complexity:</b> The model has to generate a lively and dynamic
              scene, placing multiple elements like people, cars, and buildings
              accurately, and managing light and shadow to reflect the nighttime
              setting and glowing neon signs.
            </p>
          </div>

          {/* topic-3 */}
          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Integration with ChatGPT:
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              OpenAI has seamlessly integrated DALL-E 3 with ChatGPT, reducing
              the friction in transitioning from an idea to an image and
              allowing ChatGPT to act as a creative partner.
            </p>
          </div>

          {/* topic-4 */}
          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Ethical and Legal Foresight:
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              OpenAI has implemented measures to respect and protect the
              creative rights of artists, addressing potential legal and ethical
              disputes by allowing artists to opt out their work from training
              datasets and refusing to replicate the styles of living artists.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              DALL-E 3 opens up new horizons in AI-driven art creation, posing
              intriguing questions about the implications on traditional art
              forms and offering unprecedented opportunities for exploring
              visual creativity. It stands as a testament to the potential of AI
              to revolutionize visual representation and creativity.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Currently in research preview, DALL-E 3 ]will be available to
              ChatGPT Plus and Enterprise customers in October, via the API and
              in Labs later this fall, with images created being the property of
              the creator without needing permission to reprint, sell or
              merchandise them.
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
