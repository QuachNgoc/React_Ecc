import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
const HomePage = lazy(() => import("../components/pages/homepage/HomePage"));
const AboutPage = lazy(() => import("../components/pages/aboutpage/AboutPage"));
const NewsPage = lazy(() => import("../components/pages/newspage/NewsPage"));
const AllPostsPage = lazy(() =>
  import("../components/pages/newspage/AllPostsPage")
);
const SinglePostPage = lazy(() =>
  import("../components/pages/newspage/singlePost/SinglePostPage")
);
const ContactPage = lazy(() =>
  import("../components/pages/contactpage/ContactPage")
);

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<AboutPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/news/allposts/:topic" element={<AllPostsPage />}></Route>
        <Route path="/news/:postTitle" element={<SinglePostPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </>
  );
};

export default RouteConfig;
