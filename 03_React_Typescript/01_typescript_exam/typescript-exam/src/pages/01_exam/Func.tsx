// Func.tsx

import React from "react";
import { useState } from "react";

function Func() {
  // TODO: 변수 정의
  let [name, setName] = useState<string>("");
  let [message, setMessage] = useState<string>("");

  // TODO: 함수 정의 : 타입스크립트 적용
  // 매개변수 2개를 전달받아 message 변수에 저장하는 함수
  // getInputVal("안녕하세요", 2023)
  // TODO: 사용법 : const 함수명 = (매개변수: 자료형, ...): 리턴자료형 => {}
  const getInputVal = (arg: string, year: number): void => {
    setMessage(`${arg} 현재는 ${year} 년도 입니다.`); // message(화면 바인딩)
  };

  // 역바인딩(이벤트) 함수 정의
  // TODO: const 함수명 = (event:이벤트자료형...): 함수리턴자료형 => {};
  const onChangName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  return (
    <div className="container">
      <input
        className="form-control mt-3 mb-3 w-25"
        type="text"
        name="name"
        value={name}
        onChange={onChangName}
      />
      입력값 : {name}
      <br />
      {/* react 아래 onClick={함수명} // 매개변수가 없는 함수 */}
      {/* TODO: 이벤트 함수에 매개변수가 있으면 화살표함수를 사용해야함 */}
      {/* react 아래 onClick={()=>{함수명(매개변수, 매개변수2)}} // 매개변수가 있는 함수는 화살표함수사용 */}
      <button
        className="btn btn-primary mt-3 mb-3"
        onClick={() => getInputVal("안녕하세요", 2023)}
      >
        입력값
      </button>
      <br />
      {message}
    </div>
  );
}

export default Func;
