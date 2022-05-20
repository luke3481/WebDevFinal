import React from "react";



function InputGrade(props) {  

    return(
        <div id="inputgrade">
            <form>
                <a style={{color: "black", fontWeight: "bold", fontSize: 20}}>Enter Grade:</a><br/><br/>
                <input type="text" id="inputgrade" name="inputgrade" style={{width: "400px"}} /><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
}



export default InputGrade;
