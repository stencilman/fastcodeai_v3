"use client";
import { useEffect, useRef, useState } from "react";

const useScrollSpy = (initialTopic = "topic1") => {
  const [topicHighlight, setTopicHighlight] = useState(initialTopic);
  const topicRefs = useRef([]);

  const scrollToTopic = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150;
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + window.innerHeight / 2;
      topicRefs.current.forEach((ref) => {
        if (
          ref?.offsetTop <= offset &&
          ref.offsetTop + ref.offsetHeight > offset
        ) {
          setTopicHighlight(ref.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { topicHighlight, setTopicHighlight, topicRefs, scrollToTopic };
};

export default useScrollSpy;
