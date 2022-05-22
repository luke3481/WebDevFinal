


function AnnouncementCopy(props) {
    
    return (
        <div id="announcement">
            <h4>{props.announcement[0]}</h4>
            <p>{props.announcement[1]}</p>
            <a href="">{props.announcement[2]}</a>
        </div>
    );
}

export default AnnouncementCopy;
