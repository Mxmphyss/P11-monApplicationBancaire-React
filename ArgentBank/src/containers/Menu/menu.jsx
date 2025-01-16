import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <Link to="/" >
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <Link to="/login" >
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </Link>
    </nav>
  );
};

export default Menu;