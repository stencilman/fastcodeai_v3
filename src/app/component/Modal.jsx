import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
const Modal = ({ active }) => {
  const cursor = useRef(null);
  useEffect(() => {
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      console.log("12345678");
      const { pageX, pageY } = e;

      xMoveCursor(pageX);

      yMoveCursor(pageY);
    });
  }, []);
  return (
    <motion.div
      ref={cursor}
      variants={scaleAnimation}
      initial={"initial"}
      animate={{
        scale: 1,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      }}
      className="absolute pointer-events-none z-[35]"
    >
      <div
        className={`w-[103px] h-[103px] bg-gradient-to-br ${
          active ? "from-[#1D8283] to-[#033577]" : "from-[#831d1d] to-[#033577]"
        } bg-gradient-156deg bg-no-repeat bg-[0% 0%]   pointer-events-none text-white flex justify-center items-center gap-[20px] flex-col`}
      >
        <div className="font-bold text-[18px]">Say Hi!</div>
        <div className="pr-[24px]">
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
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
