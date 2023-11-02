import React, { useEffect } from "react";
import maininit from "../assets/js/scripts";
import typed from "../assets/js/typed";
import NoticeList from "./notice/NoticeList";
import About from "./About";
import Experience from "./Experience";
import Board from "./Board";
import Guestbook from "./Guestbook";

function Home() {
  useEffect(() => {
    maininit();
    typed();
  }, []);
  return (
    <div id="page-top">
      {/* <!-- Page Content--> */}
      <div className="container-fluid p-0">
        {/* About 시작 */}
        <About />
        {/* About 끝 */}

        {/* <!-- 보유기술 시작--> */}
        <Experience />
        {/* <!-- 보유기술 끝--> */}

        {/* <!-- 게시판 시작--> */}
        <Board />
        {/* <!-- 자유게시판 끝--> */}

        {/* <!-- 방명록 시작--> */}
        <Guestbook />
        {/* <!-- 방명록 끝--> */}
      </div>
    </div>
  );
}

export default Home;
