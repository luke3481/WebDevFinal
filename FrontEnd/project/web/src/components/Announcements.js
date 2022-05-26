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

    const [announcementIds, setAnnouncementIds] = useState([]);

    const [announcementTitles, setAnnouncementTitles] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [announcementDates, setAnnouncementDates] = useState([]);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Does state passing work?
    console.log(courseId);
    console.log(course);
    
    // Retrieve announcement ids tied to course ids
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:8080/class_announcements/list');
                if (!response.ok) {
                    throw new Error(
                        'This is an HTTP error: The status is ${response.status}'
                    );
                }
                // Pull class/announcement data 
                let actualData = await response.json();  
                
                const length = parseInt(actualData.data.length);
                
                // Parse announcement id data
                let tempAnnouncementIds = [];
                for (var i = 0; i < length; i++) {
                    if (courseId.includes(actualData.data[i].class_id)) {
                        tempAnnouncementIds.push(actualData.data[i].announcement_id);
                    }
                }
                
                // Debugging
                console.log(tempAnnouncementIds);
                
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
    
    // Retrieve announcement info tied to announce ids
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
                let tempAnnouncementTitles = [];
                let tempAnnouncements = [];
                let tempAnnouncementDates = [];
                for (var i = 0; i < length; i++) {
                    if (announcementIds.includes(actualData.data[i].announcement_id)) {
                        tempAnnouncementTitles.push(actualData.data[i].announcement_title)
                        tempAnnouncements.push(actualData.data[i].announcement_detail)
                        tempAnnouncementDates.push(actualData.data[i].announcement_date)
                    }
                }
                
                setAnnouncementTitles(tempAnnouncementTitles);
                setAnnouncements(tempAnnouncements);
                setAnnouncementDates(tempAnnouncementDates);
                
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
            <Announcement announcement={announcements[0]} announcementTitle={announcementTitles[0]} announcementDate={announcementDates[0]} course={course} courseId={courseId} />
            <Announcement announcement={announcements[1]} announcementTitle={announcementTitles[1]} announcementDate={announcementDates[1]} course={course} courseId={courseId} />
            <Announcement announcement={announcements[2]} announcementTitle={announcementTitles[2]} announcementDate={announcementDates[2]} course={course} courseId={courseId} />
            <Announcement announcement={announcements[3]} announcementTitle={announcementTitles[3]} announcementDate={announcementDates[3]} course={course} courseId={courseId} />
            <Announcement announcement={announcements[4]} announcementTitle={announcementTitles[4]} announcementDate={announcementDates[4]} course={course} courseId={courseId} />
        </div>
    );
}



export default Announcements;
