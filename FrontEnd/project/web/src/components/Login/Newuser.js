import { useState } from "react";

const initialFormValues = {
  user_name: "",
  name: "",
  email: "",
  student_id: "",
  password: "",
  confirmpassword: "",
  account_type: "student",
  a1: "",
  a2: "",
  a3: "",
};

export default function Newuser({ setLogindisplay, setUserdata }) {
  const [formValues, setFormValues] = useState(initialFormValues);

  function handleChanges(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function newUser() {
    return fetch("http://localhost:8080/user/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((data) => data.json())
      .then((res) => {
        // localStorage.setItem("token", JSON.stringify(res.data));
        // setUserdata(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="newusermain">
      <div id="forgotpassword">
        <p>
          <h2>New User </h2>
        </p>
        <form onSubmit={newUser}>
          <label for="user_name">User Name: </label>
          <br />
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formValues.user_name}
            onChange={handleChanges}
            required
          />
          <br />
          <br />

          <label for="name">Name: </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChanges}
            required
          />
          <br />
          <br />

          <label for="email">Email: </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChanges}
            required
          />
          <br />
          <br />

          <label for="student_id">User ID: </label>
          <br />
          <input
            type="number"
            id="student_id"
            name="student_id"
            value={formValues.student_id}
            onChange={handleChanges}
            required
          />
          <br />
          <br />

          <label for="password">Password: </label>
          <br />
          <input
            type="text"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChanges}
            pattern="(?=.*\d)(?=.*[!@#$%^&*]).{5,}"
            autofocus
            required
            title="Must be 5 characters with at least 1 number and 1 symbol"
          />
          <br />
          <br />

          <label for="confirmpassword">Confirm password: </label>
          <br />
          <input
            type="text"
            id="confirmpassword"
            name="confirmpassword"
            value={formValues.confirmpassword}
            onChange={handleChanges}
            required
          />
          <br />
          <br />

          <label for="account_type">Account Type: </label>
          <br />
          <select
            id="account_type"
            name="account_type"
            onChange={handleChanges}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <br />
          <br />

          <label for="a1">
            What is your paternal grandmother's first name?
          </label>
          <br />
          <input
            type="text"
            id="sequestion1"
            name="a1"
            value={formValues.a1}
            onChange={handleChanges}
            required
          />
          <br />
          <br />

          <label for="a2">What is your favorite movie?</label>
          <br />
          <input
            type="text"
            id="sequestion2"
            name="a2"
            value={formValues.a2}
            onChange={handleChanges}
            required
          />
          <br />
          <br />

          <label for="a3">What was the name of your first dog?</label>
          <br />
          <input
            type="text"
            id="sequestion3"
            name="a3"
            value={formValues.a3}
            onChange={handleChanges}
            required
          />
          <br />
          <br />

          <input type="submit" />
        </form>
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
