import React from "react";
import CeoDeskSlide from "../components/CeoDeskSlide";
import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon } from "../components/icons";

const CeoDesk = () => {
  return (
    <div className="w-full my-[80px]">
      <div className="w-full h-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl text-[#9EB3CF] font-bold  font-aeonik tracking-wide w-full px-[20px] text-center ">
          From the CEO&apos;s Desk
        </h1>
      </div>
      <CeoDeskSlide />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/arjunjain/"}
          className={`relative rounded-[4px] z-[1] flex items-center gap-[7px] px-[25px] py-[10px] text-lg justify-between main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] cursor-pointer text-white`}
        >
          <div className={``}>Connect With Dr.Arjun</div>
          <div className="flex items-center justify-center relative">
            <>
              <LinkedInIcon />
            </>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CeoDesk;
