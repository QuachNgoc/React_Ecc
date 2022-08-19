import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/button/Button";
import TextAuthor from "../../atoms/textAuthor/TextAuthor";

const PostPreview = ({topic, data: { id, author_id, img, time, overview, title  }, //data: { img, id, title, author_id, time, overview },
}) => {
  
  const authors = useSelector((state) => state.member.data);
  const author = authors.find((item) => item.id === author_id);
  const navigate = useNavigate();
  const newParam = title?.replace(/\s+/g, "-");
  return (
    <div className="flex gap-x-9 w-[888px]">
      <img src={img} alt="" className="w-full max-w-[492px] rounded-md" />
      <div className="flex flex-col items-start w-full font-desc">
        <h4
          className="font-title break-line-2 text-[18px] mb-5 mt-1 cursor-pointer title"
          onClick={() =>
            navigate(`/news/${newParam}`, { state: { id, topic } })
          }
        >
          {title}
        </h4>
        <TextAuthor
          pic={author.profile_pic}
          name={author.name}
          time_post={time}
        ></TextAuthor>
        <p className="break-line-6 mb-9">{overview}</p>
        <Button
          className="py-4 rounded-lg px-7 btn-primary mb-7"
          onClick={() =>
            navigate(`/news/${newParam}`, { state: { id, topic } })
          }
        >
          Đọc tiếp ...
        </Button>
      </div>
    </div>
  );
};

export default PostPreview;
