// import styles from './style.module.scss';
import Link from "next/link";

export default function LinkNav({ data, isActive, setSelectedIndicator, onClick }) {
  const { title, href, index } = data;

  return (
    <div
      className="relative flex items-center "
    >
      {/* <div
        className="w-[10px] h-[10px] bg-black rounded-full absolute left-[-30px]">
      </div> */}
      <Link onClick={onClick} className={`cursor-pointer ${isActive && "text-[#0E1E49] pl-[30px]"} transition-transform duration-700 transform hover:translate-x-5 hover:text-[#0E1E49] ease-in-out font-aeonik font-light`} href={href}>{title}</Link>
    </div>
  );
}
