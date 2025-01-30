import React, { useEffect, useState } from 'react';
import { logout } from '../../redux/actions/loginActions';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const Menu = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.token === token);

  useEffect(() => {
    setIsAuthenticated(localStorage.token === token);
  }, [token]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
      </Link>
      <h1 className="sr-only">Argent Bank</h1>
      { !isAuthenticated ? 
        <Link to="/login" className="main-nav-item" >
          <div>
            <i className="fa fa-user-circle"></i>
            Sign In
          </div>
        </Link>
        : 
        <Link onClick={handleLogout} to="/" className="main-nav-item">
          <div>
            <i className="fa fa-user-circle"></i>
            Sign out
          </div>
        </Link>
      }
    </nav>
  );
}

export default Menu;