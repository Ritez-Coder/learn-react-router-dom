import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App/> */}
    < RouterProvider router={router} />
  </div>
);
