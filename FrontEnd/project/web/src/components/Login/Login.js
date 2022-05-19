import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div class="logincontainer">
      <div id="header">
        <h1><b>The University of Chicago</b></h1>
      </div>
      <div id="main">
        <h2>Log in to Your UChicago Account</h2>
        <form onSubmit={handleSubmit}>
          <div id="alert" aria-atomic="true" role="alert"></div>
          <div class="input-wrapper">
              <input id="username" name="username" type="text" class="form-control" autocapitalize="off" spellcheck="false" value="" placeholder="Username" autofocus="" onChange={e => setUserName(e.target.value)}/>
          </div>
          <div class="input-wrapper">
              <input id="password" name="password"  type="password" class="form-control" autocapitalize="off" spellcheck="false" value=""  placeholder="Password" onChange={e => setUserName(e.target.value)}/>
          </div>
          <div class="submit-buttons">
              <button type="submit" id="forgot" name="forgot" class="forgot">Forgot your password?</button>
              <button type="submit" id="signup" name="signup" class="signup">New User</button>
              <button type="submit" id="submit" name="submit" class="submit">LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}