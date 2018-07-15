import React, {Component} from 'react';
import Auth from '../../Auth';


class Callback extends Component{

    state = {
        user: {}
      };
    

      componentDidMount(){
        const auth = new Auth();
        auth.handleAuthentication();
      }

    render(){
        return(
            <h4>Loading...</h4>
        )
    }

}

export default Callback;