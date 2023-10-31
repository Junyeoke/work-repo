import React from "react";
import { Link } from "react-router-dom";

function FooterCom() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-dark  text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between text-light bg-dark p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>준혁의 IT 블로그</span>
          </div>
        </section>

        <section className="text-light bg-dark">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>준혁의 IT 블로그
                </h6>
                <p><i className="bi bi-instagram"></i> www.instargram.com/junyeoke</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">바로가기</h6>
                <p>
                  <a href="/intro" className="text-reset">
                    블로그 소개
                  </a>
                </p>
                <p>
                  <a href="/news" className="text-reset">
                    IT 소식
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    IT 기기리뷰
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    방명록
                  </a>
                </p>
              </div>

            

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  junyeoke@kakao.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> 010 1234 5678
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 background-color: rgba(0, 0, 0, 0.05)">
          © 2023 Copyright: 준혁's Blog
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/"></a>
        </div>
      </footer>
    </div>
  );
}

export default FooterCom;
