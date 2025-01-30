import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../redux/actions/loginActions';

const Form = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault(); 

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(login(data.body.token));
      navigate('/user')
      console.log('Connexion réussie', data);
    } else {
      setError('Email ou mot de passe incorrect');
      console.error('Erreur de connexion :', data.message);
    }
  } catch (error) {
    console.error('Erreur :', error);
  }

  };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default Form;