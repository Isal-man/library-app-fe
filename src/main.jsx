import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

// components
import App from './App.jsx'

// css
import './index.css'
import 'primeicons/primeicons.css';

// primereact theme
import "primereact/resources/themes/tailwind-light/theme.css";
// primereact core
import "primereact/resources/primereact.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
