// D_Exam.js
// TODO: 아래 생명주기 함수 2개를 만들어서 출력하세요
// TODO: 1) 화면이 뜰때 아래의 결과가 출력됨
// TODO: 결과 : mount call
// TODO: 2) tmpState2 라는 변수의 값이 변경되면 콘솔에 출력됨
// TODO: 결과 : false
import React from "react";
import { useEffect, useState } from "react";

function D_Exam() {
  // TODO: 변수(바인딩)
  let [tmpState2, setTmpState2] = useState(true);

  // TODO: 생명주기 함수 (생성)
  // TODO: 화면이 뜰때 자동 실행
  useEffect(() => {
    console.log("mount call");
  }, []);

  // TODO: 생명주기 함수 (수정) true -> false (콘솔에 출력)
  useEffect(() => {
    console.log(tmpState2); // 변수값 바뀌면 실행
  }, [tmpState2]);

  // TODO: 클릭 이벤트 함수 정의
  const handleClick = () => {
    // 수정함수 : setter 함수 호출 : 값 변경 true -> false
    setTmpState2(false);
  };
  return (
    <div>
      <h2>[ THIS IS shouldComponentUpdate FUCNTION ]</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default D_Exam;
