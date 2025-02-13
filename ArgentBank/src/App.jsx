import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import Menu from "./containers/Menu/menu";
import Footer from "./containers/Footer/footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="" element={<User />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;