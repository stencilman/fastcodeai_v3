"use client";

import { useEffect, useState } from "react";

function SmoothScroll({ children }) {
  const [isMobile, setIsMobile] = useState(true);
  const [LenisComponent, setLenisComponent] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize
    window.addEventListener("resize", checkMobile);

    let mounted = true;

    // Dynamically import ReactLenis only on the client
    import("@studio-freight/react-lenis").then((mod) => {
      if (mounted) {
        setLenisComponent(() => mod.ReactLenis);
      }
    });

    return () => {
      mounted = false;
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // While on mobile or while Lenis is still loading, just render the children directly.
  if (isMobile || !LenisComponent) {
    return <>{children}</>;
  }

  const ReactLenis = LenisComponent;
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;
