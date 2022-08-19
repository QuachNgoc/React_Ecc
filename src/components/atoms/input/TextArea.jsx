import React from "react";
import { useController } from "react-hook-form";

const TextArea = ({ control, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });
  return (
    <textarea
      className="input p-4 border border-[#798386] rounded-xl h-[133px] resize-none outline-none"
      {...field}
      {...props}
    ></textarea>
  );
};

export default TextArea;
