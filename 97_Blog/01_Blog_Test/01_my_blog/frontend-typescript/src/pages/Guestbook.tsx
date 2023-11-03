import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import GuestBook from "../types/GuestBook";
import GuestBookService from "../services/GuestBookService";
import GuestBookList from "./gusetBook/GuestBookList";

function Guestbook() {

  // todo: 바인딩 변수 정의  
  // notice 게시판 이름 저장 변수
  const [viewGuest, setViewGuest] = useState<string>("");
  // board 게시판 이름 저장 변수
  const [viewBoard, setViewBoard] = useState<string>("");
  // 기본키 저장 변수
  const [pid, setPid] = useState<number>(0);

   // 사원 조회/추가 버튼 클릭시 실행되는 함수
   const handleChangeGuest = (viewGuest: string, pid = 0) => {
    setViewGuest(viewGuest);  // 화면명 저장
    setPid(pid);              // 기본키 저장
  };

  // 화면이름에 따라 다른 컴포넌트를 보여주는 함수
  const changeGuest = () => {
    if(viewGuest === "noticeList") {
      return <GuestBookList/>;
    } 
    
  };
  return (
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="ture">
      {/* <!-- 방명록 제목 시작--> */}
      <section className="resume-section" id="guest">
        <div className="resume-section-content">
          <h2 className="mb-5">📝방명록</h2>
          {/* 제목 끝 */}

       
          
          {/* 글쓰기 버튼 끝 */}
          <hr />

          <GuestBookList/>
        </div>
      </section>
    </div>
  );
}

export default Guestbook;
