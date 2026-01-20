import Link from "next/link";
import React from "react";

const KeyFeatures = ({ keyFeaturesData }) => {
  console.log("  keyFeaturesData ", keyFeaturesData);

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
    keyFeaturesData.length > 0 && (
      <div className="w-full h-auto bg-[#00081F] pt-0 pb-[50px]  px-[20px] md:px-[50px] lg:px-[100px]">
        <div className="flex flex-col gap-[25px] md:gap-[40px] md:px-[40px] mb-[40px]">
          {(keyFeaturesData[0]?.description.length > 0 ||
            keyFeaturesData[0]?.points) && (
            <h1 className="text-white text-6xl md:text-8xl font-aeonik tracking-wide mb-[4px]">
              Key Features
            </h1>
          )}

          {keyFeaturesData[0]?.description?.map((e, i) => (
            <p className="text-[#9EB3CF] text-lg font-bwmss01 " key={i}>
              {e}
            </p>
          ))}
        </div>
        {keyFeaturesData[0]?.points && (
          <div className="w-full py-[60px] h-auto flex flex-col md:flex-row  flex-wrap items-center gap-[70px] px-[40px] mt-[20px] md:my-[20px]">
            {keyFeaturesData[0]?.points?.map((e, i) => {
              const { beforeColon, afterColon } = formatSentence(e);
              console.log("beforeColon", beforeColon);
              return (
                <div key={i} className="w-full md:w-[40%]">
                  <h3 className="text-white text-5xl font-aeonik tracking-wide">
                    {i < 9 ? "0" + (i + 1) : i + 1}
                  </h3>
                  <p
                    className={`text-[#9EB3CF] text-lg font-bwmss01 pt-[22px] `}
                  >
                    {beforeColon && (
                      <b className={`text-white font-bold`}>{beforeColon}:</b>
                    )}{" "}
                    {afterColon}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <div className="flex flex-col gap-[40px] md:px-[40px]">
          {keyFeaturesData[0]?.references && (
            <h1 className="text-white text-6xl md:text-8xl font-aeonik tracking-wide mb-[4px]">
              References
            </h1>
          )}
          <div className="pr-[10%] md:pr-[25%] flex flex-col gap-[20px]">
            {keyFeaturesData[0]?.references?.map((e, i) => (
              <p
                key={i}
                className=" transition-all duration-300 ease-in-out text-[#9EB3CF] text-lg font-bwmss01 "
              >
                <Link key={i} href={e?.link} className="">
                  {" "}
                  {e?.description}{" "}
                </Link>
                <i>
                  <Link
                    className="italic underline hover:text-blue-600"
                    href={e?.link}
                  >
                    {e?.viewSource}
                  </Link>
                </i>
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default KeyFeatures;
