"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed top-0 left-0 z-[100] w-full h-full flex items-center justify-center bg-black text-white"
    >
      <h1>Loading...</h1>
    </motion.div>
  );

};

export default Loading;
