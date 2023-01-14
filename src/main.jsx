import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Importamos nuestro store y Provider
import store from './app/store'
import { Provider } from 'react-redux'

// bootstrap
import "../themes/custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
