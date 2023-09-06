// TODO: 리액트의 조건문 : 삼항연산자를 사용
import React from 'react'
import { useState } from 'react';

function D_ConfirmButton() {

    // TODO: 변수정의
    let [isConfirmed, setIsConfirmed] = useState(false);

    // TODO: 함수정의
    const handleConfirm = () => { 
        setIsConfirmed(true);
     }

  return (
    <div>
        {/* 예제 : 아래 버튼 클릭하면 문구가 : 확인됨 -> 확인하기, 상태(비활성화)*/}
        {/* disabled = true 비활성화 / false 활성화 */}
        <button onClick={handleConfirm}
                disabled={isConfirmed}
        >   
            {/* 삼항 연산자 사용 */}
            {/* 사용: (조건식)? "true" : "false" */}
            {
                (isConfirmed === true)? "확인됨" : "확인하기"
            }
        </button>
    </div>
  )
}

export default D_ConfirmButton