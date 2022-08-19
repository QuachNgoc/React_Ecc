import React from "react";
import PostCard from "../../molecules/post/PostCard";
import PropTypes from "prop-types";

const Posts = ({ children = <></>, posts, topic, className = "" }) => {
  return (
    <section className={`flex flex-col w-full ${className}`}>
      {children}
      <div className="grid grid-cols-4 gap-x-9">
        {posts.length > 0 &&
          posts
            .slice(0, 4)
            .map((item) => (
              <PostCard
                key={item.id}
                data={item}
                authorName={true}
                descPart={false}
                topic={topic}
              ></PostCard>
            ))}
      </div>
    </section>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  topic: PropTypes.string,
};

export default Posts;
