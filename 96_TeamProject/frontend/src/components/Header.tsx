// TODO : Link 를 사용하면 랜더링 문제가 생김

import React, { useEffect } from "react";
import customMarquee from "../assets/js/custom-marquee";
import customSwiper1 from "../assets/js/custom-swiper-1";

function Header() {
  useEffect(() => {
    customMarquee();
    customSwiper1();
  }, []);

  return (
    <div>
      {/* <!-- header begin --> */}
      <header className="transparent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div className="de-flex-col">
                    {/* <!-- logo begin --> */}
                    <div id="logo">
                      <a href="/">
                        <img
                          className="logo-main"
                          src="images/logo.png"
                          alt=""
                        />
                        <img
                          className="logo-mobile"
                          src="images/logo-mobile.png"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* <!-- logo close --> */}
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <a className="menu-item" href="/">
                        Home
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="/">
                            Homepage One
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/homepage2">
                            Homepage Two
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/homepage3">
                            Homepage Three
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/homepage4">
                            Homepage Four
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/homepage5">
                            Homepage Five
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="/games">
                        Game Servers
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="/games">
                            Games Server List
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/pricing-table-one">
                            Pricing Table One
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/pricing-table-two">
                            Pricing Table Two
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/pricing-table-three">
                            Pricing Table Three
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="/location">
                        Location
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="#">
                        Support
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="/knowledgebase">
                            Knowledgebase
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/faq">
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="/news">
                        News
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="#">
                        Company
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="/about">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/affliate">
                            Affliates
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="#">
                        More Pages
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="/login">
                            Login
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/register">
                            Register
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="de-flex-col">
                  <div className="menu_side_area">
                    <a href="/cart" className="btn-line">
                      장바구니
                    </a>
                    <span id="menu-btn"></span>&nbsp;&nbsp;
                    <a href="/games" className="btn-line">
                      로그인
                    </a>
                    <span id="menu-btn"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header close --> */}
    </div>
  );
}

export default Header;
