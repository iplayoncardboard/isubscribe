import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
  // <div
  //   style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
  //   className="jumbotron"
  // >

           <div class="jumbotron jumbotron-fluid">
  <div class="container-fluid bg-1 text-center">
      <br/><br/><br/><br/><br/>
    <h1 class="display-4">It’s all coming together...</h1>
    <p class="lead">Stop wasting money on subscriptions you don’t use - effortless manage all your subscription services in one place, track your spending & discover new subscriptions you’ll love!
    </p>

     {props.auth.isAuthenticated()===true ?
    <a href="/subscription"><button type="button" class="btn btn-signup">Discover New Subscriptions >></button></a>
      :  <button type="button" class="btn btn-signup" onClick={props.auth.login}>Sign Up Today >></button>}

    
    
    <br/><br/><br/><br/><br/>
    </div> 
  </div> 


  // </div>
);

export default Jumbotron;
