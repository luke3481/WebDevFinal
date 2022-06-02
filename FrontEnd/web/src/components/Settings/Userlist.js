import React, { useState } from "react";

export default function Userlist() {
  const [user, setUser] = useState([]);

  function getData() {
    return fetch("http://localhost:8080/user/list")
      .then((data) => data.json())
      .then((res) => {
        if (res.data) {
          setUser(JSON.parse(res.data));
          console.log(user);
        } else {
          console.log("error");
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div id="userlist" onClick={handleSubmit}>
      <div>{user}</div>
    </div>
  );
}
