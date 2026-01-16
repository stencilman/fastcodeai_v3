"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const HoverDetailDialog = ({ label, detail }) => {
  const [open, setOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const openWithDelay = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setOpen(true), 100);
  };

  const closeWithDelay = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={openWithDelay}
      onMouseLeave={closeWithDelay}
      onTouchStart={(e) => {
        e.stopPropagation();
        setOpen((prev) => !prev);
      }}
    >
      <div className="bg-[#1A2758] text-white px-6 py-3 rounded-[4px] font-medium cursor-default select-none">
        {label}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 6, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:absolute md:inset-auto md:top-[-253px] md:left-0 md:ml-0 md:-translate-y-[50%]"
          >
            <div
              className="relative w-[360px] md:w-[550px] max-w-[80vw] rounded-2xl border border-white/10 bg-[rgba(3,11,23,0.85)] backdrop-blur-md p-6 shadow-xl"
              onMouseEnter={() => {
                if (hoverTimeoutRef.current)
                  clearTimeout(hoverTimeoutRef.current);
                setOpen(true);
              }}
              onMouseLeave={closeWithDelay}
            >
              {/* caret (desktop only) */}
              <div className="hidden md:block absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-[rgba(3,11,23,0.85)] border-l border-t border-white/10"></div>

              <h3 className="text-white text-2xl font-bold font-aeonik mb-3 leading-snug tracking-wide">
                {detail?.title}
              </h3>
              <p className="text-[#9EB3CF] text-[15px] leading-6 font-bwmss01 mb-5 relative max-h-[300px] overflow-y-auto">
                {detail?.description}
              </p>

              {detail?.ctaText && (
                <Link
                  href={detail?.ctaLink || "#"}
                  target={detail?.ctaLink ? "_blank" : undefined}
                  className="inline-flex items-center gap-2 rounded-[4px] border border-white/25 text-white px-5 py-3 font-medium hover:bg-white/10 transition-colors"
                >
                  {detail.ctaText}
                  <span className="ml-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="#0A1C3A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverDetailDialog;
