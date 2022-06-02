import React, { useState } from "react";

export default function Userlist() {
  const [user, setUser] = useState();
  const [user_id, setUserid] = useState();

  function getData() {
    return fetch("http://localhost:8080/admin/list")
      .then((data) => data.json())
      .then((res) => {
        if (res.data) {
          setUser(res.data);
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
    tableFromJson();
  };

  function deleteUser(user_id) {
    return fetch("http://localhost:8080/admin/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_id),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message) {
          console.log("Deleted user");
        } else {
          console.log("Change did not go through");
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit2 = async (e) => {
    var n = e.parentNode.parentNode.cells[0].textContent;
    e.preventDefault();
    console.log();
    // deleteUser();
    // deleteRow(this);
  };

  function tableFromJson() {
    // Extract value from table header.
    var col = [];
    for (var i = 0; i < user.length; i++) {
      for (var key in user[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }
    col.push("action");
    col.push("delete");

    // Create a table.
    var table = document.createElement("table");

    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1); // table row.

    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th"); // table header.
      th.innerHTML = col[i];
      tr.appendChild(th);
    }
    // add json data to the table as rows.
    for (var i = 0; i < user.length; i++) {
      tr = table.insertRow(-1);

      for (var j = 0; j < col.length - 2; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = user[i][col[j]];
      }
      var tab = tr.insertCell(-1);
      tab.innerHTML = "<button>toggle</button>";
      var tab2 = tr.insertCell(-1);
      tab2.innerHTML = `<button onClick=''>delete</button>`;
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementById("table");
    divShowData.innerHTML = "";
    divShowData.appendChild(table);

    //   var searchbar = (
    //     <input
    //       type="text"
    //       id="myInput"
    //       onkeyup="myFunction()"
    //       placeholder="Search for names or countries.."
    //       title="Type in a name or a country"
    //     ></input>
    //   );
    //   var divShowData2 = document.getElementById("searchbar");
    //   divShowData2.innerHTML = "";
    //   divShowData2.append(searchbar);
  }

  return (
    <div id="userlist">
      <button onClick={handleSubmit}>click to view users</button>
      <div id="searchbar"></div>
      <div id="table"></div>
    </div>
  );
}
