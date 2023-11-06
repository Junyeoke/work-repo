import React, { useEffect } from 'react'
import CustomerList from '../../components/basic/customer/CustomerList'
import initMain from '../../assets/js/main'
import AddCustomer from '../../components/basic/customer/AddCustomer';

function AddCustomerPage() {
  useEffect(()=>{
    initMain();
  },[])
  return (
    
    <>
    {/* 여기 */}
    {/* 제목 시작 */}
    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>고객 추가</h2>
        <p>고객 추가는 여기서 할 수 있습니다.</p>
      </div>
    </div>
    {/* <!-- End Breadcrumbs --> */}
    {/* 제목 끝 */}

    {/* <!-- ======= 고객조회 Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          {/* 여기 */}
            <AddCustomer/>
        </div>
      </div>
    </section>
    {/* <!-- End 고객조회 Section --> */}
  </>
  )
}

export default AddCustomerPage