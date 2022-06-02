import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";


function ClassTile(props){
  console.log('courseIDclass tile', props.courseId);
    return(<div className="class_icon" aria-label="Class1"  style={{opacity: 1}}>
    <div className="class_icon_header">
      <div className="class_icon_header_hero" aria-hidden="true" style={{backgroundColor: props.color}}>
      </div>
        <div className="class_icon_header_content">
          <h3 className="class_icon_header_title ellipsis" title={props.name}>
            <span style={{color: props.color}}>{props.name}</span>
          </h3>
          <Link to="/Course" state={{course: props.name, courseId: props.courseId}} >{props.name}</Link>
          <div className="class_icon_term" title="2022.02">2022.02</div>
        </div>
      </div>
  </div>)
}

export default ClassTile;