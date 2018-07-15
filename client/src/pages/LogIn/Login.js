import React, {Component} from 'react';
import Auth from '../../Auth';

class Login extends Component {
    state ={
        
    }

    componentDidMount(){
        
    }

render(){
    const auth = new Auth();
    return(
        <div>
        <h1>Login</h1>
        <button onClick={() => auth.login()}>Log In</button>
        </div>
    )
}


}

export default Login;