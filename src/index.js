import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Landing from "./pages/Landing";
import "./components/NavBar/NavBar.module.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/app/*" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
