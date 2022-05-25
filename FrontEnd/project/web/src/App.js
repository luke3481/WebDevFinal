import React from "react";
import axios from "axios";
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
    const [sub_menu, setSub] = useState("create_c");

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [courseIds, setCourseIds] = useState([]);  
    
    const [courses, setCourses] = useState([]);
    
    // Retrieve user_id from token
    const user_id = 1;
    
    // Retrieve class_ids tied to user_id  
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:8080/user_class/list');
                if (!response.ok) {
                    throw new Error(
                        'This is an HTTP error: The status is ${response.status}'
                    );
                }
                // Pull user/course data 
                let actualData = await response.json();  
                
                const length = parseInt(actualData.data.length);
                
                // Parse course id data
                let tempCourseIds = [];
                for (var i = 0; i < length; i++) {
                    if (actualData.data[i].user_id == user_id) {
                        tempCourseIds.push(actualData.data[i].class_id)
                    }
                }
                setCourseIds(tempCourseIds);
                
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, []);

    // Retrieve class_names tied to class_ids
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:8080/class/list');
                if (!response.ok) {
                    throw new Error(
                        'This is an HTTP error: The status is ${response.status}'
                    );
                }
                // Pull course data 
                let actualData = await response.json();  
                
                const length = parseInt(actualData.data.length);
                
                // Parse course data
                let tempCourses = [];
                for (var i = 0; i < length; i++) {
                    if (courseIds.includes(actualData.data[i].class_id)) {
                        tempCourses.push(actualData.data[i].class_name)
                    } 
                }
                setCourses(tempCourses);
                
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, []);

  return (
    <div className="App">
      <div className="container">
        <SideBar courses={courses} courseIds={courseIds} />
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
        <Assignments
          Ass1={"assignment1"}
          Ass2={"assignment2"}
          Ass3={"assignment3"}
        />
        {/* Below needs to be shown instead of above for teacher accounts */}
        {/* <Teacherassignments Ass1={'assignment1'} Ass2={'assignment2'} Ass3={'assignment3'} /> */}
      </div>
    </div>
  );
}

export default AppCopy;
