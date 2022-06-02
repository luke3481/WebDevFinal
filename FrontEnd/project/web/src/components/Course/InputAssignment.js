import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';


function InputAssignment(props) {  
    
    const course = props.course
    const courseId = props.courseId
    
    return(
        <div id="inputassignment">
            <form>
                <a style={{color: "black", fontWeight: "bold", fontSize: 20}}>Enter Assignment:</a><br/><br/>
                <input type="text" id="inputassignment" name="inputassignment" style={{width: "400px"}} /><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
}



export default InputAssignment;
