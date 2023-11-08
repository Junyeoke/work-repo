import React from 'react'

function Nav() {
  return (
    <>
        <header className="nk-header nk-header-opaque">
      {/* <!-- START: Top Contacts --> */}
      <div className="nk-contacts-top">
        <div className="container">
          <div className="nk-contacts-left">
            <ul className="nk-social-links">
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
          <div className="nk-contacts-right">
            <ul className="nk-contacts-icons">
              <li>
                <a href="#" data-toggle="modal" data-target="#modalSearch">
                  <span className="fa fa-search"></span>
                </a>
              </li>

              <li>
                <a href="#" data-toggle="modal" data-target="#modalLogin">
                  <span className="fa fa-user"></span>
                </a>
              </li>

              <li>
                <span className="nk-cart-toggle">
                  <span className="fa fa-shopping-cart"></span>
                  <span className="nk-badge">27</span>
                </span>
                <div className="nk-cart-dropdown">
                  <div className="nk-widget-post">
                    <a href="store-product.html" className="nk-post-image">
                      <img
                        src="assets/images/product-5-xs.jpg"
                        alt="In all revolutions of"
                      />
                    </a>
                    <h3 className="nk-post-title">
                      <a href="#" className="nk-cart-remove-item"
                        ><span className="ion-android-close"></span
                      ></a>
                      <a href="store-product.html">In all revolutions of</a>
                    </h3>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-price">€ 23.00</div>
                  </div>

                  <div className="nk-widget-post">
                    <a href="store-product.html" className="nk-post-image">
                      <img
                        src="assets/images/product-7-xs.jpg"
                        alt="With what mingled joy"
                      />
                    </a>
                    <h3 className="nk-post-title">
                      <a href="#" className="nk-cart-remove-item"
                        ><span className="ion-android-close"></span
                      ></a>
                      <a href="store-product.html">With what mingled joy</a>
                    </h3>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-price">€ 14.00</div>
                  </div>

                  <div className="nk-gap-2"></div>
                  <div className="text-center">
                    <a
                      href="store-checkout.html"
                      className="nk-btn nk-btn-rounded nk-btn-color-main-1 nk-btn-hover-color-white"
                      >Proceed to Checkout</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- END: Top Contacts -->

      <!--
        START: Navbar

        Additional classNamees:
            .nk-navbar-sticky
            .nk-navbar-transparent
            .nk-navbar-autohide
    --> */}
      <nav className="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide">
        <div className="container">
          <div className="nk-nav-table">
            <a href="index.html" className="nk-nav-logo">
              <img src="assets/images/logo.png" alt="GoodGames" width="199" />
            </a>

            <ul
              className="nk-nav nk-nav-right d-none d-lg-table-cell"
              data-nav-mobile="#nk-nav-mobile"
            >
              <li className="nk-drop-item">
                <a href="elements.html"> Features </a>
                <ul className="dropdown">
                  <li>
                    <a href="elements.html"> Elements (Shortcodes) </a>
                  </li>
                  <li className="nk-drop-item">
                    <a href="forum.html"> Forum </a>
                    <ul className="dropdown">
                      <li>
                        <a href="forum.html"> Forum </a>
                      </li>
                      <li>
                        <a href="forum-topics.html"> Topics </a>
                      </li>
                      <li>
                        <a href="forum-single-topic.html"> Single Topic </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="widgets.html"> Widgets </a>
                  </li>
                  <li>
                    <a href="coming-soon.html"> Coming Soon </a>
                  </li>
                  <li>
                    <a href="offline.html"> Offline </a>
                  </li>
                  <li>
                    <a href="404.html"> 404 </a>
                  </li>
                </ul>
              </li>
              <li className="nk-drop-item">
                <a href="blog-list.html"> Blog </a>
                <ul className="dropdown">
                  <li>
                    <a href="news.html"> News </a>
                  </li>
                  <li className="nk-drop-item">
                    <a href="blog-grid.html"> Blog With Sidebar </a>
                    <ul className="dropdown">
                      <li>
                        <a href="blog-grid.html"> Blog Grid </a>
                      </li>
                      <li>
                        <a href="blog-list.html"> Blog List </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog-fullwidth.html"> Blog Fullwidth </a>
                  </li>
                  <li>
                    <a href="blog-article.html"> Blog Article </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="gallery.html"> Gallery </a>
              </li>
              <li className="nk-drop-item">
                <a href="tournaments.html"> Tournaments </a>
                <ul className="dropdown">
                  <li>
                    <a href="tournaments.html"> Tournament </a>
                  </li>
                  <li>
                    <a href="tournaments-teams.html"> Teams </a>
                  </li>
                  <li>
                    <a href="tournaments-teammate.html"> Teammate </a>
                  </li>
                </ul>
              </li>
              <li className="nk-drop-item">
                <a href="store.html"> Store </a>
                <ul className="dropdown">
                  <li>
                    <a href="store.html"> Store </a>
                  </li>
                  <li>
                    <a href="store-product.html"> Product </a>
                  </li>
                  <li>
                    <a href="store-catalog.html"> Catalog </a>
                  </li>
                  <li>
                    <a href="store-catalog-alt.html"> Catalog Alt </a>
                  </li>
                  <li>
                    <a href="store-checkout.html"> Checkout </a>
                  </li>
                  <li>
                    <a href="store-cart.html"> Cart </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nk-nav nk-nav-right nk-nav-icons">
              <li className="single-icon d-lg-none">
                <a
                  href="#"
                  className="no-link-effect"
                  data-nav-toggle="#nk-nav-mobile"
                >
                  <span className="nk-icon-burger">
                    <span className="nk-t-1"></span>
                    <span className="nk-t-2"></span>
                    <span className="nk-t-3"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- END: Navbar --> */}
    </header>
{/* 
    <!--
    START: Navbar Mobile

    Additional classNamees:
        .nk-navbar-left-side
        .nk-navbar-right-side
        .nk-navbar-lg
        .nk-navbar-overlay-content
--> */}
    <div
      id="nk-nav-mobile"
      className="nk-navbar nk-navbar-side nk-navbar-right-side nk-navbar-overlay-content d-lg-none"
    >
      <div className="nano">
        <div className="nano-content">
          <a href="index.html" className="nk-nav-logo">
            <img src="assets/images/logo.png" alt="" width="120" />
          </a>
          <div className="nk-navbar-mobile-content">
            <ul className="nk-nav">
              {/* <!-- Here will be inserted menu from [data-mobile-menu="#nk-nav-mobile"] --> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- END: Navbar Mobile --> */}
    </>
  )
}

export default Nav