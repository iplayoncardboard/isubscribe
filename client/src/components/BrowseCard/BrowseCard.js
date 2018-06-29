import React from "react";
import "./BrowseCard.css";

const BrowseCard = props => (
  <div className="card">
    <div className="img-container" >
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default BrowseCard;
