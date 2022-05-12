
function Courses(props) {
    if (props.state.sub_menu == 1) {
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
    }
}

export default Courses;