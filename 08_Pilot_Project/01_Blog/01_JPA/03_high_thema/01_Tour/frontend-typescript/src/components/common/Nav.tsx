import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      {/* <!-- 머리말 시작 --> */}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      {/* <!-- 머리말 끝 --> */}
      {/* <!-- 메뉴시작 --> */}
      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <Link to="/" className="logo m-0">
              Tour <span className="text-primary">.</span>
            </Link>

            {/* 메뉴들 시작 */}
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              {/* 드롭다운 메뉴 */}
              <li className="has-children">
                <a href="#">Dropdown</a>
                <ul className="dropdown">
                  <li>
                    <Link to="/elements">Elements</Link>
                  </li>
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              {/* 서비스 시작*/}
              <li>
                <Link to="/services">Services</Link>
              </li>
              {/* 서비스 끝 */}

              {/* 고객 시작 */}
              <li className="has-children">
                <Link to="#">고객</Link>
                <ul className="dropdown">
                  {/* 1st 드롭 메뉴 */}
                  <li>
                    <Link to="/customer">고객 조회</Link>
                  </li>
                  {/* 2nd 드롭 메뉴 */}
                  <li>
                    <Link to="/add-customer">고객 추가</Link>
                  </li>
                  
                </ul>
              </li>
              {/* 고객 끝 */}

              
              {/* QnA 시작 */}
              <li className="has-children">
                <Link to="#">QnA</Link>
                <ul className="dropdown">
                  {/* 1st 드롭 메뉴 */}
                  <li>
                    <Link to="/qna">QnA 조회</Link>
                  </li>
                  {/* 2nd 드롭 메뉴 */}
                  <li>
                    <Link to="/add-qna">QnA 추가</Link>
                  </li>
                  
                </ul>
              </li>
              {/* 고객 끝 */}

              {/* about 시작 */}
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* about 끝 */}

              {/* contact 시작 */}
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              {/* contact 끝 */}
            </ul>

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>
      {/* <!-- 메뉴 끝 --> */}
    </>
  );
}

export default Nav;
