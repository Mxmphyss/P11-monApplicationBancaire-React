import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import "./styles/css/main.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<h1>Page non trouvée</h1>} />
    </Routes>
  );
}

export default App;