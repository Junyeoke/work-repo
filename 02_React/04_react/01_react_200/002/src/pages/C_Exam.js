// C_Exam.js : 자식컴포넌트
import React from 'react'
import { useEffect } from 'react';

function C_Exam(props) {
    
    // 생명주기 함수(생성) : 화면이 뜰 때 자동 실행됨
    useEffect(()=>{
        console.log(props.prop_value);
        console.log("useEffect");
    }, []);
    return (

    <div>C_Exam</div>
  )
}

export default C_Exam