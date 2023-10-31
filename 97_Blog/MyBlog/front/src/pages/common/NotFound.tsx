// NotFound.js
import React, { useEffect } from "react";
import "../../assets/css/notfound.css";
import initWow from "../../assets/js/mywow";

function NotFound() {
  useEffect(()=>{
    initWow();
  })

  return (
    <div id="notfound-wrapper">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404 wow wobble" data-wow-delay="0.5s">
            <h1>!</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>
            페이지 준비중입니다.
          </p>
          <a href="/">메인화면으로 가기</a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
