import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Single from "./component/Single";
import Footer from "./component/Footer";
import Container from "./component/Container"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/home.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Single />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}