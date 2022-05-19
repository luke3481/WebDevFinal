import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import SideAccountMenu from "./SideAccountMenu";
import ClassTile from "./ClassTile";
import CreateCourse from "./CreateCourse";
import Announcements from "./Announcements";
import AnnouncementDetails from "./AnnouncementDetails";
import CreateAnnouncement from "./CreateAnnouncement";
import CourseHome from "./CourseHome";
import Grades from "./Grades";
import Assignments2 from "./Assignments2";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';


 
 
function Course(props) {  

    return(
        <div id="nestedcontainer">
            <div id="sidebar2">
                <p>Courses</p>
                <Link to="/Course/Announcements">Announcements</Link>
                <Link to="/Course/Assignments">Assignments</Link>
                <Link to="/Course/Grades">Grades</Link>
                <Link to="/Course/CreateCourse"><button type="button" id="btnstyle3">Create Course</button></Link>
                <Link to="/Course/CreateAnnouncement"><button type="button" id="btnstyle3">Create Announcement</button></Link>
            </div>
            <Routes>
                <Route path="/" element={<CourseHome />} />
                <Route path="/Announcements" element={<Announcements />} />
                <Route path="/AnnouncementDetails" element={<AnnouncementDetails />} />
                <Route path="/CreateAnnouncement" element={<CreateAnnouncement />} />
                <Route path="/CreateCourse" element={<CreateCourse />} />
                <Route path="/Grades" element={<Grades />} />
                <Route path="/Assignments" element={<Assignments2 />} />
            </Routes>
        </div>
    );
}



export default Course;
