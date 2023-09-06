import { useState } from "react";
import React from "react";

function C_Object_SignUp() {
    // TODO: 변수 정의
    // 객체 정의
    let initialCustomer = {
        name: "",
        gender: "남자"

    }

    // 정방향 바인딩 변수
    let [customer, setCustomer] = useState(initialCustomer);

    // TODO: 함수 정의
    // 역방향 바인딩 함수 코딩
    // nfn
    const handleChange = (event) => { 
        // 화면의 변경값 = event.target.value
        // 화면에 변경하고 있는 태그 = event.target.name
        // 예) input 변경하고 있음 = input.name = name
        //     select 변경하고 있음 = select.name = gender
        // name === customer.name 속성명 같음
        // gender === customer.gender 속성명 같음
        let attrValue = event.target.value; // 화면 변경값
        let attrName = event.target.name; // 화면 태그 이름
        // customer 객체의 속성의 값을 수정
        // 모던js === 이크마js === ES6 js 스프레드 연선자 (...연산자)
        setCustomer({...customer, [attrName]: attrValue })
     }

    //  클릭이벤트 함수
    const handleSubmit = (event) => { 
        event.preventDefault(); // 기본기능 중지
        alert(`이름 : ${customer.name} 성별 : ${customer.gender}`)
     }

  return (
    <div className="container">
      <form>
        {/* 이름 시작 */}
        <label>
          이름:
          {/* 데이터 바인딩 : value={name} 
           name = "aaa" -> 화면 "aaa"
        */}
          <input
            type="text"
            value={customer.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        {/* 이름 끝 */}
        <br />
        {/* 성별 시작 */}
        <label>
          성별:
          {/* value : 먼저 선택된값 */}
          <select value={customer.gender} name="gender" onChange={handleChange}>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </label>
        {/* 성별 끝 */}
        {/* 버튼시작 */}
        <button type="submit" onClick={handleSubmit}>
          제출
        </button>
        {/* 버튼 끝 */}
      </form>
    </div>
  );
}

export default C_Object_SignUp;
