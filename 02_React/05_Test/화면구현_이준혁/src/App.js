import "./App.css";
import AddCustomer from "./pages/AddCustomer";
import Customer from "./pages/Customer";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Customer Page
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
              <Link to="/customer" class="nav-link">
              Customer
                </Link>
              </li>
              <li class="nav-item">
              <Link to="/add-customer" class="nav-link">
                  Add Customer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
         {/* 컴포넌트와 메뉴 url 연결 : 라우팅(Router) */}
         <Routes>
          {/* / : 첫화면 url -> <Home /> 띄워라 */}
          <Route path="/" element={<Home />} />
          {/* /dept -> <Dept /> 화면에 띄워라 */}
          <Route path="/customer" element={<Customer />} />
          <Route path="/add-customer" element={<AddCustomer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
