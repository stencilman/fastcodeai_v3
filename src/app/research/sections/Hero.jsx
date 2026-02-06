"use client";
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
      {/* <Navbar /> */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/industries.mp4"
        />
        <div className="absolute inset-0 bg-black opacity-[0.6]"></div>
      </div>
      <div className="w-full bottom-[25%] flex flex-col items-center justify-center lg:bottom-[150px] absolute z-[1] text-center">
        <h1
          ref={ref}
          className={`text-[#F3F3F3] text-[8.5vw] md:text-[7vw] leading-[9vw] lg:leading-[1] lg:text-8xl pb-[20px] font-aeonik font-normal ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          } transition-transform duration-1000 ease-out tracking-wide`}
        >
          Innovative Patents
        </h1>
        <p
          ref={ref}
          className={`text-[#9EB3CF] text-[1rem] leading-[1.2rem] w-[90%] md:w-[70%] lg:w-[50%] px-[25px] md:px-[0px] md:leading-[1.75rem] md:text-lg items-center font-bwmss01 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }  transition-transform delay-100 duration-1000 ease-out `}
        >
         Explore our ground-breaking patents that highlight our leadership in advancing technology and innovation.
        </p>
      </div>
    </div>
  );
};

export default Hero;
