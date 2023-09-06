// AddEmp.js
import React from "react";
import { useState } from "react";
import EmpService from "./../../services/EmpService";

function AddEmp() {
  //TODO: 변수정의
  // 임시 객체 정의
  const initialCustomer = {
    id: null,         // 번호
    cname: "",        // 고객이름
    email: "",        // 이메일
    phone: "",        // 전화번호
  };

  // 바인딩 변수
  let [customer, setCustomer] = useState(initialCustomer);    // 백엔드로 전송할 변수
  let [submitted, setSubmitted] = useState(false);            // 저장버튼 클릭여부를 가진 변수

  // 함수 정의
  // 역바인딩 함수
  const handleInputChange = (e) => {
    let attrValue = e.target.value;   // 화면 입력값
    let attrName = e.target.name;     // 화면의 태그 이름
    setCustomer({ ...customer, [attrName]: attrValue });
  };


  // save 함수 : 클릭함수
  // 벡엔드로 객체데이터 저장요청, axios: 공통 저장함수
  const saveCustomer = () => {
    let data = {
      cname: customer.cname,
      email: customer.email,
      phone: customer.phone,
    };

    EmpService.create(data)
      .then((responce) => {
        setCustomer(responce.data);
        setSubmitted(true);
        console.log(responce.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  // 저장버튼 클릭 : 새로운 화면 전환(버튼이 1개 있는 화면)
  const newCustomer = () => {
    setCustomer(initialCustomer);
    setSubmitted(false);
  };
  return (
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCustomer}>
            Add
          </button>
        </div>
      ) : (
        <>
          <div className="row">
            {/* 제목 시작 */}
            <div className="col-md-6 mb-5 mt-5">
              <h1>Add Emp</h1>
            </div>
            {/* 제목 끝 */}
          </div>

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="cname" className="col-form-label">
                  Cname
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="cname"
                  required
                  className="form-control"
                  value={customer.cname}
                  onChange={handleInputChange}
                  placeholder="cname"
                  name="cname"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="email" className="col-form-label">
                  email
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="email"
                  required
                  className="form-control"
                  value={customer.email}
                  onChange={handleInputChange}
                  placeholder="email"
                  name="email"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="phone" className="col-form-label">
                  phone
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="phone"
                  required
                  className="form-control"
                  value={customer.phone}
                  onChange={handleInputChange}
                  placeholder="phone"
                  name="phone"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveCustomer}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddEmp;
