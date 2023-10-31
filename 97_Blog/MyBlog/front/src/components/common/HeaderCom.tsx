import React, { useEffect } from "react";
import initMain from "../../assets/js/scripts";

function HeaderCom() {
  useEffect(() => {
    initMain();
  });

  return (
    <div>
      {/* nav 메뉴 시작 */}
      <div className="nav-wrapper bg-dark">
        <nav className="navbar navbar-expand-lg p-2 navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand wow flipInX" href="/">
              {/* <img
                src={require("../../assets/img/mainlogo.png")}
                alt=""
                width="24"
                height="24"
              /> */}
              &nbsp;&nbsp;🙋‍♂️준혁's IT Blog!
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <!-- me-auto : 왼쪽 정렬(여백이 오른쪽에 자동으로 만들어짐) --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* home 시작 */}
                <li className="nav-item me-2">
                  <a className="nav-link active" href="/">
                    🏠Home
                  </a>
                </li>
                {/* home 끝 */}

                {/* 블로그 소개 시작 */}
                <li className="nav-item me-2">
                  <a className="nav-link active" href="/intro">
                    😎블로그 소개
                  </a>
                </li>
                {/* 블로그소개 끝 */}

                {/* 공지사항 시작 */}
                <li className="nav-item me-2">
                  <a className="nav-link active" href="/notice">
                    📢공지사항
                  </a>
                </li>
                {/* 공지사항 끝 */}

                {/* 기초메뉴 시작 */}
                <li className="nav-item menu-toggle dropdown me-2 text-light bg-dark">
                  <a
                    className="sidebar-subject nav-link active "
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    📰게시판
                  </a>
                  <div className="sidebar-wrapper text-light bg-dark">
                    <ul className="sidebar-nav row text-light">
                      {/* <!-- 메뉴:제목 --> */}
                      <li className="dropdown-item col-12 ms-5 mb-2 fw-bolder fs-5 ">
                        IT 게시판
                      </li>
                      {/* <!-- 1행 시작--> */}
                      <li className="sidebar-nav-item col-3 ">
                        <a href="/news" className="nav-link active ms-2">
                        📰IT 뉴스
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/review"
                          className="nav-link active ms-2"
                        >
                          🔎IT 기기리뷰
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 1행 끝--> */}

                      {/* <!-- 2행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/emp-nop" className="nav-link active ms-2">
                          자유게시판
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="/add-emp-nop" className="nav-link active ms-2">
                          방명록
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 2행 끝--> */}

                     
                    </ul>
                  </div>
                </li>
                {/* 기초메뉴 끝 */}
              </ul>
              <ul className="navbar-nav ">
             
                {/* 로그인 시작 */}
                <li className="nav-item">
                  <a className="nav-link active" href="/register">
                    📝회원가입
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/login">
                    🔐로그인
                  </a>
                </li>
                {/* 로그인 끝 */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* nav 메뉴 끝 */}
    </div>
  );
}

export default HeaderCom;
