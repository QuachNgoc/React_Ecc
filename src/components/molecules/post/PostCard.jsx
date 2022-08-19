import React from "react";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PostCard = ({
  btn = true,
  descPart = true,
  authorName = false,
  topic,
  data: { id, img, author_id, time, title, overview },
}) => {
  const authors = useSelector((state) => state.member.data);
  const author = authors.find((item) => item.id === author_id);
  const navigate = useNavigate();
  const newParam = title?.replace(/\s+/g, "-");
  return (
    <div className="flex flex-col items-start transition-all post-card">
      <img
        src={img}
        alt=""
        className="rounded-[10px] h-[250px] w-full object-cover mb-5"
      />
      <div className="flex items-center mb-2 text-xs gap-x-2">
        {authorName && (
          <>
            <p className="font-bold text-author">{author.name}</p>
            <span className="p-[2px] rounded-full bg-note"></span>
          </>
        )}
        <p className="text-secondary">{time}</p>
      </div>
      <h4
        className="mb-2 text-lg font-title break-line-2 title"
        onClick={() => navigate(`/news/${newParam}`, { state: { id, topic } })}
      >
        {title}
      </h4>
      {descPart && (
        <>
          <p className="mb-5 font-desc break-line-3">{overview}</p>
          {btn && (
            <Button
              className="rounded-md btn-primary h-[46px] px-5"
              onClick={() => navigate(`/news/${newParam}`, { state: { id } })}
            >
              Đọc tiếp ...
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export const PostCardRelate = ({
  topic,
  data: { id, img, time, title, overview },
}) => {
  const navigate = useNavigate();
  const newParam = title.replace(/\s+/g, "-");
  return (
    <div className="relative flex post-preview h-full max-h-[120px] cursor-pointer">
      <img
        src={img}
        alt=""
        className="rounded-[5px] object-cover w-full max-w-[160px]"
      />
      <div className="flex flex-col flex-1 ml-4">
        <span className="text-[#5D90F5] text-[11px]">{time}</span>
        <h6
          className="mb-2 leading-tight break-line-2 font-title title"
          onClick={() => navigate(`/news/${newParam}`, { state: { id } })}
        >
          {title}
        </h6>
        <p className="text-xs break-line-3">{overview}</p>
      </div>
      <hr />
    </div>
  );
};

PostCard.propTypes = {
  authorName: PropTypes.bool,
  topic: PropTypes.string,
  data: PropTypes.object.isRequired,
};

PostCardRelate.propTypes = {
  topic: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default PostCard;
