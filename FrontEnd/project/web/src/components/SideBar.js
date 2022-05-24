import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';

async function logout() {
    localStorage.removeItem("token")
    window.location.reload(false);
}

function SideBar(props) {  

    return(
        <div id="sidebar">
            <div id="sidebar_button">
                <button type="button" id="btnstyle1" ><Link to= "/"><img id="home" src={require("../imgs/uchicagowhitelogo.png")}/></Link></button>
                <button type="button" id="btnstyle2" ><Link to="/Account"><img src={require("../imgs/account.jpg")}/></Link>Account</button>
                <button type="button" id="btnstyle2" ><Link to= "/"><img src={require("../imgs/dashboard.png")}/></Link>Dashboard</button>
                <SideCoursesMenu width={"0%"} courses={props.courses}/>
                <button type="button" id="btnstyle2" ><Link to="/Settings"><img src={require("../imgs/settings.png")}/></Link>Settings</button>
                <button type="button" id="btnstyle2" onClick={(logout)}><Link to="/"><img src={require("../imgs/logout.png")}/></Link>Logout</button>
            </div>
        </div>
    );
}





export default SideBar;
