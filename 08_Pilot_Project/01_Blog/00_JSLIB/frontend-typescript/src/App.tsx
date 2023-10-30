// todo : external lib import
// todo: animate css import (wow 사용시 필요)
import "wowjs/css/libs/animate.css";
// todo: simplelightbox css import
import "simplelightbox/dist/simple-lightbox.css";

// todo : internal import
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderCom from "./components/common/HeaderCom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BootstrapIcons from "./pages/BootstrapIcons";
import CounterUp from "./pages/CounterUp";
import CounterUpExam from "./pages/CounterUpExam";
import TypedCom from "./pages/TypedCom";
import TypedComExam from "./pages/TypedComExam";
import WowCom from "./pages/WowCom";
import SimpleLightboxCom from "./pages/SimpleLightboxCom";
import SimpleLightboxComExam from "./pages/SimpleLightboxComExam";
import OwlCarouselCom from "./pages/OwlCarouselCom";
import OwlCarouselComExam from "./pages/OwlCarouselComExam";

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <HeaderCom />

      {/* 본문 */}
      <div className="container mt-3">
        <Routes>
          {/* / : 홈메뉴(1st 페이지) */}
          <Route path="/" element={<Home />} />
          {/* bootstrap icon */}
          <Route path="/bootstrap-icons" element={<BootstrapIcons />} />
          {/* countUp */}
          <Route path="/countup" element={<CounterUp />} />
          <Route path="/countup-exam" element={<CounterUpExam />} />
          {/* typed */}
          <Route path="/typed" element={<TypedCom />} />
          <Route path="/typed-exam" element={<TypedComExam />} />
          {/* Wow */}
          <Route path="/wow" element={<WowCom />} />
          {/* SimpleLightbox */}
          <Route path="/simple-lightbox" element={<SimpleLightboxCom />} />
          <Route
            path="/simple-lightbox-exam"
            element={<SimpleLightboxComExam />}
          />
          {/* owl-carousel */}
          <Route path="/owl-carousel" element={<OwlCarouselCom />} />
          <Route path="/owl-carousel-exam" element={<OwlCarouselComExam />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
