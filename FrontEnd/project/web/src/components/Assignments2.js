import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import SideAccountMenu from "./SideAccountMenu";
import Assignment from "./Assignment";
import ClassTile from "./ClassTile";
import SubmitAssignment from "./SubmitAssignment";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
 



function Assignments2(props) {  

    return(
        <div id="assignments2">
            <div id="top_border"></div>
            <Assignment />
            <Assignment />
            <Assignment />
        </div>
    );
}



export default Assignments2;
