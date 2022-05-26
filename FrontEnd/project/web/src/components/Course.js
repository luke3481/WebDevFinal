import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import ClassTile from "./ClassTile";
import CreateCourse from "./CreateCourse";
import Announcements from "./Announcements";
import AnnouncementDetails from "./AnnouncementDetails";
import CreateAnnouncement from "./CreateAnnouncement";
import CourseHome from "./CourseHome";
import Grades from "./Grades";
import InputGrade from "./InputGrade";
import Assignments2 from "./Assignments2";
import InputAssignment from "./InputAssignment";
import SubmitAssignment from "./SubmitAssignment";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';


 
function Course() {  
    
    const location = useLocation()
    const courseId = location.state.courseId
    const course = location.state.course
    
    // Does state passing work?
    console.log(courseId);
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
