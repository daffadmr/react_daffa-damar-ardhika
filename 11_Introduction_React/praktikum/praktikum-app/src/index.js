import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'
import './index.css';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);