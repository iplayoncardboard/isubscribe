import React from "react";
import "./CatNav.css";


//Need to update price to be the one that's set to default, not just the first one in array
const CatNav = props => (
<div>
{/* <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href={`#`+props.categoryName} role="tab" aria-controls={props.categoryName} onClick={() => props.loadMusic(props.categoryName)}>
 {props.categoryName}</a> */}

<button className="left-menu" onClick={() => props.loadCatSubscriptions(props.categoryName)} >{props.categoryName}</button>

</div>
);

export default CatNav;


