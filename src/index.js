import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./frontend/css/home.css";
import "./frontend/css/form.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
