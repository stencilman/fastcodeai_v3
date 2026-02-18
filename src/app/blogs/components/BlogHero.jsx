import React from "react";

const BlogHero = ({ title, background, variant = "overlay", subtitle }) => {
  if (variant === "simple") {
    return (
      <div
        className={`w-full h-[70vh] ${background} bg-cover bg-no-repeat flex justify-center items-center relative`}
      >
        <div className="flex flex-col gap-[40px]">
          <h1 className="text-3xl md:text-5xl px-[20px] md:px-[50px] lg:px-[100px] text-white text-center font-aeonik tracking-wide">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-[#9EB3CF] text-center font-bwmss01 px-[20vw]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === "alt-overlay") {
    return (
      <div
        className={`w-full h-[70vh] ${background} bg-cover bg-no-repeat flex justify-center items-center relative`}
      >
        <div className="w-full h-full bg-[#00081f74] top-0 left-0 absolute flex justify-center items-center">
          <div className="flex flex-col gap-[10px] md:gap-[40px]">
            <h1 className="text-3xl md:text-5xl px-[20px] md:px-[50px] lg:px-[100px] text-white text-center font-aeonik tracking-wide">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg text-[#abb9cd] text-center font-bwmss01 px-[20vw]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default: "overlay" variant (most common)
  return (
    <div className="w-full h-[70vh] flex justify-center items-center relative">
      <div
        className={`${background} bg-cover bg-no-repeat absolute w-full h-full`}
      />
      <div className="absolute inset-0 bg-[#2429338a]" />
      <div className="flex flex-col gap-[10px] md:gap-[40px] absolute">
        <h1 className="text-3xl md:text-5xl px-[20px] md:px-[50px] lg:px-[100px] text-white text-center font-aeonik tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-[#9EB3CF] text-center font-bwmss01 px-[20vw]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogHero;
