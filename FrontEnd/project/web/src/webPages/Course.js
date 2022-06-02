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
} from 'react-router-dom';


 
function Course() {  
    
    /*
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
          if (actualData.data[i].user_id === user_id) {
            tempCourseIds.push(actualData.data[i].class_id);
          }
        }
        setOldCourseIds(courseIds);
        setCourseIds(tempCourseIds);
        } catch (err) {
            console.log(err.message);
        }
    };

    let checkData1 = (old_courseIds, new_courseIds) => {
      let check = 0;
      console.log('ocid', old_courseIds.length)
      console.log('ncid', new_courseIds.length)
      if (old_courseIds.length == new_courseIds.length) {
        for (var i = 0; i < old_courseIds.length; i++) {
          console.log('oc', old_courseIds[i]);
          console.log('n', new_courseIds[i]);
          if (old_courseIds[i] !== new_courseIds[i]) {
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
        
      } catch (err) {
        console.log(err.message)
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

    useEffect(() => {
        checkData2(oldCourses, courses);
      }, [courses]);
    */

    const location = useLocation()
    const courseId = location.state.courseId
    const course = location.state.course
    console.log('location', location)
    
    // Does state passing work?
    console.log('cc', courseId);
    console.log(course);

    return(
        <div id="nestedcontainer">
            <div id="sidebar2">
                <p>{course}</p>
                <Link to="/Course/Announcements" state={{course: course, courseId: courseId}} >Announcements</Link>
                <Link to="/Course/Assignments" state={{course: course, courseId: courseId}} >Assignments</Link>
                <Link to="/Course/Grades" state={{course: course, courseId: courseId}} >Grades</Link>
                <Link to="/Course/CreateCourse" state={{course: course, courseId: courseId}} ><button type="button" id="btnstyle3">Create Course</button></Link>
                <Link to="/Course/CreateAnnouncement" state={{course: course, courseId: courseId}} ><button type="button" id="btnstyle3">Create Announcement</button></Link>
            </div>
            <Routes>
                <Route path="*" element={<CourseHome />} />
                <Route path="/Announcements" element={<Announcements />} />
                <Route path="/AnnouncementDetails" element={<AnnouncementDetails />} />
                <Route path="/CreateAnnouncement" element={<CreateAnnouncement />} />
                <Route path="/CreateCourse" element={<CreateCourse />} />
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
