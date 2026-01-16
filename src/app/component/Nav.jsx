import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import LinkNav from "./LinkNav";
import Link from "next/link";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Expertise",
    href: "/expertise",
  },

  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Career",
    href: "/career",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

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
          className="flex flex-col  text-[#A4A4A4] text-[7vh] leading-[9.5vh] md:text-[5.5vh] md:leading-[7.5vh] lg:text-[7vh] lg:leading-[9vh] "
        >
          {navItems.map((data, index) => {
            return (
              <LinkNav
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></LinkNav>
            );
          })}
        </div>
        {/* footer */}
        <div className="flex gap-[30px] pl-[50px] pb-[60px] md:pb-[100px] lg:pb-[60px]">
          {/* <Link href="/career" className="text-lg text-black font-aeonik font-light">Career</Link> */}
          <Link
            href="/blogs"
            className="text-lg text-black font-aeonik font-light"
          >
            Blog
          </Link>
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
