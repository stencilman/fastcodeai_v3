"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import ml from "../../../../public/experties/ml.webp";
import rl from "../../../../public/experties/rl.webp";
import ds from "../../../../public/experties/ds.webp";
import cv from "../../../../public/experties/cv.webp";
import icon1 from "../../../../public/experties/icon1.svg";
import icon2 from "../../../../public/experties/icon2.svg";
import icon3 from "../../../../public/experties/icon3.svg";
import icon4 from "../../../../public/experties/icon4.svg";
import RevealY from "../RevealY";
import RevealX from "../RevealX";

const Experties = () => {
  const [activeMain, setActiveMain] = useState(null);
  const navRef = useRef(null);
  const mainRefs = {
    "Reinforcement Learning": useRef(null),
    "Computer Vision": useRef(null),
    "Machine Learning": useRef(null),
    "Data Science": useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMain(entry.target.dataset.main);
        }
      });
    }, observerOptions);

    Object.values(mainRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSetActiveMain = (main) => {
    setActiveMain(main);
    mainRefs[main].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#00081F] w-full h-[100%]  relative pb-[120px] lg:pb-[250px]">
      <div className="absolute bottom-[-102px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div>
      <div className="grid grid-cols-12 gap-[0px] gap-y-[10vw] pl-[20px] mg:pl-[50px] lg:pl-[170px] pr-[20px] md:pr-[50px] lg:pr-[127px] w-full h-[100%]  justify-center pt-[100px] lg:pt-[250px]">
        {/* NAV */}

        <div
          className="bg-[#00081f] col-span-12 lg:col-span-3 flex flex-row lg:flex-col justify-center lg:justify-start md:gap-[25px] gap-[15px] sticky z-[3] py-[10vw] md:py-[5vw] lg:py-0 top-[16vw] md:top-[10vw] lg:top-[10vw] h-fit"
          ref={navRef}
        >
          {/* Computer Vision */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-[55px] h-[55px] md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center relative ${
              activeMain === "Computer Vision"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            // onClick={() => handleSetActiveMain("Computer Vision")}
          >
            <span className="block relative z-10">
              <Image
                src={icon2}
                className="w-[30px] md:w-[44px]"
                width="44"
                height="44"
                alt=""
              />
            </span>
            <AnimatePresence>
              {activeMain === "Computer Vision" && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] z-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Machine Learning */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-[55px] h-[55px] md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center relative ${
              activeMain === "Machine Learning"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            // onClick={() => handleSetActiveMain("Machine Learning")}
          >
            <span className="block relative z-10">
              <Image
                src={icon3}
                className="w-[30px] md:w-[44px]"
                width="44"
                height="44"
                alt=""
              />
            </span>
            <AnimatePresence>
              {activeMain === "Machine Learning" && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] z-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Reinforcement Learning */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={` w-[55px] h-[55px] md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center relative ${
              activeMain === "Reinforcement Learning"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            // onClick={() => handleSetActiveMain("Reinforcement Learning")}
          >
            <span className="block relative z-10">
              <Image
                src={icon1}
                className="w-[30px] md:w-[44px]"
                width="44"
                height="44"
                alt=""
              />
            </span>
            <AnimatePresence>
              {activeMain === "Reinforcement Learning" && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] z-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Data Science */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-[55px] h-[55px] md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center relative ${
              activeMain === "Data Science"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            // onClick={() => handleSetActiveMain("Data Science")}
          >
            <span className="block relative z-10">
              <Image
                src={icon4}
                className="w-[30px] md:w-[44px]"
                width="44"
                height="44"
                alt=""
              />
            </span>
            <AnimatePresence>
              {activeMain === "Data Science" && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] z-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Main */}
        <div className="col-span-12 lg:col-span-9 w-full flex flex-col gap-[0vw] relative  h-[100%]">
          {/* Computer Vision */}
          <div
            className="main-content mb-[10vw]"
            ref={mainRefs["Computer Vision"]}
            data-main="Computer Vision"
          >
            <div className="flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[5%] items-center lg:items-start">
              <div className="w-[100%] lg:w-[45%] text-center lg:text-left">
                <RevealY>
                  <h1 className="text-[8vw] md:text-[7vw] lg:text-[42px] tracking-normal text-white font-aeonik ">
                    Computer Vision
                  </h1>
                  <p className="text-[#9EB3CF] text-base md:text-lg  font-light pt-[15px] md:pt-[25px] lg:pt-[15px] font-bwmss01">
                    We craft bespoke software that harnesses computer vision and
                    deep learning to process images, videos, LiDAR, and live
                    streams, enabling businesses to identify and monitor objects
                    for improved decision-making.
                  </p>
                </RevealY>
              </div>
              <div>
                <RevealX>
                  <Image
                    src={cv}
                    placeholder="blur"
                    width="470"
                    height="244"
                    alt="Computer Vision"
                    className="rounded-[18px]"
                  />
                </RevealX>
              </div>
            </div>
          </div>

          {/* Machine Learning */}
          <div
            className="main-content mb-[10vw]"
            ref={mainRefs["Machine Learning"]}
            data-main="Machine Learning"
          >
            <div className="flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[5%] items-center lg:items-start">
              <div className="w-[100%] lg:w-[45%] text-center lg:text-left">
                <RevealY>
                  <h1 className="text-[8vw] md:text-[7vw] lg:text-[42px] tracking-normal text-white font-aeonik">
                    Machine Learning
                  </h1>
                  <p className="text-[#9EB3CF] text-base md:text-lg font-light pt-[15px] md:pt-[25px] lg:pt-[15px] font-bwmss01">
                    We swiftly design and deploy innovative ML solutions, from
                    infrastructure to consumer products. Our expert engineers
                    partner with you to accelerate innovation and technological
                    progress.
                  </p>
                </RevealY>
              </div>
              <div>
                <RevealX>
                  <Image
                    placeholder="blur"
                    src={ml}
                    width="470"
                    height="244"
                    alt="Machine Learning"
                    className="rounded-[18px]"
                  />
                </RevealX>
              </div>
            </div>
          </div>
          {/* Reinforcement Learning */}
          <div
            className="main-content mb-[10vw]"
            ref={mainRefs["Reinforcement Learning"]}
            data-main="Reinforcement Learning"
          >
            <div className="flex flex-col-reverse lg:flex-row gap-[30px] md:gap-[50px] lg:gap-[5%] items-center lg:items-start">
              <div className="w-[100%] lg:w-[45%] text-center lg:text-left ">
                <RevealY>
                  <h1 className="text-[8vw] md:text-[7vw] lg:text-[42px] tracking-normal text-white font-aeonik">
                    Reinforcement Learning
                  </h1>
                  <p className="text-[#9EB3CF] text-base md:text-lg font-light pt-[15px] md:pt-[25px] lg:pt-[15px] font-bwmss01 ">
                    Our team specializes in developing cutting-edge
                    reinforcement learning systems that adapt and optimize in
                    dynamic environments. We collaborate closely with clients to
                    create solutions that continuously improve and achieve
                    strategic goals.
                  </p>
                </RevealY>
              </div>
              <div>
                <RevealX>
                  <Image
                    className="rounded-[18px]"
                    placeholder="blur"
                    src={rl}
                    width="470"
                    height="244"
                    alt="Reinforcement Learning"
                  />
                </RevealX>
              </div>
            </div>
          </div>
          {/* Data Science */}
          <div
            className="main-content mb-[10vw]"
            ref={mainRefs["Data Science"]}
            data-main="Data Science"
          >
            <div className="flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[5%] items-center lg:items-start">
              <div className="w-[100%] lg:w-[45%] text-center lg:text-left">
                <RevealY>
                  <h1 className="text-[8vw] md:text-[7vw] lg:text-[42px] tracking-normal text-white font-aeonik">
                    Data Science
                  </h1>
                  <p className="text-[#9EB3CF] text-base md:text-lg font-light pt-[15px] md:pt-[25px] lg:pt-[15px] font-bwmss01">
                    Our expert data scientists tackle complex data challenges
                    across any volume or structure, empowering your business to
                    enhance efficiency and boost profitability quickly.
                  </p>
                </RevealY>
              </div>
              <div>
                <RevealX>
                  <Image
                    placeholder="blur"
                    src={ds}
                    width="470"
                    height="244"
                    alt="Data Science"
                    className="rounded-[18px]"
                  />
                </RevealX>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
