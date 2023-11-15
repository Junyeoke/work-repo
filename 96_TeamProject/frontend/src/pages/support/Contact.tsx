import React from 'react'
import { useEffect } from 'react';
import form from '../../assets/js/form';
import recaptcha from '../../assets/js/recaptcha';

function Contact() {
  useEffect(()=> {
    form();
    recaptcha();
  })
  return (
    <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            {/* <!-- section begin --> */}
            <section id="subheader" className="jarallax">
                <img src={require('../../assets/images/background/subheader-contact.webp')} className="jarallax-img" alt=""/>
                <div className="container z-1000">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subtitle wow fadeInUp mb-3">Do you have</div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Any questions?</h2>
                        </div>                 
                    </div>
                </div>
            </section>
            {/* <!-- section close --> */}

            <section>
                <div className="container position-relative z1000">
                    <div className="row">

                        <div className="col-lg-10 offset-lg-1">

                            <p className="lead">
                            Please read our <a href="faq.html">faq page</a> first. 
                            If you got any questions, please do not hestitae to send us a message.
                            </p>


                            <form name="contactForm" id="contact_form" className="position-relative z1000" method="post" action="#">
                                <div className="row gx-4">
                                    <div className="col-lg-6 mb10">
                                        <div className="field-set">
                                            <span className="d-label">Name</span>
                                            <input type="text" name="Name" id="name" className="form-control" placeholder="Your Name" required/>
                                        </div>

                                        <div className="field-set">
                                            <span className="d-label">Email</span>
                                            <input type="text" name="Email" id="email" className="form-control" placeholder="Your Email" required/>
                                        </div>

                                        <div className="field-set">
                                            <span className="d-label">Phone</span>
                                            <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" required/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="field-set mb20">
                                            <span className="d-label">Message</span>
                                            <textarea name="message" id="message" className="form-control" placeholder="Your Message" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                    
                                
                                <div className="g-recaptcha" data-sitekey="insert-sitekey-here"></div>
                                <div id='submit' className="mt20">
                                    <input type='submit' id='send_message' value='Send Message' className="btn-main"/>
                                </div>

                                <div id="success_message" className='success'>
                                    Your message has been sent successfully. Refresh this page if you want to send more messages.
                                </div>
                                <div id="error_message" className='error'>
                                    Sorry there was an error sending your form.
                                </div>
                            </form>

                            </div>
                    </div>
                </div>
            </section>

        </div>
    </>
  )
}

export default Contact