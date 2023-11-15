import React, {useEffect} from 'react'
import customMarquee from '../../assets/js/custom-marquee'

function Location() {
  useEffect(()=> {
    customMarquee(); // 얘가 문제...
  },[])
  return (
    <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            
            <section className="jarallax">
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
                <img src={require('../../assets/images/background/bg-grid.webp')} className="jarallax-img" alt=""/>
                <div className="container z-1000">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subtitle wow fadeInUp mb-3">Server locations</div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s"><span className="text-gradient">25</span> servers available worldwide for your game.</h2>
                        </div>
                        <div className="col-lg-6">
                            Take advantage of our server location testing tool to ensure optimal performance. Since your users are spread across various locations, it's important to identify the server location that provides the best experience for your members. Our ping tester can help you determine the ideal server location for your specific needs.
                        </div>


                        <div className="spacer-10"></div>

                        <div className="col-lg-12 wow fadeInUp">
                            <div className="mb-sm-0">
                                <div className="de-map-hotspot">
                                    <div className="de-spot wow fadeIn" style={{top:'39%', left:'20%'}}>
                                        <span>United&nbsp;States</span>
                                        <div className="de-circle-1"></div>
                                        <div className="de-circle-2"></div>
                                    </div>
                                    <div className="de-spot wow fadeIn" style={{top:'76%', left:'87%'}}>
                                        <span>Australia</span>
                                        <div className="de-circle-1"></div>
                                        <div className="de-circle-2"></div>
                                    </div>
                                    <div className="de-spot wow fadeIn" style={{top:'68%', left:'80%'}}>
                                        <span>Indonesia</span>
                                        <div className="de-circle-1"></div>
                                        <div className="de-circle-2"></div>
                                    </div>
                                    <div className="de-spot wow fadeIn" style={{top:'23%', left:'18%'}}>
                                        <span>Canada</span>
                                        <div className="de-circle-1"></div>
                                        <div className="de-circle-2"></div>
                                    </div>
                                    <div className="de-spot wow fadeIn" style={{top:'68%', left:'33%'}}>
                                        <span>Brazil</span>
                                        <div className="de-circle-1"></div>
                                        <div className="de-circle-2"></div>
                                    </div>
                                    <div className="de-spot wow fadeIn" style={{top:'45%', left:'75%'}}>
                                        <span>China</span>
                                        <div className="de-circle-1"></div>
                                        <div className="de-circle-2"></div>
                                    </div>
                                    <div className="de-spot wow fadeIn" style={{top:'36%', left:'48%'}}>
                                        <span>France</span>
                                        <div className="de-circle-1"></div>
                                        <div className="de-circle-2"></div>
                                    </div>
                                    <div className="de-spot wow fadeIn" style={{top:'23%', left:'51%'}}>
                                        <span>Sweden</span>
                                        <div className="de-circle-1"></div>
                                        <div className="de-circle-2"></div>
                                    </div>
                                    <div className="de-spot wow fadeIn" style={{top:'78%', left:'53%'}}>
                                        <span>South&nbsp;Africa</span>
                                        <div className="de-circle-1"></div>
                                        <div className="de-circle-2"></div>
                                    </div>
                                    <img src={require('../../assets/images/misc/world-map.webp')} className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>

                <div className="no-bottom wow fadeInRight d-flex z-1000">
                  <div className="de-marquee-list wow">
                    <div className="d-item">
                      <span className="d-item-txt">London</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Paris</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Frankurt</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Amsterdam</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Stockholm</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Helsinki</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Los Angeles</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Quebec</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Singapore</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Sydney</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Sau Paulo</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Bangkok</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                      <span className="d-item-txt">Jakarta</span>
                      <span className="d-item-display">
                        <i className="d-item-block"></i>
                      </span>
                     </div>
                  </div>
                </div>

            </section>

            <section className="pt0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="padding60 sm-padding40 jarallax position-relative">
                                <img src={require('../../assets/images/background/1.webp')}className="jarallax-img" alt=""/>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="subtitle wow fadeInUp mb-3">Start your game</div>
                                        <h2 className="wow fadeInUp" data-wow-delay=".2s">Unlock Your Gaming Full Potential</h2>
                                        <p className="wow fadeInUp">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore.</p>
                                        <div className="spacer-10"></div>
                                        <a className="btn-main mb10 wow fadeInUp" href="games.html">Order Your Game Server Now</a>
                                    </div>
                                </div>

                                <img src={require('../../assets/images/misc/avatar.webp')} className="sm-hide position-absolute bottom-0 end-0 wow fadeIn"  alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
  )
}

export default Location