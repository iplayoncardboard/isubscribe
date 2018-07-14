import React from "react";

const Jumbotron = ({ children }) => (
  // <div
  //   style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
  //   className="jumbotron"
  // >

           <div class="jumbotron jumbotron-fluid">
  <div class="container">
      <br/><br/><br/><br/><br/>
    <h1 class="display-4">It’s all coming together...</h1>
    <p class="lead">Stop wasting money on subscriptions you don’t use - effortless manage all your subscription services in one place, track your spending & discover new subscriptions you’ll love!
    <center><button type="button" class="btn btn-warning">Sign Up Today >></button></center></p>
    <br/><br/><br/><br/><br/>
  </div> 
  {/* {children}    */}
</div> 
    
  // </div>
);

export default Jumbotron;
