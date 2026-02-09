"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import LinkNav from "./LinkNav";
import Link from "next/link";
import { useGlobalContext } from "../context/GlobalContext";
import { motion } from "framer-motion";

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const { setIsActive } = useGlobalContext();

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100dvh]  z-[2] w-[100%] sm:w-[50%] md:w-[55%] lg:w-[35%] rounded-l-3xl bg-[#FFFFFF] fixed right-0 top-0 text-white"
    >
      <div className="box-border h-full pt-[3rem] md:pt-[6rem] lg:pt-[3rem] flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex pl-[20px] flex-col gap-2 text-[#A4A4A4] text-[5vh] leading-[6vh] md:text-[5.5vh] md:leading-[7.5vh] lg:text-[7vh] lg:leading-[9vh] "
        >
          {navItems.map((data, index) => {
            return (
              <LinkNav
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                onClick={() => setIsActive(false)}
              ></LinkNav>
            );
          })}
        </div>
        {/* footer */}
        <div className="flex gap-[30px] pl-[50px] pb-[60px] md:pb-[100px] lg:pb-[60px]">
          {/* <Link href="/team#join-the-team" className="text-lg text-black font-aeonik font-light">Careers</Link> */}
          {/* <Link
            href="/blogs"
            className="text-lg text-black font-aeonik font-light"
            >
            Blog
          </Link> */}
          <Link
            href="https://in.linkedin.com/company/fast-code"
            target="_blank"
            className="text-lg text-black font-aeonik font-light"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
