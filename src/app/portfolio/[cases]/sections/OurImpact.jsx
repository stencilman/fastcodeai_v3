"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const OurImpact = ({ impactData }) => {
  const path = usePathname();
  const pathSql = path.includes("sqlwizard")
  console.log("path", path.includes("sqlwizard"));

  function formatSentence(sentence) {
    const colonIndex = sentence.indexOf(":");
    if (colonIndex !== -1) {
      const beforeColon = sentence.substring(0, colonIndex);
      const afterColon = sentence.substring(colonIndex + 1).trim();
      return { beforeColon, afterColon };
    }
    return { beforeColon: "", afterColon: sentence };
  }


  return (
    <div className="w-full h-auto pt-[100px] pb-[120px] md:pb-[190px] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 px-[20px] md:px-[50px] lg:px-[100px]  relative z-[2]">
      <div className="pb-[70px] px-[10px] md:px-[40px]">
        <h1 className="text-white text-6xl md:text-8xl font-aeonik tracking-wide mb-[8px]">
          Impact
        </h1>
      </div>
      <div className="flex w-full ">
        <div className="flex flex-col-reverse md:flex-row w-[100%] gap-[70px] md:gap-0 relative">
          <div className="flex flex-col gap-[50px]">
            {impactData?.map((e, i) => {
              const { beforeColon, afterColon } = formatSentence(e);
            return (
              <div key={i} className="flex gap-[5px]">
                <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                  {i < 9 ? "0" + (i + 1) : i + 1}.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01 mt-[10px]">
                   {beforeColon && <b className={`text-white font-bold`}>{beforeColon}:</b>} {afterColon}
                </p>
              </div>
            )})}
            {/* {pathSql && (
              <p className="text-[#9EB3CF] text-lg font-bwmss01 mt-[10px] ">
                Live Demo Experience our secure Text-to-SQL interface first hand
                at:{" "}
                <a
                  href="https://fastcode.ai/sqlwizard.html"
                  target="_blank"
                  className="text-blue-600"
                >
                  FastCode SQL Wizard
                </a>
              </p>
            )} */}
          </div>
          {/* img */}
          {/* <div className="relative right-[0px] ">
            <Image
              className="opacity-60 mix-blend-screen"
              src="/potfolio/impact/img1-2.png"
              width="752"
              height="563"
              alt=""
            />
            <div className="flex flex-col md:flex-row gap-[30px] justify-center items-center md:items-start md:justify-end pr-[20px]">
              <div
                className="px-[20px] py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
                style={{
                  background:
                    "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <div
                  className="rounded-[14px] border-[#1A2758] p-[6px]"
                  style={{
                    background:
                      "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <b className="text-white font-aeonik text-5xl">100%</b>
                </div>
                <p className="text-center text-white text-2xl font-bwmss01">
                  Success Rate
                </p>
              </div>
              <div
                className="px-[20px] py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
                style={{
                  background:
                    "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <div
                  className="rounded-[14px] border-[#1A2758] p-[6px]"
                  style={{
                    background:
                      "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <b className="text-white font-aeonik text-5xl">10+</b>
                </div>
                <p className="text-center text-white text-2xl font-bwmss01">
                  Years of Experience
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
