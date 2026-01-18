import React from "react";
import Image from "next/image";
import Link from "next/link";
import mb from "../../../../../public/leader/mb/icon2.png";
import apple from "../../../../../public/leader/apple/icon2.png";
import iis from "../../../../../public/leader/iis/icon2.png";
import iit from "../../../../../public/leader/iit/icon2.png";
import max from "../../../../../public/leader/max/icon2.png";
import nyu from "../../../../../public/leader/nyu/icon2.png";
import arjun from "../../../../../public/arjun_jain.png";
import Button from "../../Button";

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

const Leader = () => {
  return (
    <section className="bg-[#00081F] py-16 md:py-24 text-white font-aeonik">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 ">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-wide">
            Led by Researchers,
            <br />
            Not Marketers
          </h2>
          <p className="text-[#9EB3CF] text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Our team is composed of published authors and domain experts who
            live on the bleeding edge of AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
          <div className="lg:col-span-4">
            <div className="relative w-[330px] h-[330px] overflow-hidden rounded-3xl bg-white/5 border border-white/10">
              <Image
                src={arjun}
                alt="Dr. Arjun Jain"
                fill
                className="object-cover "
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8 justify-between">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-white/30 py-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-normal font-aeonik tracking-wide">
                  Dr. Arjun Jain
                </h3>
                <p className="text-[#9EB3CF] text-base md:text-lg font-light font-bwmss01">
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

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {logos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="h-20 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-20 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-300 leading-tight">
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
    </section>
  );
};

export default Leader;
