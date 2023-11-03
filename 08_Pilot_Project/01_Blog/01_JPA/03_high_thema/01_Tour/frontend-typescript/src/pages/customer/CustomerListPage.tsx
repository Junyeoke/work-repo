import React, {useEffect} from 'react'
import CustomerList from '../../components/basic/customer/CustomerList'
import initCustom from '../../assets/js/custom'
import initScripts from '../../assets/js/scripts';

function CustomerListPage() {
  useEffect(()=>{
    initCustom();
    initScripts();
  },[])
  return (
    <>
      {/* 테마 디자인 적용 : 컨택트 소스 */}
      {/* 테마 제목 시작 */}
      <div className="hero hero-inner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mx-auto text-center">
            <div className="intro-wrap">
              <h1 className="mb-0">고객 조회</h1>
              <p className="text-white">
               여기에서 고객 정보를 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* 테마 제목 끝 */}

    {/* 본문 시작 */}
    <div className="untree_co-section">
      <div className="container">
        <div className="row">
          <CustomerList/>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <form className="contact-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="text-black" htmlFor="fname">First name</label>
                    <input type="text" className="form-control" id="fname" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="text-black" htmlFor="lname">Last name</label>
                    <input type="text" className="form-control" id="lname" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="text-black" htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="form-group">
                <label className="text-black" htmlFor="message">Message</label>
                <textarea
                  name=""
                  className="form-control"
                  id="message"
                  cols={30}
                  rows={5}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-lg-5 ml-auto">
            <div className="quick-contact-item d-flex align-items-center mb-4">
              <span className="flaticon-house"></span>
              <address className="text">
                155 Market St #101, Paterson, NJ 07505, United States
              </address>
            </div>
            <div className="quick-contact-item d-flex align-items-center mb-4">
              <span className="flaticon-phone-call"></span>
              <address className="text">+1 202 2020 200</address>
            </div>
            <div className="quick-contact-item d-flex align-items-center mb-4">
              <span className="flaticon-mail"></span>
              <address className="text">@info@mydomain.com</address>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* 본문 끝 */}

    </>
  )
}

export default CustomerListPage