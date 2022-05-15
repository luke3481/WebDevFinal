import React from "react";
import {useState} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import ClassTile from "./ClassTile";
import SideBarCopy from "./SideBarCopy";
import Assignments from "./Assignments";
import Courses from "./Courses";



function DashBoard(props) {

    return(
        <div className="container">
            <SideBarCopy courses={props.courses}/>
            <div id="classes">
                <div className="class">
                    <p>Dashboard</p>
                    <Link to="/invoices">Invoices</Link>
                    <br/>
                    <Link to="/CoursesCopy">CoursesCopy</Link>
                    <br/>
                    <Link to="/CoursesAnnouncement">CoursesAnnouncement</Link>
                </div>
                <ClassTile name={"BUSN 36109 81,02,01 Advanced Decision Models with Python"} color={"rgb(152, 108, 22)"}/>
                <ClassTile name={"MPCS 52553 1 Web Development"} color={"darkblue"}/>
                <ClassTile name={"MPCS 55001 1 (Spring 2022) Algorithms"} color={"darkcyan"}/>
                <ClassTile name={"MPCS 55009 1 (Spring 2022) WebDev"} color={"black"}/>
                <Assignments Ass1={'assignment1'}/>
                <Assignments Ass2={'assignment1'}/>
                <Assignments Ass3={'assignment1'}/>
            </div>
        </div>
    );
}


export default DashBoard;
