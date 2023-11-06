// HeaderCom.tsx : rfce
import React from "react";
import { Link } from "react-router-dom";

function HeaderCom() {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="/">Mentor</Link>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <Link to="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></Link>--> */}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/trainers">Trainers</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              {/* customer 메뉴 시작 */}
              <li className="dropdown">
                {/* 대메뉴 시작 */}
                <Link to="#">
                  <span>고객</span> <i className="bi bi-chevron-down"></i>
                </Link>
                {/* 대메뉴 끝 */}
                {/* 중메뉴 시작 */}
                <ul>
                  {/* 중메뉴 #1 */}
                  <li>
                    <Link to="/customer">고객 조회</Link>
                  </li>
                  {/* 중메뉴 #2 */}
                  <li>
                    <Link to="/add-customer">고객 추가</Link>
                  </li>
                </ul>
                {/* 중메뉴 끝 */}
              </li>
              {/* customer 메뉴 끝 */}
              {/* QnA 메뉴 시작 */}
              <li className="dropdown">
                {/* 대메뉴 시작 */}
                <Link to="#">
                  <span>Q & A</span> <i className="bi bi-chevron-down"></i>
                </Link>
                {/* 대메뉴 끝 */}
                {/* 중메뉴 시작 */}
                <ul>
                  {/* 중메뉴 #1 */}
                  <li>
                    <Link to="/qna">QnA 조회</Link>
                  </li>
                  {/* 중메뉴 #2 */}
                  <li>
                    <Link to="/add-qna">QnA 추가</Link>
                  </li>
                </ul>
                {/* 중메뉴 끝 */}
              </li>
              {/* Qna 메뉴 끝 */}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

          <Link to="courses.html" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}

export default HeaderCom;
