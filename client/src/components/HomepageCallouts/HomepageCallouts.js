import React from "react";
import "./HomepageCallout.css";

const HomepageCallouts = ({ children }) => (
  // <div
  //   style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
  //   className="jumbotron"
  // >

<div className="container-fluid bg-3 text-center">    
  <div className="row">
    <div className="col-sm-4">
      <h3>Discover</h3>
      <p className="homepage-callout-text">Find new subscriptions that could save you time & money. Get suggestions based off your current habits!</p>
      <img src="../assets/images/find.png" className="img-responsive margin icon" alt="Image"/>
    </div>
    <div className="col-sm-4"> 
    <h3>Track</h3>
      <p className="homepage-callout-text">Don't waste money on unused subscriptions. See where your money is going each month and track your usage!</p>
      <img src="../assets/images/bar-chart-up-3.png" className="img-responsive margin icon" alt="Image"/>
    </div>
    <div className="col-sm-4"> 
    <h3>Schedule</h3>
      <p className="homepage-callout-text">Never be surprised by a renewal charge, set up reminders so you only pay for what you actually use!</p>
      <img src="../assets/images/Calendar-Time.png" className="img-responsive margin icon" alt="Image"/>
    </div>
  </div>
</div>
  // </div>
);

export default HomepageCallouts;
