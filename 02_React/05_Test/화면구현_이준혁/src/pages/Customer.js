import React from "react";
import { useState } from "react";

function Customer() {
  const initialCustomer = [
    {
      cid: 1,
      cname: "홍길동",
      email: "hong@naver.com",
      phone: "010-1234-5678",
    },
    {
      no: 2,
      cname: "장길산",
      email: "jang@naver.com",
      phone: "010-1234-5678",
    },
    {
      no: 3,
      cname: "임꺽정",
      email: "lim@naver.com",
      phone: "010-1234-5678",
    },
  ];
  // 바인딩 변수
  let [customer, setCustomer] = useState(initialCustomer);
  return (
  <div className="container mt-5">
    <h4>회원 리스트</h4>
    
    <div className="col-md-12 mt-5">
        {/* table start */}
        <table className="table">
          {/* 테이블 제목 시작 */}
          <thead className="table-light">
            <tr>
              <th scope="col">이름</th>
              <th scope="col">이메일</th>
              <th scope="col">연락처</th>
            </tr>
          </thead>
          {/* 테이블 제목 끝 */}
          <tbody>
            {/* 반복문 시작 */}
            {
              customer.map((data, index) => (
                <tr key={index}>
                  <td>{data.cname}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                </tr>
              ))}
            {/* 반복문 끝 */}
          </tbody>
        </table>
        {/* table end */}
      </div>
    
  </div>
  )
};

export default Customer;
