import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from './ahook/Auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <React.StrictMode>
    <App />
  </React.StrictMode>,
    </AuthProvider>

 
)
