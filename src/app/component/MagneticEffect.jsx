"use client";
import React, { useEffect, useRef } from "react";

const MagneticEffect = ({ children }) => {
  const magnetic = useRef(null);

  useEffect(() => {
    const el = magnetic.current;
    if (!el) return;

    let cleanup = () => {};

    const handleMouseEnter = () => {
      import("gsap")
        .then((mod) => {
          const gsap = mod.default || mod;
          const rectRef = { current: el.getBoundingClientRect() };

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

          cleanup = () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", updateRect);
          };
        })
        .catch(() => {});

      el.removeEventListener("mouseenter", handleMouseEnter);
    };

    el.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      cleanup();
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
};

export default MagneticEffect;
