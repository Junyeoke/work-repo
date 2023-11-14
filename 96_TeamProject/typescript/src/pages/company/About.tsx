import React from 'react'

function About() {
  return (
    <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>

            <section id="subheader" className="jarallax">
                <img src={require('../../assets/images/background/subheader-about.webp')} className="jarallax-img" alt=""/>
                <div className="container z-1000">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subtitle wow fadeInUp mb-3">About us</div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">This is our story</h2>
                        </div>                 
                    </div>
                </div>
            </section>
            
            <section className="no-bottom">
                <div className="container">
                    <div className="row align-items-center gh-5">
                        <div className="col-lg-6 position-relative">
                            <div className="images-deco-1">
                                <img src={require('../../assets/images/misc/building.webp')} className="d-img-1 wow zoomIn" data-wow-delay="0s" alt=""/>
                                <img src={require('../../assets/images/misc/girl-ai.webp')} className="d-img-2 wow zoomIn" data-wow-delay=".5s" alt=""/>
                                <div className="d-img-3 bg-color wow zoomIn" data-wow-delay=".6s"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subtitle mb20">We are Playhost</div>
                            <h2 className="wow fadeInUp">The beginning</h2>
                            <p className="wow fadeInUp">Lorem ipsum ea ut magna nisi amet reprehenderit eu adipisicing nisi incididunt est sint fugiat deserunt tempor ea culpa nostrud commodo deserunt et do ullamco non tempor veniam id culpa mollit veniam ut non adipisicing ad commodo laborum esse do sunt in cillum irure incididunt officia quis ut.</p>
                            <div className="year-card wow fadeInUp">
                                <h1><span className="id-color">25</span></h1>
                                <div className="atr-desc">Years<br/>Experience<br/>Hosting</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section  className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="row gx-5">
                                <div className="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                                    <h4>Our Vision</h4>
                                    <p>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat. Dolor ad amet sed aliqua ad nisi anim fugiat dolor labore ex non amet id mollit amet id magna elit fugiat voluptate aliquip in est quis aliquip aliqua eu. Lorem ipsum irure sed nisi id aute exercitation fugiat.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                                    <h4>Our Mission</h4>
                                    <p>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat. Ut excepteur deserunt labore exercitation commodo exercitation minim aliquip in aliqua deserunt nulla aliquip officia ut eiusmod irure ullamco sunt sunt velit dolor ex. Enim eu proident in non officia culpa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="no-bottom wow fadeInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="subtitle mb20">Our solid team</div>
                            <h2 className="mb20 wow fadeInUp">Behind the scene</h2>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>                                  
                                    <div className="fpw-overlay-btm"></div>
                                    <img src={require('../../assets/images/team/1.webp')} className="fp-image img-fluid" alt=""/>
                                </div>

                                <h4>Robyn Peel</h4>
                                CEO Founder
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>                                  
                                    <div className="fpw-overlay-btm"></div>
                                    <img src={require('../../assets/images/team/3.webp')} className="fp-image img-fluid" alt=""/>
                                </div>

                                <h4>Anna Shepard</h4>
                                Director
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                                <a href="#"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>                                  
                                    <div className="fpw-overlay-btm"></div>
                                    <img src={require('../../assets/images/team/4.webp')} className="fp-image img-fluid" alt=""/>
                                </div>

                                <h4>Fynley Wilkinson</h4>
                                Developer
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-testimonial" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="subtitle mb20">Customer reviews</div>
                            <h2 className="wow fadeInUp">4.85 out of 5</h2>
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="owl-carousel owl-theme wow fadeInUp" id="testimonial-carousel">
                            <div className="item">
                                <div className="de_testi type-2">
                                    <blockquote>
                                        <div className="de-rating-ext">
                                            <span className="d-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <p>"I've been using Playhost for my game server needs, and I couldn't be happier. The server uptime is fantastic, and the customer support team is always quick to assist with any issues."
                                        </p>
                                        <div className="de_testi_by">
                                            <img alt="" src={require('../../assets/images/people/1.jpg')}/> <span>Michael S.</span>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="item">
                                <div className="de_testi type-2">
                                    <blockquote>
                                        <div className="de-rating-ext">
                                            <span className="d-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <p>"Running a game server used to be a hassle, but Playhost makes it easy. The control panel is user-friendly, and I love how they handle server maintenance and updates."</p>
                                        <div className="de_testi_by">
                                            <img alt="" src={require('../../assets/images/people/2.jpg')}/> <span>Robert L.</span>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="item">
                                <div className="de_testi type-2">
                                    <blockquote>
                                        <div className="de-rating-ext">
                                            <span className="d-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <p>"I've tried several hosting providers in the past, and Playhost is by far the best. Their server performance is top-notch, and I've never experienced lag while playing with friends."</p>
                                        <div className="de_testi_by">
                                            <img alt="" src={require('../../assets/images/people/3.jpg')}/> <span>Jake M.</span>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="item">
                                <div className="de_testi type-2">
                                    <blockquote>
                                        <div className="de-rating-ext">
                                            <span className="d-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <p>As a new server owner, I was worried about setup and configuration, but Playhost made it a breeze. They have detailed tutorials and helpful support, which made the process smooth."</p>
                                        <div className="de_testi_by">
                                            <img alt="" src={require('../../assets/images/people/4.jpg')}/> <span>Alex P.</span>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="item">
                                <div className="de_testi type-2">
                                    <blockquote>
                                        <div className="de-rating-ext">
                                            <span className="d-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <p>"The flexibility Playhost offers is incredible. I can easily switch between game servers or even host multiple games on the same plan. It's a gamer's dream come true!"</p>
                                        <div className="de_testi_by">
                                            <img alt="" src={require('../../assets/images/people/5.jpg')}/> <span>Carlos R.</span>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="item">
                                <div className="de_testi type-2">
                                    <blockquote>
                                        <div className="de-rating-ext">
                                            <span className="d-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <p>"I've been a loyal customer of Playhost for years now. Their dedication to keeping their hardware up-to-date ensures my gaming experience is always optimal."</p>
                                        <div className="de_testi_by">
                                            <img alt="" src={require('../../assets/images/people/6.jpg')}/> <span>Edward B.</span>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="item">
                                <div className="de_testi type-2">
                                    <blockquote>
                                        <div className="de-rating-ext">
                                            <span className="d-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <p>"When our community needed a reliable server for our esports tournaments, we turned to Playhost, and they've never let us down. Their servers are perfect for competitive gaming."</p>
                                        <div className="de_testi_by">
                                            <img alt="" src={require('../../assets/images/people/7.jpg')}/> <span>Daniel H.</span>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="item">
                                <div className="de_testi type-2">
                                    <blockquote>
                                        <div className="de-rating-ext">
                                            <span className="d-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <p>"The DDoS protection from Playhost is a lifesaver. We used to get attacked regularly, but since switching to their servers, we haven't had any downtime."</p>
                                        <div className="de_testi_by">
                                            <img alt="" src={require('../../assets/images/people/8.jpg')}/> <span>Bryan G.</span>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                            <div className="de_count text-light wow fadeInUp">
                                <h3 className="timer id-color" data-to="15425" data-speed="3000">0</h3>
                                <h4 className="text-uppercase">Happy<br/>Gamers</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                            <div className="de_count text-light wow fadeInUp">
                                <h3 className="timer text-line" data-to="8745" data-speed="3000">0</h3>
                                <h4 className="text-uppercase">Servers<br/>Ordered</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                            <div className="de_count text-light wow fadeInUp">
                                <h3 className="timer id-color" data-to="235" data-speed="3000">0</h3>
                                <h4 className="text-uppercase">Awards<br/>Winning</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                            <div className="de_count text-light wow fadeInUp">
                                <h3 className="timer text-line" data-to="15" data-speed="3000">0</h3>
                                <h4 className="text-uppercase">Years<br/>Experience</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
  )
}

export default About