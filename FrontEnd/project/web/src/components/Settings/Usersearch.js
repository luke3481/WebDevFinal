import React from "react";
import SideCoursesMenu from "../SideCoursesMenu";
import Announcement from "../Course/Announcement";
import ClassTile from "../Home/ClassTile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Usersearch(props) {
  return (
    <div id="usersearch">
      <form>
        <h2>Search for User</h2>
        <label for="searchusername">Search by Name:</label>
        <br />
        <input
          type="text"
          id="searchusername"
          name="searchusername"
          style={{ width: "300px" }}
        />
        <input type="submit" />
        <br />
        <br />
        <br />
        <label for="searchuseremail">Search by Email:</label>
        <br />
        <input
          type="text"
          id="searchuseremail"
          name="searchuseremail"
          style={{ width: "300px" }}
        />
        <input type="submit" />
        <br />
        <br />
      </form>
    </div>
  );
}

export default Usersearch;
