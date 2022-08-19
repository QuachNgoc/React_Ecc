import React from "react";
import LatestPost from "../../atoms/post/LatestPost";

const LatestPosts = ({ topic, data }) => {
  return (
    <div className="flex flex-col items-start w-full max-w-[321px]">
      <h5 className="text-note font-semibold pb-1 border-b-[1px] border-b-note mb-7">
        Bài viết gần đây
      </h5>
      <div className="div grid grid-rows-4 gap-y-6">
        {data.length > 0 &&
          data
            .slice(1, 5)
            .map((item) => (
              <LatestPost topic={topic} key={item.id} data={item}></LatestPost>
            ))}
      </div>
    </div>
  );
};

export default LatestPosts;
