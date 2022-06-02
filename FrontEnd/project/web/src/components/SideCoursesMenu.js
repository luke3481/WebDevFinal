import React from "react";
import { useState } from "react";
import SideCourses from "./SideCourses";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function SideCoursesMenu(props) {
  const [wid, setWid] = useState("0%");

  const openNav = () => {
    console.log(wid);
    setWid("20%");
  };

  const closeNav = () => {
    console.log(wid);
    setWid("0%");
  };

  return (
    <div>
      <button type="button" class="btnstyle2" onClick={openNav}>
        <img src={require("../imgs/courses.png")} />
        Courses
      </button>
      <div className="sidenav" style={{ width: wid }}>
        <a href="" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <h3>Courses</h3>
        <div onClick={closeNav}>
          <SideCourses
            course={props.courses[0]}
            courseId={props.courseIds[0]}
          />
          <SideCourses
            course={props.courses[1]}
            courseId={props.courseIds[1]}
          />
          <SideCourses
            course={props.courses[2]}
            courseId={props.courseIds[2]}
          />
          <SideCourses
            course={props.courses[3]}
            courseId={props.courseIds[3]}
          />
          <SideCourses
            course={props.courses[4]}
            courseId={props.courseIds[4]}
          />
          <SideCourses
            course={props.courses[5]}
            courseId={props.courseIds[5]}
          />
          <SideCourses
            course={props.courses[6]}
            courseId={props.courseIds[6]}
          />
          <SideCourses
            course={props.courses[7]}
            courseId={props.courseIds[7]}
          />
        </div>
      </div>
    </div>
  );
}

export default SideCoursesMenu;
