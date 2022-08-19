import React from "react";

const TextTitle = ({ note, children }) => {
  return (
    <>
      <p className="mb-3 text-base font-bold text-note">{note}</p>
      <h3 className="text-[25px] font-title mb-8">{children}</h3>
    </>
  );
};

export default TextTitle;
