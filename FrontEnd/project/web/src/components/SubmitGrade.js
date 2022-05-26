import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';


function SubmitGrade(props) {  

    const course = props.course
    const courseId = props.courseId

    return(
        <div id="submitgrade">
            <Link to="/Course/InputGrade" state={{course: course, courseId: courseId}}><button type="button" id="btnstyle4">Submit Grade</button></Link>
        </div>
    );
}



export default SubmitGrade;
