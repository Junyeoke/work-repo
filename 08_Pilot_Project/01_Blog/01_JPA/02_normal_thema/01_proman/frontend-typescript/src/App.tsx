import React from 'react';
import Home from './pages/Home';
import Nav from './components/common/Nav';


function App() {
  return (
    <div className="App">
      {/* 메뉴 */}
      <Nav />
      {/* 본문 */}
      <Home/>
    </div>
  );
}

export default App;
