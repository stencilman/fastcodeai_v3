"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (event, id) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ul className="mt-4 space-y-2">
      {sections?.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className={`block text-sm font-medium transition-colors ${
              activeId === section.id
                ? "text-[#ffffff]"
                : "text-[#9EB3CF] hover:text-white"
            }`}
            onClick={(e) => handleClick(e, section.id)}
          >
            {section.tocTitle || section.navLabel || section.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
