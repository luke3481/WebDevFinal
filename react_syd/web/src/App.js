import React from "react";
import ClassTile from "./components/ClassTile";
import SideBar from "./components/SideBar";
import Assignments from "./components/Assignments";
import Courses from "./components/Courses";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main_menu: "Course",
            sub_menu: 0, 
            course_names: ["Course 1", "Course 2", "Course 3"]
        };
        this.mm_handler = this.mm_handler.bind(this);
    }
    
    mm_handler() {
        this.setState({
            main_menu: "Course"
        });
    }
    
    sm_handler() {
        this.setState({
            sub_menu: 1
        });
        console.log(this.state);
    }
    
    openNav() {
      console.log("openNav");
    }
    
    closeNav() {
      console.log("openNav");
    }
    
    render() {
        if (this.state.main_menu == "Home") {
            return (
            <div className="App">
                <div className="container">
                    <SideBar action = {this.mm_handler} state = {this.state} />
                    <div id="classes">
                    <div className="class">
                        <p>Dashboard</p>
                        </div>
                        <ClassTile name={"BUSN 36109 81,02,01 Advanced Decision Models with Python"} color={"rgb(152, 108, 22)"}/>
                        <ClassTile name={"MPCS 52553 1 Web Development"} color={"darkblue"}/>
                        <ClassTile name={"MPCS 55001 1 (Spring 2022) Algorithms"} color={"darkcyan"}/>
                        <ClassTile name={"MPCS 55009 1 (Spring 2022) WebDev"} color={"black"}/>
                    <Assignments Ass1={'assignment1'}/>
                    <Assignments Ass2={'assignment1'}/>
                    <Assignments Ass3={'assignment1'}/>
                  </div>
                </div> 
              </div>
            );
        } else if (this.state.main_menu == "Course") {
            return (
            <div className="App">
                <div className="container">
                    <SideBar action = {this.handler} state = {this.state} />
                    <div id="nestedcontainer">
                        <div id="sidebar2">
                            <p>Courses</p>
                            <a href="">Announcements</a>
                            <a href="">Assignments</a>
                            <a href="">Grades</a><br/><br/><br/>
                            <button type="button" id="btnstyle3" onClick={() => this.sm_handler()}>Create Course</button>
                        </div>
                        <Courses state = {this.state} />
                    </div>
                        <Assignments Ass1={'assignment1'}/>
                        <Assignments Ass2={'assignment1'}/>
                        <Assignments Ass3={'assignment1'}/>
                </div>
            </div>
           );
        }
    }
} 

export default App;
