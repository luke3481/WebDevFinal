import React, { useState } from "react";
import md5 from "md5";

export default function Password() {
  const userdata = localStorage.getItem("token");
  const parsedData = JSON.parse(userdata);
  const user_id = parsedData["user_id"];
  const [message, setMessage] = useState();
  const [password, setPassword] = useState();
  const [new_password, setNewpassword] = useState();
  const [confirm_password, setConfirmpassword] = useState();
  const [matches, setMatches] = useState();

  function changePassword(changes) {
    return fetch("http://localhost:8080/user/changepassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.failure) {
          setMessage("Current Password is Incorrect");
        } else {
          setMessage("Password Updated");
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedNewpassword = md5(new_password);
    console.log(new_password);
    var confirmed = confirmPassword();
    if (confirmed) {
      changePassword({ password, user_id, hashedNewpassword });
      e.target.reset();
      setMatches("");
    }
  };

  function confirmPassword() {
    if (new_password !== confirm_password) {
      setMatches("Passwords Do Not Match");
      return false;
    }
    return true;
  }

  return (
    <div id="passwordsec">
      <form onSubmit={handleSubmit}>
        <label for="currentpassword">Current Password:</label>
        <br />
        <input
          type="password"
          id="currentpassword"
          name="currentpassword"
          style={{ width: "400px" }}
          onChange={(e) => setPassword(md5(e.target.value))}
        />
        <br />
        <br />
        <label for="newpassword">New Password:</label>
        <br />
        <input
          type="password"
          id="newpassword"
          name="newpassword"
          pattern="(?=.*\d)(?=.*[!@#$%^&*]).{5,}"
          autofocus
          required
          title="Must be 5 characters with at least 1 number and 1 symbol"
          style={{ width: "400px" }}
          onChange={(e) => setNewpassword(e.target.value)}
        />
        <br />
        <br />
        <label for="confirmpassword">Confirm Password:</label>
        <br />
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          pattern="(?=.*\d)(?=.*[!@#$%^&*]).{5,}"
          autofocus
          required
          title="Must be 5 characters with at least 1 number and 1 symbol"
          style={{ width: "400px" }}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <br />
        <div class="message">{matches}</div>
        <br />
        <input type="submit" />
      </form>
      <div class="message">{message}</div>
    </div>
  );
}
