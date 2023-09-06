// AddDept.js : dept 추가페이지
import React from "react";
import { useState } from "react";
import DeptService from "../../services/DeptService";

function AddDept() {
  // TODO: 변수정의
  // 임시 객체 정의
  const initialDept = {
    id: null, // 부서번호
    dname: "", // 부서명
    loc: "", // 부서위치
  };

  // 바인딩 변수
  let [dept, setDept] = useState(initialDept); // 벡엔드로 전송할 변수(insert 요청)
  let [submitted, setSubmitted] = useState(false); // 저장버튼 클릭여부를 가진 변수

  // TODO: 함수정의
  // 역바인딩 함수 : onChange={handleInputChange}
  // 찾기/바꾸기  : ctrl + r
  // 찾기         : ctrl + f
  const handleInputChange = (event) => {
    //
    let attrValue = event.target.value; // 화면 입력값
    let attrName = event.target.name; // 화면의 태그 이름(객체의 속성명)
    // 스트레드 연산자로 속성의 값을 수정
    setDept({ ...dept, [attrName]: attrValue });
  };

  // save 함수 : 클릭함수
  // 벡엔드로 객체데이터(dept) 저장요청, axios : 공통저장함수(create)
  const saveDept = () => {
    // 임시 저장용 객체
    let data = {
      dname: dept.dname, // 화면 입력값(부서명)
      loc: dept.loc, // 화면 입력값(부서위치)
    };

    DeptService.create(data) // 저장요청(부서객체)
      .then((response) => {       // 성공하면 자동실행
        setDept(response.data); // 벡엔드에서 저장한 객체를 받아서 변수에 저장
        setSubmitted(true); // 저장버튼 클릭 + 저장 성공(false -> true)
        // 로그
        console.log(response.data);
      })
      .catch((e) => {         // 실패하면 자동실행
        console.log(e); // 에러 메세지 출력
      });
  };

  // 저장버튼 클릭 : 새로운 화면 전환(버튼이 1개 있는 화면)
  // 삼항연산자의 다른화면이 출력(submitted == true 일때)

  const newDept = () => { 
    // 역할 : 변수 초기화 (객체, submmited == false 로)
    setDept(initialDept);
    setSubmitted(false);
   }

  return (
    <div className="row">
      {/* 변수(submitted)? 참:거짓 */}
      {submitted ? (
        // submitted = true : 저장버튼을 클릭했다는 의미
        // newDept() 함수 실행되면 : 새로운 빈폼을 화면에 보여주고, submiited = false로 바꿈
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newDept}>
            Add
          </button>
        </div>
      ) : (
        // <></> : 플래그멘테이션(flagmetation)
        <>
          <div className="row">
            {/* 제목 시작 */}
            <div className="col-md-6 mb-5 mt-5">
              <h1>Add Dept</h1>
            </div>
            {/* 제목 끝 */}
          </div>

          {/* 폼 입력양식 시작 */}
          <div className="col-6 mx-auto">
            {/* 부서명(dname) 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="dname" className="col-form-label">
                  Dname
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="dname"
                  required
                  className="form-control"
                  value={dept.dname}
                  onChange={handleInputChange}
                  placeholder="dname"
                  name="dname"
                />
              </div>
            </div>
            {/* 부서명 끝 */}

            {/* 부서 위치(loc) 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Loc
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="loc"
                  required
                  className="form-control"
                  value={dept.loc}
                  onChange={handleInputChange}
                  placeholder="loc"
                  name="loc"
                />
              </div>
            </div>
            {/* 부서 위치 끝 */}

            {/* 저장버튼 시작 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveDept}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
            {/* 저장버튼 끝 */}
          </div>
          {/* 폼 입력양식 끝 */}
        </>
      )}
    </div>
  );
}

export default AddDept;
