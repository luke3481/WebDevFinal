import React from "react";



function InputAssignment(props) {  

    return(
        <div id="inputassignment">
            <form>
                <label for="inputassignment">Enter Grade:</label><br/>
                <input type="text" id="inputassignment" name="inputassignment" style={{width: "400px"}} /><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
}



export default InputAssignment;
