import React from "react";
import PropTypes from "prop-types";

const TextAuthor = ({ pic, name, time_post }) => {
  return (
    <div className="author flex gap-x-3 text-[13px] mb-3">
      <img src={pic} alt="" className="w-[46px] h-[46px] rounded-full" />
      <div className="flex-col">
        <h6 className="font-title text-author">{name}</h6>
        <p className="text-secondary">{time_post}</p>
      </div>
    </div>
  );
};

TextAuthor.propTypes = {
  pic: PropTypes.string,
  name: PropTypes.string,
  time_post: PropTypes.string.isRequired,
};

export default TextAuthor;
