import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Notice from "./pages/Notice";
import News from "./pages/News";
import Review from "./pages/Review";
import Guest from "./pages/Guest";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      {/* 메뉴 컴포넌트 header */}
      <Header />

      {/* 본문 : 라우팅 설정 */}
      <div className="container mt-3">
        <Routes>
          {/* 1st 페이지 : / */}
          <Route path="/" element={<Home />} />
          {/* * : 지정되지 않은 모든 url */}
          <Route path="/about" element={<About />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/news" element={<News />} />
          <Route path="/review" element={<Review />} />
          <Route path="/guestbook" element={<Guest />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
