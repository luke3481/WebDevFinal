import React from "react";
import SideCoursesMenu from "../components/SideCoursesMenu";
import ClassTile from "../components/Home/ClassTile";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
  } from "react-router-dom";
import { useState, useEffect } from "react";



 
 
function Home(props) {  

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const [courseIds, setCourseIds] = useState(["1", "2", "3"]);
    const [oldCourseIds, setOldCourseIds] = useState([]);
  
    const [courses, setCourses] = useState(["test", "Algos", "Python"]);
    const [oldCourses, setOldCourses] = useState([]);
  
  

    // Retrieve user_id from token
    const user_id = "1";
  
  
    // Retrieve class_ids tied to user_id
    const getData1 = async () => {
      try {
        const response = await fetch("http://localhost:8080/user_class/list");
        if (!response.ok) {
          throw new Error(
            "This is an HTTP error: The status is ${response.status}"
          );
        }
        // Pull user/course data
        let actualData = await response.json();
        // Debugging
        
        const length = parseInt(actualData.data.length);
        // Parse course id data
        let tempCourseIds = [];
        for (var i = 0; i < length; i++) {
          if (actualData.data[i].user_id == user_id) {
            tempCourseIds.push(actualData.data[i].class_id);
          }
        }
        
        setOldCourseIds(courseIds);
        setCourseIds(tempCourseIds);
        setError(null);
  
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
  
  
    let checkData1 = (old_courseIds, new_courseIds) => {
      let check = 0;
      
      if (old_courseIds.length == new_courseIds.length) {
        for (var i = 0; i < old_courseIds.length; i++) {
          if (old_courseIds[i] !== new_courseIds[i]) {
            check = 1;
            {break};
          }
        }
      } else {
        check = 1;
      }
      if (check == 1) {
        getData1();
      }
    };
  
  
    const getData2 = async () => {
      try {
        const response = await fetch("http://localhost:8080/class/list");
        if (!response.ok) {
          throw new Error(
            "This is an HTTP error: The status is ${response.status}"
          );
        }
        // Pull course data
        let actualData = await response.json();
        const length = parseInt(actualData.data.length);
        // Parse course data
        let tempCourses = [];
        for (var i = 0; i < length; i++) {
          if (courseIds.includes(actualData.data[i].class_id)) {
            tempCourses.push(actualData.data[i].class_name);
          }
        }
        setOldCourses(courses);
        setCourses(tempCourses);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
  
    let checkData2 = (old_courses, new_courses) => {
      let check = 0;
      if (old_courses.length == new_courses.length) {
        for (var i = 0; i < old_courses.length; i++) {
          
          if (old_courses[i] != new_courses[i]) {
            check = 1;
            {break};
          }
        }
      } else {
        check = 1;
      }
      if (check == 1) {
        getData2();
      }
    };


    useEffect(() => {
        checkData1(oldCourseIds, courseIds);
        
      }, [courseIds]);
    
    
      // Retrieve class_names tied to class_ids
    useEffect(() => {
        checkData2(oldCourses, courses);
      }, [courses]);


    const tiles=courses.map((data,id)=>{
      return <ClassTile name={data} courseId={courseIds[id]} color={'cyanblue'}/>
    });
    
    return(
        <div id="classes">
            <div className="class">
                <p>Dashboard</p>
                <hr></hr>
            </div>
            {tiles}
        </div>
    );
}



export default Home;
