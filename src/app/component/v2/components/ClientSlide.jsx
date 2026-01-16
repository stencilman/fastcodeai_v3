"use client";
import Image from "next/image";
import React from "react";
import Shadow from "../../Shadow";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import aramco from "../../../../../public/v2/our-clients/aramco.svg";
import bosch from "../../../../../public/v2/our-clients/bosch.svg";
import dubaiExpo from "../../../../../public/v2/our-clients/dubai-expo.svg";
import embitel from "../../../../../public/v2/our-clients/embitel.svg";
import iis from "../../../../../public/v2/our-clients/iis.svg";
import jetapult from "../../../../../public/v2/our-clients/jetapult.svg";
import liftlab from "../../../../../public/v2/our-clients/liftlab.svg";
import mercedes from "../../../../../public/v2/our-clients/mercedes.svg";
import miai from "../../../../../public/v2/our-clients/miai.svg";
import petrofac from "../../../../../public/v2/our-clients/petrofac.svg";
import seikor from "../../../../../public/v2/our-clients/seikor.svg";
import textiles from "../../../../../public/v2/our-clients/textiles.svg";
import zen from "../../../../../public/v2/our-clients/zen.svg";

// import mbux from "../../../../../public/v2/our-clients/mercedes.png";
// import fitlab from "../../../../../public/v2/our-clients/fitlab.png";
// import meta from "../../../../../public/v2/our-clients/Meta.png";
// import textiles from "../../../../../public/v2/our-clients/textiles.png";

const ClientSlide = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-40%", "25%"]);

  const x2 = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);

  const slider1 = [
    {
      src: aramco,
    },
    {
      src: bosch,
    },
    {
      src: dubaiExpo,
    },
    {
      src: embitel,
    },
    {
      src: iis,
    },
    {
      src: jetapult,
    },
    {
      src: liftlab,
    },
    {
      src: aramco,
    },
    {
      src: bosch,
    },
    {
      src: dubaiExpo,
    },
    {
      src: embitel,
    },
    {
      src: iis,
    },
    {
      src: jetapult,
    },
    {
      src: liftlab,
    },
  ];

  const slider2 = [
    {
      src: mercedes,
    },
    {
      src: miai,
    },
    {
      src: petrofac,
    },
    {
      src: seikor,
    },
    {
      src: textiles,
    },
    {
      src: zen,
    },
    {
      src: mercedes,
    },
    {
      src: miai,
    },
    {
      src: petrofac,
    },
    {
      src: seikor,
    },
    {
      src: textiles,
    },
    {
      src: zen,
    },
  ];

  return (
    <div
      ref={container}
      className="w-full min-h-[70vh] md:min-h-[90vh] min-lg:h-[100vh] bg-[#00081F]  relative flex flex-col items-center justify-center"
    >
      {/* shadow */}
      {/* <div className="absolute bottom-[0px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[-1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div> */}
      {/* <Shadow /> */}

      <div className="flex pt-[50px] sm:pt-0 flex-col gap-[60px] w-full items-center ">
        <div className=" h-auto w-[100%] text-center  ">
          <div className="w-full h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl text-white font-bold  font-aeonik tracking-wide w-full px-[20px] text-center">
              Trusted by Industry Leaders
            </h1>
          </div>
        </div>
        {/* slidingImages */}
        <div className="w-[100%]  flex flex-col gap-[4vw] md:gap-[2vw] relative z-[1] overflow-x-hidden">
          {/* <div className="absolute top-[-19px] lg:top-0 left-[-60px] md:left-[] lg:left-[-65px] w-[80px] h-[107%] lg:h-[100%]  bg-gradient-to-br from-[#000a2b] to-[#000b2c] opacity-83 z-20 blur-[10px]"></div>
          <div className="absolute lg:hidden top-[-19px] lg:top-0 right-[-60px] md:right-[] lg:right-[-65px] w-[80px] h-[107%] lg:h-[100%]  bg-gradient-to-br from-[#000a2b] to-[#000b2c] opacity-83 z-20 blur-[10px]"></div> */}
          {/* slider */}
          <motion.div
            style={{
              x: x1,
              transition: { duration: 0.5, type: "spring", stiffness: 100 },
            }}
            className="flex relative gap-[12px] sm:gap-[20px] w-[250%]"
          >
            {slider1.map((e, i) => {
              return (
                <div
                  key={i}
                  className="border border-[#1D2B4F]  border-color duration-500 hover:border-[#ffffff92] hover:border cursor-pointer transition rounded-[18px] min-w-[150px] w-[258px] h-[122px] md:h-[182px] flex items-center justify-center group"
                  style={{
                    background:
                      "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <div className="relative flex items-center justify-center group">
                    <span
                      role="img"
                      aria-label="client logo"
                      className="block w-[122px] h-[70px] bg-[#9EB3CF] group-hover:bg-white transition-colors duration-300"
                      style={{
                        WebkitMaskImage: `url(${e.src.src})`,
                        maskImage: `url(${e.src.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
          {/* slider */}
          <motion.div
            style={{
              x: x2,
              transition: { duration: 0.5, type: "spring", stiffness: 100 },
            }}
            className="flex gap-[12px] sm:gap-[20px] ml-[0px] lg:ml-[0px] w-[250%]"
          >
            {slider2.map((e, i) => {
              return (
                <div
                  key={i}
                  className="border border-[#1D2B4F]  border-color duration-500 hover:border-[#ffffff92] hover:border cursor-pointer transition rounded-[18px] min-w-[150px] w-[258px] h-[122px] md:h-[182px] flex items-center justify-center group"
                  style={{
                    background:
                      "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <div className="relative flex items-center justify-center group">
                    <span
                      role="img"
                      aria-label="client logo"
                      className="block w-[122px] h-[70px] bg-[#9EB3CF] group-hover:bg-white transition-colors duration-300"
                      style={{
                        WebkitMaskImage: `url(${e.src.src})`,
                        maskImage: `url(${e.src.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlide;
