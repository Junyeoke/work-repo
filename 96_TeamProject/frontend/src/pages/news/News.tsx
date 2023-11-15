import React from 'react'

function News() {
  return (
    <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            {/* <!-- section begin --> */}
            <section id="subheader" className="jarallax">
                <img src={require('../../assets/images/background/subheader-news.webp')} className="jarallax-img" alt=""/>
                <div className="container z-1000">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subtitle wow fadeInUp mb-3">Latest From Us</div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">News &amp; Promo</h2>
                        </div>                 
                    </div>
                </div>
            </section>
            {/* <!-- section close --> */}

            <section id="section-content" aria-label="section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 mb10">
                            <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <div className="d-tagline">
                                                <span>games</span>
                                                <span>guide</span>
                                            </div>
                                            <img alt="" src={require('../../assets/images/news/1.webp')} className="lazy"/>
                                        </div>
                                        <div className="post-text">
                                            <div className="d-date">25.10.2023</div>
                                            <h4><a href="news-single.html">How to Set Up Your Own Game Server<span></span></a></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb10">
                            <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <div className="d-tagline">
                                                <span>games</span>
                                                <span>guide</span>
                                            </div>
                                            <img alt="" src={require('../../assets/images/news/2.webp')} className="lazy"/>
                                        </div>
                                        <div className="post-text">
                                            <div className="d-date">25.10.2023</div>
                                            <h4><a href="news-single.html">Rise in Demand for Private Game Servers<span></span></a></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb10">
                            <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <div className="d-tagline">
                                                <span>games</span>
                                                <span>guide</span>
                                            </div>
                                            <img alt="" src={require('../../assets/images/news/3.webp')} className="lazy"/>
                                        </div>
                                        <div className="post-text">
                                            <div className="d-date">25.10.2023</div>
                                            <h4><a href="news-single.html">Top Hosting Providers for Game Servers<span></span></a></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb10">
                            <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <div className="d-tagline">
                                                <span>games</span>
                                                <span>guide</span>
                                            </div>
                                            <img alt="" src={require('../../assets/images/news/4.webp')} className="lazy"/>
                                        </div>
                                        <div className="post-text">
                                            <div className="d-date">25.10.2023</div>
                                            <h4><a href="news-single.html">E-Sports and Competitive Gaming<span></span></a></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb10">
                        <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <div className="d-tagline">
                                                <span>games</span>
                                                <span>guide</span>
                                            </div>
                                            <img alt="" src={require('../../assets/images/news/5.webp')} className="lazy"/>
                                        </div>
                                        <div className="post-text">
                                            <div className="d-date">25.10.2023</div>
                                            <h4><a href="news-single.html">How to Protecting Your Online World<span></span></a></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb10">
                            <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <div className="d-tagline">
                                                <span>games</span>
                                                <span>guide</span>
                                            </div>
                                            <img alt="" src={require('../../assets/images/news/6.webp')} className="lazy"/>
                                        </div>
                                        <div className="post-text">
                                            <div className="d-date">25.10.2023</div>
                                            <h4><a href="news-single.html">5 Ways to Maintain a Good Posture<span></span></a></h4>
                                            <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="spacer-single"></div>
                                
                        <div className="col-md-12">
                            <ul className="pagination">
                                <li><a href="#">Prev</a></li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default News