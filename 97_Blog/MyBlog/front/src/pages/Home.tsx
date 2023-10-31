import React, { useEffect, useState } from "react";
import TitleCom from "../components/common/TitleCom";
import initWow from "../assets/js/mywow";
import { Link } from "react-router-dom";
import Notice from "../types/Notice";
import NoticeService from "../services/NoticeService";
import slideImg1 from "../assets/img/course-1.jpg";
import slideImg2 from "../assets/img/course-2.jpg";
import slideImg3 from "../assets/img/course-3.jpg";

function Home() {
  useEffect(() => {
    initWow();
  });
  return (
    <>
      {/* 제목 start */}
      {/* <TitleCom title="Home" /> */}
      {/* 제목 end */}

      <div id="content-wrapper">
        <p className="fs-4 wow fadeInLeft" >
          안녕하세요🙋‍♂️🙋‍♀️ 준혁's IT Blog 입니다.
        </p>
        <p className="fs-4 wow fadeInLeft" data-wow-delay="0.5s">
        최신 IT 소식과 IT 기기 리뷰 정보를 공유하는 블로그 입니다!
        </p>
        {/* <!-- 로고 아이콘 저작권 표시 --> */}
        {/* <a
          href="https://www.flaticon.com/kr/free-icons/it-"
          title="it 부서 아이콘"
        >
          It 부서 아이콘 제작자: rukanicon - Flaticon
        </a> */}
      </div>
     
      {/* <!-- Heading Row--> */}
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <div className="col-lg-5">
          <h1 className="font-weight-light wow fadeIn" data-wow-delay="1s">🚀 게시판 바로가기</h1>
          
        </div>
      </div>

     

      {/* <!-- Content Row--> */}
      <div className="row gx-4 gx-lg-5">
        <div className="col-md-4 mb-5">
          <div className="card h-100 wow fadeInLeft" data-wow-delay="1.5s" >
            <div className="card-body ">
              <h2 className="card-title">📢공지사항</h2>
              <p className="card-text">블로그 소식을 전해드립니다.</p>
            </div>
            <div className="card-footer">
              <Link to="/notice" className="btn btn-primary btn-sm">
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card h-100 wow fadeInLeft" data-wow-delay="2s">
            <div className="card-body">
              <h2 className="card-title">🗞️IT 소식</h2>
              <p className="card-text">IT 소식을 전해드립니다.</p>
            </div>
            <div className="card-footer">
              <Link to="/news" className="btn btn-primary btn-sm">
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card h-100 wow fadeInLeft" data-wow-delay="2.5s">
            <div className="card-body">
              <h2 className="card-title">💻IT 기기 리뷰</h2>
              <p className="card-text">IT기기 사용후기를 알고싶다면?</p>
            </div>
            <div className="card-footer">
              <Link to="/review" className="btn btn-primary btn-sm">
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
