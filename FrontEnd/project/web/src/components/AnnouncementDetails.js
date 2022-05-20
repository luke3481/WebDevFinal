import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import SideAccountMenu from "./SideAccountMenu";
import ClassTile from "./ClassTile";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';

 


function AnnouncementDetails(props) {  

    return(
        <div id="announcement_ds">
            <a style={{ fontSize: 20 }}>Dummy title</a>
            <a>Dummy content</a>
        </div>
    );
}



export default AnnouncementDetails;
