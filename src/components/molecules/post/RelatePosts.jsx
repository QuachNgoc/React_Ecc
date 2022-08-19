import React from "react";
import { PostCardRelate } from "./PostCard";
import PropTypes from "prop-types";
import "./RelatePost.scss";

const RelatePosts = ({ descPosts = false, children, data }) => {
  return (
    <>
      {descPosts && (
        <h5 className="text-note font-semibold pb-1 border-b-[1px] border-b-note mb-7 inline-block">
          {children}
        </h5>
      )}
      <div className="flex flex-col gap-y-[40px] relate-posts">
        {data.length > 0 &&
          data.map((item) => (
            <PostCardRelate
              key={item.id}
              data={item}
              topic="news"
            ></PostCardRelate>
          ))}
      </div>
    </>
  );
};

RelatePosts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RelatePosts;
