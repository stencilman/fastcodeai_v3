import React from "react";
import Image from "next/image";

const TableOfContents = ({ topics = [], topicHighlight, onTopicClick }) => {
  if (!topics.length) return null;

  return (
    <div className="relative md:sticky md:top-[120px] h-[280px] sm:h-[300px] md:h-fit">
      <Image
        className="min-h-[250px] min-w-[267px] md:min-w-[36vw] lg:min-w-[366px] relative"
        src="/blogs/rec.svg"
        width="400"
        height="500"
        alt=""
      />
      <div className="absolute top-0">
        <h6 className="text-white text-lg font-aeonik px-[23px] pt-[23px]">
          TABLE OF CONTENTS
        </h6>
        <div className="mt-[15px] max-w-[400px] text-lg font-bwmss01 h-[46vw] sm:h-[210px] md:h-[19vw] lg:h-auto overflow-auto">
          {topics.map((topic) => (
            <a
              key={topic.id}
              onClick={() => onTopicClick(topic.id)}
            >
              <p
                className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                  topicHighlight === topic.id
                    ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                    : "text-[#9EB3CF]"
                }`}
              >
                {topic.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
