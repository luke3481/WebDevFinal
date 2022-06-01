import React from "react";
import {useState, useEffect} from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import Assignment from "./Assignment";
import ClassTile from "./ClassTile";
import SubmitAssignment from "./SubmitAssignment";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';
 


function Assignments2(props) {  

    const location = useLocation()
    const courseId = location.state.courseId
    const course = location.state.course
    
    const [assignmentIds, setAssignmentIds] = useState([]);
    
    const [assignmentNames, setAssignmentNames] = useState([]);
    const [assignmentDates, setAssignmentDates] = useState([]);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Does state passing work?
    console.log(courseId);
    console.log(course);
    
    // Retrieve user_id from token
    const user_id = '1';

    // Retrieve assignment ids tied to user ids and class ids
    const getData1 = async () => {
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
                if (new String(actualData.data[i].user_id).valueOf() === new String(user_id).valueOf()) {
                    console.log("seojoon")
                    tempAssignmentIds.push(actualData.data[i].assignment_id)
                }
            }
            
            // Debugging
            console.log(tempAssignmentIds)
            
            return tempAssignmentIds;
            
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        // Solution - Tejas
        const result1 = getData1()
        result1.then(res => setAssignmentIds(res))
        console.log(assignmentIds); 
    }, [assignmentIds]);
    
    // Retrieve assignment info tied to assignment ids
    const getData2 = async () => {
        try {
            const response = await fetch('http://localhost:8080/assignment/list');
            if (!response.ok) {
                throw new Error(
                    'This is an HTTP error: The status is ${response.status}'
                );
            }
            // Pull assignment data 
            let actualData = await response.json();  
            
            // Debugging - Data successfully retrieved but empty
            console.log(actualData)
            
            const length = parseInt(actualData.data.length);
            
            // Parse assignment data
            let tempAssignmentNames = [];
            let tempAssignmentDates = [];
            for (var i = 0; i < length; i++) {
                if (assignmentIds.includes(actualData.data[i].assignment_id)) {
                    
                    tempAssignmentNames.push(actualData.data[i].assignment_name)
                    tempAssignmentDates.push(actualData.data[i].due_date)
                }
            }
            
            var output = {'assignmentNames' : tempAssignmentNames, 'assignmentDates' : tempAssignmentDates }
            
            return output
            
            // Debugging
            console.log(tempAssignmentNames)
            
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // Solution - Tejas
        const result2 = getData2()
        result2.then(res => {
            setAssignmentNames(res.assignmentNames)
            setAssignmentDates(res.assignmentDates)
        })
    }, [assignmentNames, assignmentDates]);

    return(
        <div id="assignments2">
            <div id="top_border"></div>
            <Assignment assignmentName={assignmentNames[0]} assignmentDate={assignmentDates[0]} course={course} courseId={courseId}/>
            <Assignment assignmentName={assignmentNames[1]} assignmentDate={assignmentDates[1]} course={course} courseId={courseId}/>
            <Assignment assignmentName={assignmentNames[2]} assignmentDate={assignmentDates[2]} course={course} courseId={courseId}/>
        </div>
    );
}



export default Assignments2;
