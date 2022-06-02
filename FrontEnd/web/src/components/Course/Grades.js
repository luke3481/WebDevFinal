import React from "react";
import {useState, useEffect} from "react";
import SideCoursesMenu from "../SideCoursesMenu";
import Grade from "./Grade";
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
    const [oldAssignmentIds, setOldAssignmentIds] = useState(['1']);
    
    const [assignmentNames, setAssignmentNames] = useState([]);
    const [oldAssignmentNames, setOldAssignmentNames] = useState(['1']);

    const [assignmentDates, setAssignmentDates] = useState([]);
    const [oldAssignmentDates, setOldAssignmentDates] = useState(['1']);

    const [assignmentGrades, setAssignmentGrades] = useState([]);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    

    // Retrieve user_id from token
      // Retrieve user_id from token
      const user_data = localStorage.getItem("token");
      const parsedData = JSON.parse(user_data);
      const user_id = parsedData['user_id'];
      const account_type = parsedData["account_type"];

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
            let tempAssignmentGrades = [];
            for (var i = 0; i < length; i++) {
                if (new String(actualData.data[i].user_id).valueOf() === new String(user_id).valueOf()) {
                    tempAssignmentIds.push(actualData.data[i].assignment_id)
                    tempAssignmentGrades.push(actualData.data[i]['points'])
                }
            }

            setOldAssignmentIds(assignmentIds);
            setAssignmentIds(tempAssignmentIds);

            setAssignmentGrades(tempAssignmentGrades);

            console.log('get Data2 temp assignment poihnts', tempAssignmentGrades);
            
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    let checkData1 = (old_data, new_data, num) => {
        console.log('checkData1');
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
            getData2();
        }
      };
    
    useEffect(() => {
        checkData1(oldAssignmentIds, assignmentIds);
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
