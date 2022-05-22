import AnnouncementCopy from "../components/AnnouncementCopy";
import { useLocation } from 'react-router-dom';

function CoursesAnnouncement(props) {
    const location = useLocation();
    //const {announcement} = location.state;
    console.log('here2');
    console.log(useLocation());

    return (
        <div id="announcements">
            <div id="top_border"></div>
            <p>hi</p>
        </div>
    );
    
}

//<AnnouncementCopy announcement = {props.announcements}/>

export default CoursesAnnouncement;