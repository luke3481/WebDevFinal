import React from "react";
import Profile from "./Profile";
import Password from "./Password";
import Security from "./Security";
import AccountHome from "./AccountHome";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';


 
 
function Account(props) {  

    return(
        <div id="nestedcontainer2">
            <div id="sidebar3">
                <p>Account</p>
                <Link to="/Account/Profile">Edit Profile</Link>
                <Link to="/Account/Password">Change Password</Link>
                <Link to="/Account/Security">Change Security Questions</Link><br/><br/><br/>
            </div>
            <Routes>
                <Route path="/" element={<AccountHome />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Password" element={<Password />} />
                <Route path="/Security" element={<Security />} />
            </Routes>
        </div>
    );
}



export default Account;