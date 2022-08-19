import React from "react";
import PostCard from "../../molecules/post/PostCard";

const PostCardsVertical = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-4">
      {data.length > 0 &&
        data.map((item, index) => (
          <div className="p-3 post-card-shadow rounded-xl">
            <PostCard
              key={index}
              topic="topic"
              data={item}
              btn={false}
              authorName={true}
            ></PostCard>
          </div>
        ))}
    </div>
  );
};

export default PostCardsVertical;
