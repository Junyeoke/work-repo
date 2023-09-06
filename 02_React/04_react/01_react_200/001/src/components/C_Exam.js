// 연습문제

// TODO : 화면 : "안녕하세요"
// TODO : 결과 : "안녕"

import React from 'react'
import { useState } from 'react';

// rfce
function C_Exam() {
  
    // 바인딩 변수 사용
    let [element, setElement] = useState("안녕하세요");
    
    // 함수정의
    //nfn
    const myClick = () => { 
        // 수정함수
        setElement("안녕");
     }

    return (
    <div>
     {element}
     <br/>
     <button onClick={myClick}>문자열변경</button>
    </div>
  )
}

export default C_Exam