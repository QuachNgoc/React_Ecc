import React from "react";

const TextIcon = ({ img, children }) => {
  return (
    <div className="flex gap-x-4 items-center">
      <img src={img} alt="" className="w-[34px] h-[34px]" />
      <p className="text-[#2B5A77] text-sm">{children}</p>
    </div>
  );
};

export default TextIcon;
