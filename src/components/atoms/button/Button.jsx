import React from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      type={type}
      className={`text-white leading-none my-auto cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
