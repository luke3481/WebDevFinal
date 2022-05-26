import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';




function Announcement(props) {
    
    const courseId = props.courseId
    const course = props.course
    const announcementTitle = props.announcementTitle
    const announcement = props.announcement
    
    return (
        <Link to="/Course/AnnouncementDetails" state={{course: course, courseId: courseId, announcementTitle: announcementTitle, announcement: announcement}}>
            <span id="announcement">
                <a style={{fontWeight: "bold"}}>{props.announcementTitle}</a>
                <a>{props.announcementDate}</a>
                <a>{props.announcement}</a>
            </span>
        </Link>
    );
}

export default Announcement;
