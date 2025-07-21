import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Query from "./pages/query/Query.jsx";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@visa/nova-styles/styles.css";
import "@visa/nova-styles/themes/visa-dark/index.css";
import Result from "./pages/result/Result.jsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Query />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Root element not found!");
}
