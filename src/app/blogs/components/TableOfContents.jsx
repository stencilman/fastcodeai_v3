import React from "react";

const TableOfContents = ({ topics = [], topicHighlight, onTopicClick }) => {
  if (!topics.length) return null;

  return (
    <div className="relative md:sticky md:top-[120px] h-fit">
      <div className="min-w-[267px] md:min-w-[36vw] lg:min-w-[366px] max-w-[400px] rounded-[20px] border border-[#1a3a6e] bg-[#0b1a3b] p-[23px]">
        <h6 className="text-white text-lg font-aeonik">TABLE OF CONTENTS</h6>
        <div className="mt-[15px] text-lg font-bwmss01">
          {topics.map((topic) => (
            <a key={topic.id} onClick={() => onTopicClick(topic.id)}>
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
