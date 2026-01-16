"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import pythonLogo from "../../../../../public/echosystem/python-logo.svg";
import cudaLogo from "../../../../../public/echosystem/cuda-logo.svg";
import typeScriptLogo from "../../../../../public/echosystem/typescript-logo.svg";
import flutterLogo from "../../../../../public/echosystem/google-flutter-logo.svg";
import numpyLogo from "../../../../../public/echosystem/numpy-logo.svg";
import mysqlLogo from "../../../../../public/echosystem/mysql-logo.svg";
import cLogo from "../../../../../public/echosystem/c-logo.svg";
import swiftLogo from "../../../../../public/echosystem/swift_logo.svg";
import rightShadow from "../../../../../public/what-we-do/platform-development/right-shadow.svg";
import leftShadow from "../../../../../public/what-we-do/platform-development/left-shadow.svg";

const Echosystem = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-80%", "50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["30%", "-80%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-60%", "40%"]);

  const technologies = [
    { src: pythonLogo, alt: "Python" },
    { src: cudaLogo, alt: "CUDA" },
    { src: typeScriptLogo, alt: "TypeScript" },
    { src: flutterLogo, alt: "Flutter" },
    { src: numpyLogo, alt: "NumPy" },
    { src: mysqlLogo, alt: "MySQL" },
    { src: cLogo, alt: "C++" },
    { src: swiftLogo, alt: "Swift" },
  ];

  // Repeat technologies for infinite scroll effect
  const row1 = [...technologies, ...technologies, ...technologies];
  const row2 = [...technologies, ...technologies, ...technologies];
  const row3 = [...technologies, ...technologies, ...technologies];

  return (
    <section
      ref={container}
      className="relative w-full bg-[#00081F] py-20 px-4 md:px-8 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Side - Technology Logos with Scroll Animation */}
          <div className="w-full lg:w-1/2 relative overflow-x-hidden">
            <div className="flex flex-col gap-4 md:gap-6 relative z-[1]">
              {/* Shadow overlays for edges */}
              <div className="absolute top-[-19px] lg:top-0 left-[-60px] md:left-[-60px] lg:left-[-65px] w-[80px] h-[107%] lg:h-[100%] z-20 pointer-events-none">
                <div className="relative w-full h-full">
                  <Image
                    src={leftShadow}
                    alt="Left shadow"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
              <div className="absolute top-[-19px] lg:top-0 right-[-60px] md:right-[-60px] lg:right-[-65px] w-[120px] h-[107%] lg:h-[100%] z-20 pointer-events-none">
                <div className="relative w-full h-full">
                  <Image
                    src={rightShadow}
                    alt="Right shadow"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>

              {/* Row 1 */}
              <motion.div
                style={{
                  x: x1,
                  transition: { duration: 0.5, type: "spring", stiffness: 100 },
                }}
                className="flex gap-4 md:gap-6 w-[300%]"
              >
                {row1.map((tech, index) => (
                  <div
                    key={`row1-${index}`}
                    className="relative bg-[#001233] rounded-xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center aspect-square min-w-[80px] md:min-w-[100px] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Row 2 */}
              <motion.div
                style={{
                  x: x2,
                  transition: { duration: 0.5, type: "spring", stiffness: 100 },
                }}
                className="flex gap-4 md:gap-6 ml-[0px] lg:ml-[60px] w-[300%]"
              >
                {row2.map((tech, index) => (
                  <div
                    key={`row2-${index}`}
                    className="relative bg-[#001233] rounded-xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center aspect-square min-w-[80px] md:min-w-[100px] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Row 3 */}
              <motion.div
                style={{
                  x: x3,
                  transition: { duration: 0.5, type: "spring", stiffness: 100 },
                }}
                className="flex gap-4 md:gap-6 w-[300%]"
              >
                {row3.map((tech, index) => (
                  <div
                    key={`row3-${index}`}
                    className="relative bg-[#001233] rounded-xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center aspect-square min-w-[80px] md:min-w-[100px] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
            <h2 className="text-4xl md:text-5xlfont-normal text-white font-aeonik tracking-wide  mb-6">
              Works With Your Entire Ecosystem
            </h2>
            <p className="text-[#9EB3CF] text-lg md:text-xl font-bwmss01 ">
              Don&apos;t change how you build. Our platform natively integrates with
              the frameworks, clouds, and databases your team already loves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Echosystem;
