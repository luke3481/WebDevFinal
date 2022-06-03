import SubmitGrade from "../SubmitGrade";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';

function Grade(props) {

    const course = props.course
    const courseId = props.courseId

    return (
        <div id="grade">
            <p>Student:{props.user}</p>
            <a style={{fontWeight: "bold"}}>{props.assignmentName}</a>
            <a> </a>
            <a>{props.assignmentGrade}</a>
            <SubmitGrade />
        </div>
    );
}

export default Grade;
