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
 



function Profile(props) {  

    return(
        <div id="profile">
            <form>
                <label for="editname">Edit Name</label><br/>
                <input type="text" id="editname" name="editname" style={{width: "400px"}} /><input type="submit" />
            </form>
            <br/><br/>
            <form>
                <label for="editemail">Edit Email</label><br/>
                <input type="text" id="editemail" name="editemail" style={{width: "400px"}} /><input type="submit" />
            </form>
            <br/><br/>
            <form>
                <label for="editstudentid">Edit Student ID</label><br/>
                <input type="text" id="editstudentid" name="editstudentid" style={{width: "400px"}} /><input type="submit" />
            </form>
        </div>
    );
    
}



export default Profile;