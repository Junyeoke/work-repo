import React from "react";
import { useState } from "react";
function A_Accommodate_Exam() {
  
    // 변수정의
    let [display, setDisplay] = useState(true);

    // 함수정의
    const blueClick = ( ) => { 
        if(!display){
            setDisplay(true);
        } else {
            setDisplay(false);
        }
     }

     

  return (
    <div>
      <button onClick={blueClick} className="btn btn-warning">
        노란 버튼
      </button>
      
      <br/>
      {
        display &&
        <button className="btn btn-primary">
        파란 버튼
      </button>
      }
    </div>
  );
}

export default A_Accommodate_Exam;
