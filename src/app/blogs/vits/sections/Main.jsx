"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["nas", "vits", "why-ai"];

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
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/vits/hero/img1.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Vision Transformers (ViTs)
                </h4> */}
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Recently, the paper{" "}
              {`"What Do Self-Supervised Vision
                  Transformers Learn?"`}{" "}
              caught my attention, and I decided to write this short post for
              those new to Vision Transformers (ViTs).
            </p>{" "}
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In the realm of ViTs, there are two fundamental self-supervised
              learning techniques: Contrastive Learning (CL) and Masked Image
              Modeling (MIM).
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              CL is a widely-used self-supervised learning method that works by
              pulling the embeddings (representations in a high-dimensional
              space) of various transformations (variations, such as a rotated
              version) of the same image closer together, and pushing those from
              images of different classes apart. MIM, on the other hand, has
              more recently risen to prominence, particularly with ViTs. MIM
              functions by masking random patches in the input image and
              subsequently reconstructing the missing pixels, as shown in the
              image below.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The paper {`"What Do Self-Supervised Vision Transformers Learn?"`}{" "}
              <a
                href="https://arxiv.org/abs/2305.00729"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://arxiv.org/abs/2305.00729
              </a>{" "}
              by Park et al. studies CL and MIM trained transformers in detail
              and finds:
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              1. As expected, CL primarily captures global patterns, whereas MIM
              does not. CL is also more shape-oriented while MIM is more
              texture-oriented.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              2. CL plays a significant role in the later layers of the ViTs
              architecture, training self-attentions to capture longer-range
              global patterns, such as the shape of an object. However, it also
              leads to reduced diversity of representations, thereby worsening
              scalability and dense prediction performance.
            </p>{" "}
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              3. MIM utilizes high-frequency signals of the representations and
              mainly focuses on the early layers of the ViTs.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The paper argues that CL and MIM can complement each other and
              that even the simplest harmonization can help leverage the
              advantages of both methods.
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
