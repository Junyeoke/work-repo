import React,{useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import "./assets/css/custom.css";
import "./assets/css/goodgames.css";
import GoodGamesInit from './assets/js/goodgames-init';
import goodGamesMin from './assets/js/goodgames.min';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';


function App() {
  useEffect(()=>{
    GoodGamesInit();
    goodGamesMin();
  },[])
  return (
    <div className="App">
      {/* nav */}
      <Nav/>


     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>

     {/* footer */}
     <Footer/>
    </div>
  );
}

export default App;
