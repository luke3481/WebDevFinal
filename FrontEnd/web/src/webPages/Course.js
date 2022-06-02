import React from "react";
import SideCoursesMenu from "../components/SideCoursesMenu";
import CreateCourse from "../components/Course/CreateCourse";
import Announcements from "../components/Course/Announcements";
import AnnouncementDetails from "../components/Course/AnnouncementDetails";
import CreateAnnouncement from "../components/Course/CreateAnnouncement";
import CourseHome from "../components/CourseHome";
import Grades from "../components/Course/Grades";
import InputGrade from "../components/Course/InputGrade";
import Assignments2 from "../components/Course/Assignments2";
import InputAssignment from "../components/Course/InputAssignment";
import SubmitAssignment from "../components/Course/SubmitAssignment";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function Course() {
  

  const location = useLocation();
  const courseId = location.state.courseId;
  const course = location.state.course;
  console.log("location", location);

  // Does state passing work?
  console.log("cc", courseId);
  console.log(course);

  return (
    <div id="nestedcontainer">
      <div id="sidebar2">
        <p>{course}</p>
        <Link
          to="/Course/Announcements"
          state={{ course: course, courseId: courseId }}
        >
          Announcements
        </Link>
        <Link
          to="/Course/Assignments"
          state={{ course: course, courseId: courseId }}
        >
          Assignments
        </Link>
        <Link
          to="/Course/Grades"
          state={{ course: course, courseId: courseId }}
        >
          Grades
        </Link>
        {/* <Link to="/Course/CreateCourse" state={{course: course, courseId: courseId}} ><button type="button" id="btnstyle3">Create Course</button></Link>
                <Link to="/Course/CreateAnnouncement" state={{course: course, courseId: courseId}} ><button type="button" id="btnstyle3">Create Announcement</button></Link> */}
      </div>
      <Routes>
        <Route path="*" element={<CourseHome />} />
        <Route path="/Announcements" element={<Announcements />} />
        <Route path="/AnnouncementDetails" element={<AnnouncementDetails />} />
        {/* <Route path="/CreateAnnouncement" element={<CreateAnnouncement />} />
                <Route path="/CreateCourse" element={<CreateCourse />} /> */}
        <Route path="/Grades" element={<Grades />} />
        <Route path="/InputGrade" element={<InputGrade />} />
        <Route path="/Assignments" element={<Assignments2 />} />
        <Route path="/SubmitAssignment" element={<SubmitAssignment />} />
        <Route path="/InputAssignment" element={<InputAssignment />} />
      </Routes>
    </div>
  );
}

export default Course;
