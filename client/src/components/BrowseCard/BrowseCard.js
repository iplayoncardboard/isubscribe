import React from "react";
import "./BrowseCard.css";

//Need to update price to be the one that's set to default, not just the first one in array
const BrowseCard = props => (
  <div className="card">
    <div className="img-container" >
    <a href={props.url}><img src ={props.iconURL} alt={props.name}/></a>
    
    <a href={props.url}> <h2>{props.name} </h2></a>
    <p>Category: {props.category}</p>
    <p>{props.description}</p>
    <p id="price">Starting at: ${props.price[0].price} per {props.price[0].frequency}</p>
    </div>
  </div>
);

export default BrowseCard;


/* <p>{props.key}</p> */
{/*  */}