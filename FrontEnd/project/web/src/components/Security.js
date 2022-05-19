import React from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import SideAccountMenu from "./SideAccountMenu";
import Announcement from "./Announcement";
import ClassTile from "./ClassTile";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
 



function Security(props) {  

    return(
        <div id="security">
            <form>
                <label for="currentpassword">Password:</label><br/>
                <input type="text" id="currentpassword" name="currentpassword" style={{width: "400px"}} /><br/><br/>
                <input type="submit" />
            </form>
            <br/><br/><br/>
            <p><h2>Update Security Questions HIDE THIS SECTION UNTIL SUBMISSION OF PASSWORD</h2></p>
            <form>
                <label for="secquestion1">What is your paternal grandmother's first name?</label><br/>
                <input type="text" id="sequestion1" name="secquestion1" style={{width: "400px"}} /><input type="submit" />
            </form>
            <br/><br/>
            <form>
                <label for="secquestion2">What is your favorite movie?</label><br/>
                <input type="text" id="sequestion2" name="secquestion2" style={{width: "400px"}} /><input type="submit" />
            </form>
            <br/><br/>
            <form>
                <label for="secquestion3">What was the name of your first dog?</label><br/>
                <input type="text" id="sequestion3" name="secquestion3" style={{width: "400px"}} /><input type="submit" />
            </form>
        </div>
    );
    
}



export default Security;