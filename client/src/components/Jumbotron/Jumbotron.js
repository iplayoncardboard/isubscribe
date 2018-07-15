import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
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
    <button type="button" className="btn btn-signup">Sign Up Today >></button>
    <br/><br/><br/><br/><br/>
    </div> 
    
  </div> 


  // </div>
);

export default Jumbotron;
