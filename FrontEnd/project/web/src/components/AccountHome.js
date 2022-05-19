import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import SideAccountMenu from "./SideAccountMenu";
import Announcement from "./Announcement";
import ClassTile from "./ClassTile";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
 



function AccountHome(props) {  

    return(
        <div id="accounthome">
            <p>User's Name</p>
            <p>User's Email</p>
            <p>User's Student ID</p>
        </div>
    );
    
}



export default AccountHome;