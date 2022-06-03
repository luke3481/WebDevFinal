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
            for (var i = 0; i < length; i++) {
                if (new String(actualData.data[i].user_id).valueOf() === new String(user_id).valueOf()
                || new String(actualData.data[i].teacher_id).valueOf() === new String(user_id).valueOf()
                ) {
                    tempAssignmentIds.push(actualData.data[i].assignment_id)
                }
            }
            

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
            console.log('assignments 2 getDAta2', actualData);
            console.log('assigment 2 get data 2 assin Id', assignmentIds);
            
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
    /*
    let checkData2 = (old_data, new_data, num) => {
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
            console.log('Assignment 2 checkData2 getting data')
            getData2();
        }
      };

    useEffect(() => {
        console.log('assignment names');
        checkData2(oldAssignmentNames, assignmentNames);
    }, [assignmentIds]);
    */

    let itemList=[];
    assignmentNames.forEach((item,index)=>{
        itemList.push( <Assignment assignmentName={assignmentNames[index]} assignmentDate={assignmentDates[index]} course={course} courseId={courseId}/>)
    });

    return(
        <div id="assignments2">
            <div id="top_border"></div>
            {itemList}
        </div>
    );
}



export default Assignments2;
