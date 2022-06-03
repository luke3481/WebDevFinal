import React from "react";
import { useState, useEffect } from "react";
import SideCoursesMenu from "../SideCoursesMenu";
import Announcement from "./Announcement";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function Announcements(props) {
    const location = useLocation();
    const courseId = location.state.courseId;
    const course = location.state.course;

  

    const [announcementIds, setAnnouncementIds] = useState([]);
    const [oldAnnouncementIds, setOldAnnouncementIds] = useState(['1']);

    const [announcementTitles, setAnnouncementTitles] = useState(['1', '2']);
    const [oldAnnouncementTitles, setOldAnnouncementTitles] = useState([]);

    const [announcements, setAnnouncements] = useState(['1', '2']);
    const [oldAnnouncements, setOldAnnouncements] = useState([]);

    const [announcementDates, setAnnouncementDates] = useState(['1', '2']);
    const [oldAnnouncementDates, setOldAnnouncementDates] = useState([]);


    
    

    


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
                
                if (new String(courseId).valueOf() === new String(actualData.data[i].class_id).valueOf()) {
                    tempAnnouncementIds.push(actualData.data[i].announcement_id);
                    
                }
            }
            
            setOldAnnouncementIds(announcementIds);
            setAnnouncementIds(tempAnnouncementIds);
            
           
        } catch (err) {
            console.log(err.message);
        }
    }
    
    let checkData1 = (old_announceId, new_announceId) => {
        let check = 0;
        if (old_announceId.length == new_announceId.length) {
          for (var i = 0; i < old_announceId.length; i++) {
           
            if (old_announceId[i] != new_announceId[i]) {
              check = 1;
              {break};
            }
          }
        } else {
          check = 1;
        }
        if (check == 1) {
          getData1();
        }
      };

    // Retrieve announcement ids tied to course ids
    useEffect(() => {
        checkData1(oldAnnouncementIds, announcementIds);
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
            

            setOldAnnouncementTitles(announcementTitles);
            setAnnouncementTitles(tempAnnouncementTitles);

            setOldAnnouncements(announcements);
            setAnnouncements(tempAnnouncements);

            setOldAnnouncementDates(announcementDates);
            setAnnouncementDates(tempAnnouncementDates);
            
            
            
            
            
        } catch (err) {
            console.log(err.message)
        }
    }
    
    let checkData2 = (old_announce, new_announce) => {
        let check = 0;
        if (old_announce.length == new_announce.length) {
          for (var i = 0; i < old_announce.length; i++) {
            
            if (old_announce[i] != new_announce[i]) {
              check = 1;
              {break};
            }
          }
        } else {
          check = 1;
        }
        if (check == 1) {
          getData2();
        }
      };


    useEffect(() => {
        checkData2(announcements, oldAnnouncements);           
    }, [announcements]);

    let itemList=[];
    announcements.forEach((item,index)=>{
        itemList.push( <Announcement
          announcement={announcements[index]}
          announcementTitle={announcementTitles[index]}
          announcementDate={announcementDates[index]}
          course={course}
          courseId={courseId}
        />);
      });

  return (
    <div id="announcements">
      <div id="top_border"></div>
      {itemList}
    </div>
  );
}

export default Announcements;
