import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./context/global";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalContextProvider>
    </Provider>
  </React.StrictMode>
);
