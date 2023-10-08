import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Add from "./component/Add";
import Edit from "./component/Edit";
import Single from "./component/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/:id" element={<Single />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
