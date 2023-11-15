import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomePage2 from "./pages/homepage/HomePage2";
import HomePage3 from "./pages/homepage/HomePage3";
import HomePage4 from "./pages/homepage/HomePage4";
import HomePage5 from "./pages/homepage/HomePage5";
import Games from "./pages/game-servers/Games";
import PricingTableOne from "./pages/game-servers/PricingTableOne";
import PricingTableTwo from "./pages/game-servers/PricingTableTwo";
import PricingTableThree from "./pages/game-servers/PricingTableThree";
import Location from "./pages/location/Location";
import Knowledgebase from "./pages/support/Knowledgebase";
import Faq from "./pages/support/Faq";
import Contact from "./pages/support/Contact";
import News from "./pages/news/News";
import About from "./pages/company/About";
import Affliate from "./pages/company/Affliate";
import Login from "./pages/more-pages/Login";
import Register from "./pages/more-pages/Register";
import NewsSingle from "./pages/news/NewsSingle";
import Elements from "./pages/Elements";
import Cart from "./pages/shop/CartList";
import CheckOut from "./pages/payment/Checkout";
import { SuccessPage } from "./pages/payment/Success";
import Fail from './pages/payment/Fail';
import CartList from "./pages/shop/CartList";


function App() {
  return (
    <div className="dark-scheme">
      <div id="wrapper">
        {/* scroll to top 왼쪽 */}
        <div className="float-text show-on-scroll">
          <span>
            <a href="#">Scroll to top</a>
          </span>
        </div>
        <div className="scrollbar-v show-on-scroll"></div>
        {/* <!-- page preloader begin --> */}
        <div id="de-loader"></div>
        {/* <!-- page preloader close --> */}

        {/* 공통 부분 Header */}
        <Header />

        {/* Router */}
        <Routes>
          {/* HomePage */}
          <Route path="/" element={<Index />} />
          <Route path="/homepage2" element={<HomePage2 />} />
          <Route path="/homepage3" element={<HomePage3 />} />
          <Route path="/homepage4" element={<HomePage4 />} />
          <Route path="/homepage5" element={<HomePage5 />} />

          {/* Game Servers */}
          <Route path="/games" element={<Games />} />
          <Route path="/pricing-table-one" element={<PricingTableOne />} />
          <Route path="/pricing-table-two" element={<PricingTableTwo />} />
          <Route path="/pricing-table-three" element={<PricingTableThree />} />

          {/* Location */}
          <Route path="/location" element={<Location />} />
        
        {/* Support */}
          <Route path="/knowledgebase" element={<Knowledgebase />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />

          {/* News */}
          <Route path="/news" element={<News />} />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/affliate" element={<Affliate />} />

          {/* more-pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 나머지 않쓰이는? 것들인가 */}
          <Route path="/elements" element={<Elements />} />
          <Route path="/news-single" element={<NewsSingle />} />

          {/* shop */}
          <Route path="/cart" element={<CartList />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/fail" element={<Fail />} />


        </Routes>


        {/* 공통 부분 Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
