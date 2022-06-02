import React from "react";
import SideCoursesMenu from "../components/SideCoursesMenu";
import ClassTile from "../components/Home/ClassTile";
import Invoices from "../components/invoices";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';




 
 
function Home(props) {  

    return(
        <div id="classes">
            <div className="class">
                <p>Dashboard</p>
                <hr></hr>
            </div>
            <ClassTile name={"BUSN 36109 81,02,01 Advanced Decision Models with Python"} color={"rgb(152, 108, 22)"}/>
            <ClassTile name={"MPCS 52553 1 Web Development"} color={"darkblue"}/>
            <ClassTile name={"MPCS 55001 1 (Spring 2022) Algorithms"} color={"darkcyan"}/>
            <ClassTile name={"MPCS 55009 1 (Spring 2022) WebDev"} color={"black"}/>
        </div>
    );
}



export default Home;
