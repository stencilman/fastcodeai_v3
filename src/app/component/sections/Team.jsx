"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Arjun from "../../../../public/team/Arjun_Jain.webp";
import Dhaval from "../../../../public/team/Dhaval2.jpg";
import Abdul from "../../../../public/team/abdul.png";
import Eshwar from "../../../../public/team/eshwar.jpg";
import Rishabh from "../../../../public/team/rishabh2.jpg";
import Sughosh from "../../../../public/team/sughosh1.jpg";
import Parth from "../../../../public/team/parth-bw.webp";
import Prabal from "../../../../public/team/Prabal.jpg";
import Sanjay from "../../../../public/team/Sanjay.png";
import Shreyas from "../../../../public/team/shreyas2.jpg";
import Tirth from "../../../../public/team/tirth1.jpg";
import Yash from "../../../../public/team/yash.jpg";

const Team = () => {
  const [imageInfo, setImageInfo] = useState([]);

  useEffect(() => {
    // Simulate fetching image data
    const fetchedImages = [
      Arjun,
      Abdul,

      Dhaval,
      Eshwar,

      Rishabh,
      Sughosh,
      Parth,
      Prabal,
      // Sanjay,
      Shreyas,
      Tirth,
      Yash,
    ];

    // Shuffle images
    const shuffledImages = fetchedImages.sort(() => 0.5 - Math.random());

    const visibleCount = Math.floor(Math.random() * 3) + 7; // Random number between 6 and 8
    const initialImageInfo = shuffledImages.map((src, index) => ({
      src,
      visible: index < visibleCount,
    }));

    setImageInfo(initialImageInfo);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageInfo((currentImageInfo) => {
        const newImageInfo = [...currentImageInfo];
        const visibleImages = newImageInfo.filter((info) => info.visible);
        const hiddenImages = newImageInfo.filter((info) => !info.visible);

        if (hiddenImages.length > 0 && visibleImages.length > 0) {
          const randomVisibleIndex = Math.floor(
            Math.random() * visibleImages.length
          );
          const randomHiddenIndex = Math.floor(
            Math.random() * hiddenImages.length
          );

          // Swap visibility
          visibleImages[randomVisibleIndex].visible = false;
          hiddenImages[randomHiddenIndex].visible = true;
        }

        return newImageInfo;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // console.log("imageInfo", imageInfo);
  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 relative flex flex-col items-center justify-center z-[4]">
      <div className="flex flex-col md:flex-row gap-[10vw] md:gap-[0px] w-full items-center z-[3]">
        <div className="pl-[20px] md:pl-[50px] lg:pl-[100px] w-[100%] md:w-[45%]">
          <h1 className="text-[8vw] md:text-[7vw] lg:text-[51px] text-white font-aeonik">
            Our Team
          </h1>
          <p className="text-[#9EB3CF] w-[80%] text-sm md:text-lg font-bwmss01 font-light mt-[15px] md:mt-[30px]">
            Our team is composed of seasoned professionals, each with extensive
            research backgrounds. We are proud authors of influential papers and
            active contributors to open-source initiatives. Each member has been
            carefully selected from top universities, emphasizing our commitment
            to innovative problem solvers who excel in their fields.
          </p>
          {/* <button className="rounded-[28px] mt-[20px] md:mt-[35px] lg:mt-[50px] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg">
            Get Started
            <Image
              className="inline"
              src="/arrowRight.svg"
              alt="arrow"
              width="16"
              height="13"
            /> 
          </button> */}
          <div className="w-fit mt-[30px] md:mt-[35px] lg:mt-[50px]">
            <Button to="/team" name="More About Us" />
          </div>
        </div>
        <div className="columns__col mod--team is-2 w-[100%] md:w-[55%] h-full md:pr-[50px] lg:pr-[127px]">
          <div className="team_grid flex flex-wrap justify-center md:justify-end">
            {imageInfo.map((info, index) => (
              <div
                key={index}
                className={`team__grid-block p-4 ${
                  index > 7 ? "hidden lg:block" : "block"
                }`}
              >
                <div
                  className={`team_circle rounded-full w-[5rem] h-[5rem] md:w-[7.5rem] md:h-[7.5rem] transition-all duration-300 relative overflow-hidden ease-cubic-bezier ${
                    info.visible ? "border-0" : "border border-[#ffffffcc]"
                  }`}
                >
                  <Image
                    className={`transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier grayscale ${
                      info.visible ? "" : "opacity-0"
                    }`}
                    src={info.src}
                    width="120"
                    placeholder="blur"
                    height="120"
                    alt="team"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
