import React, { useState, useEffect } from "react";

export default function Userlist() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState("active");
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    getData();
  }, [users]);

  function getData() {
    return fetch("http://localhost:8080/admin/list")
      .then((data) => data.json())
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  function deleteUser(user_id) {
    return fetch("http://localhost:8080/admin/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    })
      .then((data) => {
        data.json();
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

  function toggleUser(user_id) {
    return fetch("http://localhost:8080/admin/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    })
      .then((data) => {
        data.json();
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

  function searchUsername(e) {
    e.preventDefault();
    const filteredUsers = users.filter((user) => {
      return user.user_name.includes(username);
    });
    setFilteredData(filteredUsers);
  }

  function searchEmail(e) {
    e.preventDefault();
    const filteredUsers = users.filter((user) => {
      return user.email.includes(email);
    });
    setFilteredData(filteredUsers);
  }

  function searchStatus(e) {
    e.preventDefault();
    const filteredUsers = users.filter((user) => {
      return user.status === active;
    });
    setFilteredData(filteredUsers);
  }

  return (
    <div id="userlist">
      <form onSubmit={searchUsername}>
        <input
          type="text"
          name="usernamesearch"
          placeholder="search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <br />
      <form onSubmit={searchEmail}>
        <input
          type="text"
          name="emailsearch"
          placeholder="search by email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <br />
      <form onSubmit={searchStatus}>
        <select
          id="account_status"
          name="account_status"
          onChange={(e) => setActive(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button>Submit</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>User_ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Account Type</th>
            <th>Status</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData
            ? filteredData.map((user) => {
                return (
                  <tr>
                    <td>{user.user_id}</td>
                    <td>{user.user_name}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.account_type}</td>
                    <td>{user.status}</td>
                    <td>
                      <button onClick={() => toggleUser(user.user_id)}>
                        toggle
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(user.user_id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : users.map((user) => {
                return (
                  <tr>
                    <td>{user.user_id}</td>
                    <td>{user.user_name}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.account_type}</td>
                    <td>{user.status}</td>
                    <td>
                      <button onClick={() => toggleUser(user.user_id)}>
                        toggle
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(user.user_id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}
