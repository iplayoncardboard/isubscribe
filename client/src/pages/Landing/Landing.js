import React, { Component } from "react";
import "./Landing.css";
import Jumbotron from "../../components/Jumbotron";


class Landing extends Component{
    state = {
        user: {}
      };
    

    render(){
        return(
   <Jumbotron/>
        )
    }

}

export default Landing;