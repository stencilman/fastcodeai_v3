"use client";
import React from "react";
import Script from "next/script";

const CeoDeskSlide = () => {
  return (
    <div className="w-full">
      {/* Elfsight LinkedIn Feed | AJ */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <div
        className="elfsight-app-59dac44d-bcd1-4235-94f8-372ba5392844"
        data-elfsight-app-lazy="true"
      ></div>
    </div>
  );
};

export default CeoDeskSlide;
