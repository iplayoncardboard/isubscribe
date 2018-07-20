import React from "react";
import "./BrowseCard.css";
import Popup from "reactjs-popup";



//Need to update price to be the one that's set to default, not just the first one in array
const BrowseCard = props => (
  <div key={props.id} id={props.id}>
  <div className="card">
    <div className="img-container" >
    <Popup
    trigger={<button className="button btn btn-orange">Add to Profile</button>}
    modal
    closeOnDocumentClick
  >
  {close => (
  <div className="popup"><h2>Select Your {props.name} Subscription Plan</h2><br/>
  {props.price.map((plan,index) => ( 
      <div className="individual-plans" key={`${props.id}-${index}`} id={`${props.id}-${index}`}>    
      <b>{plan.planName}</b>: ${plan.price} per {plan.frequency}
      <a onClick={close}>
      <button data-id={props.id} data-price={plan.price} className="button btn btn-orange" 
      onClick={props.createSubscriptionDBObject}> Add to Profile</button></a>


      </div>
    ))}
</div>
  )}
  </Popup>
    {/* <button type="button" class="btn btn-info"  data-toggle="modal" data-target="#exampleModal" onClick={() => addToProfileModal(props.name, props.price)}>Add to Profile</button> */}
    <a href={props.url}><img className="Subscription-Logo" src ={props.iconURL} alt={props.name} /></a>
    <a href={props.url}> <h2>{props.name}</h2></a>
    <p>Category: {props.category}</p>
    <p>{props.description}</p>
    <p id="price">Starting at: ${props.price[0].price} per {props.price[0].frequency}</p>
    </div>
    </div>
   
 </div>
);

export default BrowseCard;




// addToProfileModal = (subscription, plans)=>  {
//   console.log(subscription);
//   console.log(plans.length);
//   for (var i=0; i<plans.length; i++) {
//     // var span = document.createElement("span");
//     // span.setAttribute("id", "plans"+i);
//     var t = document.createTextNode(`<span id="plan${i}">${plans[i].planName}, ${plans[i].price}, ${plans[i].frequency}</span>`);
//     document.getElementById("plans").appendChild(t);
//   }
// }

// function clearList() {
//   console.log('this is:', this);
// // e.preventDefault();
// //  document.getElementById("plans").text("");
// }