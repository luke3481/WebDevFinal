import React, { useState } from "react";
import md5 from "md5";

export default function Security() {
  const userdata = localStorage.getItem("token");
  const parsedData = JSON.parse(userdata);
  const user_id = parsedData["user_id"];
  const [password, setPassword] = useState();
  const [sec1, setSec1] = useState();
  const [sec2, setSec2] = useState();
  const [sec3, setSec3] = useState();
  const [message, setMessage] = useState();
  const [message2, setMessage2] = useState();

  function validatePassword(changes) {
    return fetch("http://localhost:8080/user/validatepassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.failure) {
          setMessage("Password is Incorrect");
        } else {
          sessionStorage.setItem("validated", JSON.stringify(res.message));
          setMessage("Password Validated");
          const secQues = document.getElementById("secquestions");
          secQues.hidden = false;
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    validatePassword({ password, user_id });
    e.target.reset();
  };

  function updateSec(changes) {
    return fetch("http://localhost:8080/user/updatesec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message) {
          setMessage2("Security Answers Updated");
        } else {
          setMessage2("There was an error");
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    updateSec({ sec1, sec2, sec3, user_id });
    e.target.reset();
  };

  return (
    <div id="security">
      <form onSubmit={handleSubmit}>
        <label for="currentpassword">Password:</label>
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
        <input type="submit" />
      </form>
      <br />
      <div class="message">{message}</div>
      <br />
      <br />
      <br />

      <form onSubmit={handleSubmit2} id="secquestions" hidden="true">
        <label for="secquestion1">
          What is your paternal grandmother's first name?
        </label>
        <br />
        <input
          type="text"
          id="sequestion1"
          name="secquestion1"
          style={{ width: "400px" }}
          onChange={(e) => setSec1(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label for="secquestion2">What is your favorite movie?</label>
        <br />
        <input
          type="text"
          id="sequestion2"
          name="secquestion2"
          style={{ width: "400px" }}
          onChange={(e) => setSec2(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label for="secquestion3">What was the name of your first dog?</label>
        <br />
        <input
          type="text"
          id="sequestion3"
          name="secquestion3"
          style={{ width: "400px" }}
          onChange={(e) => setSec3(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      <br />
      <div class="message">{message2}</div>
    </div>
  );
}
