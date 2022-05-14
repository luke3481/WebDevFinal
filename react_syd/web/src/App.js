import React from "react";
import ClassTile from "./components/ClassTile";
import SideBar from "./components/SideBar";
import Assignments from "./components/Assignments";
import Courses from "./components/Courses";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main_menu: "home",
            sub_menu: "create_c", 
            course_names: ["Course 1", "Course 2", "Course 3"],
            announcements: [
                ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."],
                ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."],
                ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."]
            ],
            announcement_d: ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."]
        };
        this.mm_handler = this.mm_handler.bind(this);
    }
    
    mm_handler(j) {
        this.setState({
            main_menu: j
        });
    }
    
    sm_handler(i) {
        this.setState({
            sub_menu: i
        });
    }
    
    openNav() {
      console.log("openNav");
    }
    
    closeNav() {
      console.log("openNav");
    }
    
    render() {
        if (this.state.main_menu == "home") {
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
        } else if (this.state.main_menu == "course") {
            return (
            <div className="App">
                <div className="container">
                    <SideBar action = {this.mm_handler} state = {this.state} />
                    <div id="nestedcontainer">
                        <div id="sidebar2">
                            <p>Courses</p>
                            <a href="" onClick={() => this.sm_handler("announcement")}>Announcements</a>
                            <a href="">Assignments</a>
                            <a href="">Grades</a><br/><br/><br/>
                            <button type="button" id="btnstyle3" onClick={() => this.sm_handler("create_c")}>Create Course</button><br/><br/>
                            <button type="button" id="btnstyle3" onClick={() => this.sm_handler("create_a")}>Create Announcement</button>
                        </div>
                        <Courses action = {this.sm_handler} state2 = {this.state} />
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
