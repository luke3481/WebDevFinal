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
 



function Password(props) {  
    return(
        <div id="password">
            <form>
                <label for="currentpassword">Current Password:</label><br/>
                <input type="text" id="currentpassword" name="currentpassword" style={{width: "400px"}} /><br/><br/>
                <label for="newpassword">New Password:</label><br/>
                <input type="text" id="newpassword" name="newpassword" style={{width: "400px"}} /><br/><br/>
                <label for="confirmpassword">Confirm Password:</label><br/>
                <input type="text" id="confirmpassword" name="confirmpassword" style={{width: "400px"}} /><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
}


export default Password;