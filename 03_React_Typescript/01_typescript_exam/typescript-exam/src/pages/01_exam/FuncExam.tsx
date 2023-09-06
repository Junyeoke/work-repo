// FuncExam.tsx : 연습문제

import React from "react";
import { useState } from "react";

function FuncExam() {
  let [password, setPassword] = useState<string>("");
  let [message, setMessage] = useState<string>("");

  const getInput = (arg: string, day: number, bool: boolean): void => {
    setMessage(`${arg} 오늘날짜는 ${day} 일이 맞나요? 답은 ${bool} 입니다.`);
  };

    // TODO: 생략가능 자료형 : 1) 함수의 리턴자료형 생략가능
  const onChangPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };
  return (
    <div className="container">
      <input
        className="form-control mt-3 mb-3 w-25"
        type="password"
        name="password"
        value={password}
        onChange={onChangPassword}
      />
      입력값 : {password}
      <br />
      <button
        className="btn btn-primary mt-3 mb-3"
        onClick={() => getInput("안녕하세요", 4, true)}
      >
        입력값
      </button>
      <br />
      {message}
    </div>
  );
}

export default FuncExam;
