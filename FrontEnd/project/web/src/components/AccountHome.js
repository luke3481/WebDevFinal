import React from "react";

function AccountHome() {
  const userdata = localStorage.getItem("token");
  const parsedData = JSON.parse(userdata);
  console.log(parsedData["name"]);

  return (
    <div id="accounthome">
      <p>
        Name: <b>{parsedData["name"]}</b>
      </p>
      <p>
        Email: <b>{parsedData["email"]}</b>
      </p>
      <p>
        Student ID: <b>{parsedData["student_id"]}</b>
      </p>
    </div>
  );
}

export default AccountHome;
