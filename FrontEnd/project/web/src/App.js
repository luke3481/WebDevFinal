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
import Login from "./components/Login/Login";
import Account from "./components/Account";
import useToken from "./components/useToken";


function AppCopy() {
   
    
    if(!token) {
        return <Login setToken={setToken} />
    }
    
    return (
        <div className="App">
            <div className="container">
                <SideBar courses={courses}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Course/*" element={<Course />} />
                    <Route path="/Invoices" element={<Invoices />} />
                    <Route path="/LogIn" element={<Login />} />
                </Routes>
                <Assignments Ass1={'assignment1'} Ass2={'assignment2'} Ass3={'assignment3'}/>
            </div>
        </div> 
    );
} 


export default AppCopy;
