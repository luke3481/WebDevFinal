import React from "react";
 

function openNav() {
    return(
        document.getElementById("courses_sidenav").style.width = "250px"
    );
}

function closeNav() {
    return(
        console.log('hey')
        //document.getElementById("courses_sidenav").style.width = "0";
    );
}


function SideBarCopy() {  

    return(
        <div id="sidebar">
            <div id="sidebar_button">
                <button type="button" id="btnstyle1" ><img id="home" src="https://instructure-uploads.s3.amazonaws.com/account_23490000000000001/attachments/94286/shield.cmyk.reversed.png?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1941800704&Signature=UMFgyK223WwtXIfmSeqYTDFxDNY%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000.0%2C%20public&response-expires=473364000.0"/></button>
                <button type="button" id="btnstyle2" ><img src={require("../imgs/account.jpg")}/>Account</button>
                <button type="button" id="btnstyle2" ><img src={require("../imgs/dashboard.png")}/>Dashboard</button>
                
                <button type="button" id="btnstyle2" ><img src={require("../imgs/settings.png")}/>Settings</button>
                <button type="button" id="btnstyle2" ><img src={require("../imgs/logout.png")}/>Logout</button>
            </div>
        </div>
    );
}

/*
<button type="button" id="btnstyle2" onClick={openNav()}>
                    <img src={require("../imgs/courses.png")}/>
                    Courses
                </button>
                <div id="courses_sidenav" className="sidenav">
                    <a href="" className="closebtn" onClick={closeNav()}>&times;</a>
                    <h3>Courses</h3>
                </div>
*/


export default SideBarCopy;
