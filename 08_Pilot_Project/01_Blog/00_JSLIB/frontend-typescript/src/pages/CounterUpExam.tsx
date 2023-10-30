import React, { useEffect } from "react";
import initMain from "../assets/js/initMain";


function CounterUpExam() {
  useEffect(() => {
    // 실행문
    initMain();
  }, []);

  return (
    <div>
      <span className="counter">1,234,567.00</span><br/>
      <span>$</span><br/>
      <span className="counter">1.99</span><br/>
      <span className="counter">12345</span><br/>
    </div>
  );
}

export default CounterUpExam;
