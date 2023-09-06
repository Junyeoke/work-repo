import React, { useState } from "react";
import "../assets/chapter15.css";

function Add_Dept() {
  // TODO: 변수정의 (바인딩 변수 : useState())
  // 임시 객체
  const initialDept = {
    dname: "", // 부서명
    loc: "", // 부서위치
  };

  // 바인딩 변수
  // let [변수명, set변수명] = useState(초기값);
  let [dept, setDept] = useState(initialDept); // input의 value : 부서명/부서위치

  // TODO: 함수정의
  // 역바인딩을 위한 함수 필요 : onChange의 함수와 바인딩(개발자가 직접 코딩)
  const handleChange = (event) => {
    // 현재 화면 입력값 : event.target.value
    let attrValue = event.target.value;
    // 현재 화면 태그의 이름 : event.target.name
    let attrName = event.target.name; // 태그의 이름 === 객체의 속성명
    // 스프레드 연산자로 객체 속성 수정
    setDept({ ...dept, [attrName]: attrValue });
  };
  // submit onClick 함수
  const saveDept = () => {
    alert("저장되었습니다.");

  };
  return (
    <div className="submit-form mt-3">
      <div>
        <div className="form-group mb-3">
          <label htmlFor="dname">Dname</label>
          <input
            type="text"
            className="form-control"
            id="dname"
            required
            value={dept.dname}
            onChange={handleChange}
            name="dname"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="loc">Loc</label>
          <input
            type="text"
            className="form-control"
            id="loc"
            required
            value={dept.loc}
            onChange={handleChange}
            name="loc"
          />
        </div>

        <button onClick={saveDept} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Add_Dept;
