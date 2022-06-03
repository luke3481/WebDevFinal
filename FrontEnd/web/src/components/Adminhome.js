import React, { useState, useEffect } from "react";

export default function Adminhome() {
  const [student_count, setStudentCount] = useState();
  const [teacher_count, setTeacherCount] = useState();
  const [course_count, setCourseCount] = useState();

  function getStudentCount() {
    return fetch("http://localhost:8080/admin/studentcount")
      .then((data) => data.json())
      .then((res) => {
        if (res.data) {
          setStudentCount(JSON.parse(res.data[0]["count"]));
        } else {
          console.log("error");
        }
      })
      .catch((err) => console.log(err));
  }

  function getTeacherCount() {
    return fetch("http://localhost:8080/admin/teachercount")
      .then((data) => data.json())
      .then((res) => {
        if (res.data) {
          setTeacherCount(JSON.parse(res.data[0]["count"]));
        } else {
          console.log("error");
        }
      })
      .catch((err) => console.log(err));
  }

  function getCourseCount() {
    return fetch("http://localhost:8080/admin/coursecount")
      .then((data) => data.json())
      .then((res) => {
        if (res.data) {
          setCourseCount(JSON.parse(res.data[0]["count"]));
        } else {
          console.log("error");
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getStudentCount();
    getTeacherCount();
    getCourseCount();
  }, []);

  return (
    <div id="classes">
      <div className="class">
        <p>Dashboard</p>
        <hr></hr>
        <div id="adminhome">
          <ul>
            <li>
              Number of active students in the system: <b>{student_count}</b>
            </li>
            <li>
              Number of active teachers in the system: <b>{teacher_count}</b>
            </li>
            <li>
              Number of courses in the system: <b>{course_count}</b>
            </li>
          </ul>
        </div>
        <br />
      </div>
    </div>
  );
}
