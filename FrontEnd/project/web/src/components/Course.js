import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import SideAccountMenu from "./SideAccountMenu";
import ClassTile from "./ClassTile";
import CreateCourse from "./CreateCourse";
import Announcements from "./Announcements";
import AnnouncementD from "./AnnouncementD";
import CreateA from "./CreateA";
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
                <a href="">Announcements</a>
                <a href="">Assignments</a>
                <a href="">Grades</a><br/><br/><br/>
                <button type="button" id="btnstyle3">Create Course</button><br/><br/>
                <button type="button" id="btnstyle3">Create Announcement</button>
            </div>
            <Routes>
                <Route path="/" element={<CreateCourse />} />
                <Route path="/Announcements" element={<Announcements />} />
                <Route path="/AnnouncementDetails" element={<AnnouncementD />} />
                <Route path="/CreateAnnouncement" element={<CreateA />} />
            </Routes>
        </div>
    );
}



export default Course;
