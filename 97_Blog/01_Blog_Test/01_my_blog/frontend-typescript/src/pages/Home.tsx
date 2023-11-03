import React, { useEffect } from "react";
import maininit from "../assets/js/scripts";
import typed from "../assets/js/typed";
import About from "./About";
import Experience from "./Experience";
import Board from "./Board";
import Guestbook from "./Guestbook";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";



function Home() {
  useEffect(() => {
    maininit();
    typed();
    

  }, []);
  return (
    <div id="page-top" >
    <Routes>
        {/* home 페이지 */}
        <Route path="/" element={<Home />} />
        <Route path="/#board" element={<Board />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Home;
