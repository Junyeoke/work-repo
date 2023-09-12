import React from 'react'
import { useState } from 'react';

function AddCustomer() {

  const initialCustomer = {
    cname: "",
    email: "",
    phone: "",
  };

  let [customer, setCustomer] = useState(initialCustomer);

  const handleChange = (e) => { 
    let attrValue = e.target.value;
    let attrName = e.target.name;
    setCustomer({...customer, [attrName]: attrValue});
   }

   const saveCustomer = () => { 
    alert(
      `
      이름 : ${customer.cname}
      이메일 : ${customer.email}
      연락처 : ${customer.phone}

      저장되었습니다.
      `
      );
    }
  return (
    <div className="container submit-form mt-4 ">
      <h3>회원 추가 페이지</h3>
      <div>
        <div className="form-group mt-5 mb-3">
          <label htmlFor="dname">이름</label>
          <input
            type="text"
            className="form-control"
            id="cname"
            required
            value={customer.cname}
            onChange={handleChange}
            name="cname"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="loc">이메일</label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            value={customer.email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="loc">연락처</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            required
            value={customer.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>

        <button onClick={saveCustomer} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddCustomer