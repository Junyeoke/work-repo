import React from 'react'

function Footer() {
  return (
    <>
       <footer className="nk-footer">
        <div className="container">
          <div className="nk-gap-3"></div>
          <div className="row vertical-gap">
            <div className="col-md-6">
              <div className="nk-widget">
                <h4 className="nk-widget-title">
                  <span className="text-main-1">Contact</span> With Us
                </h4>
                <div className="nk-widget-content">
                  <form
                    action="php/ajax-contact-form.php"
                    className="nk-form nk-form-ajax"
                  >
                    <div className="row vertical-gap sm-gap">
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control required"
                          name="email"
                          placeholder="Email *"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control required"
                          name="name"
                          placeholder="Name *"
                        />
                      </div>
                    </div>
                    <div className="nk-gap"></div>
                    <textarea
                      className="form-control required"
                      name="message"
                      rows={5}
                      placeholder="Message *"
                    ></textarea>
                    <div className="nk-gap-1"></div>
                    <button className="nk-btn nk-btn-rounded nk-btn-color-white">
                      <span>Send</span>
                      <span className="icon"
                        ><i className="ion-paper-airplane"></i
                      ></span>
                    </button>
                    <div className="nk-form-response-success"></div>
                    <div className="nk-form-response-error"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="nk-widget">
                <h4 className="nk-widget-title">
                  <span className="text-main-1">Latest</span> Posts
                </h4>
                <div className="nk-widget-content">
                  <div className="row vertical-gap sm-gap">
                    <div className="col-lg-6">
                      <div className="nk-widget-post-2">
                        <a href="blog-article.html" className="nk-post-image">
                          <img src="assets/images/post-1-sm.jpg" alt="" />
                        </a>
                        <div className="nk-post-title">
                          <a href="blog-article.html"
                            >Smell magic in the air. Or maybe barbecue</a
                          >
                        </div>
                        <div className="nk-post-date">
                          <span className="fa fa-calendar"></span> Sep 18, 2018
                          <span className="fa fa-comments"></span> <a href="#">4</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="nk-widget-post-2">
                        <a href="blog-article.html" className="nk-post-image">
                          <img src="assets/images/post-2-sm.jpg" alt="" />
                        </a>
                        <div className="nk-post-title">
                          <a href="blog-article.html"
                            >Grab your sword and fight the Horde</a
                          >
                        </div>
                        <div className="nk-post-date">
                          <span className="fa fa-calendar"></span> Sep 5, 2018
                          <span className="fa fa-comments"></span> <a href="#">7</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-widget">
                <h4 className="nk-widget-title">
                  <span className="text-main-1">In</span> Twitter
                </h4>
                <div className="nk-widget-content">
                  <div className="nk-twitter-list" data-twitter-count="1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-gap-3"></div>
        </div>

        <div className="nk-copyright">
          <div className="container">
            <div className="nk-copyright-left">
              <a target="_blank" href="https://www.templateshub.net"
                >Templates Hub</a
              >
            </div>
            <div className="nk-copyright-right">
              <ul className="nk-social-links-2">
                <li>
                  <a className="nk-social-rss" href="#"
                    ><span className="fa fa-rss"></span
                  ></a>
                </li>
                <li>
                  <a className="nk-social-twitch" href="#"
                    ><span className="fab fa-twitch"></span
                  ></a>
                </li>
                <li>
                  <a className="nk-social-steam" href="#"
                    ><span className="fab fa-steam"></span
                  ></a>
                </li>
                <li>
                  <a className="nk-social-facebook" href="#"
                    ><span className="fab fa-facebook"></span
                  ></a>
                </li>
                <li>
                  <a className="nk-social-google-plus" href="#"
                    ><span className="fab fa-google-plus"></span
                  ></a>
                </li>
                <li>
                  <a className="nk-social-twitter" href="#" target="_blank"
                    ><span className="fab fa-twitter"></span
                  ></a>
                </li>
                <li>
                  <a className="nk-social-pinterest" href="#"
                    ><span className="fab fa-pinterest-p"></span
                  ></a>
                </li>

                {/* <!-- Additional Social Buttons
                        <li><a className="nk-social-behance" href="#"><span className="fab fa-behance"></span></a></li>
                        <li><a className="nk-social-bitbucket" href="#"><span className="fab fa-bitbucket"></span></a></li>
                        <li><a className="nk-social-dropbox" href="#"><span className="fab fa-dropbox"></span></a></li>
                        <li><a className="nk-social-dribbble" href="#"><span className="fab fa-dribbble"></span></a></li>
                        <li><a className="nk-social-deviantart" href="#"><span className="fab fa-deviantart"></span></a></li>
                        <li><a className="nk-social-flickr" href="#"><span className="fab fa-flickr"></span></a></li>
                        <li><a className="nk-social-foursquare" href="#"><span className="fab fa-foursquare"></span></a></li>
                        <li><a className="nk-social-github" href="#"><span className="fab fa-github"></span></a></li>
                        <li><a className="nk-social-instagram" href="#"><span className="fab fa-instagram"></span></a></li>
                        <li><a className="nk-social-linkedin" href="#"><span className="fab fa-linkedin"></span></a></li>
                        <li><a className="nk-social-medium" href="#"><span className="fab fa-medium"></span></a></li>
                        <li><a className="nk-social-odnoklassniki" href="#"><span className="fab fa-odnoklassniki"></span></a></li>
                        <li><a className="nk-social-paypal" href="#"><span className="fab fa-paypal"></span></a></li>
                        <li><a className="nk-social-reddit" href="#"><span className="fab fa-reddit"></span></a></li>
                        <li><a className="nk-social-skype" href="#"><span className="fab fa-skype"></span></a></li>
                        <li><a className="nk-social-soundcloud" href="#"><span className="fab fa-soundcloud"></span></a></li>
                        <li><a className="nk-social-slack" href="#"><span className="fab fa-slack"></span></a></li>
                        <li><a className="nk-social-tumblr" href="#"><span className="fab fa-tumblr"></span></a></li>
                        <li><a className="nk-social-vimeo" href="#"><span className="fab fa-vimeo"></span></a></li>
                        <li><a className="nk-social-vk" href="#"><span className="fab fa-vk"></span></a></li>
                        <li><a className="nk-social-wordpress" href="#"><span className="fab fa-wordpress"></span></a></li>
                        <li><a className="nk-social-youtube" href="#"><span className="fab fa-youtube"></span></a></li>
                    --> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer