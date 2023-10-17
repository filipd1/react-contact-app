import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import { NoPage } from "./pages/NoPage";
import { Home } from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/contact-page" element={<ContactPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
