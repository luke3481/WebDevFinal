import React from "react";
import {useState} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import DashBoard from "./components/DashBoard";


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
            <DashBoard courses={courses}/>
        </div> 
    );
} 


export default AppCopy;
