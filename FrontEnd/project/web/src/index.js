import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClassTile from './components/ClassTile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);

