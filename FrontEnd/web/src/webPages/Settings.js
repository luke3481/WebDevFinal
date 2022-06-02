import React from "react";
import Usersearch from "../components/Settings/Usersearch";
import Userlist from "../components/Settings/Userlist";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Settings() {
  return (
    <div id="nestedcontainer2">
      <div id="sidebar3">
        <p>Settings </p>
        <Link to="/Settings">Registered Users</Link>
        {/* <Link to="/Settings/Usersearch">Search for User</Link> */}
      </div>
      <Routes>
        <Route path="/" element={<Userlist />} />
        {/* <Route path="/Usersearch" element={<Usersearch />} /> */}
      </Routes>
    </div>
  );
}
