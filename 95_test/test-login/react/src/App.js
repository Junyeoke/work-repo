import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/loginTest/Index';
import LoginPage from './pages/loginTest/LoginPage';
import Board from './pages/loginTest/Board';

function App() {
  return (
    <div className="App">
        <h1>테스트</h1>
      {/* jwt 토큰 해보자 */}
      
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/loginPage' element={<LoginPage/>}></Route>
        <Route path='/board' element={<Board/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
