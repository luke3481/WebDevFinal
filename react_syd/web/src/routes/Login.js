import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';


function LogIn(props) {
    
    return(
        <div class="logincontainer">
            <div id="loginheader">
                <h1><b>The University of Chicago</b></h1>
            </div>
            <div id="loginmain">
                <h2>Log in to Your UChicago Account</h2>
                <form action="" method="post" id="login">
                    <div id="alert" aria-atomic="true" role="alert"></div>
                    <div class="input-wrapper">
                        <input id="username" name="username" type="text" class="form-control" autocapitalize="off" spellcheck="false" value="" placeholder="Username" autofocus="" required/>
                    </div>
                    <div class="input-wrapper">
                        <input id="password" name="password"  type="password" class="form-control" autocapitalize="off" spellcheck="false" value=""  placeholder="Password" required/>
                    </div>
                    <div class="submit-buttons">
                        <button type="submit" id="forgot" name="forgot" class="forgot">Forgot your password?</button>
                        <button type="submit" id="submit" name="submit" class="submit">LOG IN</button>
                    </div>
                </form>
            </div>
        </div>
    );
}