"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MagneticEffect = ({ children }) => {
  const magnetic = useRef(null);
  const rectRef = useRef(null);

  useEffect(() => {
    const el = magnetic.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const yTo = gsap.quickTo(el, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const updateRect = () => {
      rectRef.current = el.getBoundingClientRect();
    };

    updateRect();

    const handleMouseMove = (e) => {
      const rect = rectRef.current;
      if (!rect) return;

      const { clientX, clientY } = e;
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);

      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", updateRect);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
};

export default MagneticEffect;
