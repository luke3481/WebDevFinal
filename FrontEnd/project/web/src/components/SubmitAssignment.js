import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';


function SubmitAssignment(props) {  
    
    const course = props.course
    const courseId = props.courseId
    
    return(
        <div id="submitassignment">
            <Link to="/Course/InputAssignment" state={{course: course, courseId: courseId}}><button type="button" id="btnstyle4">Submit</button></Link>
        </div>
    );
}



export default SubmitAssignment;
