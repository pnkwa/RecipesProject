import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Single from "./component/Single";
import Footer from "./component/Footer";
import Container from "./component/Container"
import Add from "./component/Add";
import Edit from "./component/Edit";
import NotFound from "./component/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/1" element={<Single />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}