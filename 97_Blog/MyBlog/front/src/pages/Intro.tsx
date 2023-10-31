import React from "react";
import { useEffect } from "react";
import initWow from "../assets/js/mywow";
import TitleCom from "../components/common/TitleCom";

function Intro() {
  useEffect(() => {
    initWow();
  });
  return (
    <>
      {/* 제목 start */}
      <TitleCom title="블로그 소개" />
      {/* 제목 end */}
      <div id="content-wrapper">
        <p className="fs-3 wow flipInX">
          안녕하세요 준혁's IT Blog 입니다. <br />
          
        </p>
        <br />
        <p className="fs-3">
            최신 IT 뉴스와 IT 기기 리뷰 소식을 전달해드립니다.<br/>
            IT 개발자 공부를 하고 있습니다. <br />
            모든전자기기에 관심이 많습니다.
        </p>
       
      </div>
    </>
  );
}

export default Intro;
