import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Context/AppContext'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppProvider>
    <App />
  </AppProvider>
  
  </BrowserRouter>
)
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
