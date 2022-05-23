import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import Announcement from "./Announcement";
import ClassTile from "./ClassTile";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
 



function Announcements(props) {  

    return(
        <div id="announcements">
            <div id="top_border"></div>
            <Announcement />
            <Announcement />
            <Announcement />
        </div>
    );
}



export default Announcements;
