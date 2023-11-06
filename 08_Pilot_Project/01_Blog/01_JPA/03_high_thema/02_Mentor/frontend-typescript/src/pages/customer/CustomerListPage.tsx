// CustomerListPage.tsx : rfce
import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import CustomerList from "../../components/basic/customer/CustomerList";

function CustomerListPage() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    <>
      {/* 여기 */}
      {/* 제목 시작 */}
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>고객 조회</h2>
          <p>고객 조회는 여기서 할 수 있습니다.</p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}
      {/* 제목 끝 */}

      {/* <!-- ======= 고객조회 Section ======= --> */}
      <section id="contact" className="contact">
        {/* 구글맵 시작 */}
        <div data-aos="fade-up">
          <iframe
            style={{ border: 0, width: 100 + "%", height: 350 + "px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        {/* 구글맵 끝 */}

        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            {/* 여기 */}
            <CustomerList />
          </div>
        </div>
      </section>
      {/* <!-- End 고객조회 Section --> */}
    </>
  );
}

export default CustomerListPage;