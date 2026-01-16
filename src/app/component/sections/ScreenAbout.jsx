"use client";
import React, { useState, useEffect } from "react";
import scringAnim from "../../../../public/animations/springs.json";
import preloader1 from "../../../../public/animations/preloader/Logo_6.json";
import preloader2 from "../../../../public/animations/preloader/Logo_8.json";
import Lottie from "lottie-react";
import Image from "next/image";
import brain from "../../../../public/brain.svg";
import RevealX from "../RevealX";
import RevealY from "../RevealY";
import Button from "../Button";
import arrowRight from "../../../../public/arrowRight.svg";
import AboutSectionAnimation from "../../utils/AboutSectionAnimation";

const ScreenAbout = () => {
  const [isShortScreen, setIsShortScreen] = useState(false);

  useEffect(() => {
    const checkScreenHeight = () => {
      if (window.innerHeight < 800) {
        setIsShortScreen(true);
      } else {
        setIsShortScreen(false);
      }
    };

    // Initial check
    checkScreenHeight();

    // Add event listener
    window.addEventListener("resize", checkScreenHeight);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkScreenHeight);
  }, []);
  return (
    // <div className={`w-full ${isShortScreen ? 'h-[800px]' : 'h-[90vh] sm:h-[86vh] md:h-[82vh] lg:h-[100vh]'}  flex flex-col lg:flex-row relative lg:static gap-[20px] items-center bg-[#00081F]`}>
    //   <div className="absolute lg:relative left-0 top-[20vw] sm:top-[16vw] lg:top-0">
    //   <RevealX>
    //     <div className="w-[92vw] md:w-[70vw] h-[462px] lg:w-[600px] lg:h-[600px] transform scale-x-[-1]">
    //       <Lottie animationData={scringAnim} loop={true} />
    //       {/* <AboutSectionAnimation/> */}
    //     </div>
    //     <div className="absolute top-[21vw] md:top-[14vw] left-[39%]  lg:left-[240px] lg:top-[129px]">
    //       <Image
    //         className="w-[42vw] md:w-[32vw] lg:w-[270px]"
    //         src={brain}
    //         width="270"
    //         height="200"
    //         alt="img"
    //       />
    //     </div>
    //     </RevealX>
    //   </div>
    //   <div className="mb-[100px] absolute lg:static top-[60vw] text-center lg:text-left">
    //     <h1 className="text-[8vw] md:text-[7vw] lg:text-[51px] text-white font-aeonik tracking-normal relative lg:static top-[-50vw] lg:top-0 ">

    //       Discover FastCode AI

    //     </h1>
    //     <p className="text-[#9EB3CF] text-base sm:text-lg w-[100%] lg:w-[80%] px-[10vw] lg:px-0 pt-[28vw] sm:pt-[25vw] md:pt-[8vw] lg:pt-[20px] font-bwmss01">

    //       FastCode AI stands at the forefront of AI adoption, equipping industry
    //       leaders with the tools to implement advanced intelligence, scale
    //       solutions, and automate processes effectively. We are committed to
    //       enhancing operational safety, refining user interactions, and
    //       unlocking deep insights into machinery and production processes
    //       through state-of-the-art automation and data analytics. Guided by our
    //       core values of Excellence, Innovation, and Integrity, we ensure every
    //       solution we deliver upholds the highest standards.
    //     </p>
    //   </div>
    // </div>
    <div>
      <div
        className="w-full h-auto flex flex-col  justify-center p-[20px] md:p-[50px] lg:p-[100px] gap-[30px] md:gap-[50px]"
        style={{
          background: "linear-gradient(270deg, #000000 0%, #272A56 100%)",
        }}
      >
        <h1 className="text-white font-aeonik tracking-wide font-normal text-[40px] leading-[40px] md:text-[50px] md:leading-[50px] ">
          Are we the right partner?
        </h1>

        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[10%] w-full justify-center">
          <div className="w-full md:w-[45%] flex flex-col gap-[20px]">
            <h3 className="text-white font-bwmss01 text-[22px] md:text-[25px] tracking-normal">
              <span className="text-[#58DEE4]">Great fit </span> if you:
            </h3>
            <ul className="text-white font-bwmss01 text-[16px] md:text-[18px] list-disc pl-[20px] flex flex-col gap-[10px]">
              <li>
                Have a novel research question and a target venue
                (NeurIPS/ICLR/CVPR, etc.)
              </li>

              <li>Can provide data and compute (VPC/on-prem supported)</li>

              <li>Want co-authored papers/patents + benchmarkable results</li>
            </ul>
            <div className="mt-[30px] w-fit">
              <Button
                type="secondary"
                to="/contact"
                name="Start a Research Sprint"
                icon={arrowRight}
              />
            </div>
          </div>

          <div className="w-full md:w-[45%] flex flex-col gap-[20px] mb-[30px] md:mb-0">
            <h3 className="text-[#58DEE4] font-bwmss01 text-[22px] md:text-[25px] tracking-normal">
              Not <span className="text-white">a fit if you need:</span>
            </h3>
            <ul className="text-white font-bwmss01 text-[16px] md:text-[18px] list-disc pl-[20px] flex flex-col gap-[10px]">
              <li>Generic app development or workflow builds</li>
              <li>Staff augmentation</li>
              <li>&quot;Just a PoC&quot; with no research novelty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenAbout;
