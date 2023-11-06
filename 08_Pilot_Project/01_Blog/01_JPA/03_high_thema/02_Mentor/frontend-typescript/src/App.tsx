// todo: 외부 lib import
// 개발자 CSS
import "./assets/css/style.css";
// aos css import
import "aos/dist/aos.css";
// swiper css import
import "swiper/swiper-bundle.css";

import "./assets/css/style.css";

// todo: 리액트 import
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderCom from './components/common/HeaderCom';
import FooterCom from './components/common/FooterCom';
import Home from './pages/Home';
import NotFound from './components/common/NotFound';

import initMain from "./assets/js/main";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Trainers from "./pages/Trainers";
import Events from "./pages/Events";
import Pricing from "./pages/Pricing";
import CustomerListPage from "./pages/customer/CustomerListPage";
import AddCustomerPage from "./pages/customer/AddCustomerPage";
import CustomerPage from "./pages/customer/CustomerPage";
import QnaListPage from "./pages/qna/QnaListPage";
import AddQnaPage from "./pages/qna/AddQnaPage";
import QnaPage from "./pages/qna/QnaPage";


function App() {
  useEffect(()=>{
    initMain();
  },[])
  
  return (
    <div className="App">
      {/* 머리말 */}
      <HeaderCom/>

      {/* 본문 */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/trainers' element={<Trainers/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        {/* customer */}
        <Route path='/customer' element={<CustomerListPage/>}/>
        <Route path='/add-customer' element={<AddCustomerPage/>}/>
        <Route path='/customer/:cid' element={<CustomerPage/>}/>
        {/* qna */}
        <Route path='/qna' element={<QnaListPage/>}/>
        <Route path='/add-qna' element={<AddQnaPage/>}/>
        <Route path='/qna/:qno' element={<QnaPage/>}/>
      </Routes>

      {/* 꼬리말 */}
      <FooterCom/>
    </div>
  );
}

export default App;
