import SubmitAssignment from "./SubmitAssignment";

function Assignment(props) {

    return (
        <div id="assignment">
            <a style={{fontWeight: "bold"}}>Dummy assignment</a>
            <a>Dummy name</a>
            <a>Dummy data</a>
            <SubmitAssignment />
        </div>
    );
}

export default Assignment;
