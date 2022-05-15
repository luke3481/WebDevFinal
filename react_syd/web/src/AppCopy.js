import React from "react";
import {useState} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import ClassTile from "./components/ClassTile";
import SideBarCopy from "./components/SideBarCopy";
import Assignments from "./components/Assignments";
import Courses from "./components/Courses";


function AppCopy() {
    const [main_menu, setMain] = useState("home");
    const [sub_menu, setSub] = useState("create_c");
    const [courses, setCourses] = useState(["Course 1", "Course 2", "Course 3"]);
    const [announcements, setAnnouncements] = useState([
                                                ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."],
                                                ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."],
                                                ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."]
                                            ]);
    const [announcement_d, setAd] = useState(["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."]);   
    
    
    
    return (
        <div className="App">
            <div className="container">
                <SideBarCopy courses={courses}/>
                <div id="classes">
                    <div className="class">
                        <p>Dashboard</p>
                        <Link to="/invoices">Invoices</Link>
                        <br/>
                        <Link to="/CoursesCopy">CoursesCopy</Link>
                        <br/>
                        <Link to={{pathname:"/CoursesAnnouncement", search:'trying this', state:"trying"}}>CoursesAnnouncement</Link>
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
        </div> 
    );
} 


export default AppCopy;
