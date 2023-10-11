import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Single from "./component/Single";
import Footer from "./component/Footer";
import Container from "./component/Container";
import Add from "./component/Add";
import Edit from "./component/Edit";
import NotFound from "./component/NotFound";
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
