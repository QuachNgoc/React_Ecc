import React from "react";
import Button from "../../atoms/button/Button";
import Logo from "../../atoms/logo/Logo";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="px-[100px] pt-[40px] pb-[60px] flex">
      <div className="left flex flex-col w-full max-w-[400px]">
        <Logo></Logo>
        <p className="mb-4 mt-6">
          Trường Đại học Công nghệ Thông tin, Đại học Quốc gia TP. HCM
        </p>
        <p className="mb-4 font-title text-[#475467]">
          Câu lạc bộ Thương mại điện tử
        </p>
        <a
          href="https://www.facebook.com/eCommerceClubUIT/"
          target="_blank"
          rel="noreferrer"
          className="mb-4"
        >
          <span className="font-semibold text-[#475467]">Fanpage: </span>
          ECommerce Club - UIT
        </a>
        <a
          href="https://www.facebook.com/groups/ecommerceclubuit"
          target="_blank"
          rel="noreferrer"
          className="mb-4"
        >
          <span className="font-semibold text-[#475467]">Group:</span> Cộng đồng
          eCommerce Club @ UIT
        </a>
      </div>
      <div className="right  mr-0 ml-auto">
        <div className="grid grid-cols-5 gap-x-[60px]">
          <ul className="flex flex-col gap-y-4">
            <li>Hoạt động</li>
            <li>Chia sẻ</li>
            <li>Học tập</li>
            <li>Gặp gỡ</li>
            <li>Thành tích</li>
          </ul>
          <ul className="flex flex-col gap-y-4">
            <li>Hợp tác</li>
            <li>Doanh nghiệp</li>
            <li>Trường học</li>
          </ul>
          <ul className="flex flex-col gap-y-4">
            <li>Sự kiện</li>
            <li>Nổi bật</li>
            <li>Kỷ niệm</li>
            <li>Giao lưu</li>
          </ul>
          <ul className="flex flex-col gap-y-4">
            <li>Blogs</li>
            <li>Hỏi và đáp</li>
            <li>Chia sẻ</li>
            <li>Tư vấn</li>
          </ul>
          <ul className="flex flex-col gap-y-4">
            <li className="cursor-pointer" onClick={() => navigate("/contact")}>
              Liên hệ
            </li>
            <li>Trực tuyến</li>
            <li>Trực tiếp</li>
          </ul>
        </div>
        <div className="flex items-end gap-x-[30px] mt-10 justify-center">
          <p className="text-[#6A99FD] font-bold -translate-y-1">
            Connect with us for more new information update
          </p>
          <Button className="btn-base rounded-lg font-desc">
            <a
              href="https://www.facebook.com/groups/ecommerceclubuit"
              target="_blank"
              rel="noreferrer"
              className="block px-6 py-4"
            >
              Join Community
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
