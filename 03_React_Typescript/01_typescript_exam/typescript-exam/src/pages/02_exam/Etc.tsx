// Etc.tsx

import React from "react";

function Etc() {
  // TODO: 1) 읽기 전용(readonly) : 값 수정 불가
  interface IHello {
    readonly name: string;
  }

  let val: IHello = { name: "hello" }; // 초기값 정의
  // val.name = "hello2"; // 변경불가 (readonly)

  // TODO: 2) 튜플(tuple) : 정해진 자료형의 고정된 크기의 배열
  let tuple: [string, number] = ["a", 1];
  console.log("tuple", tuple);
  // tuple = ["a", 1, 2]; // 값이 3개가 들어와서 에러
  // tuple = [1, "a"]; // 자료형 순서가 맞지 않음 에러

  // TODO: 3) enum : 열거형, 상수를 대체해서 사용함
  // TODO: 아래 상수에 자동으로 0 ~ n 1씩 증가되어 저장됨, 값도 직접 지정 가능
  enum Week {
    Sun, // Sun = 0을 할당함
    Mon, // Mon = 1
    Tue, // Tue = 2
    Wed = 5, // Wed = 5 (개발자가 강제로 값을 저장)
    Thu, // Thu = 6
    Fri, // Fri = 7
    Sat, // Sat = 8
  }
  console.log("Week", Week);
  console.log("Week", Week.Sun);

  // TODO: 4) 별명 붙이기
  // TODO: 사용법 : type 별명 = 자료형 | 자료형2 ...
  // TODO: let 변수명 : 별명 = 값;
  type aliasUser = string | number;
  let person: aliasUser = "hong";
  console.log(person);

  // TODO: 5) 타입추론 : 모든 변수에 자료형을 지정하지않아도 값으로 추론하는 기능을 부여

  // TODO: (1) 변수의 초기값 : 생략가능
  let num = 10; // 사용가능

  // TODO: (2) 기본값이 있는 매개변수 : 생략가능
  // 모던자바스크립트 사용법 : function 함수명(매개변수, 매개변수2 = 0){}
  // 함수의 사용 : 함수명(1) => 함수명(1, 0)
  function add(a: number, b = 0): number {
    return a + b;
  }

  // TODO: (3) 리턴자료형은 함수에서 생략가능
  function add2(a: number, b = 0) {
    return a + b;
  }

  // TODO: 6) 타입(자료형) 단언 :
  // TODO: 활용 : 컴퓨터는 알 수 없으나 개발자는 확실히 그 변수의 자료형을 확신하면 사용가능
  // TODO: 사용법 : 변수 as 자료형
  function someFunc(val: string | number, isNumber: boolean) {
    // 가정 : isNumber 가 true이면 무조건 val 값은 정수가 된다고 확신
    if (isNumber === true) {
      (val as number).toFixed(2);
    }
  }

  return <div>Etc</div>;
}

export default Etc;
