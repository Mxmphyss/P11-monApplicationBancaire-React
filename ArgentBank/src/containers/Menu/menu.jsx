import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/loginActions';

const Menu = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.userName);

  console.log('user:', user);

  const dispatch = useDispatch();

  const isAuthenticated = token !== '';

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img src="./img/argentBankLogo.png" alt="Argent Bank Logo" className="main-nav-logo-image" />
      </Link>
      <h1 className="sr-only">Argent Bank</h1>
      {isAuthenticated ? (
        <div className='userBoard'>
          <div className='userBoard_user'>
            <p className='userStyle'>{ user }</p>
            <i className="fa fa-user-circle"></i>
          </div>
          <Link to="/" onClick={handleLogout} className="main-nav-item">
            Sign Out
            <i className="fa fa-user-circle"></i>
          </Link>
        </div>
      ) : (
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default Menu;