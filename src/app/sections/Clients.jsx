"use client";
import Image from "next/image";
import React from "react";
import Shadow from "../Shadow";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import aramco from "../../../../public/v2/our-clients/aramco.svg";
import bosch from "../../../../public/v2/our-clients/bosch.svg";
import dubaiExpo from "../../../../public/v2/our-clients/dubai-expo.svg";
import embitel from "../../../../public/v2/our-clients/embitel.svg";
import iis from "../../../../public/v2/our-clients/iis.svg";
import jetapult from "../../../../public/v2/our-clients/jetapult.svg";
import liftlab from "../../../../public/v2/our-clients/liftlab.svg";
import mercedes from "../../../../public/v2/our-clients/mercedes.svg";
import miai from "../../../../public/v2/our-clients/miai.svg";
import petrofac from "../../../../public/v2/our-clients/petrofac.svg";
import seikor from "../../../../public/v2/our-clients/seikor.svg";
import textiles from "../../../../public/v2/our-clients/textiles.svg";
import zen from "../../../../public/v2/our-clients/zen.svg";

// import mbux from "../../../../public//our-clients/mercedes.png";
// import Bosch from "../../../../public//our-clients/Bosch.png";
// import fitlab from "../../../../public//our-clients/fitlab.png";
// import meta from "../../../../public//our-clients/Meta.png";
// import textiles from "../../../../public//our-clients/textiles.png";

const Clients = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-80%", "50%"]);

  const x2 = useTransform(scrollYProgress, [0, 1], ["30%", "-80%"]);

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
    <>
      <div
        ref={container}
        className="w-full min-h-[90vh] min-lg:h-[100vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 relative flex flex-col items-center justify-center"
      >
        {/* shadow */}
        {/* <div className="absolute bottom-[0px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[-1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div> */}
        <Shadow />

        <div className="flex pt-[50px] sm:pt-0 flex-col lg:flex-row gap-[10vh] lg:gap-[10px]  w-full items-center z-[3]">
          <div className="relative z-[5] h-auto lg:h-full pl-[20px] md:pl-[50px] lg:pl-[100px] w-[100%] lg:w-[40%] ">
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik">
                Our Clients
              </h1>
              <p className="text-[#9EB3CF] pr-[20px] text-base md:text-lg font-light mt-[4vw] lg:mt-[30px] font-bwmss01">
              We proudly collaborate with an impressive array of clients, ranging from Forbes 500 companies to innovative startups across Silicon Valley and beyond, covering various industries from automotive to finance and healthcare.
              </p>
            </div>
          </div>
          {/* slidingImages */}
          <div className="w-[100%] lg:w-[60%] flex flex-col gap-[4vw] md:gap-[2vw] relative z-[1] overflow-x-hidden">
            <div className="absolute top-[-19px] lg:top-0 left-[-60px] md:left-[] lg:left-[-65px] w-[80px] h-[107%] lg:h-[100%]  bg-gradient-to-br from-[#000a2b] to-[#000b2c] opacity-83 z-20 blur-[10px]"></div>
            <div className="absolute lg:hidden top-[-19px] lg:top-0 right-[-60px] md:right-[] lg:right-[-65px] w-[80px] h-[107%] lg:h-[100%]  bg-gradient-to-br from-[#000a2b] to-[#000b2c] opacity-83 z-20 blur-[10px]"></div>
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
                    className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] min-w-[150px] w-[258px] h-[122px] md:h-[182px] flex items-center justify-center"
                  >
                    {/* <Image
                      src={e.src}
                      width="122"
                      height="70"
                      alt="mercedesLogo"
                    /> */}
                       <Image src={e.src} width="122" height="70" alt="clientLogo" />
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
                    className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] min-w-[150px] w-[258px] h-[122px] md:h-[182px] flex items-center justify-center"
                  >
                    {/* <Image
                      src={e.src}
                      width="122"
                      height="70"
                      alt="mercedesLogo"
                      placeholder="blur"
                    /> */}
                       <Image src={e.src} width="122" height="70" alt="clientLogo" />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[100vh]  bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 flex gap-[10px] items-center relative z-[-2]">
        <div className="pl-[100px] w-[40%] ">
          <h1 className="text-[51px] text-white">Out Clients</h1>
          <p className="text-[#9EB3CF] text-[19px] font-light ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        </div>
        <div className="w-[60%]">
          <div className="flex gap-[20px] ">
            <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
              <Image
                src="/mercedesLogo.png"
                width="122"
                height="70"
                alt="mercedesLogo"
              />
            </div>
            <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
              <Image
                src="/mercedesLogo.png"
                width="122"
                height="70"
                alt="mercedesLogo"
              />
            </div>
            <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
              <Image
                src="/mercedesLogo.png"
                width="122"
                height="70"
                alt="mercedesLogo"
              />
            </div>
            <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
              <Image
                src="/mercedesLogo.png"
                width="122"
                height="70"
                alt="mercedesLogo"
              />
            </div>
          </div>
          <div className="flex gap-[20px] mt-[20px] ml-[54px]">
            <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center ">
              <Image
                src="/mercedesLogo.png"
                width="122"
                height="70"
                alt="mercedesLogo"
              />
            </div>
            <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
              <Image
                src="/mercedesLogo.png"
                width="122"
                height="70"
                alt="mercedesLogo"
              />
            </div>
            <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
              <Image
                src="/mercedesLogo.png"
                width="122"
                height="70"
                alt="mercedesLogo"
              />
            </div>
            <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
              <Image
                src="/mercedesLogo.png"
                width="122"
                height="70"
                alt="mercedesLogo"
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Clients;
