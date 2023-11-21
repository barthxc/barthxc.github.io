import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio.jsx";
import Cv from "./pages/Cv.jsx";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
