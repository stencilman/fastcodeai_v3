import React from "react";
import Image from "next/image";
import mb from "../../../../../public/leader/mb/icon2.png";
import apple from "../../../../../public/leader/apple/icon2.png";
import iis from "../../../../../public/leader/iis/icon2.png";
import iit from "../../../../../public/leader/iit/icon2.png";
import max from "../../../../../public/leader/max/icon2.png";
import nyu from "../../../../../public/leader/nyu/icon2.png";
import quote from "../../../../../public/leader/quote.svg";
import arjun from "../../../../../public/arjun_jain/profile3.png";
import Button from "../../Button";

const Leader = () => {
  const logos = [
    {
      src: iit,
      alt: "IIT Bombay",
      text1: "Assistant Professor,",
      text2: "IIT Bombay (Prev)",
    },
    {
      src: iis,
      alt: "IISc Bangalore",
      text1: "Adjunct Faculty,",
      text2: "IISc Bangalore",
    },
    {
      src: nyu,
      alt: "NYU",
      text1: "Worked with",
      text2: "Yann LeCun on Post Doc",
    },
    {
      src: max,
      alt: "Max Planck",
      text1: "PhD, Computer",
      text2: "Science, Max Planck Institute, Germany.",
    },
    {
      src: mb,
      alt: "Mercedes-Benz",
      text1: "Sold the last",
      text2: "company to Mercedes - Benz",
    },
    {
      src: apple,
      alt: "Apple",
      text1: "Senior Scientist",
      text2: "at Apple",
    },
  ];

  return (
    <div className="w-full  text-white py-16 px-4 md:px-12 lg:px-20 font-aeonik">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-center mb-12 gap-6 lg:gap-12 xl:gap-32">
          <h2 className="text-4xl md:text-[50px] font-normal whitespace-nowrap  tracking-wide">
            The &quot;Visionary Leader&quot;
          </h2>
          <p className="text-[#9EB3CF] text-center lg:text-left text-lg font-light leading-relaxed">
            From the labs of NYU to the engineering floors of Apple, Dr. Arjun
            Jain has spent two decades defining the edge of computer vision.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Profile Image - Spans 4 columns - Order 1 */}
          <div className="lg:col-span-4 order-1 lg:order-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white/5 border border-white/10">
              <Image
                src={arjun}
                alt="Dr. Arjun Jain"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* CEO Desk Card - Spans 8 columns - Order 4 (last on mobile) */}
          <div className="lg:col-span-8 order-4 lg:order-2">
            <div className="h-full w-full rounded-3xl bg-[#0C1C46] border border-white/10 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
              {/* Background Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <Image src={quote} alt="quote" width={170} height={170} />
                </div>

                {/* Text Content */}
                <div
                  className="flex-1"
                  //   style={{
                  //     background:
                  //       "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                  //   }}
                >
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">
                    From the CEO&apos;s Desk
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
                    True innovation isn&apos;t just about publishing papers;
                    it&apos;s about making that math work in the messy,
                    unpredictable real world. At FastCodeAI, we bridge the gap
                    between deep research and deployment. We don&apos;t just
                    predict the future of intelligence—we engineer it, one
                    algorithm at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Name and Button - Order 2 */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start gap-4 order-2 lg:order-3">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-normal mb-1">Dr. Arjun Jain</h3>
              <p className="text-gray-400 text-lg font-light">
                CEO & Chief Scientist, Fastcode AI
              </p>
            </div>

            <Button
              to="https://www.linkedin.com/in/arjunjain/"
              name="Connect With Dr.Arjun"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>

          {/* Logos Grid - Order 3 */}
          <div className="lg:col-span-8 order-3 lg:order-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="h-28 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-28 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-300 leading-tight">
                    {logo.text1}
                    <br />
                    {logo.text2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
