import Image from "next/image";
import React from "react";
import Link from "next/link";

const Cta = ({title,quote}) => {
  return (
    <div className="w-full min-h-[40vh] pt-[50px] md:pb-[200px] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px] relative bg-[#00081F]  ">
      <Link className="flex flex-col justify-center gap-[4vw]" href="/contact">
      <h1 className="text-[8vw] leading-[8.5vw] md:text-[7vw] md:leading-[7.5vw] lg:text-5xl tracking-normal text-white font-aeonik">
        {title}
      </h1>
      <div
        className="w-[100%] md:w-[100%] rounded-[28px] h-[auto] md:h-[80px] lg:h-[100px] flex items-center justify-between px-[20px] py-[10px] mt-[20px]"
        style={{
          background:
            "transparent linear-gradient(127deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <div>
          <p className="text-white font-bwmss01 font-bold text-2xl leading-[25px] md:w-[80%] lg:w-[100%] md:text-2xl ">
            {quote}
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-white font-bwmss01 text-[19px]">Say Hi</p>
          <Image
            className="transform scale-x-[-1.5] "
            src="/arrowRight.svg"
            width="45"
            height="45"
            alt=""
            style={{
              transform: "matrix(0.71, -0.71, 0.71, 0.71, 0, 0)",
            }}
          />
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Cta;
