// Basic.tsx : 자식 컴포넌트(typescript 적용된 버전)
// rfce
import React, { useState } from 'react'
// 새로운 객체타입(자료형) 정의한 파일 import
import IObject from './../types/IObject';

function Basic() {
    // TODO: 타입스크립트 기본 사용법 익히기
    // 타입스크립트 바인딩 변수
    // 사용법 : let [변수명, set변수명] = useState<자료형>(초기값);
    let [message, setMessage] = useState<string>("바인딩 변수 출력입니다.");
    let [num, setNum] = useState<number>(0);
    let [bflag, setBflag] = useState<boolean>(true);
    let [obj, setObj] = useState<IObject>({id: null, name:"green"});
    let [arr, setArr] = useState<Array<number>>([1, 2, 3, 4, 5]);
    let [objArr, setObjArr] = useState<Array<IObject>>([{id: null, name: "green"}]);
    
    // TODO: 1) 기본자료형 : 문자열(string), 숫자(number), 참/거짓(boolean), 객체(따로정의)
    // 타입스크립트 일반 변수 정의
    // 사용법 : let 변수명: 자료형 = 값;
    let message2: string = "일반 변수 출력입니다."; // 문자열
    let num2: number = 1; // 숫자형(실수, 정수 모두 포함)
    let bflag2: boolean = false; // 참/거짓(bool, boolean)

    // TODO: 객체는 자료형을 개발자가 따로 정의해서 사용함
    // 사용법 let 변수명: 정의한객체파일명 = {속성:값...};
    // IObject = {id?: any(null제외한 어떤 자료형도 가능) | null, name: string(문자열만 가능)}
    // id는 모든 자료형 허용 또는 null 자료형도 허용 / name은 문자열만 허용
    let obj2: IObject  = {id: null, name:"green2"};   // 객체(object)

    // TODO: 2) 유니온 사용법 : let 변수명: 자료형(type) | 자료형2 ...
    let num3: number | string = 1;
    let num4: number | string = "hello";
    // let num5: number | string = true; // 에러 발생

    // TODO: 3) 옵셔널(?) : 객체의 속성이나 함수의 매개변수에 사용가능
    // TODO: 사용하면 오류없이 실행되게 함(자료형 | undefined 더 붙은 것과 같은 의미)
    function hello(name?: string) {
        console.log(`안녕하세요 ${name}`);
    }

    // 함수의 사용
    hello("홍길동"); // 안녕하세요 홍길동
    hello();        // 안녕하세요

    // TODO: 4) 배열 : let 변수: Array<자료형 | 자료형2 ...>
    // TODO: 변수 및 함수 사용 시 반드신 정의된 자료형의 값으로 사용하게 강제함
    let arr2: Array<string> = ["a", "b", "c"];     // 문자열 배열
    let arr3: Array<any> = [1, 2, 3];              // 모든 자료형 사용가능
    let arr4: Array<number> = [1, 2, 3];           // 숫자형 사용가능
    
    // TODO: 객체 배열
    let objArr2: Array<IObject> = [{ id: 1, name: "green2"}]; // JSON 문서 형태(객체배열)

  return (
    <div>
        문자(일반) : {message2}<br/>
        문자(바인딩) : {message}<br/>

        숫자형(일반) : {num2}<br/>
        숫자형(바인딩) : {num}<br/>

        boolean형(일반) : {bflag2? "참":"거짓"}<br/>
        boolean형(바인딩) : {bflag? "참":"거짓"}<br/>

        객체형(일반) : {obj2.name}<br/>   
        객체형(바인딩) : {obj.name}<br/>   

        배열(일반) : {arr2}<br/>   
        배열(바인딩) : {arr}<br/>

        {/* 객체배열은 반복문으로 출력 : .map((value, index)=>{}) */}
        객체배열(일반) : {objArr2.map((value)=>value.name)}<br/>   
        객체배열(바인딩) : {objArr.map((value)=>value.name)}<br/>   



    </div>
  )
}

export default Basic