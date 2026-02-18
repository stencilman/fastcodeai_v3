"use client";
import React from "react";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const RECOMMENDED_SLUGS = ["deep-learning", "rlhf", "authenticity-race"];

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
                type="video/mp4"
                autoPlay
                muted
                loop
                playsInline
                src="/blogs/animated-drawings/content/video.mp4"
                className="rounded-[20px] w-[100%]"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Reflecting on a Journey Through Computer Graphics: Curiosity and
              Fun
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              As I recently browsed the exceptional papers presented at Siggraph
              2023{" "}
              <a
                href="https://kesen.realtimerendering.com/sig2023.html"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://kesen.realtimerendering.com/sig2023.html
              </a>{" "}
              – ranging from{" "}
              {`"3D Gaussian Splatting for Real-time Radiance Field Rendering"`}{" "}
              to{" "}
              {`"GestureDiffuCLIP: Gesture Diffusion Model With CLIP Latents"`}{" "}
              – a wave of nostalgia hit me, taking me back to my PhD days at the
              Max Planck Institute for Informatics.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Those years were a paradise for someone like me, driven by
              curiosity. A PhD is more than a degree; {"it's"} a journey of
              creation, of delving into the unknown and, hopefully pushing the
              envelope a bit. My mission was to tread paths not taken, to
              innovate in unexplored territories. Projects like MovieReshape{" "}
              <a
                href="https://resources.mpi-inf.mpg.de/MovieReshape/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://resources.mpi-inf.mpg.de/MovieReshape/
              </a>{" "}
              and{" "}
              <a
                href="http://www.stencilcreator.org/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                www.stencilcreator.org
              </a>{" "}
              were more than academic tasks; they were my playgrounds, where I
              combined serious research with the sheer fun of creation.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              And now, as I gear up to try the Animated Drawings{" "}
              <a
                href="https://github.com/facebookresearch/AnimatedDrawings"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://github.com/facebookresearch/AnimatedDrawings
              </a>{" "}
              project with my {"kids'"} artwork, {"I'm"} reminded of the
              importance of that fun, creative spirit. {"It’s"} projects like
              these that illustrate how our field is not just about technical
              prowess but also about enjoying the journey, about bringing smiles
              and wonder through technology.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Looking back, I realize that the fusion of challenge, innovation,
              and fun during my PhD {"didn't"} just lay the foundation for my
              career; it also led to some of the most rewarding experiences of
              my life.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To all my mentors, colleagues, and the dynamic world of Graphics
              and Vision: Thank you for not just shaping my career but for
              instilling in me the joy of discovery and the pleasure of having
              fun while pushing the boundaries of {"what's"} possible.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Stay tuned for an exciting showcase of what happens when Animated
              Drawings meets the imagination of a child!
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
