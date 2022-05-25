import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';




function Announcement(props) {
    
    console.log(props.announcement);
    
    return (
        <Link to="/Course/AnnouncementDetails">
            <span id="announcement">
                <a style={{fontWeight: "bold"}}>Dummy title</a>
                <a>Dummy date</a>
                <a>{props.announcement}</a>
            </span>
        </Link>
    );
}

export default Announcement;
