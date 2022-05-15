import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppCopy  from './AppCopy';
import ClassTile from './components/ClassTile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Invoices from "./routes/invoices";
import Courses from "./routes/CoursesCopy"

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppCopy />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="CoursesCopy" element={<Courses />} />
    </Routes>
  </BrowserRouter>
);

