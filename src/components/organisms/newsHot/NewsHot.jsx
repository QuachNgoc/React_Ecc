import React from "react";
import { useSelector } from "react-redux";
import { handlePosts } from "../../../handlers/handleGetPost";
import LatestPosts from "../../molecules/post/LatestPosts";
import PostPreview from "../../molecules/post/PostPreview";

const NewsHot = () => {
  const posts = handlePosts(useSelector((state) => state.post.data));
  return (
    <section className="mt-[60px] w-full flex gap-x-[50px] mb-20">
      <PostPreview data={posts[0]} topic="news"></PostPreview>
      <LatestPosts data={posts} topic="news"></LatestPosts>
    </section>
  );
};

export default NewsHot;
