
import React from "react";
import {useState} from "react";
import SideCourses from "./SideCourses";



function SideCoursesMenu(props) {

    const [wid, setWid] = useState("0%");

    const openNav = () => {
        console.log(wid)
        setWid("20%")
    }

    const closeNav = () => {
        console.log(wid)
        setWid("0%")
    }

    return(
        <div>
            <button type="button" id="btnstyle2" onClick={openNav}>
                        <img src={require("../imgs/courses.png")}/>
                        Courses
            </button>
            <div className="sidenav" style={{width: wid}}>
                <a href="" className="closebtn" onClick={closeNav}>&times;</a>
                <h3>Courses</h3>
                <SideCourses course_name={props.courses[0]}/>
                <SideCourses course_name={props.courses[1]}/>
                <SideCourses course_name={props.courses[2]}/>
            </div> 
        </div>    
    );
}


export default SideCoursesMenu;