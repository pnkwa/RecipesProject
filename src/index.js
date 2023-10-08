import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./frontend/css/home.css";
import "./frontend/css/form.css";
import "./frontend/css/notfound.css";
import "./frontend/css/single.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
