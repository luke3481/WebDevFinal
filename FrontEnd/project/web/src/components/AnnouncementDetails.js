import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';


function AnnouncementDetails(props) {  

    const location = useLocation()
    const announcementTitle = location.state.announcementTitle
    const announcement = location.state.announcement

    return(
        <div id="announcement_ds">
            <a style={{ fontSize: 20 }}>{announcementTitle}</a>
            <a>{announcement}</a>
        </div>
    );
}



export default AnnouncementDetails;
