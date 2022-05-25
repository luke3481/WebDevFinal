import React from "react";
import {useState, useEffect} from "react";
import SideCoursesMenu from "./SideCoursesMenu";
import Announcement from "./Announcement";
import ClassTile from "./ClassTile";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';
 


function Announcements(props) {  

    const location = useLocation()
    const courseId = location.state.courseId
    const course = location.state.course
    const [announcements, setAnnouncements] = useState([]);
    const [announcementIds, setAnnouncementIds] = useState([]);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Does state passing work?
    console.log(courseId);
    console.log(course);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:8080/announcement/list');
                if (!response.ok) {
                    throw new Error(
                        'This is an HTTP error: The status is ${response.status}'
                    );
                }
                // Pull announcement data 
                let actualData = await response.json();  
                
                const length = parseInt(actualData.data.length);
                
                // Parse announcement data
                let tempAnnouncements = [];
                for (var i = 0; i < length; i++) {
                    tempAnnouncements.push(actualData.data[i].announcement_detail)
                }
                setAnnouncements(tempAnnouncements);
                
                // Parse announcement id data
                let tempAnnouncementIds = [];
                for (var i = 0; i < length; i++) {
                    tempAnnouncementIds.push(actualData.data[i].announcement_id)
                }
                setAnnouncementIds(tempAnnouncementIds);
                
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, []);

    return(
        <div id="announcements">
            <div id="top_border"></div>
            <Announcement announcement={announcements[0]} announcementId={announcementIds[0]} />
            <Announcement announcement={announcements[1]} announcementId={announcementIds[1]} />
            <Announcement announcement={announcements[2]} announcementId={announcementIds[2]} />
            <Announcement announcement={announcements[3]} announcementId={announcementIds[3]} />
            <Announcement announcement={announcements[4]} announcementId={announcementIds[4]} />
        </div>
    );
}



export default Announcements;
