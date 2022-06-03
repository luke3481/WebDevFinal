import { useState } from "react";
import md5 from "md5";

export default function Forgotpassword({ setLogindisplay }) {
  const [message, setMessage] = useState();
  const [message2, setMessage2] = useState();
  const [new_password, setNewpassword] = useState();
  const [user_id, setUserId] = useState();
  const [user_name, setUsername] = useState();
  const [a1, setA1] = useState();
  const [a2, setA2] = useState();
  const [a3, setA3] = useState();

  function validateUser(changes) {
    return fetch("http://localhost:8080/user/validateques", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.failure) {
          setMessage("Unable to validate. Please try again.");
        } else {
          // sessionStorage.setItem("user_id", JSON.stringify(res.data));
          setUserId(JSON.stringify(res.data));
          setMessage("User Validated");
          const reset = document.getElementById("reset");
          reset.hidden = false;
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateUser({ user_name, a1, a2, a3 });
    e.target.reset();
  };

  function resetPassword(changes) {
    return fetch("http://localhost:8080/user/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message) {
          setMessage2("Password Updated");
        } else {
          setMessage2("There was an error");
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    resetPassword({ new_password, user_id });
    e.target.reset();
  };

  return (
    <div id="newusermain">
      <div id="forgotpassword">
        <p>
          <h2>Reset password:</h2>
        </p>
        <br></br>
        <form onSubmit={handleSubmit}>
          <label for="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            name="user_name"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />

          <label for="secquestion1">
            What is your paternal grandmother's first name?
          </label>
          <br />
          <input
            type="text"
            id="sequestion1"
            name="a1"
            onChange={(e) => setA1(e.target.value)}
            required
          />
          <br />
          <br />

          <label for="secquestion2">What is your favorite movie?</label>
          <br />
          <input
            type="text"
            id="sequestion2"
            name="a2"
            onChange={(e) => setA2(e.target.value)}
            required
          />
          <br />
          <br />

          <label for="secquestion3">What was the name of your first dog?</label>
          <br />
          <input
            type="text"
            id="sequestion3"
            name="a3"
            onChange={(e) => setA3(e.target.value)}
            required
          />
          <br />
          <br />
          <input type="submit" />
        </form>
        <br />
        <div class="message">{message}</div>
        <br />
        <br />
        <form onSubmit={handleSubmit2} id="reset" hidden="true">
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
            onChange={(e) => setNewpassword(md5(e.target.value))}
          />
          <br />
          <br />
          <label for="confirmpassword">Confirm Password:</label>
          <br />
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            required
          />
          <br />
          <br />
          <input type="submit" />
        </form>
        <br />
        <div class="message">{message2}</div>
        <br />
        <br />
        <button
          type="submit"
          id="backtologin"
          name="backtologin"
          class="signup"
          onClick={() => setLogindisplay("login")}
        >
          Back To Login
        </button>
      </div>
    </div>
  );
}
