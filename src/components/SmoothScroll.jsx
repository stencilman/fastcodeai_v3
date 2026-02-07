"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactLenis = dynamic(
  () => import("@studio-freight/react-lenis").then((mod) => mod.ReactLenis),
  { ssr: false }
);

function SmoothScroll({ children }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Check on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <>{children}</>;
  }

  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;
