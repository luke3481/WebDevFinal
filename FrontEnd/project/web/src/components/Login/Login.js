import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Forgotpassword from "./Forgotpassword";
import Newuser from "./Newuser";
import { Routes, Route, Link } from "react-router-dom";
import md5 from "md5";

function loginUser(credentials) {
  return fetch("http://localhost:8080/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = md5(password);
    loginUser({ username, hashedPassword });
    // const token = await loginUser({
    //   username,
    //   password,
    // });
    // setToken(token);
  };

  return (
    <div class="logincontainer">
      <div id="header">
        <h1>
          <b>The University of Chicago</b>
        </h1>
      </div>
      <div id="main">
        <h2>Log in to Your UChicago Account</h2>
        <form onSubmit={handleSubmit}>
          <div id="alert" aria-atomic="true" role="alert"></div>
          <div class="input-wrapper">
            <input
              id="username"
              name="username"
              type="text"
              class="form-control"
              autocapitalize="off"
              spellcheck="false"
              placeholder="Username"
              autofocus=""
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div class="input-wrapper">
            <input
              id="password"
              name="password"
              type="password"
              class="form-control"
              autocapitalize="off"
              spellcheck="false"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="submit-buttons">
            <button type="submit" id="forgot" name="forgot" class="forgot">
              <Link to="/Forgotpassword">Forgot your password?</Link>
            </button>
            <button type="submit" id="signup" name="signup" class="signup">
              <Link to="/Newuser">New User</Link>
            </button>
            <button type="submit" id="submit" name="submit" class="submit">
              LOG IN
            </button>
          </div>
        </form>
      </div>
      <Routes>
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/Newuser" element={<Newuser />} />
      </Routes>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
