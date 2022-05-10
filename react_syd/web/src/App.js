import ClassTile from "./components/ClassTile";
import SideBar from "./components/SideBar";



function App() {
  const openNav = () => {
    console.log("openNav");
  }
  const closeNav = () => {
    console.log("openNav");
  }
  return (
    <div className="App">
      <div className="container">
        
        <SideBar/>

        <div id="classes">
          <div className="class">
                <p>Dashboard</p>
                
              </div>
              <ClassTile name={"BUSN 36109 81,02,01 Advanced Decision Models with Python"} color={"rgb(152, 108, 22)"}/>
              <ClassTile name={"MPCS 52553 1 Web Development"} color={"darkblue"}/>
              <ClassTile name={"MPCS 55001 1 (Spring 2022) Algorithms"} color={"darkcyan"}/>
              <ClassTile name={"MPCS 55009 1 (Spring 2022) WebDev"} color={"black"}/>


              </div>

            <div id="assignments">
              <div className="assignments_logo">
                <img src="uchicago.png"/>
              </div>
              <div className="todo">
                <div className="assignment_title">
                  <p>To Do</p>
                  <hr/>
                </div>
                <ul>
                  <li>Assignment 1</li>
                  <li>Assignment 2</li>
                  <li>Assignment 3</li>
                </ul>
              </div>
              <div className="upcoming">
                <div className="assignment_title">
                  <p>Upcoming</p>
                  <hr/>
                </div>
                <ul>
                  <li>Assignment 1</li>
                  <li>Assignment 2</li>
                  <li>Assignment 3</li>
                </ul>
              </div>
              <div className="past">
                <div className="assignment_title">
                  <p>Past</p>
                  <hr/>
                </div>
                <ul>
                  <li>Assignment 1</li>
                  <li>Assignment 2</li>
                  <li>Assignment 3</li>
                </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
