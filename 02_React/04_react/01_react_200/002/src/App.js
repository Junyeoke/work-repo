// 이미지 import
// import logo from './logo.svg';
// App.css import (기본 : 중앙정렬)
import "./App.css";
import A_Lifecycle from "./pages/A_Lifecycle";
import B_Props from "./pages/B_Props";
import C_Exam from "./pages/C_Exam";
import D_Exam from "./pages/D_Exam";
import E_Exam from "./pages/E_Exam";
import F_Clock from "./pages/F_Clock";

// TODO: 리액트에서 처음으로 실행되는 js (최상위 부모 컴포넌트)
// TODO: 웹브라우저 확인 : http://localhost:3000
function App() {
  // 변수나 함수를 정의 하는 부분

  // 화면에 보이는 부분 : return 안에 있는 html 태그 화면에 보임
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      {/* 자식 컴포넌트 추가 */}
      {/* <A_Lifecycle></A_Lifecycle> */}
      {/* <B_Props prop_value="hong gil dong"></B_Props> */}
      {/* <C_Exam prop_value="From App" /> */}
      {/* 연습문제 */}
      {/* <D_Exam/> */}
      {/* <E_Exam name="처음 만난 파이썬" numOfPage={300} />
      <E_Exam name="처음 만난 자바" numOfPage={500} /> */}
      {/* <F_Clock /> */}
    </div>
  );
}

export default App;
