import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../redux/reducers/authReducer';

const Form = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
  e.preventDefault(); 

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {

      dispatch(loginSuccess(data.body.token));
      console.log('Connexion réussie', data);
    } else {

      dispatch(loginFailure(data.message));
      console.error('Erreur de connexion :', data.message);
    }
  } catch (error) {
    dispatch(loginFailure('Erreur réseau'));
    console.error('Erreur réseau :', error);
  }

  };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" required/>
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" required/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <Link to="/user">
              <button type="submit" className="sign-in-button">Sign In</button>
            </Link>
        </form>
    );
};

export default Form;