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
    



    const getData1 = async () => {
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
                // Debugging - Tejas
                console.log(courseId);
                console.log(actualData.data[i].class_id);
                console.log(i);
                if (new String(courseId).valueOf() === new String(actualData.data[i].class_id).valueOf()) {
                    console.log(i);
                    tempAnnouncementIds.push(actualData.data[i].announcement_id);
                }
            }
            
            return tempAnnouncementIds;
            
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }
    
    // Retrieve announcement ids tied to course ids
    useEffect(() => {
        // Solution - Tejas
        const result1 = getData1()
        result1.then(res => setAnnouncementIds(res))
        console.log(announcementIds);
    }, [announcementIds]);
    
    // Retrieve announcement info tied to announce ids
    const getData2 = async () => {
        try {
            const response = await fetch('http://localhost:8080/announcement/list');
            if (!response.ok) {
                throw new Error(
                    'This is an HTTP error: The status is ${response.status}'
                );
            }
            // Pull announcement data 
            let actualData = await response.json();  
            console.log(actualData)
            
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
            
            var output = {'announcementTitles' : tempAnnouncementTitles, 'announcements' : tempAnnouncements, 'announcementDates' : tempAnnouncementDates }
            
            return output
            
            console.log(announcements); 
            
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        // Solution - Tejas
        const result2 = getData2()
        result2.then(res => {
            setAnnouncementTitles(res.announcementTitles)
            setAnnouncements(res.announcements)
            setAnnouncementDates(res.announcementDates)
        })
           
        console.log(announcementTitles);
    }, [announcements, announcementTitles, announcementDates]);

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
