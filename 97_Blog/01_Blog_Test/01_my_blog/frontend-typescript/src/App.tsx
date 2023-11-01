import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";
import Header from "./components/common/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        {/* home 페이지 */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
