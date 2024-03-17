import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {AuthProvider } from './AuthContext.js';
import './index.css'

const rootElement = document.getElementById('root');
if(!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
