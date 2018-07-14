import React from "react";
import "./BrowseCard.css";

function addToProfileModal(subscription, plans) {
  console.log(subscription);
  console.log(plans.length);
  for (var i=0; i<plans.length; i++) {
    // var span = document.createElement("span");
    // span.setAttribute("id", "plans"+i);
    var t = document.createTextNode(`<span id="plan${i}">${plans[i].planName}, ${plans[i].price}, ${plans[i].frequency}</span>`);
    document.getElementById("plans").appendChild(t);
  }
}

//Need to update price to be the one that's set to default, not just the first one in array
const BrowseCard = props => (
  <div className="card">

    <div className="img-container" >
    <button type="button" class="btn btn-info"  data-toggle="modal" data-target="#exampleModal" onClick={() => addToProfileModal(props.name, props.price)}>Add to Profile</button>
    <a href={props.url}><img src ={props.iconURL} alt={props.name}/></a>
    <a href={props.url}> <h2>{props.name} </h2></a>
    <p>Category: {props.category}</p>
    <p>{props.description}</p>
    <p id="price">Starting at: ${props.price[0].price} per {props.price[0].frequency}</p>
    </div>
{/* MODAL */}
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add {props.name} to Your Profile</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <span id="plans"></span>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>

);

export default BrowseCard;
