import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Single from "./components/Single";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Add from "./components/Add";
import Edit from "./components/Edit";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/recipes/:id" element={<Single />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          
        </Routes>
      </Container>
      <Footer />
    </>
  );
}