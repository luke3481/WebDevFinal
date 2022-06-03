import { Link } from "react-router-dom";

function ClassTile(props) {
  return (
    <div className="class_icon" aria-label="Class1" style={{ opacity: 1 }}>
      <Link
        to="/Course"
        state={{ course: props.name, courseId: props.courseId }}
      >
        <div className="class_icon_header">
          <div
            className="class_icon_header_hero"
            aria-hidden="true"
            style={{ backgroundColor: props.color }}
          ></div>
          <div className="class_icon_header_content">
            <h3 className="class_icon_header_title ellipsis" title={props.name}>
              <span style={{ color: props.color }}>{props.name}</span>
            </h3>
            {props.name}
            <div className="class_icon_term" title="2022.02">
              2022.02
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ClassTile;
