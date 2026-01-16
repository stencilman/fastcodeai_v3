import React from "react";

const ShadowBlob = ({
  positionClass = "absolute left-1/2 bottom-[-100px] -translate-x-1/2 -translate-y-1/2",
  widthClass = "w-full",
  heightClass = "h-[250px]",
  maxWidthClass = "max-w-[1400px]",
  opacityClass = "opacity-50",
  blurClass = "blur-[20px]",
  colorClass = "bg-[#012DAC]",
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`${positionClass} ${widthClass} ${heightClass} ${maxWidthClass} ${opacityClass} ${blurClass} ${colorClass} ${className}`}
      style={{
        borderRadius: "47% 53% 48% 52% / 49% 42% 58% 51% ",
        ...style,
      }}
    />
  );
};

export default ShadowBlob;

