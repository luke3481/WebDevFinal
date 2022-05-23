import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import ClassTile from "./ClassTile";
import Invoices from "./invoices";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';




 
 
function Adminhome(props) {  

    return(
        <div id="classes">
            <div className="class">
                <p>Dashboard</p>
                <hr></hr>
                <ul>
                    <li>Number of active students in the system:</li>
                    <li>Number of courses in the system:</li>
                    <li>Number of active teachers in the system:</li>
                </ul>
                <br/>
            </div>
        </div>
    );
}



export default Adminhome;