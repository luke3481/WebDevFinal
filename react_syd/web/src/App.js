import React from "react";
import ClassTile from "./components/ClassTile";
import SideBar from "./components/SideBar";
import Assignments from "./components/Assignments";

// Replaced function with class to utilize states - 5/11, Seojoon
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "Home",
            course_names: ["Course 1", "Course 2", "Course 3"]
        };
        this.handler = this.handler.bind(this);
    }
    
    handler() {
        this.setState({
            mode: "Course"
        });
    }
    
    openNav() {
      console.log("openNav");
    }
    
    closeNav() {
      console.log("openNav");
    }
    
    render() {
        if (this.state.mode == "Home") {
            return (
              <div className="App">
                <div className="container">
                  
                  <SideBar action = {this.handler} state = {this.state} />
            
                  <div id="classes">
                    <div className="class">
                          <p>Dashboard</p>
                          
                        </div>
                        <ClassTile name={"BUSN 36109 81,02,01 Advanced Decision Models with Python"} color={"rgb(152, 108, 22)"}/>
                        <ClassTile name={"MPCS 52553 1 Web Development"} color={"darkblue"}/>
                        <ClassTile name={"MPCS 55001 1 (Spring 2022) Algorithms"} color={"darkcyan"}/>
                        <ClassTile name={"MPCS 55009 1 (Spring 2022) WebDev"} color={"black"}/>
            
            
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
