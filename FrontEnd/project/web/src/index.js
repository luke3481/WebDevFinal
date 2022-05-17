import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ClassTile from './components/ClassTile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Invoices from "./routes/invoices";
import LogIn from "./routes/LogIn";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="Login" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
);

