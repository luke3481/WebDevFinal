import React from "react";
import {useState} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import ClassTile from "./components/ClassTile";
import SideBar from "./components/SideBar";
import Assignments from "./components/Assignments";


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
                <SideBar courses={courses}/>
                <div id="classes">
                    <div className="class">
                        <p>Dashboard</p>
                        <Link to="/invoices">Invoices</Link>
                        <br/>
                    </div>
                    <ClassTile name={"BUSN 36109 81,02,01 Advanced Decision Models with Python"} color={"rgb(152, 108, 22)"}/>
                    <ClassTile name={"MPCS 52553 1 Web Development"} color={"darkblue"}/>
                    <ClassTile name={"MPCS 55001 1 (Spring 2022) Algorithms"} color={"darkcyan"}/>
                    <ClassTile name={"MPCS 55009 1 (Spring 2022) WebDev"} color={"black"}/>
                </div>
                <Assignments Ass1={'assignment1'} Ass2={'Assignment2'} Ass3={'assignment3'}/>
            </div>
        </div> 
    );
} 


export default AppCopy;
