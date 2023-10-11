import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    font-family: "Inter", sans-serif;
  }
  
  @supports (font-variation-settings: normal) {
    :root {
      font-family: "Inter var", sans-serif;
    }
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 50px;
    padding: 0;
    background: #f4efdc;
  }
  
  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f4efdc;
  }
  ::-webkit-scrollbar-thumb {
    background: #e23c34;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #fdee82;
    border: 1px solid #e23c34;
  }  
`;

export default GlobalStyle;