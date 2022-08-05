import React from 'react';
import ReactDOM from 'react-dom/client';
import './config/firebase-config';//phải có cái này ở đầu tiên
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

