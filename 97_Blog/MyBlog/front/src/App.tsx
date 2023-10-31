import React, { useEffect, useState } from "react";
// app css import
import "./assets/css/app.css";

import HeaderCom from "./components/common/HeaderCom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/common/NotFound";
import FooterCom from "./components/common/FooterCom";
import Intro from "./pages/Intro";
import NoticeList from "./pages/notice/NoticeList";
import AddNotice from "./pages/notice/AddNotice";
import Notice from "./types/Notice";
import NoticeService from "./services/NoticeService";
import NoticeDetail from "./pages/notice/NoticeDetail";
import NewsList from "./pages/board/NewsList";
import ReviewList from "./pages/board/ReviewList";


function App() {
  

  return (
    <div className="App">
      <HeaderCom />

      {/* <!-- 구분 막대 시작 --> */}
      {/* <div className="gutter text-center text-muted fade-in-box">
        <div>준혁's IT Blog에 오신것을 환영합니다. 사이트 테스트 중</div>
      </div> */}
      {/* <!-- 구분 막대 끝 --> */}

      
      <div id="content-wrapper">
        {/* 라우터 정의 시작 */}
        <Routes>
          {/* login */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* 블로그 소개 */}
          <Route path="/intro" element={<Intro />} />

          {/* 공지사항 */}
          <Route path="/notice" element={<NoticeList />} />
          <Route path="/add-notice" element={<AddNotice />} />
          <Route path="/notice/:num" element={<NoticeDetail />} />

          {/* IT 뉴스 */}
          <Route path="/news" element={<NewsList />} />

          {/* IT 리뷰 */}
          
          <Route path="/review" element={<ReviewList />} />


          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* 라우터 정의 끝 */}
      </div>
      <FooterCom />
    </div>
  );
}

export default App;
