"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
    <div className="w-full h-[100vh] relative bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/vdo4.mp4"
        />
        <div className="absolute inset-0 bg-black opacity-[0.65]"></div>
      </div>
      <div className="w-full bottom-[20rem] md:bottom-[11rem] lg:bottom-28 absolute z-[1] pl-[20px] md:pl-[50px] lg:pl-[100px]">
        <h1
          ref={ref}
          className={`text-[#F3F3F3] tracking-wide text-[8vw] md:text-[7vw] leading-[9vw] lg:leading-[1] lg:text-8xl pb-[20px] font-aeonik font-normal ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          } transition-transform duration-1000 ease-out`}
        > {"Let's"} Create <br />{" "}
          Something Great Together
        </h1>
        <p
          ref={ref}
          className={`text-[#9EB3CF] text-[0.8rem] leading-[1.2rem]  md:leading-[1.75rem] md:text-lg items-center font-bwmss01 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }  transition-transform delay-100 duration-1000 ease-out`}
        >
          Contact us and lets bring your vision to life
        </p>
      </div>
    </div>
  );
};

export default Hero;
