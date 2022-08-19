import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../atoms/button/Button";
import Logo from "../../atoms/logo/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <div className="flex bg-white header">
      <Logo></Logo>
      <div className="nav h-full ml-auto flex items-center justify-center gap-x-[28px] mr-[80px]">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Tin tức
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Giới thiệu
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Liên hệ
        </NavLink>
      </div>
      <Button className="btn-base rounded-lg">
        <a
          href="https://www.facebook.com/groups/ecommerceclubuit"
          target="_blank"
          rel="noreferrer"
          className="block px-8 py-3"
        >
          Join
        </a>
      </Button>
    </div>
  );
};

export default Header;
