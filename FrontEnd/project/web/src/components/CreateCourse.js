import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import ClassTile from "./ClassTile";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
 



function CreateCourse(props) {  

    return(
        <div id="create_course">
            <form>
                <a style={{fontWeight: "bold", fontSize: 20}}>Course Details</a><br/><br/>
                <a>Name:</a><br/>
                <input type="text" id="name" name="name" /><br/><br/>
                <a>Description:</a><br/>
                <input type="text" id="description" name="description" /><br/><br/>
                <a>Capacity:</a><br/>
                <input type="text" id="capacity" name="capacity" /><br/><br/>
                <a>Teacher:</a><br/>
                <select id="teacher" name="teacher">
                    <option value="rafi">Rafi Almhana</option>
                    <option value="timothy">Timothy Ng</option>
                </select><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
}



export default CreateCourse;
