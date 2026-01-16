"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import gesrec from "../../../../public/our-work/gesrec.png";
import vrups from "../../../../public/our-work/vrups.jpg";
import fashion from "../../../../public/our-work/fashion.png";
import bankInsMo from "../../../../public/our-work/bankInsMo.png";
import sqlwizard from "../../../../public/our-work/sqlwizard-logo1.png";
import dermos from "../../../../public/our-work/dermos.jpeg";
import bnk from "../../../../public/our-work/bnk.png";
import rag from "../../../../public/our-work/rag_weave.jpg";
import fedLearning from "../../../../public/potfolio/fedLearning/img1-2.png";
import fitness from "../../../../public/potfolio/fitness/img1-2.png";
import { motion, useMotionValue } from "framer-motion";
import gsap from "gsap";
import RoundedHover from "../RoundedHover";

const slides = [
  {
    title: "Gesture Recognition based User Experience",
    content:
      "Enhance interaction between driver and car by detecting driver hand gesture for superior level driver experience with Automotive OEM.",
    image: gesrec,
    url: "/portfolio/auto-oem",
  },
  {
    title: "Federated Learning on the Edge",
    content:
      "Accurate, low footprint detection with vulnerable roadside users (VRUs) and road signs covered in the Automotive Tier 1 autonomous driving initiative.",
    image: fedLearning,
    url: "/portfolio/federated-learning",
  },
  {
    title: "Vulnerable Roadside User Protection System",
    content:
      "Accurate, low footprint detection with vulnerable roadside users (VRUs) and road signs covered in the Automotive Tier 1 autonomous driving initiative.",
    image: vrups,
    url: "/portfolio/vrups",
  },
  {
    title: "Fitness Pose Estimation",
    content:
      "Empowering exercise perfection with AI-driven real-time pose estimation, delivering interactive visual feedback to ensure correct posture and optimize exercise routines.",
    image: fitness,
    url: "/portfolio/fitness-pose-estimation",
  },
  {
    title: "RAG based Personal Diary",
    content:
      "Smart, diary-like system that effortlessly organizes and retrieves your daily activities and information with cutting-edge Retrieval-Augmented Generation techniques.",
    image: rag,
    url: "/portfolio/rag",
  },
  {
    title: "Indian Fashion insight Framework ",
    content:
      "Pioneering deep learning in fashion with a custom Indian dataset for advanced trend forecasting and targeted consumer insights",
    image: fashion,
    url: "/portfolio/fashion-framework",
  },

  {
    title: "AI Banking Infrastructure Monitoring",
    content:
      "Enhancing banking with AI: Advanced data analytics for customer insights and predictive modeling, streamlined with efficient application monitoring.",
    image: bankInsMo,
    url: "/portfolio/banking-infra",
  },
  {
    title: "Secure Text-to-SQL Interface",
    content:
      "Transforming data access with a natural language interface that converts queries into SQL, simplifying database interaction",
    image: sqlwizard,
    url: "/portfolio/sqlwizard",
  },
  // {
  //   title: "Loneliness Assistant",
  //   content:
  //     "Personalised assistant designed to empathize with humans and serves as a close companion by engaging in emotionally profound interactions",
  //   image: "/our-work/lonely_llm.webp",
  //   url: "/portfolio/loneliness-assistant",
  // },
  {
    title: "AI-Assisted Skin Cancer Detection",
    content:
      "Enhancing skin cancer by diagnosing user’s skin images on their mobile phones, improving dermatological care's accuracy, accessibility, and efficiency.",
    image: dermos,
    url: "/portfolio/skin-cancer-detection",
  },
  // {
  //   title: " AutoMTO: Revolutionizing Material Takeoff in Oil & Gas EPCC",
  //   content:
  //     "Deploying AI to swiftly convert Process and Instrumentation Diagrams (P&IDs) in the Oil & Gas EPCC sector into accurate, digital Material Takeoff Orders, significantly boosting productivity and reducing costs.",
  //   image: "",
  //   url: "/portfolio/auto-mto",
  // },
  {
    title: " AI Banking Insights",
    content:
      "Transforming banking datasets into actionable insights enhances customer segmentation, predictive forecasting, and strategic decision-making in the fintech industry.",
    image: bnk,
    url: "/portfolio/banking-insights",
  },
  // Add more slides here as needed
];

const OurWork = ({ showShadow }) => {
  const DRAG_BUFFER = 10;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue();

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const onDragStart = () => {
    setDragging(true);
    // console.log("start",dragX.get())
  };

  const onDragEnd = () => {
    setDragging(false);
    // console.log("end",dragX.get())
    const x = dragX.get();

    if (x <= -DRAG_BUFFER) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    } else if (x >= DRAG_BUFFER) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
    }
  };

  return (
    <div className="w-full min-h-[120vh] md:min-h-[100vh] pl-[20px] md:pl-[80px] lg:pl-[108px] relative bg-[#00081F] flex flex-col justify-center py-[100px]">
      {showShadow && (
        <>
          <div className="absolute top-[-160px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div>
          <div className="absolute top-[88px] right-[10px]  w-[169px] h-[421px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
        </>
      )}
      {/* Titile with buttons */}
      <div className="flex justify-between items-center pr-[10px] md:pr-[60px] lg:pr-[127px]">
        <h1 className="text-[8vw] md:text-[7vw] lg:text-5xl text-white font-aeonik tracking-wide">
          Check Out Our Work
        </h1>
        {/* Buttons */}
        <div className="flex gap-[10px] md:gap-[15px]">
          {/* Left Button */}
          <div
            className="w-[8vw] h-[8vw] md:w-[49px] md:h-[49px] border border-white rounded-[4px] flex justify-center items-center cursor-pointer duration-500  hover:border relative fill-[#fff] hover:fill-black"
            style={{ overflow: "hidden" }}
            onClick={prevSlide}
          >
            <RoundedHover>
              <svg
                className="w-[20px] md:w-[30px] transform scale-x-[-1] relative z-10 "
                viewBox="0 0 46 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </RoundedHover>
          </div>

          {/* Right Button */}
          <div
            className="w-[8vw] h-[8vw] md:w-[49px] md:h-[49px] border border-white rounded-[4px] flex justify-center items-center cursor-pointer duration-500  hover:border relative fill-[#fff] hover:fill-black"
            style={{ overflow: "hidden" }}
            onClick={nextSlide}
          >
            <RoundedHover>
              <svg
                className="w-[20px] md:w-[30px]  relative z-10 "
                viewBox="0 0 46 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </RoundedHover>
          </div>
        </div>
      </div>
      {/* Carousel  */}
      <div className="w-full relative z-[1] flex overflow-x-hidden mt-[67px]">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          style={{
            x: dragX,
          }}
          animate={
            {
              // translateX : "-9%"
            }
          }
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
          className="flex  gap-[10vw] lg:gap-[8vw] cursor-grab active:cursor-grabbing"
        >
          {slides.map((slide, index) => (
            <motion.div
              transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
              }}
              key={index}
              className=" h-auto lg:h-[auto] w-[90vw] lg:w-[77vw] relative rounded-[18px] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 py-[42px] px-[37px] flex flex-col-reverse lg:flex-row gap-[6vw] md:gap-[5vw] lg:gap-[0px] justify-between items-center transition-transform duration-500 ease-in-out"
              // style={{ transform: `translateX(-${currentSlide  * 100}%)` }}
              style={{
                transform: `translateX(-${
                  currentSlide * 5 + index * 5 + currentSlide * 100
                }%)`,
              }}
            >
              <div className="pl-0 lg:pl-[10px] w-[100%] lg:w-[50%]">
                <h3 className="text-[7.5vw] leading-[8vw] lg:text-[42px] tracking-normal text-white lg:leading-[47px] font-aeonik">
                  {slide.title}
                </h3>
                <p className="text-[#9EB3CF] text-[19px] pt-[4vw] lg:pt-[22px] leading-[29px] font-bwmss01">
                  {slide.content}
                </p>
                <button
                  className="rounded-[4px] mt-[6vw] lg:mt-[50px]  flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white  text-lg font-bwmss01 relative hover:text-[#00092A] duration-500 transition-all ease-linear"
                  style={{ overflow: "hidden" }}
                >
                  <RoundedHover>
                    <Link
                      className="px-[25px] py-[10px] relative z-10"
                      href={slide.url}
                    >
                      Read More
                    </Link>
                  </RoundedHover>
                </button>
              </div>
              <div className="w-[100%] lg:w-[40%]">
                <Image
                  className="w-[100%] h-[293px] rounded-[25px] object-cover select-none"
                  src={slide.image}
                  draggable="false"
                  placeholder="blur"
                  width="368"
                  height="360"
                  alt=""
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurWork;
