import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import axios from "axios";

import ClassTile from "./components/Home/ClassTile";
import SideBar from "./components/SideBar";
import AdminSideBar from "./components/AdminSideBar";
import Assignments from "./components/Assignments";
import Teacherassignments from "./components/Teacherassignments";
import Home from "./webPages/Home";
import Adminhome from "./components/Adminhome";
import Admincourse from "./components/Admincourse";
import Course from "./webPages/Course";
import Login from "./components/Login/Login";
import Account from "./webPages/Account";
import Settings from "./webPages/Settings";

function AppCopy() {
  // Retrieve class_ids tied to user_id
  const [userdata, setUserdata] = useState();
  const [sub_menu, setSub] = useState("create_c");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [courseIds, setCourseIds] = useState(["1", "2", "3"]);
  const [oldCourseIds, setOldCourseIds] = useState([]);

  const [courses, setCourses] = useState(["test", "Algos", "Python"]);
  const [oldCourses, setOldCourses] = useState([]);

  const [assignmentIds, setAssignmentIds] = useState([]);
  const [oldAssignmentIds, setOldAssignmentIds] = useState(["1"]);

  const [assignmentNames, setAssignmentNames] = useState([]);
  const [oldAssignmentNames, setOldAssignmentNames] = useState(["1"]);

  const [assignmentDates, setAssignmentDates] = useState([]);
  const [oldAssignmentDates, setOldAssignmentDates] = useState(["1"]);

  // Retrieve user_id from token
  const user_id = "1";

  // Retrieve class_ids tied to user_id
  const getData1 = async () => {
    try {
      const response = await fetch("http://localhost:8080/user_class/list");
      if (!response.ok) {
        throw new Error(
          "This is an HTTP error: The status is ${response.status}"
        );
      }
      // Pull user/course data
      let actualData = await response.json();
      // Debugging
      console.log("ad", actualData.data);
      const length = parseInt(actualData.data.length);
      // Parse course id data
      let tempCourseIds = [];
      for (var i = 0; i < length; i++) {
        if (actualData.data[i].user_id == user_id) {
          tempCourseIds.push(actualData.data[i].class_id);
        }
      }
      console.log("tempCId", tempCourseIds);
      setOldCourseIds(courseIds);
      setCourseIds(tempCourseIds);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  let checkData1 = (old_courseIds, new_courseIds) => {
    let check = 0;
    console.log("oci", old_courseIds);
    console.log("nci", new_courseIds);
    if (old_courseIds.length == new_courseIds.length) {
      for (var i = 0; i < old_courseIds.length; i++) {
        if (old_courseIds[i] !== new_courseIds[i]) {
          check = 1;
          {
            break;
          }
        }
      }
    } else {
      check = 1;
    }
    if (check == 1) {
      getData1();
    }
  };

  const getData2 = async () => {
    try {
      const response = await fetch("http://localhost:8080/class/list");
      if (!response.ok) {
        throw new Error(
          "This is an HTTP error: The status is ${response.status}"
        );
      }
      // Pull course data
      let actualData = await response.json();
      const length = parseInt(actualData.data.length);
      // Parse course data
      let tempCourses = [];
      for (var i = 0; i < length; i++) {
        if (courseIds.includes(actualData.data[i].class_id)) {
          tempCourses.push(actualData.data[i].class_name);
        }
      }
      setOldCourses(courses);
      setCourses(tempCourses);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  let checkData2 = (old_courses, new_courses) => {
    let check = 0;
    if (old_courses.length == new_courses.length) {
      for (var i = 0; i < old_courses.length; i++) {
        console.log("oc", old_courses);
        console.log("nc", new_courses);
        if (old_courses[i] != new_courses[i]) {
          check = 1;
          {
            break;
          }
        }
      }
    } else {
      check = 1;
    }
    if (check == 1) {
      getData2();
    }
  };

  // Retrieve assignment ids tied to user ids and assignment ids
  const getData3 = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/user_assignment/list"
      );
      if (!response.ok) {
        throw new Error(
          "This is an HTTP error: The status is ${response.status}"
        );
      }
      // Pull user/assignment data
      let actualData = await response.json();

      const length = parseInt(actualData.data.length);

      // Parse assignment id data
      let tempAssignmentIds = [];
      for (var i = 0; i < length; i++) {
        if (
          new String(actualData.data[i].user_id).valueOf() ===
          new String(user_id).valueOf()
        ) {
          tempAssignmentIds.push(actualData.data[i].assignment_id);
        }
      }

      setOldAssignmentIds(assignmentIds);
      setAssignmentIds(tempAssignmentIds);

      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  let checkData3 = (old_data, new_data, num) => {
    let check = 0;
    if (old_data.length == new_data.length) {
      for (var i = 0; i < old_data.length; i++) {
        if (old_data[i] != new_data[i]) {
          check = 1;
          {
            break;
          }
        }
      }
    } else {
      check = 1;
    }
    if (check == 1) {
      getData3();
    }
  };

  // Retrieve assignment info tied to assignment ids
  const getData4 = async () => {
    try {
      const response = await fetch("http://localhost:8080/assignment/list");
      if (!response.ok) {
        throw new Error(
          "This is an HTTP error: The status is ${response.status}"
        );
      }
      // Pull assignment data
      let actualData = await response.json();

      const length = parseInt(actualData.data.length);

      // Parse assignment data
      let tempAssignmentNames = [];
      let tempAssignmentDates = [];

      for (var i = 0; i < length; i++) {
        if (assignmentIds.includes(actualData.data[i]["assignment_id"])) {
          tempAssignmentNames.push(actualData.data[i]["assignment_name"]);
          tempAssignmentDates.push(actualData.data[i]["due_date"]);
        }
      }

      setOldAssignmentNames(assignmentNames);
      setAssignmentNames(tempAssignmentNames);

      setOldAssignmentDates(assignmentDates);
      setAssignmentDates(tempAssignmentDates);

      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  let checkData4 = (old_data, new_data, num) => {
    let check = 0;
    if (old_data.length == new_data.length) {
      for (var i = 0; i < old_data.length; i++) {
        if (old_data[i] != new_data[i]) {
          check = 1;
          {
            break;
          }
        }
      }
    } else {
      check = 1;
    }
    if (check == 1) {
      getData4();
    }
  };

  useEffect(() => {
    checkData1(oldCourseIds, courseIds);
  }, [courseIds]);

  // Retrieve class_names tied to class_ids
  useEffect(() => {
    checkData2(oldCourses, courses);
  }, [courses]);

  useEffect(() => {
    checkData3(oldAssignmentIds, assignmentIds);
  }, [assignmentIds]);

  useEffect(() => {
    checkData4(oldAssignmentNames, assignmentNames);
  }, [assignmentIds, assignmentNames, assignmentDates]);

  if (!localStorage.getItem("token")) {
    return <Login setUserdata={setUserdata} />;
  }

  const userinfo = localStorage.getItem("token");
  const parsedData = JSON.parse(userinfo);
  const account_type = parsedData["account_type"];

  if (account_type == "student") {
    return (
      <div className="App">
        <div className="container">
          <SideBar
            courses={courses}
            courseIds={courseIds}
            userdata={userdata}
          />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Course/*" element={<Course />} />
            <Route path="/LogIn" element={<Login />} />
          </Routes>
          <Assignments
            Ass1={assignmentNames[0]}
            Ass2={assignmentNames[1]}
            Ass3={assignmentNames[2]}
          />
          {/* Below needs to be shown instead of above for teacher accounts */}
          {/* <Teacherassignments Ass1={'assignment1'} Ass2={'assignment2'} Ass3={'assignment3'} /> */}
        </div>
      </div>
    );
  }

  if (account_type == "admin") {
    return (
      <div className="App">
        <div className="container">
          <AdminSideBar />
          <Routes>
            <Route path="/" element={<Adminhome />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Course/*" element={<Admincourse />} />
            <Route path="/Settings/*" element={<Settings />} />
            <Route path="/LogIn" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default AppCopy;
