import React from "react";
import {useState, useEffect} from "react";
import Assignment from "./Assignment";
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
    const [oldAssignmentIds, setOldAssignmentIds] = useState(['1']);
    
    const [assignmentNames, setAssignmentNames] = useState([]);
    const [oldAssignmentNames, setOldAssignmentNames] = useState(['1']);

    const [assignmentDates, setAssignmentDates] = useState([]);
    const [oldAssignmentDates, setOldAssignmentDates] = useState(['1']);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    

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
                    tempAssignmentIds.push(actualData.data[i].assignment_id)
                }
            }
            console.log('tai', tempAssignmentIds);

            setOldAssignmentIds(assignmentIds);
            setAssignmentIds(tempAssignmentIds);
            
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    let checkData1 = (old_data, new_data, num) => {
        let check = 0;
        if (old_data.length == new_data.length) {
          for (var i = 0; i < old_data.length; i++) {
            if (old_data[i] != new_data[i]) {
              check = 1;
              {break};
            }
          }
        } else {
          check = 1;
        }
        if (check == 1) {
            getData1();
        }
      };
    
    useEffect(() => {
        console.log('assignment IDS useEffect');
        checkData1(oldAssignmentIds, assignmentIds);
        console.log('assignmentIDs', assignmentIds);
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
            console.log('ad2222', actualData);
            console.log('ad', actualData.data[0]['assignment_id']);
            console.log('assignmIDscheck', assignmentIds);
            console.log('assignmentIDs', assignmentIds);
            
            const length = parseInt(actualData.data.length);
            
            // Parse assignment data
            let tempAssignmentNames = [];
            let tempAssignmentDates = [];
            
            for (var i = 0; i < length; i++) {
                if (assignmentIds.includes(actualData.data[i]['assignment_id'])) {
                    
                    tempAssignmentNames.push(actualData.data[i]['assignment_name'])
                    tempAssignmentDates.push(actualData.data[i]['due_date'])
                }
            }
            
            console.log('tan', tempAssignmentNames);

            setOldAssignmentNames(assignmentNames);
            setAssignmentNames(tempAssignmentNames);

            setOldAssignmentDates(assignmentDates);
            setAssignmentDates(tempAssignmentDates);
            
            
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }
    
    let checkData2 = (old_data, new_data, num) => {
        let check = 0;
        console.log('od', old_data);
        console.log('nd', new_data);
        if (old_data.length == new_data.length) {
          for (var i = 0; i < old_data.length; i++) {
            console.log('oa', old_data);
            console.log('na', new_data);
            if (old_data[i] != new_data[i]) {
              check = 1;
              {break};
            }
          }
        } else {
          check = 1;
        }
        if (check == 1) {
            getData2();
        }
      };

    useEffect(() => {
        console.log('assignment names');
        checkData2(oldAssignmentNames, assignmentNames);
    }, [assignmentIds]);

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
