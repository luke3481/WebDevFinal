
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
            <Link to ="/Course">{props.course_name}</Link>
        </div>   
    );
}


export default SideCourses;
