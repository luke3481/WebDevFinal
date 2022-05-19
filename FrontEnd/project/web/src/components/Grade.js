import SubmitGrade from "./SubmitGrade";

function Grade(props) {

    return (
        <div id="grade">
            <a style={{fontWeight: "bold"}}>Dummy assignment</a>
            <a>Dummy name</a>
            <a>Dummy grade</a>
            <SubmitGrade />
        </div>
    );
}

export default Grade;
