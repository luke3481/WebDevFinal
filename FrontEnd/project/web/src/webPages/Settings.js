import React from "react";
import Usersearch from "../components/Usersearch";
import Userlist from "../components/Userlist";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';


 
 
function Settings(props) {  

    return(
        <div id="nestedcontainer2">
            <div id="sidebar3">
                <p>Settings *ADMIN ONLY*</p>
                <Link to="/Settings">Registered Users</Link>
                <Link to="/Settings/Usersearch">Search for User</Link>
            </div>
            <Routes>
                <Route path ="/" element={<Userlist />} />
                <Route path="/Usersearch" element={<Usersearch />} />
            </Routes>
        </div>
    );
}

export default Settings;