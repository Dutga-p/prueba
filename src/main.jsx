import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './config/i18next-config.js'
import './index.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import "primereact/resources/primereact.min.css";
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
