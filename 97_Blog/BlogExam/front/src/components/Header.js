import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <!-- Responsive navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container px-5">
      <Link to="/" class="navbar-brand" >
          💻준혁의 IT 로그
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" >홈으로</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link" >블로그 소개</Link>
        </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                게시판
              </a>
              <ul class="dropdown-menu">
                <li>
                <Link to="/notice" class="dropdown-item" >
                    공지사항
                  </Link>
                </li>
                <li>
                <Link to="/news" class="dropdown-item" >
                    IT 소식
                  </Link>
                </li>
                <li>
                <Link to="/review" class="dropdown-item" >
                    IT 기기리뷰
                  </Link>
                </li>
                <li>
                <Link to="/guestbook" class="dropdown-item" >
                    방명록
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul class="nav justify-content-end">
  <li class="nav-item">
    <Link to="/login" class="nav-link active" aria-current="page">로그인🔒</Link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">회원가입</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">사이트맵</a>
  </li>
</ul>
      </div>
    </nav>
  );
}

export default Header;
