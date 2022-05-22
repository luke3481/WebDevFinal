
import React from "react";
import {useState} from "react";




function SideCourses(props) {

    return(
        <div>
            <a href="" onClick={() => {console.log('need to change to this link')}}>
                {props.course_name}
            </a>
        </div>   
    );
}


export default SideCourses;
