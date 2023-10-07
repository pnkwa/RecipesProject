import NavBar from "./component/NavBar";
import Home from "./frontend/home";
import Footer from "./component/Footer";
import Add from "./frontend/add";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
