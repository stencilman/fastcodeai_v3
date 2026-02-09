"use client";
import { useEffect } from "react";
import { useGlobalContext } from "./context/GlobalContext";

export default function HomeClient({ children }) {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, [setIsActive]);

  return <>{children}</>;
}
