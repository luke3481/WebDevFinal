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

import ClassTile from "./components/ClassTile";
import SideBar from "./components/SideBar";
import Assignments from "./components/Assignments";
import Teacherassignments from "./components/Teacherassignments";
import Home from "./components/Home";
import Adminhome from "./components/Adminhome";
import Course from "./components/Course";
import Invoices from "./components/invoices";
import Login from "./components/Login/Login";
import Account from "./components/Account";
import Settings from "./components/Settings";
import useToken from "./components/useToken";

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
      console.log('ad', actualData.data);
      const length = parseInt(actualData.data.length);
      // Parse course id data
      let tempCourseIds = [];
      for (var i = 0; i < length; i++) {
        if (actualData.data[i].user_id == user_id) {
          tempCourseIds.push(actualData.data[i].class_id);
        }
      }
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
    console.log('oci', old_courseIds.length)
    console.log('nci', new_courseIds.length)
    if (old_courseIds.length == new_courseIds.length) {
      for (var i = 0; i < old_courseIds.length; i++) {
        console.log('oc', old_courseIds[i]);
        console.log('n', new_courseIds[i]);
        if (old_courseIds[i] != new_courseIds[i]) {
          check = 1;
          {break};
        }
      }
    } else {
      check = 1;
    }
    console.log('c', check);
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
      console.log('dsec', actualData.data);
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
        console.log('oc', old_courses);
        console.log('nc', new_courses);
        if (old_courses[i] != new_courses[i]) {
          check = 1;
          {break};
        }
      }
    } else {
      check = 1;
    }
    if (check == 1) {
      getData2();
    }
  };
  useEffect(() => {
    checkData1(oldCourseIds, courseIds);
  }, [courseIds]);
  // Retrieve class_names tied to class_ids
  useEffect(() => {
    checkData2(oldCourses, courses);
  }, [courses]);

  if (!localStorage.getItem("token")) {
    return <Login setUserdata={setUserdata} />;
  }

  return (
    <div className="App">
      <div className="container">
        <SideBar
          courses={["WebDev", "Algos", "Python"]}
          courseIds={["1", "2", "3"]}
          userdata={userdata}
        />
        <Routes>
          <Route path="*" element={<Home />} />
          {/* below is activated and above is inactivated if admin account */}
          {/* <Route path="/" element={<Adminhome />} /> */}
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Course/*" element={<Course />} />
          <Route path="/Settings/*" element={<Settings />} />
          <Route path="/Invoices" element={<Invoices />} />
          <Route path="/LogIn" element={<Login />} />
        </Routes>
        <Assignments
          Ass1={"assignment1"}
          Ass2={"assignment2"}
          Ass3={"assignment3"}
        />
        {/* Below needs to be shown instead of above for teacher accounts */}
        {/* <Teacherassignments Ass1={'assignment1'} Ass2={'assignment2'} Ass3={'assignment3'} /> */}
      </div>
    </div>
  );
}

export default AppCopy;
