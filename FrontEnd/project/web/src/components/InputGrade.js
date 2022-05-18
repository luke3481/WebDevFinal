import React from "react";



function InputGrade(props) {  

    return(
        <div id="inputgrade">
            <form>
                <label for="inputgrade">Enter Grade:</label><br/>
                <input type="text" id="inputgrade" name="inputgrade" style={{width: "400px"}} /><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
}



export default InputGrade;
