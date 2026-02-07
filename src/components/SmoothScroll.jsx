"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";

function SmoothScroll({ children }) {
  const [isMobile, setIsMobile] = useState(false);

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
