import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Forgotpassword from "./Forgotpassword";
import Newuser from "./Newuser";
import Loginform from "./Loginform";
import md5 from "md5";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Login({ setUserdata }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errormessage, setErrormessage] = useState();
  const [logindisplay, setLogindisplay] = useState("login");

  function loginUser(credentials) {
    return fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.data) {
          localStorage.setItem("token", JSON.stringify(res.data));
          setUserdata(res.data);
        } else {
          setErrormessage("Username or Password is Incorrect");
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = md5(password);
    loginUser({ username, hashedPassword });
  };

  if (logindisplay === "login") {
    return (
      <div class="logincontainer">
        <div id="header">
          <h1>
            <b>The University of Chicago</b>
          </h1>
        </div>
        <Loginform
          setUserName={setUserName}
          setPassword={setPassword}
          errormessage={errormessage}
          handleSubmit={handleSubmit}
          setLogindisplay={setLogindisplay}
        />
      </div>
    );
  }
  if (logindisplay === "forgot") {
    return (
      <div class="logincontainer">
        <div id="header">
          <h1>
            <b>The University of Chicago</b>
          </h1>
        </div>
        <Forgotpassword setLogindisplay={setLogindisplay} />
      </div>
    );
  }
  if (logindisplay === "newuser") {
    return (
      <div class="logincontainer">
        <div id="header">
          <h1>
            <b>The University of Chicago</b>
          </h1>
        </div>
        <Newuser setLogindisplay={setLogindisplay} setUserdata={setUserdata} />
      </div>
    );
  }

  <Routes>
    <Route path="*" element={<Loginform />} />
    <Route path="/Newuser" element={<Newuser />} />
    <Route path="/Forgotpassword" element={<Forgotpassword />} />
  </Routes>;
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
