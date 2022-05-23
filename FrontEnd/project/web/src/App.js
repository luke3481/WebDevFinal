import React from "react";
import {useState, useEffect} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import ClassTile from "./components/ClassTile";
import SideBar from "./components/SideBar";
import Assignments from "./components/Assignments";
import Teacherassignments from "./components/Teacherassignments";
import Home from "./components/Home";
import Adminhome from "./components/Adminhome";
import Course from "./components/Course";
import Invoices from "./components/invoices";
import Login from "./components/Login/Login";
import Account from "./components/Account";
import Settings from "./components/Settings";
import useToken from "./components/useToken";








function AppCopy() {
   

    const {token, setToken} = useToken();
    const [main_menu, setMain] = useState("home");
    const [sub_menu, setSub] = useState("create_c");
    const [courses, setCourses] = useState(["Course1", "Course2", "Course3"]);
   
    


    if(!token) {
        return <Login setToken={setToken} />
    }
    
    return (
        <div className="App">
            <div className="container">
                <SideBar courses={courses}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* below is activated and above is inactivated if admin account */}
                    {/* <Route path="/" element={<Adminhome />} /> */}
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Course/*" element={<Course />} />
                    <Route path="/Settings/*" element={<Settings />} />
                    <Route path="/Invoices" element={<Invoices />} />
                    <Route path="/LogIn" element={<Login />} />
                </Routes>
                <Assignments Ass1={'assignment1'} Ass2={'assignment2'} Ass3={'assignment3'} />
                {/* Below needs to be shown instead of above for teacher accounts */}
                {/* <Teacherassignments Ass1={'assignment1'} Ass2={'assignment2'} Ass3={'assignment3'} /> */}
            </div>
        </div> 
    );
} 


export default AppCopy;
