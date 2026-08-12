import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css' // اول توکن‌ها، بعد استایل کامپوننت‌ها
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
