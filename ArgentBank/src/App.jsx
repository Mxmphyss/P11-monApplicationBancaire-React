import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import "./styles/css/main.css";
import Menu from "./containers/Menu/menu";
import Footer from "./containers/Footer/footer";

function App() {
  return (
    <>
      <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<h1>Page non trouvée</h1>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;