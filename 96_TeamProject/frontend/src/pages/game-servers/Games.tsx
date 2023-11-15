import React from 'react'
import { useEffect } from 'react';
import form from '../../assets/js/form';

function Games() {
  useEffect(()=> {
    form();
  },[])
  return (
    <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            
            <section className="jarallax">
                <img src={require('../../assets/images/background/3.webp')} className="jarallax-img" alt=""/>
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
                <div className="container z-1000">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="subtitle wow fadeInUp mb-3">Most complete</div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Game Collection</h2>
                            <div className="spacer-20"></div>
                        </div>
                        <div className="col-lg-6">
                            <ul id="filters" className="float-end float-sm-start wow fadeInUp" data-wow-delay="0s">
                                <li><a href="#" data-filter="*" className="selected">All Games</a></li>
                                <li><a href="#" data-filter=".popular">popular</a></li>
                                <li><a href="#" data-filter=".fps">fps</a></li>
                                <li><a href="#" data-filter=".survival">survival</a></li>
                                <li><a href="#" data-filter=".sandbox">sandbox</a></li>
                            </ul>
                        </div>
                    </div>

                    <div id="gallery" className="row g-4">
                        <div className="col-lg-3 col-md-6 item popular survival">
                            <div className="de-item">
                                <div className="d-overlay">
                                    <div className="d-label">
                                        20% OFF
                                    </div>
                                    <div className="d-text">
                                        <h4>Thunder and City</h4>
                                        <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                        <a className="btn-main btn-fullwidth" href="pricing-table-one.html">Order Now</a>
                                    </div>
                                </div>
                                <img src={require('../../assets/images/covers/1.webp')} className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 item sandbox">
                            <div className="de-item">
                                <div className="d-overlay">
                                    <div className="d-label">
                                        20% OFF
                                    </div>
                                    <div className="d-text">
                                        <h4>Mystic Racing Z</h4>
                                        <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                        <a className="btn-main btn-fullwidth" href="pricing-table-one.html">Order Now</a>
                                    </div>
                                </div>
                                <img src={require('../../assets/images/covers/2.webp')} className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 item survival">
                            <div className="de-item">
                                <div className="d-overlay">
                                    <div className="d-label">
                                        20% OFF
                                    </div>
                                    <div className="d-text">
                                        <h4>Silent Wrath</h4>
                                        <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                        <a className="btn-main btn-fullwidth" href="pricing-table-one.html">Order Now</a>
                                    </div>
                                </div>
                                <img src={require('../../assets/images/covers/3.webp')} className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 item popular fps">
                            <div className="de-item">
                                <div className="d-overlay">
                                    <div className="d-label">
                                        20% OFF
                                    </div>
                                    <div className="d-text">
                                        <h4>Funk Dungeon</h4>
                                        <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                        <a className="btn-main btn-fullwidth" href="pricing-table-one.html">Order Now</a>
                                    </div>
                                </div>
                                <img src={require('../../assets/images/covers/4.webp')} className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 item popular">
                            <div className="de-item">
                                <div className="d-overlay">
                                    <div className="d-label">
                                        20% OFF
                                    </div>
                                    <div className="d-text">
                                        <h4>Galactic Odyssey</h4>
                                        <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                        <a className="btn-main btn-fullwidth" href="pricing-table-one.html">Order Now</a>
                                    </div>
                                </div>
                                <img src={require('../../assets/images/covers/5.webp')} className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 item fps">
                            <div className="de-item">
                                <div className="d-overlay">
                                    <div className="d-label">
                                        20% OFF
                                    </div>
                                    <div className="d-text">
                                        <h4>Warfare Legends</h4>
                                        <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                        <a className="btn-main btn-fullwidth" href="pricing-table-one.html">Order Now</a>
                                    </div>
                                </div>
                                <img src={require('../../assets/images/covers/6.webp')} className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 item popular sandbox">
                            <div className="de-item">
                                <div className="d-overlay">
                                    <div className="d-label">
                                        20% OFF
                                    </div>
                                    <div className="d-text">
                                        <h4>Raceway Revolution</h4>
                                        <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                        <a className="btn-main btn-fullwidth" href="pricing-table-one.html">Order Now</a>
                                    </div>
                                </div>
                                <img src={require('../../assets/images/covers/7.webp')} className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 item sandbox">
                            <div className="de-item">
                                <div className="d-overlay">
                                    <div className="d-label">
                                        20% OFF
                                    </div>
                                    <div className="d-text">
                                        <h4>Starborne Odyssey</h4>
                                        <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                        <a className="btn-main btn-fullwidth" href="pricing-table-one.html">Order Now</a>
                                    </div>
                                </div>
                                <img src={require('../../assets/images/covers/8.webp')} className="img-fluid" alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="no-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">                            
                            <div className="subtitle wow fadeInUp mb-3">Do you have</div>
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Any questions?</h2>
                        </div>

                        <div className="clearfix"></div>

                        <div className="col-lg-6">
                            <div className="accordion s2 wow fadeInUp">
                                <div className="accordion-section">
                                    <div className="accordion-section-title" data-tab="#accordion-a1">
                                        What is game hosting?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a1">
                                        <p>Game hosting refers to the process of renting or setting up servers to run multiplayer online games. These servers allow players to connect and play together in the same game world.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-a2">
                                        Why do I need game hosting?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a2">
                                        <p>Game hosting is essential for multiplayer gaming. It provides a dedicated server where players can join, ensuring a smooth and lag-free gaming experience. It also allows you to customize game settings and mods.</p>
                                    </div>                                        
                                    <div className="accordion-section-title" data-tab="#accordion-a3">
                                        How do I choose a game hosting provider?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a3">
                                        <p>Consider factors like server location, performance, scalability, customer support, and price when choosing a game hosting provider. Read reviews and ask for recommendations from fellow gamers.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-a4">
                                        What types of games can I host?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a4">
                                        <p>You can host various types of games, including first-person shooters, role-playing games, survival games, strategy games, and more. The type of game hosting you need depends on the game's requirements.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-a5">
                                        What is server latency or ping?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a5">
                                        <p>Server latency or ping measures the time it takes for data to travel between your computer and the game server. Lower ping values indicate better responsiveness and less lag.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="accordion s2 wow fadeInUp">
                                <div className="accordion-section">
                                    <div className="accordion-section-title" data-tab="#accordion-b1">
                                        How do I manage a game server?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b1">
                                        <p>Game server management varies depending on the hosting provider and game type. Typically, you'll have access to a control panel or command-line interface to configure settings, mods, and player access.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-b2">
                                        Can I run mods on my game server?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b2">
                                        <p>Yes, many game hosting providers support mods. You can install and manage mods to enhance gameplay or customize the game to your liking.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-b3">
                                        What is DDoS protection, and do I need it?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b3">
                                        <p>DDoS (Distributed Denial of Service) protection helps defend your game server from malicious attacks that could disrupt gameplay. It's essential for maintaining server stability, especially for popular games.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-b4">
                                        How much does game hosting cost?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b4">
                                        <p>Game hosting costs vary depending on the provider, server type, and game. Prices can range from a few dollars per month for small servers to hundreds for high-performance dedicated servers.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-b5">
                                        Is there 24/7 customer support?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b5">
                                        <p>Many reputable game hosting providers offer 24/7 customer support to assist with technical issues and server management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
        </div>
    </>
  )
}

export default Games