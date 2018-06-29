import React from "react";
import "./Nav.css";

//Need to load categories dynamically in dropdown

const Nav = props => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">iSubscribe LOGO HERE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Browse Subscriptions
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        
        <a class="dropdown-item" href="/subscription">Browse all Subscriptions</a>

          <a class="dropdown-item" href="/subscription/new">Add New Subscriptions</a>
          <a class="dropdown-item" href="#">Category 2</a>
          <a class="dropdown-item" href="#">Category 3</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">My Account</a>
      </li>
    </ul>
  </div>
</nav>

  );

export default Nav;
