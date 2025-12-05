import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./pages/Landing";
import "./components/NavBar/NavBar.module.css";
import { HashRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
