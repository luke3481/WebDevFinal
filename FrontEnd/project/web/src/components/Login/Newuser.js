


function Newuser() {  

    return(
        <div id="forgotpassword">
            <p><h2>New User: </h2></p><br></br>
            <form>
                <label for="newusername">Name: </label><br/>
                <input type="text" id="newusername" name="newusername" /><br/><br/>

                <label for="newuseremail">Email: </label><br/>
                <input type="text" id="newuseremail" name="newuseremail" /><br/><br/>

                <label for="newuserid">User ID: </label><br/>
                <input type="number" id="newuserid" name="newuserid" /><br/><br/>

                <label for="newuserpassword">Password: </label><br/>
                <input type="text" id="newuserpassword" name="newuserpassword" /><br/><br/>

                <label for="newuserconfirmpassword">Confirm Password: </label><br/>
                <input type="text" id="newuserconfirmpassword" name="newuserconfirmpassword" /><br/><br/>

                <label for="newuseraccounttype">Account Type: </label><br/>
                <select id="newuseraccounttype" name="newuseraccounttype">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select><br/><br/>

                <label for="secquestion1">What is your paternal grandmother's first name?</label><br/>
                <input type="text" id="sequestion1" name="secquestion1" /><br/><br/>

                <label for="secquestion2">What is your favorite movie?</label><br/>
                <input type="text" id="sequestion2" name="secquestion2" /><br/><br/>

                <label for="secquestion3">What was the name of your first dog?</label><br/>
                <input type="text" id="sequestion3" name="secquestion3" /><br/><br/>

                <input type="submit" />
            </form><br/><br/>
        </div>
    );
}

export default Newuser;