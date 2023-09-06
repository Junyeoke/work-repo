import "./App.css";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"; // 메뉴 라이브러리
import Home from "./pages/Home";
import DeptList from "./pages/dept/DeptList";
import AddDept from "./pages/dept/AddDept";
import NotFound from "./components/NotFound";
import EmpList from "./pages/emp/EmpList";
import AddEmp from "./pages/emp/AddEmp";
import Dept from "./pages/dept/Dept";
import Emp from "./pages/emp/Emp";
function App() {
  return (
    <div className="App">
      {/* 메뉴 컴포넌트 : Header */}
      <Header />
   
      {/* 본문 : 라우팅 설정 */}
      <div className="container mt-3">
        <Routes>
          {/* 1st 페이지 : / */}
          <Route path="/" element={<Home />}/>
          {/* * : 지정되지 않은 모든 url */}
          <Route path="*" element={<NotFound />}/>

          <Route path="/dept" element={<DeptList />}/>
          <Route path="/add-dept" element={<AddDept />}/>
          <Route path="/dept/:id" element={<Dept />}/>
          {/* 연습) 사원메뉴 */}
          <Route path="/emp" element={<EmpList />}/>
          <Route path="/add-emp" element={<AddEmp />}/>
          <Route path="/emp/:id" element={<Emp />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
