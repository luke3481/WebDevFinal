import SubmitAssignment from "./SubmitAssignment";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';

function Assignment(props) {
    
    const course = props.course
    const courseId = props.courseId
    
    return (
        <div id="assignment">
            <a style={{fontWeight: "bold"}}>{props.assignmentName}</a>
            <a>{props.assignmentDate}</a>
            <a> </a>
            <SubmitAssignment state={{course: course, courseId: courseId}} />
        </div>
    );
}

export default Assignment;
