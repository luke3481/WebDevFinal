import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';


 

function CreateAnnouncement(props) {  

    return(
        <div id="create_announcement">
            <form>
                <a style={{fontWeight: "bold", fontSize: 20}}>Announcement:</a><br/>
                <input type="text" id="announcement" name="announcement" style={{width: "400px"}} /><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
}



export default CreateAnnouncement;
