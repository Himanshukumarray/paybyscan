
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScanAndPay from "./Components/scan";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Home from './Components/Home'
import LoginPage from './Components/Login'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/spay" element={<ScanAndPay />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

