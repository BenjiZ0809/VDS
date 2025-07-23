import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Query from "./pages/query/Query.jsx";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "@visa/nova-styles/styles.css";
import "../public/nova-styles/styles.css";
// import "@visa/nova-styles/themes/visa-light/index.css";
// import "@visa/nova-styles/themes/visa-dark/index.css";
import Result from "./pages/result/Result.jsx";
import { SavedQueriesProvider } from "./context/SavedQueriesContext.jsx";
import Layout from "./pages/layout/Layout.jsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <SavedQueriesProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/home" replace />}></Route>
              <Route path="home" element={<Query />} />
              <Route path="result" element={<Result />} />
            </Route>
          </Routes>
        </SavedQueriesProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Root element not found!");
}
