import React from "react";
import Userlist from "../components/Settings/Userlist";

import { Routes, Route, Link } from "react-router-dom";

export default function Settings() {
  return (
    <div id="nestedcontainer2">
      <div id="sidebar3">
        <p>Settings </p>
        <Link to="/Settings">Registered Users</Link>
      </div>
      <Routes>
        <Route path="/" element={<Userlist />} />
      </Routes>
    </div>
  );
}
