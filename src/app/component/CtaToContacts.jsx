"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const CtaToContacts = () => {
  const [active_scrl, setActive_scrl] = useState(false);
  const scaleAnimation_scrl = {
    initial: { scale: 0, x: "0%", y: "0%" },
    open: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    close: {
      scale: 0,
      x: "0%",
      y: "0%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };
  const cursor_scrl = useRef(null);
  const container_scrl = useRef(null);
  useEffect(() => {
    const mqrque = document.getElementById("marqEffCont");

    mqrque.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = mqrque.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      cursor_scrl.current.style.left = `${x}px `;
      cursor_scrl.current.style.top = `${y}px`;
    });
  }, []);
  return (
    <Link
      href="/contact"
      id="marqEffCont"
      ref={container_scrl}
      onMouseEnter={() => setActive_scrl(true)}
      onMouseLeave={() => setActive_scrl(false)}
      className="w-full h-[80vh] relative bg-[#00081F] "
    >
      <div className="flex items-center justify-center">
        <h1 className="text-[80px] w-[51vw] h-[80vh] leading-[86px] text-white font-aeonik tracking-wide">
          {"Let's"} go Light Years
          <br /> in seconds{" "}
        </h1>
      </div>

      <motion.div
        ref={cursor_scrl}
        variants={scaleAnimation_scrl}
        initial={"initial"}
        animate={active_scrl ? "open" : "close"}
        className="absolute pointer-events-none z-[999] w-[103px] h-[103px] cursor_scrl-pointer top-0 left-0"
      >
        <div
          className={`w-[123px] h-[123px] rounded-full bg-gradient-to-br absolute pointer-events-none cursor_scrl-pointer ${"from-[#1D8283] to-[#033577]"} bg-gradient-156deg bg-no-repeat bg-[0% 0%]  text-white font-aeonik flex justify-center items-center gap-[20px] flex-col`}
        >
          <div className="font-thin text-[18px] font-aeonik">Contact Us</div>
          {/* <div className="pr-[24px]">
            <Image
              className="transform scale-x-[-1.5] "
              src="/arrowRight.svg"
              width="25"
              height="25"
              alt=""
              style={{
                transform: "matrix(0.71, -0.71, 0.71, 0.71, 0, 0)",
              }}
            />
          </div> */}
        </div>
      </motion.div>
    </Link>
  );
};

export default CtaToContacts;
