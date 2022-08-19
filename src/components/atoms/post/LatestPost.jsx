import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LatestPost = ({ topic, data: { id, img, title, author_id, time } }) => {
  const authors = useSelector((state) => state.member.data);
  const author = authors.find((item) => item?.id === author_id);
  const navigate = useNavigate();
  const newParam = title?.replace(/\s+/g, "-");
  return (
    <div
      className="flex cursor-pointer gap-x-3"
      onClick={() => navigate(`/news/${newParam}`, { state: { id, topic } })}
    >
      <img src={img} alt="" className="w-[65px] h-[65px] rounded-lg" />
      <div className="flex flex-col justify-between flex-1">
        <h6 className="text-sm font-semibold title break-line-2">{title}</h6>
        <div className="flex items-center gap-x-2 text-[13px]">
          <p className="font-bold text-author">{author.name}</p>
          <span className="p-[2px] rounded-full bg-note"></span>
          <p className="text-secondary">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
