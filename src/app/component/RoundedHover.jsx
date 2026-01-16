import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticEffect from "./MagneticEffect";

const RoundedHover = ({ children, backgroundColor = "#fff" }) => {
  const circle = useRef(null);

  let timeline = useRef(null);

  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });

    timeline.current

      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )

      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);

    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <MagneticEffect>
    <div className="w-full h-full flex justify-center items-center cursor-pointer relative"  onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}}>
      {children}

      <div
        ref={circle}
        style={{ backgroundColor: backgroundColor }}
        className="w-full h-[150%] absolute rounded-full top-[100%]"
      ></div>
    </div>
    </MagneticEffect>
  );
};

export default RoundedHover;
