import React from "react";
 
class SideBar extends React.Component {  
    openNav() {
        document.getElementById("courses_sidenav").style.width = "250px";
      }
      
    closeNav() {
        console.log('hey')
        //document.getElementById("courses_sidenav").style.width = "0";
    }

    renderCourse(i) {
        return (
            <a href="" onClick={() => this.props.action("course")}>
                {this.props.state.course_names[i]}
            </a>
        );
    }

    render() {
        return(
            <div id="sidebar">
                <div id="sidebar_button">
                    <button type="button" id="btnstyle1" ><img id="home" src="https://instructure-uploads.s3.amazonaws.com/account_23490000000000001/attachments/94286/shield.cmyk.reversed.png?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1941800704&Signature=UMFgyK223WwtXIfmSeqYTDFxDNY%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000.0%2C%20public&response-expires=473364000.0"/></button>
                    <button type="button" id="btnstyle2" ><img src={require("../imgs/account.jpg")}/>Account</button>
                    <button type="button" id="btnstyle2" ><img src={require("../imgs/dashboard.png")}/>Dashboard</button>
                    <button type="button" id="btnstyle2" onClick={() => this.openNav()}><img src={require("../imgs/courses.png")}/>Courses</button>
                    <div id="courses_sidenav" className="sidenav">
                        <a href="" className="closebtn" onClick={this.closeNav()}>&times;</a>
                        <h3>Courses</h3>
                        {this.renderCourse(0)}
                        {this.renderCourse(1)}
                        {this.renderCourse(2)}
                    </div>
                    <button type="button" id="btnstyle2" ><img src={require("../imgs/settings.png")}/>Settings</button>
                    <button type="button" id="btnstyle2" ><img src={require("../imgs/logout.png")}/>Logout</button>
                </div>
            </div>
        )
    }
}

export default SideBar;
