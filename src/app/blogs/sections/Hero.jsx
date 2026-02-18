import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-[70vh] bg-blogHero bg-cover bg-no-repeat px-[20px] md:px-[50px] lg:px-[100px] flex items-center relative "
    >
        
      <div className="flex flex-col gap-[40px] ">
        <h1 className="text-[51px] text-white font-aeonik tracking-wide">
          Blogs
        </h1>
        <p className="text-lg text-[#9EB3CF] font-bwmss01 md:w-[60%]">
          Put artificial intelligence to work at scale in your enterprise with
          industry-leading AI expertise and a portfolio of solutions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
