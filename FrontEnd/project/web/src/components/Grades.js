import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import SideAccountMenu from "./SideAccountMenu";
import Grade from "./Grade";
import ClassTile from "./ClassTile";
import InputGrade from "./InputGrade";
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
            <Routes>
                <Route path="/InputGrade" element={<InputGrade />} />
            </Routes>
        </div>
    );
}



export default Grades;
