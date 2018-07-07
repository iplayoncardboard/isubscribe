import React from "react";
import "./CatNav.css";



//Need to update price to be the one that's set to default, not just the first one in array
const CatNav = props => (

<a className="list-group-item list-group-item-action" data-toggle="list" href="#list-profile" role="tab" key={props.categoryName}>
{props.categoryName}</a>


);

export default CatNav;


