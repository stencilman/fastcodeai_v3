"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import { useGlobalContext } from "../context/GlobalContext";
import Link from "next/link";
import Button from "./Button";
import { Handshake } from "lucide-react";
import FormModal from "../contact/sections/FormModal";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const { isActive, setIsActive } = useGlobalContext();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  // console.log("isActive", isActive);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    setIsActive(false);
  }, [setIsActive]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = scrollPosition < 450 ? 1 : 0;
  const backdropBlur = ` blur(${Math.min(scrollPosition / 4, 20)}px)`;
  const backdropOpacity = Math.min(scrollPosition / 450, 1);
  return (
    <>
      <div
        className="bg-transparent w-full fixed z-20"
        // style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)' }}
        // style={{
        //   background: `linear-gradient(to top, rgba(0, 0, 0, ${backdropOpacity}) 0%, rgba(0, 0, 0, 0) 100%)`
        // }}
        style={{
          background: `linear-gradient(to top, rgba(0, 8, 31, ${backdropOpacity}) 0%, rgb(0 0 0 / 57%) 100%)`,
          backdropFilter: `${backdropBlur}`,
          WebkitBackdropFilter: `${backdropBlur}`,
        }}
      >
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px]  pt-[30px]  pb-[20px] flex items-center justify-between ">
          <div className="relative z-[1]">
            <Link href="/">
              {" "}
              <Image
                priority="true"
                className="w-[190px] sm:w-[290px]"
                src="/logo1.svg"
                alt="logo"
                width="290"
                height="68"
              />
            </Link>
          </div>
          <div className="flex items-center gap-[14px] sm:gap-[14px]">
            <div
              // style={{
              //   transform: `scale(${scale})`,
              //   transition: "transform 0.5s",
              // }}
              className="relative z-[1] hidden  md:block  "
            >
              <Button
                onClick={() => setIsFormModalOpen(true)}
                name="Get Started"
              />
            </div>
            <div className="w-fit  md:hidden">
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={`relative rounded-[4px] z-[1] flex items-center gap-[7px] p-[9px] text-lg justify-between main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]  text-white`}
              >
                <Handshake className="w-6 h-6" />
              </button>
            </div>
            {/* <Link href="/contact">
          <button
            className="rounded-[28px] relative z-[1] hidden  sm:flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg "
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.5s",
            }}
          >
            <div>Get Started</div>
            <div>
              <Image
                className="inline "
                src="/arrowRight.svg"
                alt="arrow"
                width="16"
                height="13"
              />
            </div>
          </button>
          </Link> */}
            <button
              onClick={handleClick}
              className={`w-[40px] sm:w-[47px] h-[40px] sm:h-[47px] relative z-[3]  ${
                isActive ? "bg-[#0E1E49]" : "bg-[#F3F3F3]"
              }  rounded-[4px] flex flex-col justify-center items-center`}
            >
              <span
                className={` block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isActive
                        ? "rotate-45 translate-y-1 bg-white"
                        : "-translate-y-0.5 bg-black"
                    }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
              ></span>
              <span
                className={` block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isActive
                        ? "-rotate-45 -translate-y-1 bg-white"
                        : "translate-y-0.5 bg-black"
                    }`}
              ></span>
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>

        {/* <style jsx>{`
        .backdrop-blur {
          ${backdropBlur}
          transition: backdrop-filter 0.5s;
        }
      `}</style> */}
      </div>

      {/* Form Modal - Rendered outside navbar to avoid z-index issues */}
      <FormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
