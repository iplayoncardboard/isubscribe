import React from "react";
import "./SubCard.css";




//Need to update price to be the one that's set to default, not just the first one in array
const SubCard = props => (
  <div key={props.id} id={props.id}>
  <div className="card">
  
    <div className="img-container" >
    <a href={props.url}><img className="Subscription-Logo" src ={props.iconURL} alt={props.name} /></a>
    <button data-id={props.id} onClick={props.removeSubscription} className="btn-orange-subcard">X</button>
    <a href={props.url}> <h2>{props.name}</h2></a>
    <p>Category: {props.category}</p>
    <p>{props.description}</p>
    <h3 id="price">Cost: ${props.price}</h3>
    </div>
    </div>
 </div>
);

export default SubCard;

