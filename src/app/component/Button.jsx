import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({ to, name, target, type = "primary", onClick }) => {
  const className = `relative rounded-[4px] z-[1] flex items-center gap-[7px] px-[25px] py-[10px] text-lg justify-between ${
    type === "secondary"
      ? "secondary_cta_button"
      : "main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] "
  } text-white`;

  // If onClick is provided, render as button instead of Link
  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        <div
          className={`${
            type === "secondary" ? "font-bwmss01 font-semibold" : ""
          }`}
        >
          {name}
        </div>
        <div className="flex items-center justify-center relative">
          {type === "secondary" ? (
            <>
              <Image
                className="button__icon-svg transition-transform duration-300"
                src="/sec_arrow_right.svg"
                alt="arrow"
                width="25"
                height="25"
              />
              <Image
                className="button__icon-svg--copy absolute"
                src="/sec_arrow_right.svg"
                alt="arrow"
                width="25"
                height="25"
              />
            </>
          ) : (
            <>
              <Image
                className="button__icon-svg transition-transform duration-300"
                src="/rightArrow.svg"
                alt="arrow"
                width="20"
                height="20"
              />
              <Image
                className="button__icon-svg--copy absolute"
                src="/rightArrow.svg"
                alt="arrow"
                width="20"
                height="20"
              />
            </>
          )}
          {/* <span className="button__icon-wrapper ">
          <svg
            width="10"
            className="button__icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            ></path>
          </svg>

          <svg
            className="button__icon-svg  button__icon-svg--copy"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            ></path>
          </svg>
        </span> */}
          {/* <Image src="/rightArrow.svg" alt="arrow" width="16" height="13" /> */}
        </div>
      </button>
    );
  }

  // Default: render as Link
  return (
    <Link target={target} href={to} className={className}>
      <div
        className={`${
          type === "secondary" ? "font-bwmss01 font-semibold" : ""
        }`}
      >
        {name}
      </div>
      <div className="flex items-center justify-center relative">
        {type === "secondary" ? (
          <>
            <Image
              className="button__icon-svg transition-transform duration-300"
              src="/sec_arrow_right.svg"
              alt="arrow"
              width="25"
              height="25"
            />
            <Image
              className="button__icon-svg--copy absolute"
              src="/sec_arrow_right.svg"
              alt="arrow"
              width="25"
              height="25"
            />
          </>
        ) : (
          <>
            <Image
              className="button__icon-svg transition-transform duration-300"
              src="/rightArrow.svg"
              alt="arrow"
              width="20"
              height="20"
            />
            <Image
              className="button__icon-svg--copy absolute"
              src="/rightArrow.svg"
              alt="arrow"
              width="20"
              height="20"
            />
          </>
        )}
      </div>
    </Link>
  );
};

export default Button;
