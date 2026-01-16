import React from "react";
import icon1 from "../../../../../public/what-we-do/platform-development/icon1.svg";
import icon2 from "../../../../../public/what-we-do/platform-development/icon2.svg";
import icon3 from "../../../../../public/what-we-do/platform-development/icon3.svg";
import icon4 from "../../../../../public/what-we-do/platform-development/icon4.svg";
import Image from "next/image";

const Wwd = () => {
  const capabilities = [
    {
      icon: icon1,
      title: "Find What Matters Fast",
      description:
        "Stop searching through haystacks. Our retrieval engine finds the exact documents, patterns, and edge cases you need—across billions of records, in minutes.",
      example:
        '"Show me all contracts with liability clauses over $100M"—done.',
    },
    {
      icon: icon2,
      title: "Label Data Without the Bottleneck",
      description:
        "Manual labeling doesn't scale. Our automated pipelines generate high-quality training data across text, images, tables, and time-series—cutting your annotation costs by up to 90%.",
      example: "Millions of labels. A fraction of the time and cost.",
    },
    {
      icon: icon3,
      title: "Make Decisions Grounded in Policy",
      description:
        "Your AI shouldn't just detect—it should understand what to do next. We connect your data to business rules, policies, and context so recommendations are actionable and compliant.",
      example:
        'From "this looks like fraud" to "here\'s the recommended action and why."',
    },
    {
      icon: icon4,
      title: "Catch Problems Before They Ship",
      description:
        "Continuous quality monitoring with automated checks, drift detection, and smart review queues. Your team only sees the cases that need human judgment.",
      example: "Less firefighting. More confidence.",
    },
  ];

  return (
    <section className="bg-[#00081F] py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white font-aeonik tracking-wide mb-6">
            What We Do
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto font-bwmss01">
            We built a platform that handles the heavy lifting of data
            intelligence— so your team can focus on building AI that works.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className=" rounded-xl p-8 border border-white/10"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={capability.icon}
                  alt={capability.title}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-normal text-white font-aeonik tracking-wide mb-4">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-[#9EB3CF] text-base font-bwmss01 mb-4 ">
                {capability.description}
              </p>

              {/* Example/Benefit */}
              <p className="text-white text-sm font-bwmss01 italic">
                {capability.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wwd;
