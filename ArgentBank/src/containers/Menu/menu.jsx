import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Menu = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" >
        <Link to="/" >
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      { isAuthenticated ? 
      <Link to="/login" >
        <div>
          <a className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </Link>
      : 
      <Link to="/login" >
        <div>
          <a className="main-nav-item" >
            <i className="fa fa-user-circle"></i>
            Sign out
          </a>
        </div>
      </Link> }
    </nav>
  );
};

/* { isAuthenticated ? 
      <Link to="/login" >
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </Link>
      : 
      <Link to="/login" >
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign out
          </a>
        </div>
      </Link> }
*/

export default Menu;