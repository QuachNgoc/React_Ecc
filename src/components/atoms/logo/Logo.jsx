import React from "react";
import LogoImg from "../../../assets/logo.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="flex items-center gap-5">
      <img src={LogoImg} alt="" className="h-[50px] w-[50px]" />
      <h2 className="logo font-bold font-header">ECommerce UIT</h2>
    </div>
  );
};

export default Logo;
