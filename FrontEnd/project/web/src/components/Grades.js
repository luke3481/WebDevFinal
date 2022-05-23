import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import Grade from "./Grade";
import ClassTile from "./ClassTile";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
 



function Grades(props) {  

    return(
        <div id="grades">
            <div id="top_border"></div>
            <Grade />
            <Grade />
            <Grade />
        </div>
    );
}



export default Grades;
