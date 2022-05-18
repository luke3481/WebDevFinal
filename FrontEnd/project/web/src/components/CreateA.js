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


 

function CreateA(props) {  

    return(
        <div id="create_announcement">
            <form>
                <label for="announcement">Announcement:</label><br/>
                <input type="text" id="announcement" name="announcement" style={{width: "400px"}} /><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
}



export default CreateA;
