import React from 'react'
import { useEffect } from 'react';
import customMarquee from '../../assets/js/custom-marquee';

function Register() {
  useEffect(()=>{
    customMarquee();
  },[])
  return (
    <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            <section className="v-center jarallax">
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
                <img src={require('../../assets/images/background/5.webp')} className="jarallax-img" alt=""/>
                <div className="container z-1000">
                        <div className="row align-items-center">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="p-5 rounded-10 shadow-soft bg-dark-1">
                                    <form name="contactForm" id='contact_form' className="form-border" method="post" action='#'>
                                        <h4>Don't have an account? Register now.</h4>
                                        <p>Welcome to Plahost. We're excited to have you on board. By creating an account with us, you'll gain access to a range of benefits and convenient features that will enhance your car rental experience.</p>
                                        <div className="row">

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Name:</label>
                                                    <input type='text' name='name' id='name' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Email Address:</label>
                                                    <input type='text' name='email' id='email' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Choose a Username:</label>
                                                    <input type='text' name='username' id='username' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Phone:</label>
                                                    <input type='text' name='phone' id='phone' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Password:</label>
                                                    <input type='text' name='password' id='password' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Re-enter Password:</label>
                                                    <input type='text' name='re-password' id='re-password' className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 offset-lg-3 text-center">
                                                <div id='submit'>
                                                    <input type='submit' id='send_message' value='Register Now' className="btn-main color-2"/>
                                                </div>
                                            </div>


                                            <div className="col-md-12">

                                                <div id='mail_success' className='success'>Your message has been sent successfully.</div>
                                                <div id='mail_fail' className='error'>Sorry, error occured this time sending your message.</div>
                                                <div className="clearfix"></div>

                                            </div>

                                            <div className="col-lg-6 offset-lg-3">
                                                <div className="title-line">Or&nbsp;sign&nbsp;up&nbsp;with</div>
                                                <div className="row g-2">
                                                    <div className="col-lg-6">
                                                        <a className="btn-sc btn-fullwidth mb10" href="#"><img src={require('../../assets/images/svg/google_icon.svg')} alt=""/>Google</a>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <a className="btn-sc btn-fullwidth mb10" href="#"><img src={require('../../assets/images/svg/facebook_icon.svg')} alt=""/>Facebook</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            

        </div>
    </>
  )
}

export default Register