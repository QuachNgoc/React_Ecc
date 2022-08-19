import React, { useEffect, useState } from "react";
import Button from "../../atoms/button/Button";
import RelatePosts from "../../molecules/post/RelatePosts";
import { useLocation } from "react-router-dom";
import Search from "../../atoms/search/Search";
import PostCardsVertical from "../../organisms/postCardsVertical/PostCardsVertical";
import { useSelector } from "react-redux";
import handleGetPostsByType from "../../../handlers/handleGetPost";
import { debounce } from "lodash";

import ReactPaginate from "react-paginate";

const itemsPerPage = 6;
const AllPostsPage = () => {
  // use param to get topic
  const dataLoca = useLocation();
  const topic = dataLoca.state?.topic || "news";
  const data = useSelector((state) => state.post.data);
  const allPosts = handleGetPostsByType(data, topic);
  const [postsSearch, setPostsSearch] = useState(allPosts);
  const [noResults, setNoResults] = useState(false);
  // pagination
  const [currentItems, setCurrentItems] = useState(postsSearch.slice(0, 2));
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  //=========
  const handleChangeInput = debounce((e) => {
    const inputValue = e.target.value;
    const postCopy = allPosts.filter((item) => {
      return String(item.title)
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });
    // console.log(postCopy);
    if (postCopy.length === 0) {
      setNoResults(true);
    } else setNoResults(false);
    setPostsSearch(postCopy);
  }, 250);

  // pagination
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (!postsSearch || postsSearch?.length === 0) return;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(postsSearch.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(postsSearch?.length / itemsPerPage));
  }, [postsSearch, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % postsSearch.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="px-[100px] pt-[40px]">
        <div className="flex justify-between mb-10">
          <div className="flex gap-x-3">
            <Button className="btn-filter active font-title">Mới nhất</Button>
            <Button className="btn-filter font-title">Đọc nhiều nhất</Button>
          </div>
          <Search onChange={handleChangeInput}></Search>
        </div>
        <section className="flex mb-20 gap-x-20">
          <div className="flex-col flex-1">
            {noResults && (
              <div className="w-full">
                <h2>Không có kết quả</h2>
              </div>
            )}

            {!noResults && (
              <>
                <RelatePosts data={currentItems}></RelatePosts>
                <div className="flex w-5/6 mx-auto mt-10">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className="pagination"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col items-start w-full max-w-[350px]">
            <h5 className="text-note font-semibold pb-1 border-b-[1px] border-b-note mb-7 inline-block">
              Bài viết nổi bật
            </h5>
            <PostCardsVertical data={allPosts.slice(0, 2)}></PostCardsVertical>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllPostsPage;
