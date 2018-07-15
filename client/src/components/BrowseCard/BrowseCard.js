import React from "react";
import "./BrowseCard.css";
import Popup from "reactjs-popup";



//Need to update price to be the one that's set to default, not just the first one in array
const BrowseCard = props => (
  <div>
  <div className="card">
    <div className="img-container" >
    <Popup
    trigger={<button className="button btn btn-info">Add to Profile</button>}
    modal
    closeOnDocumentClick
  ><h2>Select Your {props.name} Subscription Plan</h2>
  {props.price.map(plans => (
      <div id="individual-plans">    
      {plans.planName}: ${plans.price} per {plans.frequency}<button className="button btn btn-info">Add to Profile</button>
      </div>
    ))}

  </Popup>
    {/* <button type="button" class="btn btn-info"  data-toggle="modal" data-target="#exampleModal" onClick={() => addToProfileModal(props.name, props.price)}>Add to Profile</button> */}
    <a href={props.url}><img src ={props.iconURL} alt={props.name}/></a>
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