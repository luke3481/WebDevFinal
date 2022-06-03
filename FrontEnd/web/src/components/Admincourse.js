import React, { useState, useEffect } from "react";

export default function Admincourse() {
  const [courses, setCourses] = useState([]);

  function getData() {
    return fetch("http://localhost:8080/class/list")
      .then((data) => data.json())
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, [courses]);

  return (
    <div id="classes">
      <div className="class">
        <p>Courses in System</p>
        <hr></hr>
        <table>
          <thead>
            <tr>
              <th>Class ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              return (
                <tr>
                  <td>{course.class_id}</td>
                  <td>{course.class_name}</td>
                  <td>{course.description}</td>
                  <td>{course.capacity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
