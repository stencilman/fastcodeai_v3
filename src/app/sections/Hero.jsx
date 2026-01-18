"use client";
import React, { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import preloader1 from "../../../../public/animations/preloader/Logo_6.json";
import RevealX from "../RevealX";
import RevealY from "../RevealY";
import Image from "next/image";
import scringAnim from "../../../../public/animations/springs.json";
import brain from "../../../../public/brain.svg";
import arrowRight from "../../../../public/arrowRight.svg";
import Button from "../Button";

import { useInView } from "react-intersection-observer";
import Head from "next/head";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <Head>
        <link rel="preload" href="/patents1.mp4" as="video" type="video/mp4" />
      </Head>
      <div
        className="w-full h-auto md:h-[100vh] relative pl-[20px] md:pl-[50px] lg:pl-[100px] flex flex-col md:flex-row items-center"
        style={{
          background: "linear-gradient(270deg, #000000 0%, #272A56 100%)",
        }}
      >
        {/* <Navbar /> */}
        {/* <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
            src="/patents1.mp4"
          />
          <div className="absolute inset-0 bg-black opacity-[0.65]"></div>
        </div>
        <div className="w-full bottom-[11rem] lg:bottom-28 absolute z-[1] text-center">
          <h1
            ref={ref}
            className={`text-[#F3F3F3] tracking-wide text-[8vw] md:text-[7vw] leading-[9vw] lg:leading-[1] lg:text-8xl pb-[20px] font-aeonik font-normal ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } transition-transform duration-1000 ease-out`}
          >
            Accelerating Innovation
          </h1>
          <p
            ref={ref}
            className={`text-[#9EB3CF]  text-[1rem] leading-[1.2rem] px-[55px] md:px-[0px] md:leading-[1.75rem] md:text-lg items-center font-bwmss01 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }  transition-transform delay-100 duration-1000 ease-out`}
          >
            Expertly crafted AI solutions—designed with precision, built for
            reliability,
            <br className="hidden md:block" /> and committed to excellence.
          </p>
        </div> */}
        {/* <div className="w-full h-[50vh] lg:h-[80vh] "> */}
        <div className="w-full md:w-[60%] mt-[100px] pr-[20px] md:pr-[0px] md:mt-[0px] ">
          <h1 className="text-white mt-[10px] font-aeonik tracking-wide font-normal text-[40px] leading-[40px] md:text-[50px] md:leading-[50px] ">
            <RevealY>
              <span className="text-[#58DEE4]">Research-as-a-Service</span>
            </RevealY>
            for innovation teams
          </h1>
          <p className="text-[#9EB3CF] font-bwmss01 text-[12px] md:text-[18px] mt-[10px] md:mt-[20px] w-3/4">
            <RevealX>
            We partner with innovation teams to push the frontier in computer vision, diffusion models, LLM post-training, and reinforcement learning—co-authoring papers and patents.
            </RevealX>
          </p>

          <div className="mt-[30px] md:mt-[40px] w-fit">
            <Button
              to="/contact"
              name="Pitch a Research Problem"
              icon={arrowRight}
            />
          </div>

          <div className="flex gap-[10px] md:gap-[15px] items-center flex-wrap mt-[30px] md:mt-[40px]">
            <div className="border border-[#58DEE4] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-base font-bwmss01 text-[#58DEE4]">
              8000+ citations
            </div>
            <div className="border border-[#58DEE4] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-base font-bwmss01 text-[#58DEE4]">
              5 patents
            </div>
            <div className="border border-[#58DEE4] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-base font-bwmss01 text-[#58DEE4]">
              18 research papers
            </div>
          </div>

          <p className="text-[#9EB3CF] font-bwmss01 text-[12px] md:text-[18px] mt-[30px] md:mt-[40px]">
            <RevealX>
              Research Lineage:
              <br />  MPII → NYU (Yann LeCun) → Apple Project Titan → IIT Bombay → IISc
            </RevealX>
          </p>
        </div>
        <div className="w-full md:w-[40%] ">
          <div className="w-[100%] relative  ">
            {/* <RevealY> */}
            <Lottie animationData={scringAnim} loop={true} />
            <div className="absolute top-[26%] left-[17.5%] md:top-[24%]  lg:left-[12%] xl:left-[16%]">
              <Image
                src="./brain.svg"
                className="sm:w-[220px] md:w-[140px] lg:w-[220px] xl:w-[18vw]"
                width="160"
                height="200"
                alt="img"
              />
            </div>
            {/* </RevealY> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
