import React, { useEffect, useRef, useState } from "react";
import PostCard from "../../molecules/post/PostCard";
import Pagination from "../../pagination/Pagination";
import { CSSTransition } from "react-transition-group";
import "./NewsTopic.scss";
import { useSelector } from "react-redux";
import handleGetPostsByType from "../../../handlers/handleGetPost";

const NewsTopic = ({ children, topic }) => {
  const [visible, setVisible] = useState(false);
  const data = useSelector((state) => state.post.data);
  const posts = handleGetPostsByType(data, topic);
  const [postList, setPostList] = useState(posts.slice(0, 4));
  const [pagination, setPagination] = useState({
    page: 1,
    row: 4,
    totalPosts: posts.length,
  });
  const handlePageChange = (newPage) => {
    setVisible(false);
    const newPagination = { ...pagination, page: newPage };
    setPagination(newPagination);
  };

  const handleUpdatePostList = useRef({});
  handleUpdatePostList.current = () => {
    const newPostList = posts.slice(
      (pagination.page - 1) * pagination.row,
      pagination.page * pagination.row
    );
    setPostList(newPostList);
  };

  useEffect(() => {
    setVisible(true);
    handleUpdatePostList.current();
    return () => {};
  }, [pagination.page]);

  return (
    <section className="relative mb-40 transition-all post-list">
      <h4 className="mb-10 topic-posts font-title">{children}</h4>
      <CSSTransition
        in={visible}
        timeout={300}
        classNames="postList"
        unmountOnExit
      >
        <div className="grid grid-cols-4 gap-x-9">
          {postList.length > 0 &&
            postList.map((item) => (
              <PostCard key={item.id} data={item} authorName={true}></PostCard>
            ))}
        </div>
      </CSSTransition>
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination>
    </section>
  );
};

export const NewsTopic2 = ({ children, topic }) => {
  const [visible, setVisible] = useState(false);
  const data = useSelector((state) => state.post.data);
  const posts = handleGetPostsByType(data, topic);
  const [postList, setPostList] = useState(posts.slice(0, 4));
  const [pagination, setPagination] = useState({
    page: 1,
    row: 3,
    totalPosts: posts.length - 1,
  });
  const handlePageChange = (newPage) => {
    setVisible(false);
    const newPagination = { ...pagination, page: newPage };
    setPagination(newPagination);
  };

  const handleUpdatePostList = useRef({});
  handleUpdatePostList.current = () => {
    const newPostList = posts.slice(
      (pagination.page - 1) * pagination.row + 1,
      pagination.page * pagination.row + 1
    );
    setPostList(newPostList);
  };

  useEffect(() => {
    setVisible(true);
    handleUpdatePostList.current();
  }, [pagination.page]);

  return (
    <section className="relative mb-40">
      <h4 className="mb-10 topic-posts font-title">{children}</h4>
      <div className="grid w-full content gap-x-9">
        <PostCard data={posts[0]} authorName={true}></PostCard>
        <div className="relative flex flex-col">
          <CSSTransition
            in={visible}
            timeout={300}
            classNames="postList"
            unmountOnExit
          >
            <div className="grid grid-cols-3 gap-x-9">
              {postList.length > 0 &&
                postList.map((item) => (
                  <PostCard
                    key={item.id}
                    data={item}
                    authorName={true}
                  ></PostCard>
                ))}
            </div>
          </CSSTransition>
          <Pagination
            pagination={pagination}
            onPageChange={handlePageChange}
          ></Pagination>
        </div>
      </div>
    </section>
  );
};

export default NewsTopic;
