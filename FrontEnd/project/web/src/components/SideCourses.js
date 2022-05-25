
import React from "react";
import {useState} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';



function SideCourses(props) {
    
    return(
        <div id="sidecourses">
            <Link to="/Course" state={{course: props.course, courseId: props.courseId}} >{props.course}</Link>
        </div>   
    );
}


export default SideCourses;
