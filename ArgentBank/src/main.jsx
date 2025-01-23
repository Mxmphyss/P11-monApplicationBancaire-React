import React from 'react';
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/css/main.css';
import App from './App.jsx';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
