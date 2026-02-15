"use client";

import { useState } from "react";
import { useReportWebVitals } from "next/web-vitals";

export default function LCPTracker() {
  const [lcp, setLcp] = useState(null);

  useReportWebVitals((metric) => {
    if (metric.name === "LCP") {
      const isMobile =
        typeof window !== "undefined" ? window.innerWidth < 768 : false;
      console.log(`LCP on ${isMobile ? "mobile" : "desktop"}:`, metric.value);
      setLcp(metric.value);
    }
  });

  if (!lcp) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.8)",
        color: "#00ff00",
        padding: "8px 12px",
        borderRadius: "4px",
        fontFamily: "monospace",
        fontSize: "14px",
        pointerEvents: "none",
        border: "1px solid #00ff00",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
    >
      LCP: {lcp.toFixed(2)}ms
    </div>
  );
}
