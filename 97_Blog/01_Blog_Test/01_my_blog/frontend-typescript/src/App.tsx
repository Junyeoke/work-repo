import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";
import Header from "./components/common/Header";
import Board from "./pages/Board";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Guestbook from "./pages/Guestbook";

function App() {
  return (
    <div>
      <Header />
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
      <Guestbook/>
      {/* <!-- 방명록 끝--> */}
    </div>
  );
}

export default App;
