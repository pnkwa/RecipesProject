import NavBar from "./component/NavBar";
import Home from "./component/home";
import Footer from "./component/Footer";
import Add from "./component/add";
import Edit from "./component/edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
