
import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";


function Assignments(props) {
    

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
        console.log('getData1');
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
            console.log('getData1 Temporary assignment Ids', tempAssignmentIds);

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
        console.log('UseEffect 1');
        checkData1(oldAssignmentIds, assignmentIds);
        console.log('Use Effect 1 assignmentIDs', assignmentIds);
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
            console.log('getData2 actual Data', actualData);
            console.log('getData2 assignmentIDs', assignmentIds);
            
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
            
            console.log('get Data2 temp assignment names', tempAssignmentNames);

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
        console.log('check data 2 old data', old_data);
        console.log('check data 2 new data', new_data);
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
            getData2();
        }
      };

    useEffect(() => {
        console.log('Use Effect2');
        checkData2(oldAssignmentNames, assignmentNames);
    }, [assignmentIds]);
    */
    

    let itemList=[];
    assignmentNames.forEach((item,index)=>{
        itemList.push( <li key={index}>{item}</li>)
    });


    return (
    <div id="assignments">
        <div className="assignments_logo">
            <img src={require("../imgs/uchicago.png")} alt=''/>
        </div>
        <div className="todo">
        <div className="assignment_title">
            <p>To Do</p>
            <hr/>
        </div>
        <ul>
            {itemList}
        </ul>
        </div>
        <div className="upcoming">
        <div className="assignment_title">
            <p>Upcoming</p>
            <hr/>
        </div>
        <ul>
            <li>{props.Ass1}</li>
            <li>{props.Ass2}</li>
            <li>{props.Ass3}</li>
        </ul>
        </div>
        <div className="past">
        <div className="assignment_title">
            <p>Past</p>
            <hr/>
        </div>
        <ul>
            <li>{props.Ass1}</li>
            <li>{props.Ass2}</li>
            <li>{props.Ass3}</li>
        </ul>
        </div>
</div>
    )
}

export default Assignments;