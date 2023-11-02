import React from "react";
// todo) 외부 lib import
// AOS CSS import(npm 설치)
import "aos/dist/aos.css";
// 개발자가 직접 만든 CSS import
import "./assets/css/style.css";
import Nav from "./components/common/Nav";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";

// todo : 리액트 import

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <Nav />
      {/* 본문 */}
      <Home />
      {/* 꼬리말 */}
      <Footer />
    </div>
  );
}

export default App;
