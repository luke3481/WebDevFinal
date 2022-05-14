
function Assignments(props) {
    return (
    <div id="assignments">
        <div className="assignments_logo">
        <img src={require("../imgs/uchicago.png")} alt=''/>
        </div>
        <div className="todo">
        <div className="assignment_title">
            <p>To Do</p>
            <hr/>
        </div>
        <ul>
            <li>{props.Ass1}</li>
            <li>{props.Ass2}</li>
            <li>{props.Ass3}</li>
        </ul>
        </div>
        <div className="upcoming">
        <div className="assignment_title">
            <p>Upcoming</p>
            <hr/>
        </div>
        <ul>
            <li>{props.Ass1}</li>
            <li>{props.Ass2}</li>
            <li>{props.Ass3}</li>
        </ul>
        </div>
        <div className="past">
        <div className="assignment_title">
            <p>Past</p>
            <hr/>
        </div>
        <ul>
            <li>{props.Ass1}</li>
            <li>{props.Ass2}</li>
            <li>{props.Ass3}</li>
        </ul>
        </div>
</div>
    )
}

export default Assignments;