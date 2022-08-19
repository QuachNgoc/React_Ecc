import React from "react";
import DevImg from "../../../assets/homepage_dev.png";
import "./TeamCard.scss";

const TeamCard = ({ color = "#fff", shadow = "none", img, title, desc }) => {
  return (
    <div className="relative flex flex-col items-center card-team w-full max-w-[300px]">
      <img
        src={img ? img : DevImg}
        alt=""
        className="object-cover w-full mb-6 h-[146px]"
      />
      <h6 className="font-title mb-4">{title}</h6>
      <p className="text-center">{desc}</p>
      <span
        className="p-2"
        style={{ backgroundColor: color, boxShadow: shadow }}
      ></span>
    </div>
  );
};

export default TeamCard;
