import React from "react";
import "./Nav.css";
import { BrowserRouter as Redirect, Route, Link } from "react-router-dom";
import Profile from '../../pages/Profile'

//Need to load categories dynamically in dropdown

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><img src="../assets/images/isubscribe.png" alt="isubscribe" className="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/subscription">Browse Subscriptions <span className="sr-only"></span></a>
      </li>
         

      {props.auth.isAuthenticated()===true ?
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My Account
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        
        <a className="dropdown-item" href="/profile">My Profile</a>

          <a className="dropdown-item" href="/subscription/new">Add New Subscriptions</a>
        </div>
      </li>
      : <span></span> }
      <li className="nav-item">
        <a className="nav-link" onClick={()=>{props.auth.isAuthenticated()===true ? props.auth.logout() : props.auth.login()}}>{props.navMessage}</a>
      </li>
      

    </ul>
  </div>
</nav>

  );

export default Nav;



