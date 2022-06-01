import React, { useState } from "react";

export default function AccountHome() {
  const userdata = localStorage.getItem("token");
  const parsedData = JSON.parse(userdata);
  const user_id = parsedData["user_id"];

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [student_id, setStudent_id] = useState();

  function getData(user) {
    return fetch("http://localhost:8080/user/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.data) {
          setName(JSON.parse(JSON.stringify(res.data["name"])));
          setEmail(JSON.parse(JSON.stringify(res.data["email"])));
          setStudent_id(JSON.parse(JSON.stringify(res.data["student_id"])));
        } else {
          console.log("error");
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    getData({ user_id });
  };

  return (
    <div id="accounthome" onClick={handleSubmit}>
      <p>
        <h4>Click to Display</h4>
      </p>
      <p>
        Name: <b>{name}</b>
      </p>
      <p>
        Email: <b>{email}</b>
      </p>
      <p>
        Student ID: <b>{student_id}</b>
      </p>
    </div>
  );
}
