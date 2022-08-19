import React from "react";
import "./Pagination.scss";
const Pagination = ({ pagination, onPageChange }) => {
  const { page, row, totalPosts } = { ...pagination };
  const totalPage = Math.ceil(totalPosts / row);
  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <>
      <button
        className={`arrow absolute left-0 top-0 translate-y-[155px] -translate-x-1/2 flex justify-center items-center w-[53px] h-[53px] rounded-full ${
          page === 1 ? "opacity-0 invisible" : ""
        }`}
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <svg
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.30458 0.729433C9.92696 0.106579 10.9367 0.106924 11.5586 0.730204C12.1958 1.36876 12.1798 2.40579 11.5223 3.02342C9.13417 5.26674 4.0304 10.1167 4.13024 10.5001C4.22992 10.8828 9.2112 15.7177 11.5436 17.9658C12.1926 18.5914 12.2013 19.6243 11.5637 20.2615C10.9357 20.889 9.91687 20.8895 9.28964 20.2614L1.83737 12.7978C1.22809 12.1883 0.885818 11.3618 0.885818 10.5001C0.885818 9.63827 1.22809 8.81177 1.83737 8.2023L9.30458 0.729433Z"
            fill="url(#paint0_linear_2_2862)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_2862"
              x1="6.80534"
              y1="21.3989"
              x2="6.80534"
              y2="-0.398823"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECECEC" />
              <stop offset="1" stopColor="white" stopOpacity="0.63" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <div className="flex items-center justify-center gap-x-2 absolute -bottom-[60px] left-1/2 -translate-x-1/2">
        {totalPage > 1 &&
          new Array(totalPage)
            .fill(0)
            .map((item, index) => (
              <span
                key={index}
                className={`page-dot rounded-full ${
                  index + 1 === page ? "page-dot-active" : ""
                }`}
              ></span>
            ))}
      </div>
      <button
        className={`arrow absolute right-0 top-0 translate-y-[155px] translate-x-1/2 flex justify-center items-center w-[53px] h-[53px] rounded-full ${
          page === totalPage ? "opacity-0 invisible" : ""
        }`}
        disabled={page >= totalPage}
        onClick={() => handlePageChange(page + 1)}
      >
        <svg
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.69542 20.2706C3.07304 20.8934 2.06335 20.8931 1.44139 20.2698C0.804194 19.6312 0.820222 18.5942 1.47772 17.9766C3.86583 15.7333 8.9696 10.8833 8.86976 10.4999C8.77008 10.1172 3.7888 5.28235 1.45642 3.03425C0.807357 2.40864 0.798661 1.37568 1.43633 0.73846C2.06426 0.110969 3.08313 0.110456 3.71036 0.738643L11.1626 8.2022C11.7719 8.81166 12.1142 9.63816 12.1142 10.4999C12.1142 11.3617 11.7719 12.1882 11.1626 12.7977L3.69542 20.2706Z"
            fill="url(#paint0_linear_2_2814)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_2814"
              x1="6.19466"
              y1="-0.398926"
              x2="6.19466"
              y2="21.3988"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECECEC" />
              <stop offset="1" stopColor="white" stopOpacity="0.63" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </>
  );
};

export default Pagination;
