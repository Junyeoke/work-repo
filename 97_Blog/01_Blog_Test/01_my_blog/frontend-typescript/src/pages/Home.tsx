import React, { useEffect } from "react";
import maininit from "../assets/js/scripts";
import About from "./About";
import Experience from "./Experience";
import Board from "./Board";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";

function Home() {
  useEffect(() => {
    maininit();
  }, []);
  return <div id="page-top"></div>;
}

export default Home;
