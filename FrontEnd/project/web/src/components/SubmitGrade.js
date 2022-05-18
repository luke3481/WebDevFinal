import React from "react";
import InputGrade from "./InputGrade";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';


function SubmitGrade(props) {  

    return(
        <div id="submitgrade">
            <Link to="/Course/Grades/InputGrade"><button type="button" id="btnstyle4">Submit Grade</button></Link>
        </div>
    );
}



export default SubmitGrade;
