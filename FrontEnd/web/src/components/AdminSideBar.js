import React from "react";
import { Link } from "react-router-dom";

async function logout() {
  localStorage.removeItem("token");
  window.location.reload(false);
}

export default function AdminSideBar(props) {
  return (
    <div id="sidebar">
      <div id="sidebar_button">
        <button type="button" class="btnstyle1">
          <Link to="/">
            <img
              id="home"
              src={require("../imgs/uchicagowhitelogo.png")}
              alt=""
            />
          </Link>
        </button>
        <button type="button" class="btnstyle2">
          <Link to="/Account">
            <img src={require("../imgs/account.jpg")} alt="" />
          </Link>
          Account
        </button>
        <button type="button" class="btnstyle2">
          <Link to="/">
            <img src={require("../imgs/dashboard.png")} alt="" />
          </Link>
          Dashboard
        </button>
        <button type="button" class="btnstyle2">
          <Link to="/Course">
            <img src={require("../imgs/courses.png")} alt="" />
          </Link>
          Courses
        </button>
        <button type="button" class="btnstyle2" id="settingsbutton">
          <Link to="/Settings">
            <img src={require("../imgs/settings.png")} alt="" />
          </Link>
          Settings
        </button>
        <button type="button" class="btnstyle2" onClick={logout}>
          <Link to="/">
            <img src={require("../imgs/logout.png")} alt="" />
          </Link>
          Logout
        </button>
      </div>
    </div>
  );
}
