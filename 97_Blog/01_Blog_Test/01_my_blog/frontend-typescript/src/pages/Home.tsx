import React, { useEffect } from "react";
import maininit from "../assets/js/scripts";
import typed from "../assets/js/typed";

function Home() {
  useEffect(() => {
    maininit();
    typed();
  }, []);
  return (
    <div id="page-top">
      {/* <!-- Page Content--> */}
      <div className="container-fluid p-0">
        {/* <!-- 블로그소개--> */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0" id="typed1">&nbsp;</h1>

            <div className="subheading mb-5">
              instagram.com/junyeoke · (010) 4547-9941 ·
              <a href="mailto:name@email.com">junyeoke@kakao.com</a>
            </div>
            <p className="lead mb-5">
              안녕하세요 저의 블로그에 오신것을 환영합니다.
            </p>
            <div className="social-icons">
              <a className="social-icon" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* <!-- 블로그소개 끝--> */}

        {/* <!-- 보유기술 시작--> */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-3">Skills</h2>
            <h4 className="mb-5">
              개발자가 되기 위해 아래의 기술들을 공부하였습니다.
            </h4>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Senior Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2013 - Present</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">December 2011 - March 2013</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Junior Web Designer</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">July 2010 - December 2011</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Design Intern</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">September 2008 - June 2010</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* <!-- 보유기술 끝--> */}

        {/* <!-- 자유게시판 시작--> */}
        <section className="resume-section" id="board">
          <div className="resume-section-content">
            <h2 className="mb-5">자유게시판</h2>
            자유게시판 표시
          </div>
        </section>
        <hr className="m-0" />
        {/* <!-- 자유게시판 끝--> */}

        {/* <!-- 방명록 시작--> */}
        <section className="resume-section" id="guest">
          <div className="resume-section-content">
            <h2 className="mb-5">방명록</h2>
            방명록 내용 표시
          </div>
        </section>
        {/* <!-- 방명록 끝--> */}
      </div>
    </div>
  );
}

export default Home;
