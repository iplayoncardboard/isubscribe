import React, { Component } from "react";
import "./Landing.css";
import Jumbotron from "../../components/Jumbotron";
import HomepageCallouts from "../../components/HomepageCallouts";


class Landing extends Component{
    state = {
        user: {}
      };
    

    render(){
        return(
            <div>
  <Jumbotron {...this.props}/>
  <HomepageCallouts/> 

   </div>
        )
    }

}

export default Landing;