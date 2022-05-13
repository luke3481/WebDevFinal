import Announcement from "./Announcement";

function Courses(props) {
    if (props.state2.sub_menu == "create_c") {
        return (
            <div id="create_course">
                <form>
                    <p>Course Details</p>
                    <label for="name">Name:</label><br/>
                    <input type="text" id="name" name="name" /><br/><br/>
                    <label for="description">Description:</label><br/>
                    <input type="text" id="description" name="description" /><br/><br/>
                    <label for="name">Capacity:</label><br/>
                    <input type="text" id="capacity" name="capacity" /><br/><br/>
                    <label for="teacher">Teacher:</label><br/>
                    <select id="teacher" name="teacher">
                        <option value="rafi">Rafi Almhana</option>
                        <option value="timothy">Timothy Ng</option>
                    </select><br/><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    } else if (props.state2.sub_menu == "announcement") {
        return (
            <div id="announcements">
                <div id="top_border"></div>
                <Announcement action = {props.action} state3 = {props.state2.announcements} index = "0" />
                <Announcement action = {props.action} state3 = {props.state2.announcements} index = "1" />
                <Announcement action = {props.action} state3 = {props.state2.announcements} index = "2" />
            </div>
        );
    } else if (props.state2.sub_menu == "announcement_d") {
        return (
            <div id="announcement_ds">
                <p style={{ fontSize: 20 }}>{props.state2.announcement_d[0]}</p>
                <p>{props.state2.announcement_d[2]}</p>
            </div>
        );
    } else if (props.state2.sub_menu == "create_a") {
        return (
            <div id="create_announcement">
                <form>
                    <label for="announcement">Announcement:</label><br/>
                    <input type="text" id="announcement" name="announcement" style={{width: "400px"}} /><br/><br/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Courses;