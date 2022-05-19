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
import Home from "./components/Home";
import Course from "./components/Course";
import Invoices from "./components/invoices";
import Login from "./routes/Login";


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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Course/*" element={<Course />} />
                    <Route path="/Invoices" element={<Invoices />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
                <Assignments Ass1={'assignment1'} Ass2={'assignment2'} Ass3={'assignment3'}/>
            </div>
        </div> 
    );
} 


export default AppCopy;
