import React, { useState } from "react";
// TODO : 연습문제 ) 객체를 사용하는 형태로 코딩하세요
// TODO: useState() 1번만 사용하고 객체 변수 만들고, handleChange 함수만 코딩하기

function E_Object_SignUp_Exam() {
    // 변수 정의
    // 객체 정의
    let initialCustomer = {
        name: "",
        password: "",
        email:"",
        phone:"",
        address:""
    }

    // 정방향 바인딩 변수
    let [customer, setCustomer] = useState(initialCustomer);

    // 함수정의
    // 역방향 바인딩 함수 코딩
    const handleChange = (event) => {
        // 화면의 변경값
        let attrValue = event.target.value;
        // 화면 태그 이름
        let attrName = event.target.name;
        // 스프레드 연산자를 이용하여 속성값 변경
        setCustomer({...customer, [attrName]:attrValue});
    };

    // 클릭 이벤트 함수
    const handleSubmit = (event) => {
        // 기본 기능 중지
        event.preventDefault();
        alert(`
        이름 : ${customer.name}
        password : ${customer.password}
        email : ${customer.email}
        phone : ${customer.phone}
        address : ${customer.address}
        `);
    };


  return (
    <div className="container">
      <form>
        {/* 이름시작 */}
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={customer.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        {/* 이름 끝 */}

        <br />
        {/* 페스워드 시작 */}
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={customer.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        {/* 페스워드 끝 */}

        <br />
        {/* 이메일 시작 */}
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={customer.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        {/* 이메일 끝 */}

        <br />
        {/* phone 시작 */}
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={customer.phone}
            name="phone"
            onChange={handleChange}
          />
        </label>
        {/* phone 끝 */}

        <br />
        {/* 주소 시작 */}
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={customer.address}
            name="address"
            onChange={handleChange}
          />
        </label>
        {/* 주소 끝 */}

        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
      </form>
    </div>
  );
}

export default E_Object_SignUp_Exam;
