import React from "react";
import { useEffect } from "react";
import customMarquee from "../assets/js/custom-marquee";
import customSwiper1 from "../assets/js/custom-swiper-1";

function Footer() {
  useEffect(() => {
    customMarquee();
    customSwiper1();
  }, []);
  return (
    <>
      {/* <!-- ` begin --> */}
      <footer style={{backgroundColor : 'black'}}>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4">
              <img src={require('../assets/images/logo.png')} alt="" />
              <div className="spacer-20"></div>
              <p>
                Lorem ipsum culpa tempor tempor eu laboris adipisicing sunt
                excepteur enim laborum officia eiusmod laborum sint do aliqua
                incididunt est aute deserunt in elit non sed ut velit ullamco
                aliquip. Nulla cupidatat elit amet sed labore ut et consequat
                nostrud laboris aliqua ex est fugiat quis aliqua duis quis esse
                dolor laboris non duis sunt.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="widget">
                    <h5>Game Server</h5>
                    <ul>
                      <li>
                        <a href="#">Thunder and City</a>
                      </li>
                      <li>
                        <a href="#">Mystic Racing Z</a>
                      </li>
                      <li>
                        <a href="#">Silent Wrath</a>
                      </li>
                      <li>
                        <a href="#">Funk Dungeon</a>
                      </li>
                      <li>
                        <a href="#">Galactic Oddsey</a>
                      </li>
                      <li>
                        <a href="#">Warfare Legend</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="widget">
                    <h5>Pages</h5>
                    <ul>
                      <li>
                        <a href="/games">Game Server</a>
                      </li>
                      <li>
                        <a href="/knowledgebase">Knowledgebase</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/affliate">Affliates</a>
                      </li>
                      <li>
                        <a href="/location">Locations</a>
                      </li>
                      <li>
                        <a href="/news">News</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget">
                <h5>Newsletter</h5>
                <form
                  action="blank.php"
                  className="row form-dark"
                  id="form_subscribe"
                  method="post"
                  name="form_subscribe"
                >
                  <div className="col text-center">
                    <input
                      className="form-control"
                      id="txt_subscribe"
                      name="txt_subscribe"
                      placeholder="enter your email"
                      type="text"
                    />{" "}
                    <a href="#" id="btn-subscribe">
                      <i className="arrow_right bg-color-secondary"></i>
                    </a>
                    <div className="clearfix"></div>
                  </div>
                </form>
                <div className="spacer-10"></div>
                <small>Your email is safe with us. We don't spam.</small>
                <div className="spacer-30"></div>
                <div className="widget">
                  <h5>Follow Us on</h5>
                  <div className="social-icons">
                    <a href="/https://www.facebook.com/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/?lang=ko">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://discord.com/">
                      <i className="fa-brands fa-discord"></i>
                    </a>
                    <a href="https://www.tiktok.com/ko-KR/">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="https://www.youtube.com/">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                Copyright 2023 - Playhost by Designesia
              </div>
              <div className="col-lg-6 col-sm-6 text-lg-end text-sm-start">
                <ul className="menu-simple">
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer close --> */}
    </>
  );
}

export default Footer;
