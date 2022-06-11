import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// Import Porvider: untuk menghubungkan react dan redux
import { Provider } from "react-redux";
import "./library/fontawesome";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    {/* Bungkus App dengan Provider: agar dapat mengakses store */}
    <Provider store={store}>
      {/**
       * Bungkus/Hubungkan aplikasi dengan Browser Router
       * Agar URL browser dapat dimanipulasikan oleh React Router
       */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
