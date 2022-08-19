import React from "react";
import NewsHot from "../../organisms/newsHot/NewsHot";
import NewsTopic, { NewsTopic2 } from "../../organisms/newsTopic/NewsTopic";

const NewsPage = () => {
  return (
    <div className="px-[100px]">
      <NewsHot></NewsHot>
      <NewsTopic topic="events">Sự kiện</NewsTopic>
      <NewsTopic topic="knowledges">Kiến thức</NewsTopic>
      <NewsTopic2 topic="study">Học tập</NewsTopic2>
    </div>
  );
};

export default NewsPage;
