import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/home.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}