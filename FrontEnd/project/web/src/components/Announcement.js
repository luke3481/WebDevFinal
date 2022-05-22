import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';




function Announcement(props) {

    return (
        <Link to="/Course/AnnouncementDetails">
            <span id="announcement">
                <a style={{fontWeight: "bold"}}>Dummy title</a>
                <a>Dummy date</a>
                <a>Dummy content</a>
            </span>
        </Link>
    );
}

export default Announcement;
