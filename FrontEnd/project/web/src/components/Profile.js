import React, { useState } from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import Announcement from "./Announcement";
import ClassTile from "./ClassTile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Profile() {
  const userdata = localStorage.getItem("token");
  const parsedData = JSON.parse(userdata);
  const user_id = parsedData["user_id"];

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [student_id, setStudent_id] = useState();
  const [message, setMessage] = useState();
  const [message2, setMessage2] = useState();
  const [message3, setMessage3] = useState();

  function changeName(changes) {
    return fetch("http://localhost:8080/user/editname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message) {
          setMessage("Changed Sucessfully");
        } else {
          setMessage("Change did not go through");
        }
      })
      .catch((err) => console.log(err));
  }

  function changeEmail(changes) {
    return fetch("http://localhost:8080/user/editemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message) {
          setMessage2("Changed Sucessfully");
        } else {
          setMessage2("Change did not go through");
        }
      })
      .catch((err) => console.log(err));
  }

  function changeStudent_id(changes) {
    return fetch("http://localhost:8080/user/editstudentid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message) {
          setMessage3("Changed Sucessfully");
        } else {
          setMessage3("Change did not go through");
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeName({ name, user_id });
    e.target.reset();
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    changeEmail({ email, user_id });
    e.target.reset();
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    changeStudent_id({ student_id, user_id });
    e.target.reset();
  };

  return (
    <div id="profile">
      <form onSubmit={handleSubmit}>
        <label for="editname">Edit Name</label>
        <br />
        <input
          type="text"
          id="editname"
          name="editname"
          style={{ width: "400px" }}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
      </form>
      <br />
      <div class="message">{message}</div>
      <br />
      <form onSubmit={handleSubmit2}>
        <label for="editemail">Edit Email</label>
        <br />
        <input
          type="text"
          id="editemail"
          name="editemail"
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "400px" }}
        />
        <input type="submit" />
      </form>
      <br />
      <div class="message2">{message2}</div>
      <br />
      <form onSubmit={handleSubmit3}>
        <label for="editstudentid">Edit Student ID</label>
        <br />
        <input
          type="text"
          id="editstudentid"
          name="editstudentid"
          onChange={(e) => setStudent_id(e.target.value)}
          style={{ width: "400px" }}
        />
        <input type="submit" />
      </form>
      <br />
      <div class="message3">{message3}</div>
    </div>
  );
}
