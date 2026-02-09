"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../context/GlobalContext";
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "./Button";
import { Handshake } from "lucide-react";
import ShadowBlob from "./common/ShadowBlob";
import { usePathname } from "next/navigation";

const Nav = dynamic(() => import("./Nav"), { ssr: false });
const FormModal = dynamic(() => import("../contact/sections/FormModal"), { ssr: false });

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const { isActive, setIsActive } = useGlobalContext();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const pathname = usePathname();

  // console.log("isActive", isActive);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scale = scrollPosition < 450 ? 1 : 0;
  const backdropBlur = ` blur(${Math.min(scrollPosition / 4, 20)}px)`;
  const backdropOpacity = Math.min(scrollPosition / 450, 1);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Research", href: "/research" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <div
        className="bg-transparent w-full fixed z-20"
        style={{
          background: `linear-gradient(to top, rgba(0, 8, 31, ${backdropOpacity}) 0%, rgb(0 0 0 / 57%) 100%)`,
          backdropFilter: `${backdropBlur}`,
          WebkitBackdropFilter: `${backdropBlur}`,
        }}
      >
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] pt-[30px] pb-[20px] flex items-center justify-between ">
          <div className="relative z-[1]">
            <Link href="/">
              {" "}
              <Image
                priority
                className="w-[190px] sm:w-[290px]"
                src="/logo1.svg"
                alt="logo"
                width="290"
                height="68"
              />
            </Link>
          </div>

          {/* Center Navigation Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8 relative z-[1]">
            {navLinks.map((link) => {
              const isActiveLink = pathname === link.href;
              return (
                <div key={link.name} className="relative">
                  {isActiveLink && (
                    <ShadowBlob
                      positionClass="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      widthClass="w-[60px]"
                      heightClass="h-[30px]"
                      blurClass="blur-[20px]"
                      opacityClass="opacity-50"
                      colorClass="bg-[#012DAC]"
                      className="z-[-1]"
                    />
                  )}
                  <Link
                    href={link.href}
                    className={`text-xl transition-all duration-300 relative z-[1] ${
                      isActiveLink
                        ? "bg-[#050A18] text-[#F3F3F3] px-4 py-1 rounded-md border border-[#1E293B]"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-[14px] sm:gap-[14px]">
            <div
              className="relative z-[1] hidden md:block"
            >
              <Button
                onClick={() => setIsFormModalOpen(true)}
                name="Get Started"
              />
            </div>
            <div className="w-fit md:hidden">
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={`relative rounded-[4px] z-[1] flex items-center gap-[7px] p-[9px] text-lg justify-between main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]  text-white`}
              >
                <Handshake className="w-6 h-6" />
              </button>
            </div>
            
            <button
              onClick={handleClick}
              className={`w-[40px] sm:w-[47px] h-[40px] sm:h-[47px] relative z-[3] lg:hidden ${
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
        <AnimatePresence mode="wait">
          {isActive && <Nav />}
        </AnimatePresence>

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
