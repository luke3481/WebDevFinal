import React from "react";
import InputAssignment from "./InputAssignment";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';


function SubmitAssignment(props) {  

    return(
        <div id="submitassignment">
            <Link to="/Course/Assignments/InputAssignment"><button type="button" id="btnstyle4">Submit</button></Link>
        </div>
    );
}



export default SubmitAssignment;
