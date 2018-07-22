import React from "react";
import "./HomepageCard.css";
import Popup from "reactjs-popup";



//Need to update price to be the one that's set to default, not just the first one in array
const HomepageCard = props => (

<div className="cardHomepage card">
<a href={props.url}><img className="Subscription-Logo-Homepage" src ={props.iconURL} alt={props.name} /></a>
  <div className="card-body">
    <a href={props.url}> <h5 className="card-title">{props.name}</h5></a>

    {props.description.length > 200 ?
        (
          <div>
            {`${props.description.substring(0, 250)}...`}
          </div>
        ) :
        <p>{props.description}</p>}
     
    {/* <Popup
    trigger={<button className="button btn btn-orange">Add to Profile</button>}
    modal
    closeOnDocumentClick
  ><div className="popup"><h2>Select Your {props.name} Subscription Plan</h2><br/>
  {props.price.map(plans => (
      <div id="individual-plans"> 
      <p id="price">Starting at: ${props.price[0].price} per {props.price[0].frequency}</p>   
      <b>{plans.planName}</b>: ${plans.price} per {plans.frequency}<button className="button btn btn-orange">Add to Profile</button>
      </div>
    ))}
</div>
  </Popup>  */}
  </div>
</div>



);

export default HomepageCard;