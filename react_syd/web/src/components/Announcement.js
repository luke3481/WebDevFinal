


function Announcement(props) {
    var index = Number(props.index);
    
    return (
        <div id="announcement">
            <h4>{props.state3[index][0]}</h4>
            <p>{props.state3[index][1]}</p>
            <a href="" onClick={() => props.action("announcement_d")}>{props.state3[index][2]}</a>
        </div>
    );
}

export default Announcement;
