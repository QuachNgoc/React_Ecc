import React from "react";
import { useLocation } from "react-router-dom";
import SinglePost from "../../../molecules/post/SinglePost";
import Posts from "../../../organisms/posts/Posts";
import RelatePosts from "../../../molecules/post/RelatePosts";
import { useSelector } from "react-redux";
import {
  handleGetPostByAuthor,
  handleGetPostById,
  handleGetPostRelate,
} from "../../../../handlers/handleGetPost";

const SinglePostPage = () => {
  const data = useLocation();
  const postId = data.state?.id;
  const allPosts = useSelector((state) => state.post.data);
  const post = handleGetPostById(allPosts, postId);
  const type = post?.type || "news";
  const postsRelate = handleGetPostRelate(allPosts, type, postId);
  // handle to find posts which be read most time => relatePosts > data & topic
  // handle to find posts which is same author => relatePosts > data & topic
  const postsSameAuthor = handleGetPostByAuthor(allPosts, post.author_id);
  return (
    <>
      <section className="px-[100px] flex gap-x-[70px] items-start single-post-page-content pt-[60px]">
        {post && <SinglePost topic={type} data={post}></SinglePost>}
        <div className="flex flex-col items-start gap-y-[100px]">
          <div>
            <RelatePosts descPosts={true} data={postsRelate.slice(2, 5)}>
              Đọc nhiều nhất
            </RelatePosts>
          </div>
          <div>
            <RelatePosts descPosts={true} data={postsSameAuthor}>
              Các bài viết cùng tác giả
            </RelatePosts>
          </div>
        </div>
      </section>
      <Posts
        posts={postsRelate}
        topic="topic"
        className="px-[100px] pt-[30px] pb-[60px] bg-[#fafafa]"
      >
        <h4 className="mb-8 topic-posts font-title">Được đề xuất</h4>
      </Posts>
    </>
  );
};

export default SinglePostPage;
