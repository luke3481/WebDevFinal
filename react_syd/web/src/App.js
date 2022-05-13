import ClassTile from "./components/ClassTile";
import SideBar from "./components/SideBar";
import Assignments from "./components/Assignments";



function App() {

  return (
    <div className="App">
      <div className="container">
        
        <SideBar/>

        <div id="classes">
          <div className="class">
                <p>Dashboard</p>
                <hr/>
            </div>
              <ClassTile name={"BUSN 36109 81,02,01 Advanced Decision Models with Python"} color={"rgb(152, 108, 22)"}/>
              <ClassTile name={"MPCS 52553 1 Web Development"} color={"darkblue"}/>
              <ClassTile name={"MPCS 55001 1 (Spring 2022) Algorithms"} color={"darkcyan"}/>
              <ClassTile name={"MPCS 55009 1 (Spring 2022) WebDev"} color={"black"}/>
            </div>

          
          <Assignments Ass1={'assignment1'} Ass2={'assignment2'} Ass3={'assignment3'}/>
        </div>
      </div>
  );
}

export default App;
