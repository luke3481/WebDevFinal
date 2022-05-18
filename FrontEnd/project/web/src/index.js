import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClassTile from './components/ClassTile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Invoices from "./routes/invoices";
import LogIn from "./routes/LogIn";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);

