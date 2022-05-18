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
            <p style={{ fontSize: 20 }}>Dummy title</p>
            <p>Dummy content</p>
        </div>
    );
}



export default AnnouncementDetails;
