// import styles from './style.module.scss';
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale, menuSlide } from "./anim.js";

export default function LinkNav({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      custom={index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="relative flex items-center "
    >
      {/* <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] bg-black rounded-full absolute left-[-30px]">
      </motion.div> */}
      <Link className={`cursor-pointer ${isActive && "text-[#0E1E49] pl-[30px]"} transition-transform duration-700 transform hover:translate-x-5 hover:text-[#0E1E49] ease-in-out font-aeonik font-light`} href={href}>{title}</Link>
    </motion.div>
  );
}
