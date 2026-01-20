import React from "react";

const BusinessChallenges = ({ businessChallengeList }) => {
  
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
    <div className="relative w-full py-[100px] h-auto bg-gradient-to-r from-[#000E32] to-[#000929] px-[20px] md:px-[50px] lg:px-[100px] z-[2]">
      <div className="flex flex-col lg:flex-row w-full items-center gap-[80px] lg:gap-[150px]">
        <div className="">
          <h1 className="text-white text-[8vw] md:text-6xl lg:text-7xl font-aeonik tracking-wide ">
            Business <br className="hidden lg:block " />
            Challenges
          </h1>
        </div>
        <div className="flex flex-col gap-[20px]">
          {businessChallengeList?.map((e, i) => {
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
        </div>
      </div>
    </div>
  );
};

export default BusinessChallenges;
