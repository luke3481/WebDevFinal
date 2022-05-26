import React from "react";
import {useState, useEffect} from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import Grade from "./Grade";
import ClassTile from "./ClassTile";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';
 

function Grades(props) {  

    const location = useLocation()
    const courseId = location.state.courseId
    const course = location.state.course

    const [assignmentIds, setAssignmentIds] = useState([]);
    
    const [assignmentNames, setAssignmentNames] = useState([]);
    const [assignmentGrades, setAssignmentGrades] = useState([]);
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Does state passing work?
    console.log(courseId);
    console.log(course);
    
    // Retrieve user_id from token
    const user_id = '1';

    // Retrieve assignment ids tied to user ids and class ids
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:8080/user_assignment/list');
                if (!response.ok) {
                    throw new Error(
                        'This is an HTTP error: The status is ${response.status}'
                    );
                }
                // Pull user/assignment data 
                let actualData = await response.json();  
                
                const length = parseInt(actualData.data.length);
                
                // Parse assignment id data
                let tempAssignmentIds = [];
                for (var i = 0; i < length; i++) {
                    if ((actualData.data[i].user_id == user_id) && (actualData.data[i].class_id == courseId)) {
                        tempAssignmentIds.push(actualData.data[i].assignment_id)
                    }
                }
                
                setAssignmentIds(tempAssignmentIds);
                
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, []);
    
    // Retrieve assignment info tied to assignment ids
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:8080/assignment/list');
                if (!response.ok) {
                    throw new Error(
                        'This is an HTTP error: The status is ${response.status}'
                    );
                }
                // Pull assignment data 
                let actualData = await response.json();  
                
                const length = parseInt(actualData.data.length);
                
                // Parse assignment data
                let tempAssignmentNames = [];
                let tempAssignmentGrades = [];
                for (var i = 0; i < length; i++) {
                    if (assignmentIds.includes(actualData.data[i].assignment_id)) {
                        tempAssignmentNames.push(actualData.data[i].assignment_name)
                        tempAssignmentGrades.push(actualData.data[i].points)
                    }
                }
                
                setAssignmentNames(tempAssignmentNames);
                setAssignmentGrades(tempAssignmentGrades);
                
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, []);

    return(
        <div id="grades">
            <div id="top_border"></div>
            <Grade assignmentName={assignmentNames[0]} assignmentGrade={assignmentGrades[0]} courseId={courseId} course={course} />
            <Grade assignmentName={assignmentNames[1]} assignmentGrade={assignmentGrades[1]} courseId={courseId} course={course} />
            <Grade assignmentName={assignmentNames[2]} assignmentGrade={assignmentGrades[2]} courseId={courseId} course={course} />
        </div>
    );
}



export default Grades;
