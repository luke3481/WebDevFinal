import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';






function SideBarCopy(props) {  

    return(
        <div id="sidebar">
            <div id="sidebar_button">
                <button type="button" id="btnstyle1" ><img id="home" src="https://instructure-uploads.s3.amazonaws.com/account_23490000000000001/attachments/94286/shield.cmyk.reversed.png?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1941800704&Signature=UMFgyK223WwtXIfmSeqYTDFxDNY%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000.0%2C%20public&response-expires=473364000.0"/></button>
                <button type="button" id="btnstyle2" ><img src={require("../imgs/account.jpg")}/>Account</button>
                <button type="button" id="btnstyle2" ><img src={require("../imgs/dashboard.png")}/>Dashboard</button>
                <SideCoursesMenu width={"0%"} courses={props.courses}/>
                <button type="button" id="btnstyle2" ><img src={require("../imgs/settings.png")}/>Settings</button>
                <button type="button" id="btnstyle2"><Link to= "/LogIn"><img src={require("../imgs/logout.png")}/></Link>Logout</button>
            </div>
        </div>
    );
}



export default SideBarCopy;
