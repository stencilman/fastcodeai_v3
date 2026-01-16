"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Numbers = () => {
  useEffect(() => {
    const circles = gsap.utils.toArray(".circle");

    circles.forEach((circle, index) => {
      gsap.fromTo(
        circle,
        { scale: 0 }, // Start with scale 1
        {
          scale: 1, // Scale down to 0
          scrollTrigger: {
            trigger: circle,
            start: "top 100%", // Start animation when the circle is 80% in the viewport
            end: "top 10%", // End animation when the circle is 20% in the viewport
            toggleActions: "restart reverse restart reverse", // Animation behavior on entering/exiting
            scrub: 1, // Sync animation with scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-[100vh] bg-[#00081F] relative top-0 left-0">
      <div className="circles absolute inset-0 flex items-center justify-center w-[100vw] max-w-[484vh]">
        <div className="circle circle-1 absolute border border-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-[1] opacity-[0.3] w-[45%]"></div>
        <div className="circle circle-2 absolute border border-dashed border-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-[1] w-[35%]"></div>
        <div className="circle circle-3 absolute border border-solid border-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-[1] opacity-[0.3] w-[25%]"></div>
        <div className="circle circle-4 absolute border border-solid border-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-[1] opacity-[0.3] w-[20%]"></div>
      </div>
    </div>
  );
};

export default Numbers;
