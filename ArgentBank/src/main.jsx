import React from 'react';
import { createRoot } from "react-dom/client";
import './styles/css/index.css';
import App from './App.jsx';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
