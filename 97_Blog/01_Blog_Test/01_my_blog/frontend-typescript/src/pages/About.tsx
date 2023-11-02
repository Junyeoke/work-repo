import React from "react";

function About() {
  return (
    <div>
      {/* <!-- 블로그소개--> */}
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0" id="typed1">
            &nbsp;
          </h1>

          <div className="subheading mb-5">
             · (010) 4547-9941 ·
            <a href="mailto:name@email.com">junyeoke@kakao.com</a>
          </div>
          <p className="lead mb-5">
            안녕하세요 저의 블로그에 오신것을 환영합니다.
          </p>
          <div className="social-icons">
            <a className="social-icon" href="https://www.instagram.com/junyeoke">
              <i className="fab fa-instagram">https://www.instagram.com/junyeoke</i>
            </a>
            <a className="social-icon" href="https://github.com/Junyeoke">
              <i className="fab fa-github">https://github.com/Junyeoke</i>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
      {/* <!-- 블로그소개 끝--> */}
    </div>
  );
}

export default About;
