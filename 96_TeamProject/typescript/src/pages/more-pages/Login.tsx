import React from "react";
import { useEffect } from "react";
import customMarquee from "../../assets/js/custom-marquee";

function Login() {
  useEffect(() => {
    customMarquee();
  });
  return (
    <>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section className="v-center jarallax">
          <div className="de-gradient-edge-top"></div>
          <div className="de-gradient-edge-bottom"></div>
          <img
            src={require("../../assets/images/background/2.webp")}
            className="jarallax-img"
            alt=""
          />
          <div className="container z-1000">
            <div className="row align-items-center">
              <div className="col-lg-4 offset-lg-4">
                <div className="padding40 rounded-10 shadow-soft bg-dark-1">
                  <div className="text-center">
                    <h4>Sign in to your account</h4>
                  </div>
                  <div className="spacer-10"></div>
                  <form
                    id="form_register"
                    className="form-border"
                    method="post"
                    action="index.html"
                  >
                    <div className="field-set">
                      <label>Username or email</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                      />
                    </div>
                    <div className="field-set">
                      <label>Password</label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="form-control"
                      />
                    </div>
                    <div className="field-set">
                      <input
                        type="checkbox"
                        checked
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label htmlFor="html">
                        <span className="op-5">Remember me</span>
                      </label>
                      <br />
                    </div>
                    <div className="spacer-20"></div>
                    <div id="submit">
                      <input
                        type="submit"
                        id="send_message"
                        value="Sign In"
                        className="btn-main btn-fullwidth rounded-3"
                      />
                    </div>
                  </form>
                  <div className="title-line">
                    Or&nbsp;login&nbsp;up&nbsp;with
                  </div>
                  <div className="row g-2">
                    <div className="col-lg-6">
                      <a className="btn-sc btn-fullwidth mb10" href="#">
                        <img
                          src={require("../../assets/images/svg/google_icon.svg")}
                          alt=""
                        />
                        Google
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <a className="btn-sc btn-fullwidth mb10" href="#">
                        <img
                          src={require("../../assets/images/svg/google_icon.svg")}
                          alt=""
                        />
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
