"use client";
import React from "react";
import Script from "next/script";
import { useInView } from "react-intersection-observer";

const CeoDeskSlide = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px", // Load slightly before view
  });

  return (
    <div ref={ref} className="w-full min-h-[400px]">
      {/* Elfsight LinkedIn Feed | AJ */}
      {inView && (
        <>
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
          />
          <div
            className="elfsight-app-59dac44d-bcd1-4235-94f8-372ba5392844"
            data-elfsight-app-lazy="true"
          ></div>
        </>
      )}
    </div>
  );
};

export default CeoDeskSlide;
