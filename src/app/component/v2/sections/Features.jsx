import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Data Intelligence Platform",
    description: "Deploy & manage AI systems in weeks, not years.",
    link: "/case-studies/data-intelligence-platform",
    hasArrow: true,
  },
  {
    title: "Research & Deployment",
    description:
      "Frontier research on systems optimization, self-construction, and integration.",
  },
  {
    title: "Seamless Integration",
    description:
      "Connects directly to your workflows, data, and enterprise systems.",
  },
  {
    title: "Outcome-Driven Partnership",
    description:
      "Forward deploying the best researchers against your unique problems.",
  },
];

const Features = () => {
  return (
    <main className="bg-[#00081F] min-h-screen w-full flex flex-col items-center justify-center text-[#9EB3CF] p-4 sm:p-8">
      <div className="text-center max-w-7xl mx-auto py-16">
        <p className="text-lg font-normal mb-6 text-[#9EB3CF]">
          Most AI initiatives stall in endless pilots.
        </p>
        {/* <h1 className="text-2xl md:text-3xl font-light max-w-4xl mx-auto mb-16 text-[#9EB3CF] leading-normal">
          Fast Code delivers AI that works—integrating seamlessly into
          enterprise operations to drive{" "}
          <span className="text-white font-normal">$100M+ impact.</span>
        </h1> */}
        <h1 className="text-xl mx-auto mb-16 font-normal text-[#fff] leading-normal tracking-wide">
          Fast Code delivers AI that works—integrating seamlessly into
          enterprise operations to drive $100M+ impact.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              hasArrow={feature.hasArrow}
            />
          ))}
        </div>

        <p className="text-lg md:text-xl mt-16 text-white">
          We {"don't"} prototype—we deploy real, scalable solutions.
        </p>
      </div>
    </main>
  );
};

export default Features;

const FeatureCard = ({ title, description, link, hasArrow }) => {
  return (
    <div className="bg-[#000E29] rounded-2xl h-full flex flex-col text-left border border-[#1D2B4F]  border-color duration-500 hover:border-[#ffffff92] hover:border transition group py-[50px] px-[30px]">
      {link ? (
        <a href={link} className="mb-4 inline-block">
          <h2 className="text-[28px] text-[#9EB3CF] group-hover:text-white font-semibold font-aeonik tracking-wide inline">
            {title}
            {hasArrow && (
              // <Image
              //   src="/cta_arrow.svg"
              //   alt="arrow"
              //   width={20}
              //   height={20}
              //   className="inline-block ml-2 opacity-70 group-hover:opacity-100 transition-opacity align-middle"
              // />
              <div className="inline-block ml-2 align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="transition-all duration-300"
                >
                  <path
                    d="M3.19336 0.25H19.0645C19.4428 0.25 19.75 0.557113 19.75 0.935547V16.8066C19.75 17.185 19.4428 17.4922 19.0645 17.4922H17.1943C16.8158 17.4922 16.5088 17.185 16.5088 16.8066V5.7832L16.082 6.20996L2.74219 19.5488C2.47459 19.8165 2.04103 19.8165 1.77344 19.5488L0.451172 18.2266C0.183549 17.9589 0.183548 17.5255 0.451172 17.2578L13.79 3.91797L14.2168 3.49121H3.19336C2.81492 3.49121 2.50781 3.18411 2.50781 2.80566V0.935547C2.50781 0.557101 2.81492 0.25 3.19336 0.25Z"
                    fill="#9EB3CF"
                    stroke="#000E29"
                    strokeWidth="0.5"
                    className="group-hover:fill-white "
                  />
                </svg>
              </div>
            )}
          </h2>
        </a>
      ) : (
        <h2 className="text-[28px] text-[#9EB3CF] group-hover:text-white font-semibold font-aeonik tracking-wide mb-4">
          {title}
        </h2>
      )}
      <p className="text-[#9EB3CF] text-lg leading-relaxed">{description}</p>
    </div>
  );
};
