import React, {Component} from 'react';
import Auth from '../../Auth';
import "./Login.css";

class Login extends Component {
    state ={
        
    }

    componentDidMount(){
        
    }

render(){
    const auth = new Auth();
    return(
        <div className="login">
            <center>
        <h1 >Whoops! You're not logged in...</h1>
        <button className="btn-login" onClick={() => auth.login()}>Log into My Account</button>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </center>
        </div>
    )
}


}

export default Login;