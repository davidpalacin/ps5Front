import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// bootstrap
import "../themes/custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
