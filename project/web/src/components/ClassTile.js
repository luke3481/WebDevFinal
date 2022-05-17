


function ClassTile(props){
    return(<div className="class_icon" aria-label="Class1"  style={{opacity: 1}}>
    <div className="class_icon_header">
      <div className="class_icon_header_hero" aria-hidden="true" style={{backgroundColor: props.color}}>
      </div>
      <a href="" className="class_icon_link">
        <div className="class_icon_header_content">
          <h3 className="class_icon_header_title ellipsis" title={props.name}>
            <span style={{color: props.color}}>{props.name}</span>
          </h3>
          <div className="class_icon_header_subtitle ellipsis" title={props.name}>{props.name}</div>
          <div className="class_icon_term" title="2022.02">2022.02</div>
        </div>
      </a>
    </div>
  </div>)
}

export default ClassTile;